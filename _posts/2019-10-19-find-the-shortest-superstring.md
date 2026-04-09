---
layout: post
title: "Find the Shortest Superstring"
date: 2019-10-19T06:39:16
categories: [Aha moments, Leetcode]
tags: [elfsong.cn]
---

Given an array A of strings, find any smallest string that contains each string in `A` as a substring.

We may assume that no string in `A` is substring of another string in `A`.

```
**Example 1:**
**Input: **["alex","loves","leetcode"]
**Output: **"alexlovesleetcode"
**Explanation: **All permutations of "alex","loves","leetcode" would also be accepted.

```

```
**Example 2:**
**Input: **["catg","ctaagt","gcta","ttca","atgcatc"]
**Output: **"gctaagttcatgcatc"
```

**Note:**
`1 <= A.length <= 12`
`1 <= A[i].length <= 20`

**Solution 1 (Naive and TLE):**
*At the very first, I did this solution that naively using DFS to search each possible solution, and finally we can pick up the shortest one. It works on small test set but got TLE on large sets.*

```
from functools import lru_cache

class Solution:
    @lru_cache(None)
    def combinateStrings(self, str1, str2):
        for i in range(len(str2), -1, -1):
            if str1.endswith(str2[:i]):
                return str1 + str2[i:]

    def shortestSuperstring(self, A):

        def func(current_list, result, results):
            if not current_list:
                results.append(result)

            for s in current_list:
                current_list.remove(s)
                func(current_list, self.combinateStrings(result, s), results)
                func(current_list, self.combinateStrings(s, result), results)
                current_list.append(s)

        results = []

        func(A, "", results)

        return min(results, key= lambda x: len(x))
```
