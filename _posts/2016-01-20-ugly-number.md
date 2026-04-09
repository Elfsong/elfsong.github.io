---
layout: post
title: "Ugly number II"
date: 2016-01-20T18:56:03
categories: [Aha moments]
tags: [elfsong.cn]
---

Write a program to find the `n`-th ugly number.

Ugly numbers are positive numbers whose prime factors only include `2, 3, 5`. For example, `1, 2, 3, 4, 5, 6, 8, 9, 10, 12` is the sequence of the first `10` ugly numbers.

Note that `1` is typically treated as an ugly number.

```
class Solution(object):
    def min_three(self, a, b, c):
        minNum = min(a,b)
        return min(minNum,c)
    def nthUglyNumber(self, n):
        ugly = [1]
        factor2 = 2
        factor3 = 3
        factor5 = 5
        index2 = index3 = index5 = 0
        for i in range(1,n):
            minNum = min(factor2, factor3, factor5)
            ugly.append(minNum)
            if(factor2 == minNum):
                factor2 = 2 * ugly[index2+1]
                index2 += 1
            if(factor3 == minNum):
                factor3 = 3 * ugly[index3+1]
                index3 += 1
            if(factor5 == minNum):
                factor5 = 5 * ugly[index5+1]
                index5 += 1
        return ugly[n-1]
```
