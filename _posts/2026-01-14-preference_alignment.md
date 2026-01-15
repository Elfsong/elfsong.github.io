---
layout: post
title: Preference Alignment 101
date: 2026-01-14 00:00:00
description: Preference Alignment Preliminary Notes
tags: math code
categories: academia
featured: false
toc:
  beginning: true
---

### Chapter I: Imitation Learning

#### Supervised Fine-Tuning (SFT)

This is the first step in the alignment pipeline, transitioning from "Next Token Prediction" (Pre-training) to "Instruction Following". It bridges the gap between *the vast knowledge base of the model* and *the user's intent*.

$$\mathcal{L}_{\text{SFT}} = - \mathbb{E}_{(x, y) \sim \mathcal{D}} \left[ \sum_{t=1}^{T} \log \pi_\theta (y_t | x, y_{<t}) \right]$$

- **Pros:** `simple implementation` (standard cross-entropy loss), `stable convergence`.
- **Cons:** `exposure bias` (training on ground truth, testing on self-generated output) and `lack of negative feedback` (the model learns *what to do*, but not necessarily *what not to do*). It mimics the dataset distribution rather than optimizing for response quality.

### Chapter II: Reinforcement Learning from Human Feedback (RLHF)

SFT struggles to discern "better" from "good".
 Humans are often better at judging quality than writing perfect demonstrations. RLHF introduces a **Reward Model** to act as a proxy for human preference, allowing the model to explore and optimize for higher rewards.

#### REINFORCE

REINFORCE is the fundamental *Monte Carlo Policy Gradient* algorithm. It updates the policy by estimating the gradient using full response trajectories. Simply put: *if a generated sequence gets a high reward, the model increases the probability of all tokens in that sequence; if it gets a low reward, it decreases them.*

$$\mathcal{L}_{\text{REINFORCE}} = - \mathbb{E}_{x \sim \mathcal{D}, y \sim \pi_\theta (\cdot|x)} \left[ r(x, y) \cdot \sum_{t=1}^{T} \log \pi_\theta(y_t | x, y_{<t}) \right]$$

- **Pros:** theoretically `straightforward` and `unbiased` (asymptotically) implementation of the policy gradient theorem.

- **Cons:** because it relies on full Monte Carlo returns, the gradient estimates are `extremely noisy`, making `training unstable`. It also requires a large number of samples to converge. Without a mechanism to limit update size, a single bad update can `ruin the policy`.

#### Proximal Policy Optimization (PPO)

PPO improves upon REINFORCE by adopting an *Actor-Critic* architecture and a *Trust Region* approach. It introduces a *Critic* (Value Function) to reduce variance and a *Clipping* mechanism to constrain the policy update. This ensures the new policy $\pi_\theta$ does not deviate too drastically away from the old policy $\pi_{\text{old}}$ in a single step.

$$A_t = Q(s_t, a_t) - V(s_t)$$

$$\delta_t = r_t + \gamma V(s_{t+1}) - V(s_t)$$

$$A_t^{\text{GAE}} = \sum_{k=0}^{\infty} (\gamma \lambda)^k \delta_{t+k}$$

$$\mathcal{L}_{\text{PPO}} = - \mathbb{E}_{(x,y)} \left[ \min \left( \rho_t(\theta) A_t, \text{clip}(\rho_t(\theta), 1-\epsilon, 1+\epsilon) A_t \right) \right] - \beta_{\text{KL}} D_{\text{KL}}(\pi_\theta || \pi_{\text{ref}})$$

$$ \rho_t(\theta) = \frac{\pi_\theta(y_t|x)}{\pi_{\text{old}}(y_t|x)} $$

- **Pros:** the clipping mechanism `prevents catastrophic forgetting` and ensures `reliable convergence`.

- **Cons:** a standard PPO setup requires loading four models into memory simultaneously: the Actor (Policy), Critic (Value), Reference Model, and Reward Model. This creates a `massive resource bottleneck` and makes hyperparameter tuning notoriously difficult.

### Chapter III: Direct Alignment

Researchers asked: "If the optimal policy $\pi^*$ can be expressed in terms of the reward and reference, can we optimize the policy directly `without training an explicit Reward Model`?"
This led to the era of Direct Alignment, which implicitly solves the RL problem using supervised objectives.

#### The Starting Point: RLHF Objective

We start with the standard objective function for Reinforcement Learning from Human Feedback (RLHF). We want to maximize the expected reward $r(x,y)$ while penalizing the model if it drifts too far from the reference model $\pi_{ref}$ (using KL divergence).

$$\max_{\pi} J(\pi) = \mathbb{E}_{y \sim \pi(\cdot|x)} \left[ r(x, y) \right] - \beta D_{KL}(\pi(\cdot|x) || \pi_{ref}(\cdot|x))$$

##### 1. Algebraic Expansion

we expand the KL divergence term using logarithm properties ($\log \frac{a}{b} = \log a - \log b$) to separate the policy and reference terms.

$$J(\pi) = \sum_y \pi(y|x) r(x, y) - \beta \sum_y \pi(y|x) \log \frac{\pi(y|x)}{\pi_{ref}(y|x)}$$

$$J(\pi) = \sum_y \pi(y|x) \left( r(x, y) - \beta \log \frac{\pi(y|x)}{\pi_{ref}(y|x)} \right)$$

$$J(\pi) = \sum_y \pi(y|x) \left( r(x, y) - \beta \log \pi(y|x) + \beta \log \pi_{ref}(y|x) \right)$$

##### 2. Factorization

we factor out $-\beta$ to reorganize the terms. This is a mathematical trick to make the equation look like a new KL divergence formula.

$$J(\pi) = -\beta \sum_y \pi(y|x) \left( \log \pi(y|x) - \log \pi_{ref}(y|x) - \frac{1}{\beta} r(x, y) \right)$$

##### 3. Defining the Optimal Policy

we define a theoretical optimal policy $\pi^*$ (closed-form solution) that follows a *Boltzmann distribution*. This represents the ideal state where the probability of generating a response is proportional to its reward.
$Z(x)$ is the Partition Function (normalization constant) to ensure probabilities sum to 1.

$$\mathcal{L}(\pi, \lambda) = \underbrace{\sum_y \pi(y|x) \left[ r(x, y) - \beta \log \frac{\pi(y|x)}{\pi_{ref}(y|x)} \right]}_{\text{objective: reward + KL constraint}} - \underbrace{\lambda \left( \sum_y \pi(y|x) - 1 \right)}_{\text{constraint: sum to 1}}$$

$$\frac{\partial \mathcal{L}}{\partial \pi(y|x)} = r(x, y) - \beta \left( \log \frac{\pi(y|x)}{\pi_{ref}(y|x)} + 1 \right) - \lambda = 0$$

$$\pi(y|x) = \pi_{ref}(y|x) \exp\left( \frac{r(x, y)}{\beta} \right) \cdot \underbrace{\exp\left( - \frac{\beta + \lambda}{\beta} \right)}_{\text{normalization constant}}$$

$$Z(x) = \sum_y \pi_{ref}(y|x) \exp\left( \frac{r(x, y)}{\beta} \right)$$

$$\pi^*(y|x) = \frac{1}{Z(x)} \pi_{ref}(y|x) \exp\left( \frac{r(x, y)}{\beta} \right)$$

##### 4. Log-Space Transformation

we take the logarithm of the optimal policy $\pi^*$. This allows us to express the reward $r(x,y)$ and reference model $\pi_{ref}$ in terms of $\pi^*$ and the constant $Z(x)$. By rearranging the terms, we isolate the part that matches our factored objective function.

$$\log \pi^*(y|x) = \log \pi_{ref}(y|x) + \frac{1}{\beta} r(x, y) - \log Z(x)$$

$$\log \pi_{ref}(y|x) + \frac{1}{\beta} r(x, y) = \log \pi^*(y|x) + \log Z(x)$$

##### 5. Substitution

we substitute the rearranged equation from Step 5 back into our objective function.

$$\begin{aligned}
J(\pi) &= -\beta \sum_y \pi(y|x) \left( \log \pi(y|x) - \left[ \log \pi^*(y|x) + \log Z(x) \right] \right) \\
&= -\beta \sum_y \pi(y|x) \left( \log \frac{\pi(y|x)}{\pi^*(y|x)} - \log Z(x) \right)
\end{aligned}$$

##### 6. Simplification to KL Divergence:
we separate the terms to form the KL Divergence between our current policy $\pi$ and the optimal policy $\pi^*$. The second term simplifies because $\log Z(x)$ is constant with respect to $y$.

$$J(\pi) = -\beta \underbrace{\sum_y \pi(y|x) \log \frac{\pi(y|x)}{\pi^*(y|x)}}_{D_{KL}(\pi || \pi^*)} + \beta \sum_y \pi(y|x) \log Z(x)$$

$$J(\pi) = -\beta D_{KL}(\pi(\cdot|x) || \pi^*(\cdot|x)) + \beta \log Z(x)$$

##### 7. The Optimization Equivalence:
Since $\beta \log Z(x)$ is a constant (it depends only on the reward function and reference model, not the policy $\pi$ we are training), maximizing the original objective $J(\pi)$ is mathematically equivalent to minimizing the KL divergence between our policy and the optimal policy.

$$\max_{\pi} J(\pi) \iff \min_{\pi} D_{KL}(\pi || \pi^*)$$

#### Direct Preference Optimization (DPO)
DPO re-parameterizes the reward function $r(x,y)$ using the optimal policy equation. Instead of training a separate reward model to predict which response is better, DPO directly optimizes the policy using a binary cross-entropy loss on preference pairs. It effectively treats the language model itself as the reward model.

$$\log \pi^*(y|x) = \log \pi_{ref}(y|x) + \frac{1}{\beta} r(x, y) - \log Z(x)$$

$$\frac{1}{\beta} r(x, y) = \log \frac{\pi^*(y|x)}{\pi_{ref}(y|x)} + \log Z(x)$$

$$r(x, y) = \beta \log \frac{\pi^*(y|x)}{\pi_{ref}(y|x)} + \beta \log Z(x)$$

$$P(y_w \succ y_l | x) = \sigma(r(x, y_w) - r(x, y_l))$$

$$\begin{aligned}
r(x, y_w) - r(x, y_l) &= \left( \beta \log \frac{\pi_\theta(y_w|x)}{\pi_{ref}(y_w|x)} + \beta \log Z(x) \right) - \left( \beta \log \frac{\pi_\theta(y_l|x)}{\pi_{ref}(y_l|x)} + \beta \log Z(x) \right) \\
&= \beta \log \frac{\pi_\theta(y_w|x)}{\pi_{ref}(y_w|x)} - \beta \log \frac{\pi_\theta(y_l|x)}{\pi_{ref}(y_l|x)}
\end{aligned}$$

$$P_{\theta}(y_w \succ y_l | x) = \sigma \left( \beta \log \frac{\pi_\theta(y_w|x)}{\pi_{ref}(y_w|x)} - \beta \log \frac{\pi_\theta(y_l|x)}{\pi_{ref}(y_l|x)} \right)$$

$$\mathcal{L}_{\text{DPO}} = - \mathbb{E}_{(x, y_w, y_l) \sim \mathcal{D}} \left[ \log \sigma \left( \beta \log \frac{\pi_\theta(y_w|x)}{\pi_{\text{ref}}(y_w|x)} - \beta \log \frac{\pi_\theta(y_l|x)}{\pi_{\text{ref}}(y_l|x)} \right) \right]$$

- **Pros:** `Removes the extensive resource need` for a separate Reward Model and the complex "Actor-Critic" loop of PPO. It is essentially supervised fine-tuning on preference pairs. It is also a supervised objective, which `avoids the high variance and instability often found in RL training`.

- **Cons:** DPO learns strictly from the static preference dataset. Unlike PPO, it does not generate new samples during training to explore the solution space, which can lead to `distribution shift`. It can be `highly sensitive to the distribution and quality of the preference data`.

#### Identity Policy Optimization (IPO)
IPO was introduced to address a theoretical flaw in DPO: the DPO loss can sometimes be minimized by driving the probability ratios (between policy and reference) to infinity, effectively ignoring the KL-divergence constraint. IPO fixes this by placing a quadratic regularization term directly on the "log-likelihood gap" between the winning and losing responses.

$$\mathcal{L}_{\text{IPO}} = \mathbb{E}_{(x, y_w, y_l) \sim \mathcal{D}} \left[ \left( \log \frac{\pi_\theta(y_w|x)}{\pi_{\text{ref}}(y_w|x)} - \log \frac{\pi_\theta(y_l|x)}{\pi_{\text{ref}}(y_l|x)} - \frac{\tau}{2} \right)^2 \right]$$

- **Pros:** IPO provides a `theoretically stricter bound` on the policy, preventing the model from drifting too far from the reference model (overfitting) even if the reward signal is strong. It also often yields `more stable convergence behavior` than DPO on noisy datasets.

- **Cons:** The strict regularization can sometimes result in `slower adaptation` to the preference signal compared to the more aggressive DPO.

#### Kahneman-Tversky Optimization (KTO)
Standard alignment methods (DPO, PPO) require paired data (Winner vs. Loser). KTO is inspired by *"Prospect Theory"* from behavioral economics. It eliminates the need for pairs entirely, optimizing based on whether a single sample is *Good* (thumbs up) or *Bad* (thumbs down) relative to the reference model.

$$\mathcal{L}_{\text{KTO}}(\pi_\theta) = \mathbb{E}_{(x, y, l) \sim \mathcal{D}} \left[ w(l) \cdot \left( 1 - \sigma \left( \text{target}(l) \cdot (r_\theta(x, y) - z_{\text{ref}}) \right) \right) \right]$$

$$\text{target}(l) = \begin{cases} 
+1 & \text{if } l = 1 \text{ (Good)} \\
-1 & \text{if } l = 0 \text{ (Bad)}
\end{cases}$$

$$\mathcal{L}_{\text{KTO}} = \underbrace{\sum_{y \in \text{Good}} w_{\text{good}} \cdot \left( 1 - \sigma(r_\theta(x,y) - z_{\text{ref}}) \right)}_{\text{Increase Good Cases}} + \underbrace{\sum_{y \in \text{Bad}} w_{\text{bad}} \cdot \left( 1 - \sigma(z_{\text{ref}} - r_\theta(x,y)) \right)}_{\text{Decrease Bad Cases}}$$

$$w_{\text{good}} \approx \frac{1}{N_{\text{good}}}, w_{\text{bad}} \approx \frac{1}{N_{\text{bad}}}$$

- **Pros:** Unlocks the use of vast amounts of `unpaired data` (e.g., customer support logs, star ratings) where explicit A/B comparisons are not available. Surprisingly, KTO often matches or exceeds DPO performance even without using paired preference data.
- **Cons:** It introduces `weighting hyperparameters` ($w_{good}$, $w_{bad}$) that need to be tuned to balance the learning signal from positive and negative examples.

### Chapter IV: Make RL Great Again
As models scale, the memory cost of PPO's Critic model becomes prohibitive. Furthermore, for reasoning tasks, relative correctness within a group of generated outputs is often a stronger signal than a singular reward score.

#### Group Relative Policy Optimization (GRPO)
GRPO eliminates the need for a Value Function (Critic) entirely. Instead of using a learned Critic to estimate the baseline for the advantage function, GRPO samples a group of outputs $\{y_1, y_2, \dots, y_G\}$ for the same prompt $x$ and uses the group average reward as the baseline.Essentially, it asks: "How good is this specific response compared to the other variants I just generated?"

$$\mathcal{L}_{\text{GRPO}} = \mathcal{L}_{\text{surrogate}} + \beta D_{\text{KL}}(\pi_\theta || \pi_{\text{ref}})$$

$$\mathcal{L}_{\text{surrogate}} = - \frac{1}{G} \sum_{i=1}^{G} \left[ \min \left( \rho_i A_i, \text{clip}(\rho_i, 1-\epsilon, 1+\epsilon) A_i \right) \right]$$

$$  A_i = \frac{r_i - \text{mean}(\{r_1 \dots r_G\})}{\text{std}(\{r_1 \dots r_G\})}$$

- **Pros:**
  - **Memory Efficiency:** By removing the Critic model, it significantly reduces VRAM usage (often saving ~50% of the memory required for PPO), allowing for training larger models or using larger batch sizes.
  - **Reasoning Power:** It has proven exceptionally effective for "Aha! moment" domains (Math, Code, Logic) where verifying a solution is easier than predicting its value. The group comparison stabilizes the gradient in these sparse-reward environments.
  - **Simplicity:** Fewer moving parts than PPO makes it easier to implement and tune.

- **Cons:**
  - **Generation Cost:** The training loop requires generating multiple outputs ($G$) for every single prompt, which increases the computational cost of the data collection phase.
  - **Dependency on Reward Function:** Since it relies heavily on relative ranking within a group, it requires a robust reward signal (like a unit test or a verifier) to be effective. It may be less stable for purely subjective tasks where "better than average" is ambiguous.
