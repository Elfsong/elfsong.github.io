---
layout: post
title: "3Sum Closest"
date: 2019-09-07T03:21:32
categories: [Aha moments, Leetcode]
tags: [elfsong.cn]
---

Given an array `nums` of *n* integers and an integer `target`, find three integers in `nums` such that the sum is closest to `target`. Return the sum of the three integers. You may assume that each input would have exactly one solution.

<!--more-->

**Example:**

```
Given array nums = [-1, 2, 1, -4], and target = 1.

The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
```

```
class Solution:
    def threeSumClosest(self, nums: List[int], target: int) -> int:
        nums.sort()

        result = []
        remain = 0x7777777

        for i in range(len(nums) - 2):
            if i > 0 and nums[i] == nums[i - 1]:
                continue

            l = i + 1
            r = len(nums) - 1

            while l < r:
                s = nums[i] + nums[l] + nums[r]

                temp_remain = s - target

                if abs(temp_remain) < abs(remain):
                    remain = temp_remain
                    result = s

                if temp_remain > 0:
                    r -= 1

                elif temp_remain < 0:
                    l += 1

                else:
                    return s

        return result
```
