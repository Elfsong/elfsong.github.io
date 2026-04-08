---
layout: post
title: "Leetcode 461. Hamming Distance"
date: 2017-02-15T14:42:19
categories: [Aha moments]
tags: [elfsong.cn]
---

The Hamming distance between two integers is the number of positions at which the corresponding bits are different.

Given two integers x and y, calculate the Hamming distance.

Note:

0 ≤ `x`, `y` < 231.

Example:

```
Input: x = 1, y = 4
Output: 2
Explanation:
1   (0 0 0 1)
4   (0 1 0 0)
       ↑   ↑
The above arrows point to positions where the corresponding bits are different.
```

```
class Solution(object):
def hammingDistance(self, x, y):
    """
    :type x: int
    :type y: int
    :rtype: int
    """
    str_x = bin(x)
    str_y = bin(y)
    count = 0
    if len(str_x) <= len(str_y):
    str_x, str_y = str_y, str_x
    for i in range(1, len(str_y)-1 ):
        if str_x[-i] != str_y[-i]:
            count += 1
    for i in range(len(str_y)-1, len(str_x)-1):
        if str_x[-i] == "1":
            count += 1
    return count
```
