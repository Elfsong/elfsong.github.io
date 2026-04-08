---
layout: post
title: "Power of two"
date: 2016-01-20T18:58:00
categories: [Aha moments]
tags: [elfsong.cn]
---

Given an integer, write a function to determine if it is a power of two.

```
class Solution(object):
    def isPowerOfTwo(self, n):
        while (n and (n % 2 == 0)):
            n = n / 2
            
        return n == 1
        
        #Certainly,you can also use the following method
        #return (n and (n&(n-1))) == 0

```
