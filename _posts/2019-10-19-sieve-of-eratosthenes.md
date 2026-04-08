---
layout: post
title: "Sieve of Eratosthenes"
date: 2019-10-19T07:34:51
categories: [Aha moments, Atypical programmer]
tags: [elfsong.cn]
---

![](/assets/img/blog/external/Sieve_of_Eratosthenes_animation.gif)

```
class Solution:
    def countPrimes(self, n: int) -> int:
        if n < 3:
            return 0
        
        primes = [0, 0] + [1] * (n - 2)
        
        for i in range(2, int(n ** 0.5) + 1):
            if primes[i]:
                primes[i * i: n: i] = [0] * len(primes[i * i: n: i])
        
        return sum(primes)
```
