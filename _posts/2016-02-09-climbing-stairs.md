---
layout: post
title: "Climbing Stairs"
date: 2016-02-09T14:24:29
categories: [Aha moments]
tags: [elfsong.cn]
---

#### You are climbing a stair case. It takes *n* steps to reach to the top.
#### Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

#### [Subscribe](https://leetcode.com/subscribe/) to see which companies asked this question<!--more-->

Sloving method：

```
class Solution(object):
    def climbStairs(self, n):
        pre = 0
        cur = 1 
        #f(n) = f(n-1) + f(n-2)
        for i in range(0,n):
            sum = pre + cur
            pre = cur
            cur = sum 
        return sum
```
