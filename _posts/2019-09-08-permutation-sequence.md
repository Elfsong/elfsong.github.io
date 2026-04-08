---
layout: post
title: "Permutation Sequence"
date: 2019-09-08T06:58:50
categories: [Aha moments, Leetcode]
tags: [elfsong.cn]
---

The set `[1,2,3,...,*n*]` contains a total of *n*! unique permutations.

By listing and labeling all of the permutations in order, we get the following sequence for *n* = 3:

- `"123"`- `"132"`- `"213"`- `"231"`- `"312"`- `"321"`

Given *n* and *k*, return the *k*<sup>th</sup> permutation sequence.

**Note:**

- Given *n* will be between 1 and 9 inclusive.- Given *k* will be between 1 and *n*! inclusive.

**Example 1:**

```
**Input:** n = 3, k = 3
**Output:** "213"

```

**Example 2:**

```
**Input:** n = 4, k = 9
**Output:** "2314"
```

```
class Solution:
    def getPermutation(self, n: int, k: int) -> str:
        res, nums = "", list(range(1, n + 1))

        k -= 1

        for n in range(n, 0, -1):
            index, k = divmod(k, math.factorial(n-1))
            res += str(nums.pop(index))

        return res
```
