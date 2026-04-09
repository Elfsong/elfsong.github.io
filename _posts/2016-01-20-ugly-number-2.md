---
layout: post
title: "Ugly number"
date: 2016-01-20T18:57:02
categories: [Aha moments]
tags: [elfsong.cn]
---

Write a program to check whether a given number is an ugly number.

Ugly numbers are positive numbers whose prime factors only include `2, 3, 5`. For example, `6, 8` are ugly while `14` is not ugly since it includes another prime factor `7`.

Note that `1` is typically treated as an ugly number.

```
class Solution(object):
    def isUgly(self, number):
        if number == 1:
            return True
        if number == 0:
            return False
        
        while(number % 2 == 0):
            number /= 2
        while(number % 3 == 0):
            number /= 3
        while(number % 5 == 0):
            number /= 5
    
        return number == 1

```
