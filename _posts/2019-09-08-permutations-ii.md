---
layout: post
title: "Permutations II"
date: 2019-09-08T08:19:09
categories: [Aha moments, Leetcode]
tags: [elfsong.cn]
---

Given a collection of numbers that might contain duplicates, return all possible unique permutations.

**Example:**

```
**Input:** [1,1,2]
**Output:**
[
  [1,1,2],
  [1,2,1],
  [2,1,1]
]
```

```
class Solution:
    def permuteUnique(self, nums: List[int]) -> List[List[int]]:
        self.result = []

        def perm(data, begin, end):
            if begin == end:
                self.result += [[item for item in data]]
            else:
                i = begin
                for j in range(begin, end):
                    data[i], data[j] = data[j], data[i]
                    perm(data, begin + 1, end)
                    data[i], data[j] = data[j], data[i]
                    
        perm(nums, 0, len(nums))

        return self.result
```
