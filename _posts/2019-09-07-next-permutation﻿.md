---
layout: post
title: "Next Permutation﻿"
date: 2019-09-07T09:09:25
categories: [Aha moments, Leetcode]
tags: [elfsong.cn]
---

Implement **next permutation**, which rearranges numbers into the lexicographically next greater permutation of numbers.

If such arrangement is not possible, it must rearrange it as the lowest possible order (ie, sorted in ascending order).

The replacement must be **[in-place](http://en.wikipedia.org/wiki/In-place_algorithm)** and use only constant extra memory.

Here are some examples. Inputs are in the left-hand column and its corresponding outputs are in the right-hand column.

`1,2,3` → `1,3,2`
`3,2,1` → `1,2,3`
`1,1,5` → `1,5,1`

<!--more-->

```
class Solution:
    def nextPermutation(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        length = len(nums)
        
        # find the first descenting element
        i = length - 2
        while i >= 0 and nums[i] >= nums[i + 1]:
            i -= 1
            
        if i < 0:
            nums.sort()
            return
            
        # find the minimum element that larger than nums[i]
        j = length - 1
        while nums[i] >= nums[j]:
            j -= 1
        
        # swap nums[i] and nums[j]
        nums[i], nums[j] = nums[j], nums[i]
        
        # reverse nums[i+1:]
        l = i + 1
        r = length - 1
        
        while l < r:
            nums[l], nums[r] = nums[r], nums[l]
            l += 1
            r -= 1
```
