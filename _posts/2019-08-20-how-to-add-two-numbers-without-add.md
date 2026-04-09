---
layout: post
title: "How to add two numbers without add()"
date: 2019-08-20T07:57:19
categories: [Aha moments]
tags: [elfsong.cn]
---

I’m going to simulate the whole adding process by bit manipulation:

```
def add(sum, carry):
    if not carry:
        return sum

    sum = sum ^ carry           # Just add without carry
    carry = (sum & carry) << 1  # Just carry without add

    add(sum, carry)

a,b = 1,1
result = add(a,b)
```

and it works 🙂
