---
layout: post
title: Afterburner
date: 2025-05-26 00:00:00
description: By Humans, Beyond Humans.
tags: math code
categories: academia
chart:
  echarts: true
pseudocode: true
---

Large Language Models (LLMs) generate functionally correct solutions but often fall short in code efficiency, a critical bottleneck for real-world deployment. In this paper, we introduce a novel test-time iterative optimization framework to address this, employing a closed-loop system where LLMs iteratively refine code based on empirical performance feedback from an execution sandbox. We explore three training strategies: Supervised Fine-Tuning (SFT), Direct Preference Optimization (DPO), and Group Relative Policy Optimization~(GRPO). Experiments on our Venus dataset and the APPS benchmark show that SFT and DPO rapidly saturate in efficiency gains. In contrast, GRPO, using reinforcement learning (RL) with execution feedback, continuously optimizes code performance, significantly boosting both pass@1 (from 47% to 62%) and the likelihood of outperforming human submissions in efficiency (from 31% to 45%). Our work demonstrates effective test-time code efficiency improvement and critically reveals the power of RL in teaching LLMs to truly self-improve code efficiency.

```echarts
{
  "title": {
    "text": "Model Performance Over Iterations"
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
    "name": "Iteration",
    "boundaryGap": false,
    "data": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
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

```pseudocode
\begin{algorithmic}
    \Require Problem description~$\mathcal{P}$, Efficiency instruction~$\mathcal{I} \in \{\textit{time, memory, integral}\}$, Set of test cases~$T_{cases}$, Original code~$\mathcal{C}_{0}^{in}$ (optional), Number of iterations~$N_{iter}$ 
    \Ensure  Improved code~$\mathcal{C}_{0}^{out}$, Improved code performance~$\mathcal{M}_{0}^{out}$
    \algrule
    
    \If{not $\mathcal{C}_{0}^{in}$}
        \State $\mathcal{C}_{0}^{in} \gets \texttt{Afterburner}(\mathcal{P}, \mathcal{I}, \textit{None}, \textit{None})$
        \Comment{Initial code generation.}
    \EndIf
    
    \State $\mathcal{M}_{0}^{in} \gets \texttt{Monolith}(\mathcal{C}_{0}^{in}, T_{cases})$
    \Comment{Initial code evaluation.}

    \For{$i \gets 1$ \textbf{to} $N_{iter}$}
        \State $\mathcal{C}_{i}^{out} \gets \texttt{Afterburner}(\mathcal{P}, \mathcal{I}, \mathcal{C}_{i}^{in}, \mathcal{M}_{i}^{in})$
        \Comment{Code optimization.}
    
        \State $\mathcal{M}_{i}^{out} \gets \texttt{Monolith}(\mathcal{C}_{i}^{out}, T_{cases})$
        \Comment{Code evaluate.}
    
        \If{$\mathcal{M}_{i}^{out} \succ \mathcal{M}_{i}^{in})$}
            \Comment{Compare the performance concerning $I$.}
            \State $(\mathcal{C}_{i+1}^{in}, \mathcal{M}_{i+1}^{in}) \gets (\mathcal{C}_{i}^{out}, \mathcal{M}_{i}^{out})$
            \Comment{Update with the better performing candidate.}
        \Else
            \State $(\mathcal{C}_{i+1}^{in}, \mathcal{M}_{i+1}^{in}) \gets (\mathcal{C}_{i}^{in}, \mathcal{M}_{i}^{in})$
            \Comment{Otherwise, retain the current best.}
        \EndIf
    \EndFor
    
    \State \textbf{return} $(\mathcal{C}_{N_{iter}}^{in}, \mathcal{M}_{N_{iter}}^{in})$
    \Comment{Return the best code found after $N_{iter}$ iterations and its metrics}
\end{algorithmic}
\end{algorithm}
```

```pseudocode
% This quicksort algorithm is extracted from Chapter 7, Introduction to Algorithms (3rd edition)
\begin{algorithm}
\caption{Quicksort}
\begin{algorithmic}
\PROCEDURE{Quicksort}{$$A, p, r$$}
    \IF{$$p < r$$}
        \STATE $$q = $$ \CALL{Partition}{$$A, p, r$$}
        \STATE \CALL{Quicksort}{$$A, p, q - 1$$}
        \STATE \CALL{Quicksort}{$$A, q + 1, r$$}
    \ENDIF
\ENDPROCEDURE
\PROCEDURE{Partition}{$$A, p, r$$}
    \STATE $$x = A[r]$$
    \STATE $$i = p - 1$$
    \FOR{$$j = p$$ \TO $$r - 1$$}
        \IF{$$A[j] < x$$}
            \STATE $$i = i + 1$$
            \STATE exchange
            $$A[i]$$ with $$A[j]$$
        \ENDIF
        \STATE exchange $$A[i]$$ with $$A[r]$$
    \ENDFOR
\ENDPROCEDURE
\end{algorithmic}
\end{algorithm}
```
