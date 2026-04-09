---
layout: post
title: "Get N primes"
date: 2019-10-07T10:00:23
categories: [Aha moments, Atypical programmer, Leetcode]
tags: [elfsong.cn]
---

```
def get_n_prime(count):
    primes = []

    n = 2

    while len(primes) < count:
        for i in range(2, n//2 + 1):
            if n % i == 0:
                break
        else:
            primes.append(n)
        n += 1

    return primes
```
