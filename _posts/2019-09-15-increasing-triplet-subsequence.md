---
layout: post
title: "Increasing Triplet Subsequence"
date: 2019-09-15T04:10:35
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

Since this problem is literally similar another one ([longest-increasing-subsequence](https://leetcode.com/problems/longest-increasing-subsequence/)), I have tried the traditional dynamic programming at very first. However, this question is not as easy as it looks be, I got a Time Limit Exceeded. 

After that, I noticed that we actually can iterate the entire array by one pass with maintaining two pointers.

```
class Solution:
    def increasingTriplet(self, nums: List[int]) -> bool:
#         # TLE
#         if not nums:
#             return False
        
#         dp = [1] * len(nums)
        
#         for i in range(1, len(nums)):
#             for j in range(i):
#                 if nums[i] > nums[j]:
#                     dp[i] = max(dp[i], dp[j] + 1)
#                 if dp[i] == 3:
#                     return True
        
#         return False
    
        first = second = float('inf')
        
        for n in nums:
            if n <= first:
                first = n
                
            elif n <= second:
                second = n
            else:
                return True
            
        return False
```
