---
layout: post
title: "891. Sum of Subsequence Widths"
date: 2018-08-21T17:46:35
categories: [Aha moments]
tags: [elfsong.cn]
---

Given an array of integers A, consider all non-empty subsequences of A.

For any sequence S, let the width of S be the difference between the maximum and minimum element of S.

Return the sum of the widths of all subsequences of A.

As the answer may be very large, return the answer modulo 10^9 + 7.

```
**Example 1:**
Input: [2,1,3]
Output: 6
Explanation:
Subsequences are [1], [2], [3], [2,1], [2,3], [1,3], [2,1,3].
The corresponding widths are 0, 0, 0, 1, 1, 2, 2.
The sum of these widths is 6.
```

It is a pretty interesting question. Initially, I try to use combinations from itertools package. It works however time out…

So, I am aware of it is a math question.

We can find there are i numbers smaller than A[i], hence we have 2 ^ i subsequences that A[i] is the max number.

Meanwhile, there are len(A) – i – 1 numbers bigger than A[i], and we have 2^(len(A) – i – 1)subsequences in which A[i] is the min number.

According to above, result equal res += A[i] * ((2 ^ i) – 2 ^ (n – i – 1)). At least, we only need to mod 10^9 + 7, and then we get the accepted answer.

```
def leetcode(A):
    result = []
    for i, a in enumerate(sorted(A)):
        result += [((1 << i) - (1 << (len(A) - i - 1))) * a]
    return sum(result) % (10 ** 9 + 7)
```
