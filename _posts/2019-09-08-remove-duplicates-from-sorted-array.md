---
layout: post
title: "Remove Duplicates from Sorted Array"
date: 2019-09-08T08:25:58
categories: [Aha moments, Leetcode]
tags: [elfsong.cn]
---

Given a sorted array *nums*, remove the duplicates [**in-place**](https://en.wikipedia.org/wiki/In-place_algorithm) such that each element appear only *once* and return the new length.

```

```

```

```

Do not allocate extra space for another array, you must do this by **modifying the input array [in-place](https://en.wikipedia.org/wiki/In-place_algorithm)** with O(1) extra memory.

**Example 1:**

```
Given *nums* = **[1,1,2]**,

Your function should return length = **`2`**, with the first two elements of *`nums`* being **`1`** and **`2`** respectively.

It doesn't matter what you leave beyond the returned length.
```

**Example 2:**

```
Given *nums* = **[0,0,1,1,1,2,2,3,3,4]**,

Your function should return length = **`5`**, with the first five elements of *`nums`* being modified to **`0`**, **`1`**, **`2`**, **`3`**, and **`4`** respectively.

It doesn't matter what values are set beyond the returned length.
```

```
class Solution:
    def removeDuplicates(self, nums: List[int]):
        if not nums:
            return 0

        newTail = 0

        for i in range(1, len(nums)):
            if nums[i] != nums[newTail]:
                newTail += 1
                nums[newTail] = nums[i]

        return newTail + 1
```
