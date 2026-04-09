---
layout: post
title: "python生成器(generator)"
date: 2017-02-16T21:34:28
categories: [Aha moments]
tags: [elfsong.cn]
---

今天心血来潮想刷Leetcode，发现了一道没有AC的Easy题。无脑Gank掉之后突然想起来生成器来做的话，效率可能会高一点，所以趁机也温习了一下生成器。

```
def fizzBuzz(n):
    for i in range(1, n+1):
        if i % 15 == 0:
            yield "FizzBuzz"
        elif i % 5 == 0:
            yield "Buzz"
        elif i % 3 == 0:
            yield "Fizz"
        else:
            yield str(i)
tt = fizzBuzz(16)
try:
    print(tt.next())
except Exception,e:
    pass
```
