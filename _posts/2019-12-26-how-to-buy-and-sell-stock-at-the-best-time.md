---
layout: post
title: "How to buy and sell stock at the best time"
date: 2019-12-26T06:40:01
categories: [Aha moments, Leetcode]
tags: [elfsong.cn]
---

- **Best Time to Buy and Sell Stock I**- **Best Time to Buy and Sell Stock II**- **Best Time to Buy and Sell Stock III**- **Best Time to Buy and Sell Stock IV**- **Best Time to Buy and Sell Stock with cooldown**- **Best Time to Buy and Sell Stock with transaction fee**

**Best Time to Buy and Sell Stock I**
Say you have an array for which the *i*<sup>th</sup> element is the price of a given stock on day *i*.

If you were only permitted to **complete at most one transaction** (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.

Note that you cannot sell a stock before you buy one.

```
class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        buy, sell = -0x7777777, 0

        for price in prices:
            buy = max(buy, -price)
            sell = max(sell, buy + price)

        return sell
```

<hr class="wp-block-separator"/>

**Best Time to Buy and Sell Stock II**
Say you have an array for which the *i*<sup>th</sup> element is the price of a given stock on day *i*.

Design an algorithm to find the maximum profit. **You may complete as many transactions as you like** (i.e., buy one and sell one share of the stock multiple times).

Note that you may not engage in multiple transactions at the same time (i.e., you must sell the stock before you buy again).

```
class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        profit, buy = 0, 0x7777777

        for price in prices:
            buy = min(buy, price)

            tmp = price - buy
            
            it tmp > 0:
                profit += tmp
                buy = price

        return profit
```

<hr class="wp-block-separator"/>

**Best Time to Buy and Sell Stock III**
Say you have an array for which the *i*<sup>th</sup> element is the price of a given stock on day *i*.

Design an algorithm to find the maximum profit.** You may complete at most *two* transactions.**

Note that you may not engage in multiple transactions at the same time (i.e., you must sell the stock before you buy again).

```
class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        buy_1, buy_2, sell_1, sell_2 = -0x7777777, -0x7777777, 0, 0

        for price in prices:
            buy_1 = max(buy_1, -price)
            sell_1 = max(sell_1, buy_1 + price)

            buy_2 = max(buy_2, sell_1 - price)
            sell_2 = max(sell_2, buy_2 + price)

        return sell_2
```

<hr class="wp-block-separator"/>

**Best Time to Buy and Sell Stock IV**
Say you have an array for which the *i-*th element is the price of a given stock on day *i*.

Design an algorithm to find the maximum profit. **You may complete at most k transactions.
**
Note that you may not engage in multiple transactions at the same time (ie, you must sell the stock before you buy again).

```
class Solution:
    def maxProfit(self, k: int, prices: List[int]) -> int:
        if k > len(prices) >> 1:
            return sum(prices[i+1] - prices[i] for i in range(len(prices) - 1) if prices[i+1] > prices[i])
        
        cash, asset = [-0x7777777] * (k + 1), [0] * (k + 1)

        for price in prices:
            for i in range(1, k+1):
                cash[i] = max(cash[i], sell[i-1] - price)
                asset[i] = max(asset[i], cash[i] + price)

        return asset[k]
```

<hr class="wp-block-separator"/>

**Best Time to Buy and Sell Stock with Cooldown**

Say you have an array for which the *i*<sup>th</sup> element is the price of a given stock on day *i*.

Design an algorithm to find the maximum profit. You may complete as many transactions as you like (ie, buy one and sell one share of the stock multiple times) with the following restrictions:

- You may not engage in multiple transactions at the same time (ie, you must sell the stock before you buy again).- After you sell your stock, you cannot buy stock on the next day. (ie, cooldown 1 day)

```
class Solution:
    def maxProfit(self, prices: List[int]) -> int: 
        if not prices:
            return 0
        
        sell, buy, prev_sell, prev_buy = 0, -prices[0], 0, 0
        
        for price in prices:
            prev_buy = buy
            buy = max(prev_buy, prev_sell - price)
            prev_sell = sell
            sell = max(prev_sell, prev_buy + price)
            
        return sell
```

<hr class="wp-block-separator"/>

**Best Time to Buy and Sell Stock with Transaction Fee**
You are given an array of integers `prices`, for which the `i`-th element is the price of a given stock on day `i`; and a non-negative integer `fee` representing a transaction fee.

You may complete as many transactions as you like, but you need to pay the transaction fee for each transaction. You may not buy more than 1 share of a stock at a time (ie. you must sell the stock share before you buy again.)

Return the maximum profit you can make.

```
class Solution:
    def maxProfit(self, prices: List[int], fee: int) -> int:
        sell, buy = 0, -prices[0]
        
        for p in prices[1:]:
            sell = max(sell, buy + p - fee)
            buy = max(buy, sell - p)
            
        return sell
```
