---
layout: post
title: "Find All Numbers Disappeared in an Array"
date: 2018-07-03T13:51:05
categories: [Aha moments]
tags: [elfsong.cn]
---

Given an array of integers where 1 ≤ a[i] ≤ *n* (*n* = size of array), some elements appear twice and others appear once.

Find all the elements of [1, *n*] inclusive that do not appear in this array.

Could you do it without extra space and in O(*n*) runtime? You may assume the returned list does not count as extra space.

Example:

```
Input:
[4,3,2,7,8,2,3,1]
Output:
[5,6]
```

刚一看到这道题是Medium难度的时候，我觉得Leetcode高估了这道题。但是后面O(1)空间和O(n)时间发现还是没有那么容易的。

```
seen = list()
result = list()
for item in nums:
if item in seen:
    result += [item]
    seen += [item]
else:
    seen += [item]
return result
```

这种方法按理说是可以过的 (虽然不符合题目对空间复杂度的要求)，但是在Leetcode平台上，我发现这种方法会超时(TLE)

```
res = []
for x in nums:
    if nums[abs(x) - 1] < 0:
        res.append(abs(x))
    else:
        nums[abs(x) - 1] *= -1
return res
```

想了十分钟之后，我发现我貌似想不出什么好方法了，于是看了一下Discuss里大佬的解法。

这个解法真的是Awesome！在保证了O(n)时间的前提下，完美利用之前的空间做了一次Hash。只能说想出这个方法的人是个小天才了！[(这里是Disscuss的帖子地址)](https://leetcode.com/problems/find-all-duplicates-in-an-array/discuss/92390/Python-O(n)-time-O(1)-space)
