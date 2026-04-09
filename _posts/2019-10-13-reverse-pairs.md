---
layout: post
title: "Reverse Pairs"
date: 2019-10-13T07:56:29
categories: [Aha moments, Leetcode]
tags: [elfsong.cn]
---

Given an array `nums`, we call `(i, j)` an ***important reverse pair*** if `i < j` and `nums[i] > 2*nums[j]`.

You need to return the number of important reverse pairs in the given array.

**Example1:**

```
**Input**: [1,3,2,3,1]
**Output**: 2
```

**Example2:**

```
**Input**: [2,4,3,5,1]
**Output**: 3
```

**Note:**

- The length of the given array will not exceed `50,000`.- All the numbers in the input array are in the range of 32-bit integer.

```
# Solution 1: Using Binary Index Tree, which has O(nlogn) time complexity.

class BIT():
    def __init__(self, n):
        self.n = n + 1
        self.sums = [0] * self.n

    def update(self, i, delta):
        while i < self.n:
            self.sums[i] += delta
            i += i & (-i)

    def query(self, i):
        res = 0
        while i > 0:
            res += self.sums[i]
            i -= i & (-i)
        return res
    
class Solution:
    def reversePairs(self, nums: List[int]) -> int:
        sorted_nums = sorted(list(set(nums + [x * 2 for x in nums])))
        tree = BIT(len(sorted_nums))

        res = 0
        ranks = {}

        for i, n in enumerate(sorted_nums):
            ranks[n] = i + 1

        for n in nums[::-1]:
            res += tree.query(ranks[n] - 1)
            tree.update(ranks[n * 2], 1)

        return res
```

```
# Solution 2: At this time, we are going to use bisect. Got inspiration from Merge Sort (Divide and Conquer).

class Solution:
    def reversePairs(self, nums: List[int]) -> int:
        ranks = list()
        ans = 0

        for n in reverse(nums):
            ans += bisect.bisect_left(ranks, n)
            bisect.insort_left(ranks, n * 2)

        return ans
             
```
