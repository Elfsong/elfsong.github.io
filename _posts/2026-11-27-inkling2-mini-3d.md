---
layout: post
title: Taking Inkling 2 Mini Apart
date: 2026-11-27 00:00:00+0800
description: An interactive 3D walkthrough you can rotate and step through, showing how 24 physical layers run a 48-layer forward pass by looping the Core.
tags: code
categories: academia
related_posts: false
featured: false
---

Whenever I read an architecture diagram, the flat boxes leave something out. Tensor shapes, what is kept across steps and what is thrown away after use all have to be filled in by imagination. So I built an interactive 3D walkthrough that follows one forward pass of Inkling 2 Mini from the Embedding all the way to the LM Head, and lets you stop at every step.

The walkthrough is embedded below. Drag to rotate the canvas, scroll to zoom, and click any block to see its tensor shape and what it does. On a narrow window, [open the full-screen version]({{ '/assets/html/inkling2-mini-3d.html' | relative_url }}) instead.

<iframe src="{{ '/assets/html/inkling2-mini-3d.html' | relative_url }}" title="Inkling 2 Mini 3D architecture walkthrough" width="100%" height="1500" loading="lazy" style="border: 1px solid var(--global-divider-color); border-radius: 8px;"></iframe>

Shortcuts: `1`–`6` switch views, `←` / `→` step, `Space` plays, `R` resets the camera.

> The weights, expert hits and candidate-token probabilities in the walkthrough are simulated. They illustrate the mechanism and are not outputs of the real model.

## Overall structure: Prelude → Core ×K → Coda

The model has only 24 physical layers with a hidden size of 2304, split into three segments:

| Segment | Physical layers | Runs | Role |
| :--- | :--- | :--- | :--- |
| Prelude | L0–L5 | once | Encodes the initial representation of the input |
| Core | L6–L17 | K times (shared weights) | The body of the looped reasoning |
| Coda | L18–L23 | once | Decodes the hidden state back into a vocabulary prediction |

The 12 Core layers run K times with the same weights. With K = 3, one forward pass goes through 6 + 12 × 3 + 6 = **48 layers**. The "Core loops" control at the top switches between 1× and 5×, so you can watch the same physical layers being reused.

Because the MoE activates only a few experts per position, only about 3.4B of the 26.4B total parameters take part in a forward pass. Each extra loop adds roughly 1.0B, so K = 3 comes to about 5.4B.

## Inside a layer

Click any layer in the Overview to open the "Inside a layer" view. Every layer does the same five things in order:

1. RMSNorm (with the Rank-64 Gate on top when Pass ≥ 2)
2. GQA Attention, plus the residual
3. RMSNorm (with the Rank-64 Gate on top when Pass ≥ 2)
4. MoE, plus the residual
5. Add this layer's residual into the current block's Block AttnRes summary

### RMSNorm

RMSNorm does not subtract the mean. It scales each position by the root mean square of its own 2304 channels, then multiplies by a learnable per-channel gain γ, with no bias. In the walkthrough you can blow the input up by a few times and the normalised bars stay exactly the same height, which makes the point far better than the formula does. Each token's RMS is computed on its own and never mixed with other tokens.

### GQA Attention: 24 Query heads share 8 KV heads

The input first goes through a causal short convolution (Short-Conv) for local features, then is projected into Q, K and V. Every 3 of the 24 Query heads share one KV head, each head is 128-dimensional, so the KV Cache takes only 1/3 of the memory of standard multi-head attention. The 24 head outputs are concatenated into 3072 dimensions, modulated by an Output Gate and projected back to 2304.

The attention range alternates across layers:

- Most layers use **SWA-1024**, a sliding window over the most recent 1024 positions.
- The last layer of each 6-layer block (L5, L11, L17, L23) uses **Full Attention** and can look back over the whole 1M context.

Position t0 also acts as an Attention Sink. Together with a relative position bias it absorbs excess attention, which keeps long contexts stable. In the Attention view you can force SWA or Full and see which cells of the attention matrix the window cuts off.

### MoE: 8 out of 128 experts

For each position, the Router scores all 128 experts from the hidden state, keeps the top 8 and takes their weighted sum:

$$
y = \sum_{i \in \text{Top-8}} g_i \cdot \text{Expert}_i(x)
$$

Precision is layered as well: the Router stays in BF16, most experts use NVFP4, the experts in L20–L23 near the output use MXFP8, and the LM Head uses BF16/FP32.

The most interesting thing in the MoE view is that the same physical layer picks different experts in different loop passes. The walkthrough marks experts that were active in the previous pass but dropped in this one with a separate colour, so this cross-pass dynamic routing is visible directly.

## Why the loop is not plain repetition

If every Core pass saw input with the same structure, a shared-weight loop could easily collapse into repeating the same computation. Two mechanisms make each pass different.

**Block AttnRes.** Every 6 layers form a block. The residual outputs of the layers in a block are summed into a summary $$b_n$$, and deeper layers can look back at these summaries along the depth axis.

**Rank-64 Gate.** From the second pass on, the gate reads the earlier Block AttnRes summaries $$m$$ and, through a 64-dimensional bottleneck, modulates per channel the input $$x$$ that goes into Attention and MoE:

$$
y = \bigl(1 - \tanh(W_f h)\bigr) \odot x + \tanh(W_g h) \odot m
$$

So later passes do not start from scratch. They re-enter the same layers carrying summaries of the earlier passes, and the Router ends up choosing different experts.

## Two kinds of memory: persistent and temporary

The "KV Cache & Block AttnRes" view puts the two walls side by side, which makes the difference clear:

| | KV Cache | Block AttnRes |
| :--- | :--- | :--- |
| Lifetime | Kept across generation steps | Lives only for the current forward pass, freed once the token is emitted |
| Read direction | Horizontal: a new token reads every past position at the same depth | Vertical: deeper layers look back at summaries of shallower blocks |
| Size | 12 + 12K layers, 8 KV heads each | 2 + 2K blocks, one 2304-d summary each |

Each Core pass has its own KV Cache, strictly isolated from the others. So the number of KV layers grows linearly with the loop count. That is the memory price paid for the parameters the shared-weight loop saves.

## Three inference modes

The "Inference" control at the top selects one of three kinds of forward pass. They differ mainly in how many positions go in per step:

- **Prefill**: the whole prompt is computed in parallel in one go, filling the KV Cache at the same time.
- **Decode**: each step computes only the newest token and reads earlier positions from the cache.
- **DSpark**: two draft tokens ride along after the newest token, so one step processes three positions in parallel.

## Coda-Lens: what each pass is thinking

The Coda-Lens panel on the right decodes the hidden state at each stage straight into a candidate-token distribution, so you can see the answer converge pass by pass. The walkthrough comes with three examples:

- **17×13**: Pass 1 only gets the magnitude (about 210), Pass 2 implicitly splits it into 17×10 + 17×3, and Pass 3 resolves the carry and locks in 221.
- **Code**: sliding-window attention picks up the local recursive call, Full Attention looks back at `def fib(n):`, and Passes 2 and 3 find the missing termination branch, producing `missing base_case`.
- **Coreference**: Pass 1 leans toward the frequent collocation "door", Pass 2 uses Full Attention to bind "he" to Bob and the "gold key", and Pass 3 converges on "safe".

Set "Core loops" to 1× and run the three examples again. It makes it very clear that more loop passes mean thinking a few more steps.
