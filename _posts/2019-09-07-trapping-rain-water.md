---
layout: post
title: "Trapping Rain Water"
date: 2019-09-07T04:18:47
categories: [Aha moments, Leetcode]
tags: [elfsong.cn]
---

Given *n* non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it is able to trap after raining.

![](/assets/img/blog/external/rainwatertrap.png)

The above elevation map is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped. **Thanks Marcos** for contributing this image!

<!--more-->

**Example:**

```
**Input:** [0,1,0,2,1,0,1,3,2,1,2,1]
**Output:** 6
```

```
class Solution:
    def trap(self, height: List[int]) -> int:
        left = right = water = 0
        
        i, j = 0, len(height)-1
        
        while i <= j:
            left, right = max(left, height[i]), max(right, height[j])
            
            while i <= j and height[i] <= left <= right:
                water += left - height[i]
                i += 1
                
            while i <= j and height[j] <= right <= left:
                water += right - height[j]
                j -= 1
                
        return water
```
