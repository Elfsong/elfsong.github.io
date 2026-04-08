---
layout: post
title: "Largest Rectangle in Histogram"
date: 2019-10-10T08:03:05
categories: [Aha moments, Leetcode]
tags: [elfsong.cn]
---

Given *n* non-negative integers representing the histogram’s bar height where the width of each bar is 1, find the area of largest rectangle in the histogram.

![](/assets/img/blog/external/histogram.png)

Above is a histogram where width of each bar is 1, given height = `[2,1,5,6,2,3]`.

![](/assets/img/blog/external/histogram_area.png)

The largest rectangle is shown in the shaded area, which has area = `10` unit.

**Example:**

```
**Input:** [2,1,5,6,2,3]
**Output:** 10
```

Actually, I have met this problem on the online assessment of Amazon a few days ago.

IT IS A REALLY TOUGH QUESTION FOR MY DUMB BRAIN!

```
class Solution:
    def largestRectangleArea(self, heights: List[int]) -> int:
        heights.append(0)
        stack = [-1]
        ans = 0
        
        for i in range(len(heights)):
            while heights[i] < heights[stack[-1]]:
                h = heights[stack.pop()]
                w = i - stack[-1] - 1
                ans = max(ans, h * w)
            stack.append(i)

        return ans
```
