---
layout: distill
title: Does Background Music Matter to Speech in Language Models
date: 2026-09-25 00:00:00+0800
description: The same spoken question, a different soundtrack, and answers that change beneath a nearly flat average.
tags: audio evaluation
categories: academia
featured: false
chart:
  echarts: true

authors:
  - name: Mingzhe Du
    affiliations:
      name: National University of Singapore
  - name: Moming Duan
    affiliations:
      name: East China Normal University

bibliography: background_music.bib

toc:
  - name: The Same Question, a Different Background
  - name: What We Measure
  - name: A Flat Average Can Hide Changing Answers
  - name: The Same Music Can Help or Hurt
  - name: Context Changes the Pattern
  - name: Is There a Best Genre?
  - name: What the Experiment Leaves Open
  - name: What to Measure Next
---

## The Same Question, a Different Background

What happens when an audio language model hears a question with music playing behind it? Does the answer stay the same? Does accuracy improve, decline, or barely move while different questions succeed?

In our technical report, [*Does Background Music Matter to Speech in Language Models*]({{ '/assets/pdf/Does_Background_Music_Matter.pdf' | relative_url }}), we hold the spoken question fixed and change its musical background. <d-cite key="du2026backgroundmusic"></d-cite> Across eight models, 55 instrumental recordings, and ten evaluation settings, the observed changes depend on the model, the task, and the recording.

The most revealing result is how much an average can conceal. For Voxtral Mini on far-context questions, **16.68% of paired scores flip**, while the average changes by just **−0.08 percentage points**. Music can change which questions a system answers correctly without appreciably changing its overall score.

## What We Measure

Each model receives a spoken prompt alone, mixed with music, or mixed with white noise. The 55 recordings cover 11 genres, with five recordings per genre. Backgrounds are mixed at **+10 dB signal-to-noise ratio**, so speech has greater average power than the background. Models produce text using greedy decoding, and each music response is compared with its matched clean-speech response.

The evaluation has three parts:

| Evaluation | Settings | Items per setting | What it probes |
| :--- | :--- | ---: | :--- |
| Original tasks | GSM8K, BBH, MMLU, IFEval | 500 | Math word problems, general reasoning, subject knowledge, and instruction following |
| Mathematical variants | GSM-Symbolic base, P1, P2 | 500 | Changes across arithmetic problem variants with additional clauses |
| Context variants | bAbI short, near, far | 300 | Retrieving and combining facts with irrelevant text placed in different positions |

The eight models are Phi-4 Multimodal, Voxtral Mini, Qwen3-Omni, Qwen2.5-Omni, Voxtral Small, Step-Audio-R1.1, Nemotron, and MiniCPM-o 4.5. All eight receive identical regenerated audio for the six mathematical and context variants. The original four tasks include runs with different speech-generation provenance, output budgets, and IFEval scoring versions; those comparisons require more care.

For closed-answer tasks, we measure accuracy under the documented answer-extraction rules. For IFEval, we measure **Strict compliance**: whether the response satisfies all required constraints. Throughout this post, **pp** means percentage points, and music effects are changes from matched clean speech unless another reference is explicitly stated.

## A Flat Average Can Hide Changing Answers

Suppose music causes some previously correct answers to fail and some previously incorrect answers to succeed. The average score records the difference between these two groups. A score-flip rate records their sum.

If $$B$$ is the fraction of pairs moving from failure to success and $$H$$ is the fraction moving from success to failure, then:

$$
\text{score change (pp)} = 100(B-H), \qquad
\text{score-flip rate (\%)} = 100(B+H).
$$

For Step-Audio-R1.1 on IFEval, **8.18%** of pairs move from success to failure and **8.24%** move from failure to success. The reported flip rate is **16.43%**, but the net change is only **+0.06 pp**. The small rounding difference comes from reporting each quantity to two decimal places.

| Model and setting | Paired score-flip rate | Net score change |
| :--- | ---: | ---: |
| Voxtral Mini, bAbI far | 16.68% | −0.08 pp |
| Step-Audio-R1.1, IFEval Strict | 16.43% | +0.06 pp |
| Step-Audio-R1.1, BBH | 11.88% | 0.00 pp |

These are paired comparisons across items and recordings, not percentages of unique questions affected at least once. They show why average accuracy alone is an incomplete description of response stability.

Changes in wording are a separate measure. Qwen3-Omni's IFEval response strings differ in **93.80%** of music–clean comparisons, while Strict scores flip in **10.73%**. Different punctuation, formatting, or wording can leave task success unchanged. String disagreement by itself does not measure creativity or a change in meaning.

## The Same Music Can Help or Hurt

On GSM-Symbolic base, music raises Voxtral Mini's mean score by **+7.83 pp** and lowers Qwen3-Omni's by **−3.01 pp**. Every one of the 55 recordings has a positive estimate for the former and a negative estimate for the latter, despite identical input audio across the two models.

Across the more complex variants, the pattern changes again:

```echarts
{
  "color": ["#2a78d6", "#eb6834"],
  "tooltip": {"trigger": "axis", "axisPointer": {"type": "shadow"}},
  "legend": {"top": 0, "data": ["Voxtral Mini", "Qwen3-Omni"]},
  "grid": {"left": "4%", "right": "5%", "bottom": "5%", "top": 65, "containLabel": true},
  "xAxis": {"type": "category", "data": ["Base", "P1", "P2"]},
  "yAxis": {"type": "value", "name": "Change vs. clean (pp)", "min": -8, "max": 10},
  "series": [
    {
      "name": "Voxtral Mini",
      "type": "bar",
      "label": {"show": true, "position": "top"},
      "data": [7.83, 6.30, 2.63]
    },
    {
      "name": "Qwen3-Omni",
      "type": "bar",
      "label": {"show": true, "position": "bottom"},
      "data": [-3.01, -5.17, -1.71]
    }
  ]
}
```

*Mean effects over 55 recordings on 500 items per setting; report Appendix B, Table 2. These are descriptive point estimates.*

Voxtral Mini's gains shrink from base to P2, while Qwen3-Omni's losses are non-monotonic. Numerical content and spoken length also change across variants, so this comparison does not isolate difficulty.

Output budgets matter too. Under a strict diagnostic that considers only the first 64 generated tokens and treats truncation as failure, Voxtral Mini's effects are **+0.45, +0.32, and +0.29 pp**, compared with **+7.83, +6.30, and +2.63 pp** under the primary 1,024-token protocol. This diagnostic reuses the same responses; it is not an independent rerun or a causal test of reasoning effort.

The original GSM8K task also resists a universal story: Voxtral Small falls from **61.55% to 53.73%**, a **−7.82 pp** change, with negative estimates for all 55 tracks. These outcomes describe particular model configurations and evaluation protocols. They do not establish that music improves mathematics or that larger models respond in a predictable way.

## Context Changes the Pattern

The bAbI variants keep the factual problem intact. The short version contains the facts and question. In the near version, irrelevant sentences precede the facts; in the far version, they follow the facts. The question stays last. Near and far contain the same words, but relevant facts sit at different distances from the question.

```echarts
{
  "color": ["#2a78d6", "#eb6834"],
  "tooltip": {"trigger": "axis", "axisPointer": {"type": "shadow"}},
  "legend": {"top": 0, "data": ["Qwen2.5-Omni", "Qwen3-Omni"]},
  "grid": {"left": "4%", "right": "5%", "bottom": "5%", "top": 65, "containLabel": true},
  "xAxis": {"type": "category", "data": ["Short", "Near", "Far"]},
  "yAxis": {"type": "value", "name": "Change vs. clean (pp)", "min": -5, "max": 2},
  "series": [
    {
      "name": "Qwen2.5-Omni",
      "type": "bar",
      "label": {"show": true, "position": "inside"},
      "data": [1.07, -3.82, -1.54]
    },
    {
      "name": "Qwen3-Omni",
      "type": "bar",
      "label": {"show": true, "position": "inside"},
      "data": [-2.36, 0.52, -4.01]
    }
  ]
}
```

*Mean effects over 55 recordings on 300 paired problems per setting; report Appendix B, Table 2.*

Qwen2.5-Omni loses less in far than near (**−1.54 vs. −3.82 pp**). Qwen3-Omni shows the opposite ordering (**−4.01 vs. +0.52 pp**). The results suggest sensitivity to context arrangement, with no common rule that moving facts farther away makes music uniformly more harmful.

## Is There a Best Genre?

There are weak aggregate tendencies. Chinese traditional, hip-hop, and ambient music score above the overall music mean in seven of eight models after averaging over settings. Rock and metal do so in only one.

The reference here is the **55-track music mean**, rather than clean speech. Each model and each of the ten settings receives equal weight.

| Background | Score relative to music mean | Models above music mean |
| :--- | ---: | ---: |
| Chinese traditional | +0.21 pp | 7/8 |
| Hip-hop | +0.20 pp | 7/8 |
| Ambient | +0.16 pp | 7/8 |
| Pop | +0.11 pp | 5/8 |
| Cinematic / orchestral | +0.03 pp | 4/8 |
| Jazz | −0.01 pp | 5/8 |
| Folk / country | −0.02 pp | 4/8 |
| Electronic dance | −0.07 pp | 2/8 |
| Classical | −0.14 pp | 2/8 |
| Rock | −0.23 pp | 1/8 |
| Metal | −0.25 pp | 1/8 |
| White noise, separate control | −0.73 pp | 1/8 |

*Report Table 1. White noise is excluded from the music reference. Counts indicate direction, not statistical significance.*

The full genre spread is only **0.46 pp**, and each genre contains five curated recordings. The available genre-label permutation tests, covering four models on the original four tasks, yield no discoveries after correction across the 16 tests. These observations do not identify a universally best soundtrack.

White noise is useful as an acoustic comparison, but matching signal-to-noise ratio does not match spectral or temporal interference. Under equal weighting across all eight models and ten settings, music averages **−0.406 pp** against clean speech and white noise **−1.134 pp**. Music's advantage over noise therefore does not imply an advantage over clean speech.

## What the Experiment Leaves Open

The experiment measures the **complete speech-to-answer pipeline**. It does not separate changes in speech perception from changes in later processing, or demonstrate human-like focus, distraction, or emotion.

Several details constrain how far the results travel:

- **Shared items and fixed recordings.** The many item–track comparisons are dependent. The reported item-bootstrap analysis keeps all tracks for an item together and conditions on the chosen recordings; it does not estimate performance over arbitrary music.
- **Different execution histories.** The original-task runs differ in speech provenance, output budgets, and scoring versions. Qwen2.5-Omni's original-task result is explicitly historical. The six added settings use shared regenerated audio, but model-specific runtime differences remain.
- **Answer format and truncation.** A last-number grader can misread a correct explanation that ends with a different number. Some configurations also hit output caps frequently: MiniCPM's music-condition truncation rates on GSM-Symbolic are approximately 89–98%, limiting any interpretation of its scores as mathematical ability.
- **Clean repetitions are not always identical.** Stored clean outputs sometimes differ despite matching recorded audio hashes and greedy decoding. The audit also identifies an identical-response grading inconsistency in one Qwen3 IFEval item. Observed disagreement cannot automatically be assigned entirely to music.

## What to Measure Next

For an audio model, a background change can alter both the average score and the identity of successful answers. An evaluation that reports both quantities gives a clearer picture of stability.

A useful follow-up would combine matched audio and repeated clean controls with checks on transcription, answer extraction, and output truncation. Testing additional recordings and signal-to-noise ratios would help establish which patterns generalize. Genre comparisons would also benefit from separating acoustic properties such as tempo, spectrum, and dynamics.

For now, the evidence supports a specific observation: **background music changes measured outcomes, and the direction depends on the model and task. A nearly unchanged average can still conceal substantial changes in which answers succeed.** The [full technical report]({{ '/assets/pdf/Does_Background_Music_Matter.pdf' | relative_url }}) contains the complete recording matrices, protocols, and scoring audits.
