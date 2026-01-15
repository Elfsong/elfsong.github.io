---
layout: distill
title: Preference Alignment
date: 2026-01-14 00:00:00
description: Preference Alignment
tags: math code
categories: academia
featured: false

authors:
  - name: Mingzhe Du
    affiliations:
      name: Nanyang Technological University
---

## Preference Alignment

### The Starting Point: RLHF Objective

We start with the standard objective function for Reinforcement Learning from Human Feedback (RLHF). We want to maximize the expected reward $r(x,y)$ while penalizing the model if it drifts too far from the reference model $\pi_{ref}$ (using KL divergence).

$$\max_{\pi} J(\pi) = \mathbb{E}_{y \sim \pi(\cdot|x)} \left[ r(x, y) \right] - \beta D_{KL}(\pi(\cdot|x) || \pi_{ref}(\cdot|x))$$

1. **Algebraic Expansion:**
we expand the KL divergence term using logarithm properties ($\log \frac{a}{b} = \log a - \log b$) to separate the policy and reference terms.

$$J(\pi) = \sum_y \pi(y|x) r(x, y) - \beta \sum_y \pi(y|x) \log \frac{\pi(y|x)}{\pi_{ref}(y|x)}$$

$$J(\pi) = \sum_y \pi(y|x) \left( r(x, y) - \beta \log \frac{\pi(y|x)}{\pi_{ref}(y|x)} \right)$$

$$J(\pi) = \sum_y \pi(y|x) \left( r(x, y) - \beta \log \pi(y|x) + \beta \log \pi_{ref}(y|x) \right)$$

2. **Factorization:**
we factor out $-\beta$ to reorganize the terms. This is a mathematical trick to make the equation look like a new KL divergence formula.

$$J(\pi) = -\beta \sum_y \pi(y|x) \left( \log \pi(y|x) - \log \pi_{ref}(y|x) - \frac{1}{\beta} r(x, y) \right)$$

3. **Defining the "Optimal Policy" ($\pi^*$):**
we define a theoretical optimal policy $\pi^*$ (closed-form solution) that follows a *Boltzmann distribution*. This represents the ideal state where the probability of generating a response is proportional to its reward.
$Z(x)$ is the Partition Function (normalization constant) to ensure probabilities sum to 1.

$$\pi^*(y|x) = \frac{1}{Z(x)} \pi_{ref}(y|x) \exp\left( \frac{r(x, y)}{\beta} \right)$$

$$Z(x) = \sum_y \pi_{ref}(y|x) \exp\left( \frac{r(x, y)}{\beta} \right)$$

4. **Log-Space Transformation:**
we take the logarithm of the optimal policy $\pi^*$. This allows us to express the reward $r(x,y)$ and reference model $\pi_{ref}$ in terms of $\pi^*$ and the constant $Z(x)$. By rearranging the terms, we isolate the part that matches our factored objective function.

$$\log \pi^*(y|x) = \log \pi_{ref}(y|x) + \frac{1}{\beta} r(x, y) - \log Z(x)$$

$$\log \pi_{ref}(y|x) + \frac{1}{\beta} r(x, y) = \log \pi^*(y|x) + \log Z(x)$$

5. **Substitution:**
we substitute the rearranged equation from Step 5 back into our objective function.

$$\begin{aligned}
J(\pi) &= -\beta \sum_y \pi(y|x) \left( \log \pi(y|x) - \left[ \log \pi^*(y|x) + \log Z(x) \right] \right) \\
&= -\beta \sum_y \pi(y|x) \left( \log \frac{\pi(y|x)}{\pi^*(y|x)} - \log Z(x) \right)
\end{aligned}$$

6. **Simplification to KL Divergence:** 
we separate the terms to form the KL Divergence between our current policy $\pi$ and the optimal policy $\pi^*$. The second term simplifies because $\log Z(x)$ is constant with respect to $y$.

$$J(\pi) = -\beta \underbrace{\sum_y \pi(y|x) \log \frac{\pi(y|x)}{\pi^*(y|x)}}_{D_{KL}(\pi || \pi^*)} + \beta \sum_y \pi(y|x) \log Z(x)$$

$$J(\pi) = -\beta D_{KL}(\pi(\cdot|x) || \pi^*(\cdot|x)) + \beta \log Z(x)$$

7. **The Optimization Equivalence:**
Since $\beta \log Z(x)$ is a constant (it depends only on the reward function and reference model, not the policy $\pi$ we are training), maximizing the original objective $J(\pi)$ is mathematically equivalent to minimizing the KL divergence between our policy and the optimal policy.

$$\max_{\pi} J(\pi) \iff \min_{\pi} D_{KL}(\pi || \pi^*)$$

## Paradigm I: Imitation

### Supervised Fine-Tuning (SFT)

$$\mathcal{L}_{\text{SFT}} = - \mathbb{E}_{(x, y) \sim \mathcal{D}} \left[ \sum_{t=1}^{T} \log \pi_\theta(y_t | x, y_{<t}) \right]$$

## Paradigm II: Reinforcement Learning from Human Feedback (RLHF)

### REINFORCE

$$\mathcal{L}_{\text{REINFORCE}} = - \mathbb{E}_{x \sim \mathcal{D}, y \sim \pi_\theta(\cdot|x)} \left[ r(x, y) \cdot \sum_{t=1}^{T} \log \pi_\theta(y_t | x, y_{<t}) \right]$$

### Proximal Policy Optimization (PPO)

$$\mathcal{L}_{\text{PPO}} = - \mathbb{E}_{(x,y)} \left[ \min \left( \rho_t(\theta) A_t, \text{clip}(\rho_t(\theta), 1-\epsilon, 1+\epsilon) A_t \right) \right] - \beta_{\text{KL}} D_{\text{KL}}(\pi_\theta || \pi_{\text{ref}})$$

$$ \rho_t(\theta) = \frac{\pi_\theta(y_t|x)}{\pi_{\text{old}}(y_t|x)} $$

## Direct Alignment / RL-Free

### Direct Preference Optimization (DPO)

$$\mathcal{L}_{\text{DPO}} = - \mathbb{E}_{(x, y_w, y_l) \sim \mathcal{D}} \left[ \log \sigma \left( \beta \log \frac{\pi_\theta(y_w|x)}{\pi_{\text{ref}}(y_w|x)} - \beta \log \frac{\pi_\theta(y_l|x)}{\pi_{\text{ref}}(y_l|x)} \right) \right]$$

### Identity Policy Optimization (IPO)

$$\mathcal{L}_{\text{IPO}} = \mathbb{E}_{(x, y_w, y_l) \sim \mathcal{D}} \left[ \left( \log \frac{\pi_\theta(y_w|x)}{\pi_{\text{ref}}(y_w|x)} - \log \frac{\pi_\theta(y_l|x)}{\pi_{\text{ref}}(y_l|x)} - \frac{\tau}{2} \right)^2 \right]$$

### Kahneman-Tversky Optimization (KTO)

$$\mathcal{L}_{\text{KTO}} = \underbrace{\sum_{y \in \text{Good}} w_{\text{good}} \cdot \left( 1 - \sigma(r_\theta(x,y) - z_{\text{ref}}) \right)}_{\text{Increase Good Cases}} + \underbrace{\sum_{y \in \text{Bad}} w_{\text{bad}} \cdot \left( 1 - \sigma(z_{\text{ref}} - r_\theta(x,y)) \right)}_{\text{Decrease Bad Cases}}$$

## Make RL Great Again

### Group Relative Policy Optimization (GRPO)

$$\mathcal{L}_{\text{GRPO}} = \mathcal{L}_{\text{surrogate}} + \beta D_{\text{KL}}(\pi_\theta || \pi_{\text{ref}})$$

$$\mathcal{L}_{\text{surrogate}} = - \frac{1}{G} \sum_{i=1}^{G} \left[ \min \left( \rho_i A_i, \text{clip}(\rho_i, 1-\epsilon, 1+\epsilon) A_i \right) \right]$$

$$  A_i = \frac{r_i - \text{mean}(\{r_1 \dots r_G\})}{\text{std}(\{r_1 \dots r_G\})}$$
