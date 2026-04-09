---
layout: post
title: "Power of Three"
date: 2016-01-20T19:00:38
categories: [Aha moments]
tags: [elfsong.cn]
---

Given an integer, write a function to determine if it is a power of three.

```
class Solution(object):
    def isPowerOfThree(self, n):
        #while (n and (n % 3 == 0)):
            #n = n / 3
        #return n == 1
        
        
        #return (n > 0 and 1162261467 % n == 0)
        
        return (n > 0 and int(math.log10(n) / math.log10(3)) - math.log10(n) / math.log10(3) == 0)

```
