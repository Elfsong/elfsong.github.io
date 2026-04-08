---
layout: post
title: "Missing Ranges"
date: 2019-10-01T07:12:38
categories: [Aha moments, Leetcode]
tags: [elfsong.cn]
---

Given a sorted integer array ***nums***, where the range of elements are in the **inclusive range**** [*lower*, *upper*]**, return its missing ranges.

**Example:**

```
**Input:**   ***nums*** = `[0, 1, 3, 50, 75]`, ***lower*** = 0 and ***upper*** = 99,
**Output:** `["2", "4->49", "51->74", "76->99"]`
```

```
class Solution:
    def findMissingRanges(self, nums, lower: int, upper: int):
        nums.insert(0, lower-1) # Left Bound
        nums.append(upper+1)    # Right Bound
       
        res = []

        for i in range(len(nums)-1):
            left, right = nums[i], nums[i + 1]

            if left != right:
                if right - left == 2:
                    res.append(str(left+1))
                elif right - left > 2:
                    res.append(str(left+1) + "->" + str(right-1))

        return res
```
