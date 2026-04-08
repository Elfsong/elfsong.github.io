---
layout: post
title: "Longest Consecutive Sequence"
date: 2019-09-29T16:00:43
categories: [Aha moments, Leetcode]
tags: [elfsong.cn]
---

Given an unsorted array of integers, find the length of the longest consecutive elements sequence.

Your algorithm should run in O(*n*) complexity.

**Example:**

```
**Input:** [100, 4, 200, 1, 3, 2]
**Output:** 4
**Explanation:** The longest consecutive elements sequence is `[1, 2, 3, 4]`. Therefore its length is 4.
```

```
class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        nums = set(nums)
        ans = 0
        
        for x in nums:
            # Find the first element in one segment
            if x-1 not in nums:
                y = x + 1
                # reach the last consecutive element in one element  
                while y in nums:
                    y += 1
                ans = max(ans, y - x)
             
        return ans
```

```
class Solution:
    def longestConsecutive(self, nums) -> int:
        UF = {}
        nums = set(nums)

        if not nums:
            return 0

        # for num in nums:
        #     UF[num] = num

        def find(x):
            if x != UF[x]:
                UF[x] = find(UF[x])
            return UF[x]

        def union(x, y):
            UF.setdefault(x, x)
            UF.setdefault(y, y)
            UF[find(x)] = find(y)

        for n in nums:
            if (n - 1) in nums:
                union(n - 1, n)
            if (n + 1) in nums:
                union(n, n + 1)

        ans = 1

        for num in nums:
            if num in UF:
                ans = max(ans, find(num) - num + 1)
        return ans
```
