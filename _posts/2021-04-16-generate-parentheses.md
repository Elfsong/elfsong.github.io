---
layout: post
title: "Generate Parentheses"
date: 2021-04-16T09:57:29
categories: [Leetcode]
tags: [elfsong.cn]
---

Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

```
class Solution:
    def generateParenthesis(self, n: int) -> List[str]:
        ret = []

        # @functools.lru_cache(None)
        def dfs(curr, l, r):
            if l == n and r == n:
                ret.append(curr)
            
            if r > l: return 
            if l < n: dfs(curr + "(", l + 1, r)
            if r < n: dfs(curr + ")", l, r + 1)

        dfs('', 0, 0)

        return ret
```
