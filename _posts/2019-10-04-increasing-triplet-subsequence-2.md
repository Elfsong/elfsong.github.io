---
layout: post
title: "Increasing Triplet Subsequence"
date: 2019-10-04T06:14:31
categories: [Aha moments, Leetcode]
tags: [elfsong.cn]
---

Given an unsorted array return whether an increasing subsequence of length 3 exists or not in the array.

Formally the function should:

> 

Return true if there exists *i, j, k*
such that *arr[i]* < *arr[j]* < *arr[k]* given 0 ≤ *i* < *j* < *k* ≤ *n*-1 else return false.

**Note: **Your algorithm should run in O(*n*) time complexity and O(*1*) space complexity.

**Example 1:**

```
**Input: **[1,2,3,4,5]
**Output: **true
```

**Example 2:**

```
**Input: **[5,4,3,2,1]
**Output: **false
```

History is always recurrent. 

At the very first, I thought it is a typical dp question, and then I wrote a classical dp solution, and then I got a TLE…

This AC solution I actually checked it out from discuss board, that is really smart.

```
class Solution:
    def increasingTriplet(self, nums: List[int]) -> bool:
        N = len(nums)
        first = float("inf")
        second = float("inf")

        for i in range(N):
            if nums[i] < first:
                first = nums[i]
                
            elif first < nums[i] < second:
                second = nums[i]
                
            if nums[i] > second:
                return True

        return False
```
