---
layout: post
title: "Total Hamming Distance"
date: 2019-08-21T11:18:16
categories: [Leetcode]
tags: [elfsong.cn]
---

The [Hamming distance](https://en.wikipedia.org/wiki/Hamming_distance) between two integers is the number of positions at which the corresponding bits are different.

Now your job is to find the total Hamming distance between all pairs of the given numbers.

**Example:**

```
**Input:** 4, 14, 2 
**Output:** 6 
**Explanation:** In binary representation, the 4 is 0100, 14 is 1110, and 2 is 0010 (just showing the four bits relevant in this case). So the answer will be: HammingDistance(4, 14) + HammingDistance(4, 2) + HammingDistance(14, 2) = 2 + 2 + 2 = 6. 
```

**Note:**

- Elements of the given array are in the range of `0 `to `10^9`- Length of the array will not exceed `10^4`.

<!--more-->

We notice that the range of elements of the given array has an upper limit 10^9, that is smaller than 2^30. Hence, it is able to iterate each bit from 30 to 0, and multiple the count of zero and one of each bit simultaneously.

```
class Solution:
    def totalHammingDistance(self, nums: List[int]) -> int:
        result = 0
        N = len(nums)
        
        for i in range(30)[::-1]:
            one_cnt = len([n for n in nums if ((n >> i) & 0x1)])
            result += (N - one_cnt) * one_cnt
        
        return result
```
