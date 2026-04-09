---
layout: post
title: "Word Break"
date: 2019-10-04T11:21:01
categories: [Aha moments, Leetcode]
tags: [elfsong.cn]
---

Given a **non-empty** string *s* and a dictionary *wordDict* containing a list of **non-empty** words, determine if *s* can be segmented into a space-separated sequence of one or more dictionary words.

**Note:**

- The same word in the dictionary may be reused multiple times in the segmentation.- You may assume the dictionary does not contain duplicate words.

**Example 1:**

```
**Input:** s = "leetcode", wordDict = ["leet", "code"]
**Output:** true
**Explanation:** Return true because `"leetcode"` can be segmented as `"leet code"`.

```

**Example 2:**

```
**Input:** s = "applepenapple", wordDict = ["apple", "pen"]
**Output:** true
**Explanation:** Return true because `"`applepenapple`"` can be segmented as `"`apple pen apple`"`.
Note that you are allowed to reuse a dictionary word.

```

**Example 3:**

```
**Input:** s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
**Output:** false
```

```
# TLE solution
class Solution:
    def helper(self, s):
        if not s: return True
        return any(self.helper(s[len(word):]) for word in self.wordDict if s.startswith(word))
            
    def wordBreak(self, s: str, wordDict: List[str]) -> bool:
        self.wordDict = wordDict
        return self.helper(s)
```

```
# Basic DP
class Solution:
    def wordBreak(self, s: str, wordDict: List[str]) -> bool:
        dp = [False] * len(s)    
        
        for i in range(len(s)):
            for word in wordDict:
                if s[:i+1].endswith(word) and (dp[i-len(word)] or i-len(word) == -1):
                    dp[i] = True
                    
        return dp[-1]
```

```
# Advanced DP
class Solution:
    def wordBreak(self, s: str, wordDict: List[str]) -> bool:
        dp = [True]
        for i in range(1, len(s)+1):
            dp += any(dp[j] and s[j:i] in wordDict for j in range(i)),
        return dp[-1]
```
