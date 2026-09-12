---
layout: distill
title: Mastermind
date: 2026-07-01 00:00:00
description: Strategy-grounded Learning for Repository-Scale Vulnerability Reproduction
tags: code
categories: academia
featured: false
mermaid:
  enabled: true
  zoomable: true
chart:
  echarts: true

authors:
  - name: Mingzhe Du
    affiliations:
      name: National University of Singapore & Nanyang Technological University
  - name: Luu Anh Tuan
    affiliations:
      name: Nanyang Technological University
  - name: Tianyi Wu
    affiliations:
      name: National University of Singapore
  - name: Renyang Liu
    affiliations:
      name: National University of Singapore
  - name: Zhijiang Guo
    affiliations:
      name: The Hong Kong University of Science and Technology (Guangzhou)
  - name: Dong Huang
    affiliations:
      name: National University of Singapore
  - name: See-Kiong Ng
    affiliations:
      name: National University of Singapore

bibliography: mastermind.bib

toc:
  - name: Overview
  - name: The Strategy Bottleneck
  - name: Mastermind Design
  - name: Training the Planner
  - name: Results
  - name: Failure Analysis
  - name: When Is Strategy the Bottleneck
  - name: Threats to Validity
  - name: Takeaways
---

## Overview

Repository-level vulnerability reproduction is a demanding testbed for autonomous software-engineering agents. Given a codebase, a vulnerability description, and a benchmark interface, an agent must find the vulnerable path, infer the input format, construct a proof-of-concept (PoC), and verify that it crashes *only* the vulnerable build. Unlike conventional code generation, success is a working PoC judged by execution. It requires repository exploration, build interaction, hypothesis revision, and behavioral validation.

Recent LLM progress has made SE agents stronger *executors*. They can navigate repositories, run commands, edit files, and submit PoCs. But stronger execution does not guarantee the right investigation. CyberGym <d-cite key="wang2026cybergym"></d-cite> exposes this gap: with a fixed GPT-5.5 executor, a one-shot attempt solves 23.5% of tasks, independent Best-of-8 reaches 63.0%, and sequential task-local strategy revision reaches 77.0%. The bottleneck is strategic. It is deciding what to try next, not merely executing commands.

Our paper, [*Mastermind: Strategy-grounded Learning for Repository-Scale Vulnerability Reproduction*](https://arxiv.org/abs/2607.01764), argues that **strategy, rather than the full action trajectory, is the right learning unit** for such agents. A strategy is a compact natural-language plan for where to inspect, how to construct candidate inputs, and how to validate the crash. It is compact enough to optimize, concrete enough to guide execution, and stable enough to store and reuse across attempts. The whole idea fits in a few lines:

```python
def mastermind(task):
    while not converge:
        experience = curator.activate(task)        # experience loop
        strategy   = planner.generate(experience)  # policy loop
        rollout    = executor.execute(strategy)
        result     = verifier.validate(rollout)
        curator.accumulate(result)
        planner.calibrate(result)
```

The headline results on CyberGym, with 260 training tasks and 200 held-out evaluation tasks:

- With GPT-5.5 as the frozen executor, Mastermind reaches an **84.5%** pass rate (169/200), against 60.0% for open-book Level-3 context, 63.0% for Best-of-8 sampling, and 77.0% for iterative improvement, while using fewer rollouts than either.
- The **same planner**, trained only on GPT-5.4 mini trajectories, lifts GPT-5.4 mini from 45.0% to 60.0% and GLM 5.1 from 58.5% to 71.0% without touching either executor.
- Strategy quality is causal, not cosmetic: under a fixed executor, a good strategy adds 16.0 points over no strategy, and even handing the executor the ground-truth solution does worse than a well-formed plan.

The paper is on [arXiv](https://arxiv.org/abs/2607.01764), with a [PDF](/assets/pdf/mastermind.pdf) and a [project page](/assets/html/mastermind.html) on this site.

## The Strategy Bottleneck

Before building anything, we wanted to know whether strategy selection, rather than low-level execution capability, is really the dominant bottleneck. Three diagnostics say yes.

**Strategy quality changes outcomes.** We hold a GPT-5.4 mini executor, the workspace, and a 900-second timeout fixed, and vary only the strategy signal supplied to it.

```echarts
{
  "title": {"text": "Strategy sensitivity under a fixed GPT-5.4 mini executor"},
  "color": ["#2a78d6"],
  "tooltip": {"trigger": "axis", "axisPointer": {"type": "shadow"}, "formatter": "{b}: {c}% M7 pass rate"},
  "grid": {"left": "3%", "right": "10%", "bottom": "3%", "top": "50px", "containLabel": true},
  "xAxis": {"type": "value", "name": "M7 pass rate (%)", "min": 0, "max": 50},
  "yAxis": {"type": "category", "data": ["Null Strategy (no guidance)", "Zero-shot Planner (strategy from task context)", "Hard Oracle (ground-truth solution given to executor)", "Soft Oracle (strategy generated from Level-3 context)"]},
  "series": [
    {
      "name": "M7 pass rate",
      "type": "bar",
      "barWidth": 18,
      "itemStyle": {"borderRadius": [0, 4, 4, 0]},
      "label": {"show": true, "position": "right", "formatter": "{c}%"},
      "data": [23.5, 24.0, 32.0, 39.5]
    }
  ]
}
```

Soft Oracle, where a model generates a strategy from CyberGym's Level-3 context, reaches 39.5%, against 23.5% for no strategy and 24.0% for a zero-shot planner. Even Hard Oracle, which gives CyberGym's ground-truth solution directly to the executor, reaches only 32.0%. The ordering is revealing: task-relevant strategy improves the same executor by 16.0 points, while answer-level context alone is not automatically an executable plan.

**Independent sampling helps but saturates.** If strategy is the limiting factor, repeated independent attempts should sometimes recover good strategies by chance. They do: on the 200-task held-out split with GPT-5.5, a single Level-1 attempt solves 47/200 (23.5%) while Best-of-8 reaches 126/200 (63.0%) <d-cite key="brown2024monkeys"></d-cite>. But the curve is strongly front-loaded. Early attempts account for most of the improvement, and later attempts increasingly revisit similar strategy basins. Best-of-N is a useful diagnostic and an inefficient learning mechanism.

**Task-local experience beats more context.** Sequential iterative improvement, where each failed rollout is summarized and fed to the next attempt, solves 154/200 (77.0%) with 753 rollouts. That beats independent Best-of-8 (126/200 with 1,600 rollouts) using less than half the executions, and it beats single-pass Level-3 open-book context (120/200) even though Level 3 exposes sanitizer output, patch information, and patched source. Feedback is not just additional text; it changes the next hypothesis.

## Mastermind Design

Mastermind turns this diagnosis into a Curator–Planner–Executor–Verifier pipeline for strategy-level learning.

```mermaid
flowchart LR
    T["Task"] --> C["Curator<br>task-local experience"]
    C -- "1. activate experience" --> P["Planner (trainable)<br>emits a compact strategy"]
    P -- "2. generate strategy" --> E["Executor (frozen)<br>navigates, edits, submits PoC"]
    E -- "3. execute rollout" --> V["Verifier<br>CyberGym milestones"]
    V -- "5. accumulate experience" --> C
    V -- "6. calibrate policy (training only)" --> P
```

- **Curator.** Maintains task-local experience. It activates relevant prior strategy/outcome records before each attempt and appends new records after verification. Its job is to keep volatile repository-specific facts, such as file locations, parser behavior, failed hypotheses, and useful partial progress, *outside* model weights.
- **Planner.** The trainable strategy policy. Given the task and curator experience, it emits a compact natural-language strategy describing where to inspect, what input structure to target, how to construct the PoC, and how to validate the result. It does not issue shell commands; it chooses the approach.
- **Executor.** A frozen acting substrate. Guided by the strategy, it performs repository navigation, source inspection, file edits, shell commands, and CyberGym submissions. Keeping it frozen isolates whether gains come from better planning rather than from changing the action-generation model.
- **Verifier.** Provides executable ground truth. It validates each rollout through CyberGym execution feedback and milestone scoring, then routes the result back to the Curator and, during training, to the Planner. Feedback is execution-based, not preference-based.

Training and inference share this pipeline but update different state. Inference updates curator experience across sequential attempts, at most eight per task with early stopping on success. Training additionally updates the Planner with SFT and milestone-based GRPO.

**Strategy as the learning unit.** A strategy is the contract between high-level planning and low-level execution. It tells the Executor where to look, what evidence to seek, and what vulnerability mechanism to test, while leaving the exact interaction sequence to the Executor. We cap each strategy at 2,000 tokens and include a bounded length term in the training objective, discouraging the Planner from drifting into full trajectory narration. The generations follow the design:

| Environment / Model | Median chars | P90 chars | Median tokens | P90 tokens |
| :--- | ---: | ---: | ---: | ---: |
| Codex / GPT-5.5 | 4.5k | 5.9k | 1.1k | 1.5k |
| Codex / GPT-5.4 mini | 2.8k | 3.3k | 700 | 825 |
| Claude Code / GLM 5.1 | 3.3k | 4.3k | 830 | 1.1k |

This compactness is what makes strategy-level learning useful. Two trajectories may differ in commands while implementing the same idea, whereas two strategies can expose genuinely different vulnerability hypotheses.

**Two substrates for two kinds of knowledge.** Vulnerability reproduction combines two kinds of knowledge that should not live in the same place. Transferable strategy instincts, such as when to inspect source, target attacker-controlled size fields, or validate against the patched build, belong in Planner weights. Task-specific facts, such as the vulnerable file, a useful fixture, a failed input family, or the last verifier milestone, expire after one task and belong in curator experience. The *experience loop* appends a strategy/outcome record after every verified rollout so later attempts are conditioned on concrete task-local evidence. The *policy loop* executes and scores multiple strategies for the same task and updates the Planner toward those whose verifier-derived rewards are high relative to comparable same-task rollouts. The loops reinforce each other: better weights produce better rollouts, better rollouts produce better experience, and better experience gives the Planner sharper context on later attempts.

## Training the Planner

The Planner is Qwen3.6-35B-A3B <d-cite key="qwen2026qwen36"></d-cite>, trained and served through Tinker <d-cite key="tinker2026"></d-cite>. Executors are frozen: GPT-5.4 mini and GPT-5.5 through Codex, and GLM 5.1 through Claude Code with a Zhipu subscription. Each executor rollout uses a 900-second wall-clock timeout. We impose no action-count or token-count caps because hosted services expose different accounting and control surfaces.

**SFT warm start.** Before reinforcement learning, we warm-start the Planner so it quickly learns the pattern of *changing* strategy after observing feedback. SFT examples are built by stepwise sampling from Claude Code and Codex trajectories: at step $$t$$ the prompt contains the task context and curator experience so far, and the target is the strategy used at step $$t+1$$. Loss is completion-only cross-entropy with prompt tokens masked. This stage teaches the Planner to turn prior attempts into a revised, executor-ready plan rather than repeating the same solution family.

**GRPO with slot-conditioned sampling.** After SFT, we optimize the Planner with Group Relative Policy Optimization <d-cite key="shao2024deepseekmath"></d-cite>. For each sampled task, the policy generates sixteen candidate strategies from the same snapshot, partitioned into two fixed 8-way groups. Early rollouts revealed that capable models often repeat one solution family: the same seed format, the same parser, the same non-target crash. Borrowing from quality-diversity search <d-cite key="mouret2015mapelites"></d-cite>, each group receives one copy of a slot-condition bank that biases the eight candidates toward complementary hypotheses.

| Slot | Condition | Sampling bias |
| ---: | :--- | :--- |
| 1 | minimal-reproducer | Start from the smallest harness or command and prioritize the minimal PoC that can exercise the target. |
| 2 | parser-format | Assume a parser or file-format bug; focus on headers, record counts, length fields, section order, and entry points. |
| 3 | bounds-allocation | Assume a bounds, integer, allocation, or container-growth bug; try attacker-controlled counts and boundary values first. |
| 4 | lifetime-state | Assume a use-after-free, double-free, stale-pointer, reentrancy, or state-transition bug; favor sequence-operation PoCs. |
| 5 | existing-tests-fuzz | Mine existing tests, fuzz targets, corpora, and fixtures; prioritize mutating a known-good input. |
| 6 | crash-guided-debug | Use sanitizer output, assertions, and crash signatures to infer the vulnerable path; first produce a stack trace to narrow the function. |
| 7 | static-source-sink | Perform source-to-sink static auditing from external input to dangerous operations, then build the PoC around the sink. |
| 8 | alternate-hypothesis | Avoid the most obvious plan; choose a secondary mechanism or target and quickly falsify it. |

The frozen Executor runs each strategy independently, the Verifier maps the rollout to a milestone reward, rewards are normalized within each same-task group, and four completed groups are accumulated before each optimizer update. Unlike inference, GRPO rollout collection does not perform sequential refinement; each strategy is evaluated independently so the update compares competing plans under matched conditions.

**Reward.** CyberGym's final binary success criterion is too sparse for GRPO, so we map feedback $$y$$ to the highest milestone reached, $$m(y) \in \{0, \dots, 7\}$$, with a convex schedule that keeps full reproduction dominant.

| Milestone | Description | Reward | $$\log(1 + \text{Reward})$$ |
| :--- | :--- | ---: | ---: |
| m0 | No meaningful progress | 0.0 | 0.000 |
| m1 | Located vulnerable source code | 0.5 | 0.405 |
| m2 | Constructed a PoC file | 1.5 | 0.916 |
| m3 | Submitted PoC to CyberGym server | 2.5 | 1.253 |
| m4 | PoC accepted | 4.0 | 1.609 |
| m5 | Target executed but not crashed | 5.5 | 1.872 |
| m6 | Triggered a wrong crash | 8.0 | 2.197 |
| m7 | Reproduced target vulnerability | 12.0 | 2.565 |

Milestones 0–3 are assessed from the agent trajectory; milestones 4–7 come from CyberGym running the submitted PoC on both the vulnerable and patched builds. The step from m6 to m7 alone is worth 4.0 raw reward points, more than the entire milestone-3 reward. The final training reward is

$$
R(s, y) = \log\bigl(1 + r_{\text{milestone}}(m(y))\bigr) + \gamma_\ell\, f_\ell(s) + p_{\text{status}}(y),
$$

where the log compresses large gaps while preserving milestone order, $$p_{\text{status}}(y) \le 0$$ penalizes only timeout or invalid-format rollouts, and the length term

$$
f_\ell(s) = \mathbb{1}[s \text{ is valid}] \cdot \max\!\left(0,\; 1 - \frac{n_s}{T_{\text{strat}}}\right), \qquad T_{\text{strat}} = 2{,}000
$$

gives a small preference for valid, concise strategies without rewarding execution traces. No learned reward model is used. Within each same-task group, GRPO normalizes rewards as $$\hat{A}_i = (R_i - \bar{R}_{\text{group}}) / (\sigma_{\text{group}} + \epsilon)$$, so advantage comparisons only ever involve matched rollouts.

**Evaluation.** The primary metric is the strict milestone-7 pass rate: a task counts as solved only if the PoC triggers the target sanitizer crash on the vulnerable build *while the patched build exits normally*. This dual-build criterion follows CyberGym's official protocol. Milestone rewards are used only for training; every reported number uses the benchmark's final criterion. Baselines are Best-of-8 (eight independent Level-1 attempts), Iterative Improvement (sequential attempts with compact task-local experience carried forward), and PAGENT <d-cite key="pagent2026"></d-cite>, whose static-analysis pipeline supplies recovered vulnerability targets as extra guidance whenever analysis succeeds.

## Results

**Learned planning transfers across executors.** Within each executor block, the executor is fixed and only the strategy source changes. The Planner is trained *only* on GPT-5.4 mini trajectories and reused frozen for GPT-5.5 and GLM 5.1.

```echarts
{
  "title": {"text": "Milestone-7 pass rate on the 200-task held-out split"},
  "color": ["#2a78d6", "#eb6834", "#1baf7a", "#eda100", "#e87ba4"],
  "tooltip": {"trigger": "axis", "axisPointer": {"type": "shadow"}},
  "legend": {"top": "30px", "data": ["Best-of-8", "Best-of-8 + PAGENT", "Iterative Improvement", "Base Planner", "Mastermind"]},
  "grid": {"left": "3%", "right": "4%", "bottom": "3%", "top": "80px", "containLabel": true},
  "xAxis": {"type": "category", "data": ["GPT-5.4 mini (Codex)", "GPT-5.5 (Codex)", "GLM 5.1 (Claude Code)"]},
  "yAxis": {"type": "value", "name": "pass rate (%)", "min": 0, "max": 100},
  "series": [
    {"name": "Best-of-8", "type": "bar", "barGap": "10%", "itemStyle": {"borderRadius": [4, 4, 0, 0]}, "data": [42.5, 63.0, 54.5]},
    {"name": "Best-of-8 + PAGENT", "type": "bar", "itemStyle": {"borderRadius": [4, 4, 0, 0]}, "data": [43.0, 70.5, 61.0]},
    {"name": "Iterative Improvement", "type": "bar", "itemStyle": {"borderRadius": [4, 4, 0, 0]}, "data": [53.0, 77.0, 67.0]},
    {"name": "Base Planner", "type": "bar", "itemStyle": {"borderRadius": [4, 4, 0, 0]}, "data": [45.0, 72.5, 58.5]},
    {"name": "Mastermind", "type": "bar", "itemStyle": {"borderRadius": [4, 4, 0, 0]}, "label": {"show": true, "position": "top", "formatter": "{c}%"}, "data": [60.0, 84.5, 71.0]}
  ]
}
```

| Executor | Method | Rollouts | M≤3 | M=4 | M=5 | M=6 | M=7 | Pass rate (95% CI) |
| :--- | :--- | ---: | ---: | ---: | ---: | ---: | ---: | :--- |
| GPT-5.4 mini | Best-of-8 | 1,600 | 7 | 93 | 2 | 13 | 85 | 42.5% [35.9, 49.4] |
| | Best-of-8 + PAGENT | 1,600 | 9 | 100 | 0 | 5 | 86 | 43.0% [36.3, 49.9] |
| | Iterative Improvement | 1,026 | 0 | 86 | 0 | 8 | 106 | 53.0% [46.1, 59.8] |
| | Base Planner | 924 | 0 | 99 | 0 | 11 | 90 | 45.0% [38.3, 51.9] |
| | **Mastermind** | 891 | 2 | 26 | 40 | 12 | **120** | **60.0%** [53.1, 66.5] |
| GPT-5.5 | Best-of-8 | 1,600 | 4 | 49 | 1 | 20 | 126 | 63.0% [56.1, 69.4] |
| | Best-of-8 + PAGENT | 1,600 | 6 | 35 | 1 | 17 | 141 | 70.5% [63.8, 76.4] |
| | Iterative Improvement | 753 | 0 | 28 | 0 | 18 | 154 | 77.0% [70.7, 82.3] |
| | Base Planner | 619 | 1 | 34 | 0 | 20 | 145 | 72.5% [65.9, 78.2] |
| | **Mastermind** | 560 | 1 | 10 | 15 | 5 | **169** | **84.5%** [78.8, 88.9] |
| GLM 5.1 | Best-of-8 | 1,600 | 6 | 77 | 1 | 7 | 109 | 54.5% [47.6, 61.3] |
| | Best-of-8 + PAGENT | 1,600 | 2 | 62 | 2 | 12 | 122 | 61.0% [54.1, 67.5] |
| | Iterative Improvement | 842 | 0 | 56 | 2 | 8 | 134 | 67.0% [60.2, 73.1] |
| | Base Planner | 750 | 0 | 51 | 1 | 31 | 117 | 58.5% [51.6, 65.1] |
| | **Mastermind** | 719 | 0 | 21 | 19 | 18 | **142** | **71.0%** [64.4, 76.8] |

Intervals are Wilson 95% confidence intervals <d-cite key="wilson1927"></d-cite>. Against the untrained Base Planner, GRPO raises GPT-5.4 mini from 45% to 60%, GPT-5.5 from 72.5% to 84.5%, and GLM 5.1 from 58.5% to 71%. With GPT-5.5, Mastermind beats Best-of-8 (63%), PAGENT-guided Best-of-8 (70.5%), and iterative improvement (77%) while using 560 rollouts against 753 and 1,600. The milestone distribution points to the mechanism: across the three executors, Mastermind reduces weak or unresolved outcomes (m≤5) from 186 to 134 and wrong-crash outcomes (m6) from 62 to 35 relative to the Base Planner, while increasing full reproductions from 352 to 431. Training does not merely add attempts; it changes which investigations are worth executing.

Three tasks in the unsolved set, `arvo:16972`, `arvo:52317`, and `arvo:52430`, appear to be benchmark exceptions. Our attempts reach m6 but not m7 because candidate PoCs crash both builds or crash on a non-target stack, and CyberGym's own ground-truth solutions behave the same way. We keep them in the 200-task denominator for conservative reporting.

**Experience beats independent sampling.** The cumulative milestone-7 pass rate by attempt cutoff separates three protocols: independent Best-of-N supplies pure sampling diversity, iterative improvement carries task-local feedback forward, and Mastermind adds a trained Planner on top of the same sequential loop.

```echarts
{
  "title": {"text": "Mastermind cumulative M7 pass rate by attempt cutoff"},
  "color": ["#2a78d6", "#eb6834"],
  "tooltip": {"trigger": "axis"},
  "legend": {"top": "30px", "data": ["GPT-5.5 + Mastermind", "GPT-5.4 mini + Mastermind"]},
  "grid": {"left": "3%", "right": "6%", "bottom": "3%", "top": "70px", "containLabel": true},
  "xAxis": {"type": "category", "name": "attempt cutoff", "boundaryGap": false, "data": ["1", "2", "3", "4", "5", "6", "7", "8"]},
  "yAxis": {"type": "value", "name": "cumulative M7 pass rate (%)", "min": 20, "max": 100},
  "series": [
    {"name": "GPT-5.5 + Mastermind", "type": "line", "symbolSize": 8, "lineStyle": {"width": 2}, "label": {"show": true, "position": "top", "formatter": "{c}"}, "data": [47.0, 64.5, 77.0, 80.5, 83.5, 83.5, 84.0, 84.5]},
    {"name": "GPT-5.4 mini + Mastermind", "type": "line", "symbolSize": 8, "lineStyle": {"width": 2}, "label": {"show": true, "position": "bottom", "formatter": "{c}"}, "data": [35.0, 44.0, 51.0, 56.0, 58.0, 59.0, 59.5, 60.0]}
  ]
}
```

| Executor | Protocol | Attempt 1 | Attempt 2 | Attempt 8 | Rollouts |
| :--- | :--- | ---: | ---: | ---: | ---: |
| GPT-5.5 | Best-of-N | 23.5% | 38.5% | 63.0% | 1,600 |
| GPT-5.5 | Iterative Improvement | | 50.0% | 77.0% | 753 |
| GPT-5.5 | Mastermind | 47.0% | 64.5% | 84.5% | 560 |
| GPT-5.4 mini | Best-of-N | 22.0% | | 42.5% | 1,600 |
| GPT-5.4 mini | Iterative Improvement | | | 53.0% | 1,026 |
| GPT-5.4 mini | Mastermind | 35.0% | 44.0% | 60.0% | 891 |

Independent sampling flattens quickly, which indicates that repeated rollouts increasingly revisit similar hypotheses rather than discovering new vulnerability paths. Iterative improvement dominates it at every cutoff and uses fewer rollouts because solved tasks stop early. Mastermind shifts the whole curve upward: its *first* attempt with GPT-5.5 (47.0%) is already above iterative improvement's first attempt, and later refinements keep the gap. Curator experience helps decide what to revise; learned planning improves the quality of each revision.

**Dual-loop ablation.** Removing either loop costs performance on every executor.

```echarts
{
  "title": {"text": "Dual-loop ablation (M7 pass rate, 200 held-out tasks)"},
  "color": ["#2a78d6", "#eb6834", "#1baf7a"],
  "tooltip": {"trigger": "axis", "axisPointer": {"type": "shadow"}},
  "legend": {"top": "30px", "data": ["GLM 5.1", "GPT-5.4 mini", "GPT-5.5"]},
  "grid": {"left": "3%", "right": "4%", "bottom": "3%", "top": "70px", "containLabel": true},
  "xAxis": {"type": "category", "data": ["No dual loop", "w/o Experience loop", "w/o Policy loop", "Full dual loop"]},
  "yAxis": {"type": "value", "name": "pass rate (%)", "min": 0, "max": 100},
  "series": [
    {"name": "GLM 5.1", "type": "bar", "itemStyle": {"borderRadius": [4, 4, 0, 0]}, "data": [54.5, null, 67.0, 71.0]},
    {"name": "GPT-5.4 mini", "type": "bar", "itemStyle": {"borderRadius": [4, 4, 0, 0]}, "data": [42.5, 45.5, 53.0, 60.0]},
    {"name": "GPT-5.5", "type": "bar", "itemStyle": {"borderRadius": [4, 4, 0, 0]}, "data": [63.0, null, 77.0, 84.5]}
  ]
}
```

*No dual loop* is independent Best-of-8. *w/o Experience loop* keeps the trained Planner but disables Curator activation and update, so each attempt sees only the task context (run for GPT-5.4 mini: 45.5%). *w/o Policy loop* keeps curator experience but replaces the trained Planner with the untrained iterative-improvement protocol. The full dual loop is best everywhere.

**Gains are not explained by context, static analysis, or a stronger executor.** Level-3 open-book context gives GPT-5.5 sanitizer output, patch diff, fixed source, and vulnerable source, yet solves 120/200 in a single pass, below Best-of-8, iterative improvement, and the trained Planner. PAGENT raises GPT-5.5 Best-of-8 from 126 to 141, while Mastermind reaches 169 with the same executor. The GLM 5.1 rows show the same direction under a weaker executor.

**Cost.** Executor calls run through subscriptions, so we report rollouts and wall-clock time as the primary cost and add coarse pay-as-you-go equivalents only for scale.

| Scaffold | Method | Tokens | Price | Serial time | Cost / pass |
| :--- | :--- | :--- | ---: | ---: | ---: |
| GPT-5.4 mini | Best-of-8 | ~1.6B in + 56M out | ~$0.55K | ~180h | ~$6.5 |
| | Iterative | ~1.0B in + 36M out | ~$0.36K | ~120h | ~$3.4 |
| | Mastermind | ~0.9B in + 31M out | ~$0.32K | ~100h | ~$2.7 |
| GPT-5.5 | Best-of-8 | ~1.6B in + 56M out | ~$3.6K | ~160h | ~$29 |
| | Iterative | ~0.75B in + 26M out | ~$1.7K | ~75h | ~$11 |
| | Mastermind | ~0.56B in + 20M out | ~$1.3K | ~55–70h | ~$8 |
| GLM 5.1 | Best-of-8 | ~1.6B in + 56M out | ~$2.5K | ~300h | ~$23 |
| | Iterative | ~0.84B in + 29M out | ~$1.3K | ~160h | ~$10 |
| | Mastermind | ~0.72B in + 25M out | ~$1.1K | ~135h | ~$8 |

Across all three scaffolds, Mastermind uses fewer tokens and less serial time than Best-of-8 and iterative improvement while solving more tasks, and reaches the lowest cost per pass in each. Executor rollouts dominate the budget: after excluding smoke runs and startup failures, GPT-5.5 Codex rollouts average 407.6 seconds with roughly 211k net tokens and 1.66M gross context tokens per trajectory, and GLM 5.1 rollouts average 811.9 seconds with the median near the 900-second timeout. These measurements are why Mastermind optimizes strategies rather than trajectories. RL needs thousands of environment evaluations; treating command-level trajectories as policy outputs would require billions of tokens and thousands of agent-runtime hours. Mastermind keeps the policy output compact and uses the expensive repository-scale rollout only as an environment evaluation that scores the proposed strategy.

## Failure Analysis

We group the remaining failures into three categories.

- **Semantic failures.** The most common failures miss the exact vulnerability condition rather than failing to execute. In GPT-5.5 Best-of-8, 54/200 tasks end at m4: the server accepts the PoC, but the vulnerable build does not crash. Examples include `arvo:17069` (FLAC bitreader), `arvo:34096` (njs parsing), and `arvo:20459` (libarchive RAR5 parsing), where attempts produce plausible malformed inputs but miss the target crash. A related m6/m7 gap occurs when inputs crash *both* builds; for `arvo:57001` and `arvo:21579`, all eight attempts reached m6 without a verified m7. These cases are why dual-build verification is essential: "any crash" overstates true reproduction.
- **Search failures.** Repeated sampling does not guarantee meaningfully different hypotheses. On `arvo:49427` (mruby negative bigint radix packing), all eight independent attempts submit minor variants of the same idea and stay at m4. On `arvo:60268` (HarfBuzz glyphs), independent samples repeatedly target the same anchored-composite mechanism, while iterative refinement escapes and solves the task on attempt 8. Search can also regress, as in `arvo:38764`, where early attempts reached m6 but later attempts fell to m0. Other failures over-amplify boundary conditions into resource-exhaustion inputs, such as very large DNG/LJPEG files in `arvo:6796` or huge iconv expansions in `arvo:51498`, producing timeouts or non-specific crashes.
- **System-interface failures.** Some failures reflect interface artifacts rather than vulnerability reasoning: rollouts whose final messages claim a PoC was created, yet the recorded result is m0 with zero submissions, often after a failed local submission or a candidate missed by the auto-submit wrapper. Safety filtering is another interface failure; a Claude Code / Opus 4.8 smoke run refused one task before useful tool use. We separate these censored or scaffold-induced rollouts because they measure harness and serving-policy compatibility, not exploit-reasoning ability.

## When Is Strategy the Bottleneck

The core premise of strategy-level RL is that execution capability is sufficient and strategy selection is the limiting factor. CyberGym's difficulty levels provide a natural test. On Level 0–1 tasks, where the agent receives at most source code and a brief description, the space of viable strategies is large and the agent must discover the right approach. Level 3 narrows that search by revealing sanitizer output and patch context, but it does not eliminate the bottleneck: GPT-5.5 reaches 60.0% with Level-3 single-pass context, while Level-1 iterative improvement reaches 77.0%. The disagreement between tasks solved only with Level 3 and tasks solved only by Best-of-8 shows that more context and more strategic exploration solve different subsets. More broadly, strategy-level RL should be valuable whenever the task requires choosing among qualitatively different approaches, and less so when the task admits essentially one viable path.

The Curator is not a retrieval cache glued onto an RL algorithm. It is a deliberate offload of the kind of knowledge that weights handle poorly. GRPO's gradient is an excellent compressor for patterns that recur across tasks (how crashes manifest, how submission protocols work, how to decompose an exploit into steps) but a poor encoder for verbatim task-specific facts whose value expires after one task. Storing such facts explicitly frees the policy to learn the transferable part while still exploiting the specific part when a task recurs. And because a strategy is expressed in executor-agnostic natural language, the trained Planner pairs with a different executor backend without retraining.

On safety: Mastermind trains a planner to discover vulnerability-reproduction strategies, a stronger capability amplification than inference-time methods. Three mitigating factors apply. The framework does not create new execution capabilities; it improves strategy selection over an existing executor. Training requires many scaffolded executor rollouts, making it orders of magnitude more expensive than single-shot attacks. And all PoC evaluation occurs within CyberGym's sandboxed Docker containers with checksum-authenticated submissions. We do not report undisclosed zero-day counts; any open-ended discoveries should follow CyberGym's responsible disclosure protocol before release.

## Threats to Validity

- **Internal validity.** Improvements could stem from implementation choices rather than the framework. We mitigate this by fixing the executor within each comparison and varying only the planner or the experience mechanism, under the same CyberGym interface, timeout, milestone definitions, and protocol, on a held-out split disjoint from training. Alternative planner architectures, reward schedules, or Curator retrieval mechanisms may still produce different numbers.
- **Construct validity.** We adopt CyberGym's official dual-build criterion, which substantially reduces false positives from measuring arbitrary crashes. Milestone rewards are used only during training. Vulnerability reproduction still does not capture every aspect of SE capability, such as maintainability or debugging efficiency.
- **External validity.** CyberGym spans 1,507 real-world tasks from ARVO <d-cite key="mei2024arvo"></d-cite> and OSS-Fuzz <d-cite key="serebryany2017ossfuzz"></d-cite> across 188 open-source projects, and we evaluate the same planner with three frozen executor backbones. Whether strategy-level learning transfers to other SE tasks, benchmarks, or future foundation models remains open.

## Takeaways

Repository-level vulnerability reproduction exposes a practical SE-agent bottleneck: strong executors often know *how* to act, but not *which* strategy to try. Mastermind targets that bottleneck directly by learning compact natural-language strategies, storing task-local experience explicitly, and training the planner with dense CyberGym milestone feedback. Paired with the same GPT-5.5 executor, the trained planner solves 84.5% of held-out tasks, against 63.0% for Best-of-8, 77.0% for iterative experience, and 60.0% for Level-3 open-book context.

If you build long-horizon agents, three points carry over:

1. **Pick the learning unit deliberately.** Full trajectories are long, noisy, executor-specific, and expensive. A compact strategy is cheap to optimize, easy to compare across attempts, and transfers across executor backbones.
2. **Put each kind of knowledge where it belongs.** Transferable instincts go into weights; task-local facts go into explicit experience. Mixing them forces the policy to memorize what it should merely retrieve.
3. **Feedback should change the next hypothesis, not just lengthen the prompt.** Iterative task-local revision beats both richer context and more independent samples, and a trained planner makes each revision better.

The broader lesson is that SE agents need learnable abstractions above raw action trajectories. Strategy-level learning is one such abstraction for tasks where choosing the approach is harder than executing it. Compared with prior planner-executor systems <d-cite key="xiong2025mpo"></d-cite>, memory and evolution systems <d-cite key="alphaevolve2025"></d-cite>, and inference-time heuristics such as Reflexion <d-cite key="shinn2023reflexion"></d-cite>, Mastermind is the first to combine a trainable planner, frozen executors, cross-run experience, dense process credit, and explicit strategy diversity in one loop.
