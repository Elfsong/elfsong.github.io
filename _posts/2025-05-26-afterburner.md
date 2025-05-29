---
layout: distill
title: Afterburner
date: 2025-05-26 00:00:00
description: By Humans, Beyond Humans.
tags: math code
categories: academia
featured: false
mermaid:
  enabled: true
  zoomable: true
code_diff: true
map: true
chart:
  chartjs: true
  echarts: true
  vega_lite: true
tikzjax: true
typograms: true

authors:
  - name: Mingzhe Du
    affiliations:
      name: Nanyang Technological University
  - name: Luu Tuan Tuan
    affiliations:
      name: National University of Singapore
  - name: Yue Liu
    affiliations:
      name: Nanyang Technological University
  - name: Yuhao Qing
    affiliations:
      name: The University of Hong Kong
  - name: Dong Huang
    affiliations:
      name: Nanyang Technological University
  - name: Xinyi He
    affiliations:
      name: Xi'an Jiaotong University
  - name: Qian Liu
    affiliations:
      name: ByteDance
  - name: Zejun Ma
    affiliations:
      name: ByteDance
  - name: See-kiong Ng
    affiliations:
      name: National University of Singapore

bibliography: afterburner.bib

---

Large Language Models (LLMs) generate functionally correct solutions but often fall short in code efficiency, a critical bottleneck for real-world deployment. In this paper, we introduce a novel test-time iterative optimization framework to address this, employing a closed-loop system where LLMs iteratively refine code based on empirical performance feedback from an execution sandbox. We explore three training strategies: Supervised Fine-Tuning (SFT), Direct Preference Optimization (DPO), and Group Relative Policy Optimization~(GRPO). Experiments on our Venus dataset and the APPS benchmark show that SFT and DPO rapidly saturate in efficiency gains. In contrast, GRPO, using reinforcement learning (RL) with execution feedback, continuously optimizes code performance, significantly boosting both pass@1 (from 47% to 62%) and the likelihood of outperforming human submissions in efficiency (from 31% to 45%). Our work demonstrates effective test-time code efficiency improvement and critically reveals the power of RL in teaching LLMs to truly self-improve code efficiency.

```echarts
{
    "title": {
        "text": "Pass@1 Over Iterations"
    },
    "responsive": true,
    "tooltip": {
        "trigger": "axis"
    },
    "legend": {
        "top": "50px",
        "data": ["Base Model", "Afterburner 3B-SFT", "Afterburner 3B-DPO", "Afterburner 3B-GRPO"]
    },
    "grid": {
        "left": "3%",
        "right": "4%",
        "bottom": "3%",
        "containLabel": true
    },
    "toolbox": {
        "feature": {
        "saveAsImage": {}
        }
    },
    "xAxis": {
        "type": "category",
        "boundaryGap": false,
        "data": ["Iter 0", "Iter 1", "Iter 2", "Iter 3", "Iter 4", "Iter 5", "Iter 6", "Iter 7", "Iter 8", "Iter 9", "Iter 10"]
    },
    "yAxis": {
        "type": "value",
        "name": "Pass@1"
    },
    "series": [
        {
        "name": "Base Model",
        "type": "line",
        "data": [27.99, 28.33, 28.67, 28.67, 29.00, 29.08, 29.17, 29.24, 29.33, 29.33, 29.33]
        },
        {
        "name": "Afterburner 3B-SFT",
        "type": "line",
        "data": [46.00, 46.00, 46.33, 47.00, 48.33, 48.33, 48.67, 48.67, 48.67, 48.67, 48.67]
        },
        {
        "name": "Afterburner 3B-DPO",
        "type": "line",
        "data": [43.00, 50.00, 51.33, 51.50, 51.67, 51.67, 51.67, 51.67, 51.67, 51.67, 51.67]
        },
        {
        "name": "Afterburner 3B-GRPO",
        "type": "line",
        "data": [47.33, 50.33, 52.00, 54.50, 57.00, 58.17, 59.34, 60.50, 61.18, 61.67, 61.67]
        }
    ]
}
```

```echarts
{
    "title": {
        "text": "Beyond-I Over Iterations"
    },
    "responsive": true,
    "tooltip": {
        "trigger": "axis"
    },
    "legend": {
        "top": "50px",
        "data": ["Base Model", "Afterburner 3B-SFT", "Afterburner 3B-DPO", "Afterburner 3B-GRPO"]
    },
    "grid": {
        "left": "3%",
        "right": "4%",
        "bottom": "3%",
        "containLabel": true
    },
    "toolbox": {
        "feature": {
        "saveAsImage": {}
        }
    },
    "xAxis": {
        "type": "category",
        "boundaryGap": false,
        "data": ["Iter 0", "Iter 1", "Iter 2", "Iter 3", "Iter 4", "Iter 5", "Iter 6", "Iter 7", "Iter 8", "Iter 9", "Iter 10"]
    },
    "yAxis": {
        "type": "value",
        "name": "Beyond-I"
    },
    "series": [
        {
        "name": "Base Model",
        "type": "line",
        "data": [10.29, 10.77, 11.25, 11.49, 11.72, 11.83, 11.96, 12.07, 12.07, 12.07, 12.07]
        },
        {
        "name": "Afterburner 3B-SFT",
        "type": "line",
        "data": [21.01, 21.09, 21.50, 21.88, 22.25, 22.31, 22.38, 22.44, 22.50, 22.50, 22.50]
        },
        {
        "name": "Afterburner 3B-DPO",
        "type": "line",
        "data": [19.13, 26.25, 27.05, 27.42, 27.95, 28.11, 28.51, 29.51, 29.51, 29.51, 29.51]
        },
        {
        "name": "Afterburner 3B-GRPO",
        "type": "line",
        "data": [18.24, 24.81, 29.44, 30.85, 33.56, 35.48, 37.09, 38.01, 38.62, 38.95, 38.95]
        }
    ]
}
```
