---
layout: post
title: "Decode ways"
date: 2019-09-20T14:42:08
categories: [Aha moments, Leetcode]
tags: [elfsong.cn]
---

A message containing letters from `A-Z` is being encoded to numbers using the following mapping:

```
'A' -> 1
'B' -> 2
...
'Z' -> 26

```

Given a **non-empty** string containing only digits, determine the total number of ways to decode it.

**Example 1:**

```
**Input:** "12"
**Output:** 2
**Explanation:** It could be decoded as "AB" (1 2) or "L" (12).

```

**Example 2:**

```
**Input:** "226"
**Output:** 3
**Explanation:** It could be decoded as "BZ" (2 26), "VF" (22 6), or "BBF" (2 2 6).
```

```
class Solution:
    def numDecodings(self, s: str) -> int:        
        if s[0] == '0': return 0
        
#         N = len(s)
#         dp = [1 for i in range(N+1)]
        
        for i in range(1, len(s)):
            if s[i] == '0':
                # dp[i] = 0
                b = 0
            if int(s[i-1:i+1]) <= 26:
                # dp[i+1] = dp[i] + dp[i-1]
                c = b+a
            else:
                # dp[i+1] = dp[i]
                c = b
            a=b
            b=c
            
        return dp[-1]
```
