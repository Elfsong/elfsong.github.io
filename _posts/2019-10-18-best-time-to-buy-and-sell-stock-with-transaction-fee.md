---
layout: post
title: "Best Time to Buy and Sell Stock with Transaction Fee"
date: 2019-10-18T08:34:02
categories: [Aha moments, Leetcode]
tags: [elfsong.cn]
---

Your are given an array of integers `prices`, for which the `i`-th element is the price of a given stock on day `i`; and a non-negative integer `fee` representing a transaction fee.

You may complete as many transactions as you like, but you need to pay the transaction fee for each transaction. You may not buy more than 1 share of a stock at a time (ie. you must sell the stock share before you buy again.)

Return the maximum profit you can make.

```
**Example 1:**

**Input:** prices = [1, 3, 2, 8, 4, 9], fee = 2
**Output:** 8
**Explanation:** The maximum profit can be achieved by:
Buying at prices[0] = 1Selling at prices[3] = 8Buying at prices[4] = 4Selling at prices[5] = 9The total profit is ((8 - 1) - 2) + ((9 - 4) - 2) = 8.
```

**Note:**
`0 < prices.length <= 50000`.
`0 < prices[i] < 50000`.
`0 <= fee < 50000`.

```
class Solution:
    def maxProfit(self, prices: List[int], fee: int) -> int:
        sell = 0
        buy = -0x7777777
        
        for price in prices:
            # Not buy or pay current price and fee
            buy = max(buy, sell - price - fee)
            
            # Not sell or get current price
            sell = max(sell, buy + price)
            
        return sell
```
