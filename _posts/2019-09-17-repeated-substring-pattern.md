---
layout: post
title: "Repeated Substring Pattern"
date: 2019-09-17T09:51:02
categories: [Aha moments, Leetcode]
tags: [elfsong.cn]
---

Given a non-empty string check if it can be constructed by taking a substring of it and appending multiple copies of the substring together. You may assume the given string consists of lowercase English letters only and its length will not exceed 10000.

**Example 1:**

```
**Input:** "abab"
**Output:** True
**Explanation:** It's the substring "ab" twice.

```

**Example 2:**

```
**Input:** "aba"
**Output:** False
```

**Example 3:**

```
**Input:** "abcabcabcabc"
**Output:** True
**Explanation:** It's the substring "abc" four times. (And the substring "abcabc" twice.)
```

```
class Solution:
    def repeatedSubstringPattern(self, s: str) -> bool:
        if not str:
            return False
            
        ss = (s + s)[1:-1]
        
        return ss.find(s) != -1
```
