---
layout: post
title: "Union-Find Python Implementation"
date: 2019-09-22T10:40:38
categories: [Aha moments, Leetcode]
tags: [elfsong.cn]
---

```
class UF:
    def __init__(self, n):
        self.p = list(range(n))

    def union(self, x, y):
        self.p[self.find(x)] = self.find(y)

    def find(self, x):
        if x != self.p[x]:
            self.p[x] = self.find(self.p[x])
        return self.p[x]
```
