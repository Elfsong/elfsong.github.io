---
layout: post
title: Multi-Head Attention
date: 2026-01-14 00:00:00
description: Multi-Head Attention Implementation Notes
tags: math code
categories: academia
featured: false
toc:
  beginning: true
---

## Multi-Head Attention

- Part I: Linear Projections

$$Q_i = X W_i^Q, \quad K_i = X W_i^K, \quad V_i = X W_i^V$$

- Part II: Scaled Dot-Product Attention

$$\text{Attention}(Q, K, V) = \text{softmax}\left(\frac{QK^T}{\sqrt{d_k}}\right)V$$

- Part III: Concat & Linear

$$\text{MultiHead}(Q, K, V) = \text{Concat}(\text{head}_1, \dots, \text{head}_h)W^O$$

## Python Implementation

```python
import torch
import torch.nn as nn
import math

class MultiHeadAttention(nn.Module):
    def __init__(self, d_model, num_heads):
        super(MultiHeadAttention, self).__init__()
        assert d_model % num_heads == 0, "d_model must be divisible by num_heads"
        
        self.d_model = d_model
        self.num_heads = num_heads
        self.d_k = d_model // num_heads
        
        # 定义 W_q, W_k, W_v 的线性层
        # 这里使用一个小技巧：把所有头的线性层合并为一个大的线性层，计算后再切分
        self.w_q = nn.Linear(d_model, d_model)
        self.w_k = nn.Linear(d_model, d_model)
        self.w_v = nn.Linear(d_model, d_model)
        
        # 最后的输出线性层 W_o
        self.w_o = nn.Linear(d_model, d_model)
        
    def forward(self, query, key, value, mask=None):
        """
        Args:
            query, key, value: 形状均为 (batch_size, seq_len, d_model)
            mask: 形状为 (batch_size, 1, 1, seq_len) 或类似，用于遮蔽 (例如 padding mask 或 look-ahead mask)
        """
        batch_size = query.size(0)
        
        # 1. 线性投影 (Linear Projections)
        # 形状变化: (batch, seq_len, d_model)
        Q = self.w_q(query)
        K = self.w_k(key)
        V = self.w_v(value)
        
        # 2. 切分多头 (Split Heads)
        # 我们需要将形状从 (batch, seq_len, d_model) 变为 (batch, num_heads, seq_len, d_k)
        # 步骤: view -> (batch, seq_len, heads, d_k) -> transpose -> (batch, heads, seq_len, d_k)
        Q = Q.view(batch_size, -1, self.num_heads, self.d_k).transpose(1, 2)
        K = K.view(batch_size, -1, self.num_heads, self.d_k).transpose(1, 2)
        V = V.view(batch_size, -1, self.num_heads, self.d_k).transpose(1, 2)
        
        # 3. 缩放点积注意力 (Scaled Dot-Product Attention)
        
        # 计算注意力分数: Q * K^T
        # K 的形状需要转置最后两个维度以便矩阵乘法: (..., seq_len, d_k) -> (..., d_k, seq_len)
        # scores 形状: (batch, heads, seq_len_q, seq_len_k)
        scores = torch.matmul(Q, K.transpose(-2, -1)) / math.sqrt(self.d_k)
        
        # 应用 Mask (如果有)
        if mask is not None:
            # 将 mask 为 0 (或 True) 的位置填充为极小的负数 (例如 -1e9)
            # 这样 softmax 后这些位置的概率接近 0
            scores = scores.masked_fill(mask == 0, -1e9)
        
        # 计算 Softmax
        attn_weights = torch.softmax(scores, dim=-1)
        
        # 加权求和: weights * V
        # output 形状: (batch, heads, seq_len, d_k)
        output = torch.matmul(attn_weights, V)
        
        # 4. 拼接多头并输出 (Concat & Output)
        # 形状恢复: (batch, heads, seq_len, d_k) -> transpose -> (batch, seq_len, heads, d_k)
        # -> contiguous().view -> (batch, seq_len, d_model)
        output = output.transpose(1, 2).contiguous().view(batch_size, -1, self.d_model)
        
        return self.w_o(output)

# --- 测试代码 ---
if __name__ == "__main__":
    # 假设参数
    batch_size = 2
    seq_len = 5
    d_model = 512
    num_heads = 8
    
    # 创建模型
    mha = MultiHeadAttention(d_model, num_heads)
    
    # 模拟输入 (batch, seq_len, d_model)
    x = torch.randn(batch_size, seq_len, d_model)
    
    # 前向传播 (Self-Attention 中 Q=K=V=x)
    output = mha(x, x, x)
    
    print(f"输入形状: {x.shape}")
    print(f"输出形状: {output.shape}")
    # 预期输出形状应与输入一致: (2, 5, 512)
```