---
layout: post
title: "Brace Expansion"
date: 2019-09-27T13:01:27
categories: [Aha moments, Leetcode]
tags: [elfsong.cn]
---

A string `S` represents a list of words.

Each letter in the word has 1 or more options.  If there is one option, the letter is represented as is.  If there is more than one option, then curly braces delimit the options.  For example, `"{a,b,c}"` represents options `["a", "b", "c"]`.

For example, `"{a,b,c}d{e,f}"` represents the list `["ade", "adf", "bde", "bdf", "cde", "cdf"]`.

Return all words that can be formed in this manner, in lexicographical order.

**Example 1:**

```
**Input: **"{a,b}c{d,e}f"
**Output: **["acdf","acef","bcdf","bcef"]

```

**Example 2:**

```
**Input: **"abcd"
**Output: **["abcd"]

```

**Note:**

- `1 <= S.length <= 50`- There are no nested curly brackets.- All characters inside a pair of consecutive opening and ending curly brackets are different.

```
class Solution:
    def expand(self, S):

        def func(remain, result, results):
            if not remain:
                results.append(result)

            else:
                # if a single character appear at the first of the remain string
                if remain[0] != "{":
                    func(remain[1:], result + remain[0], results)
                    return
                else:
                    temp = list()
                    i = 0

                    # find elements in the first brace of the remain string
                    while remain[i] != "}":
                        if remain[i].isalpha():
                            temp.append(remain[i])
                        i += 1

                    for t in temp:
                        func(remain[i + 1:], result + t, results)

        results = []

        func(S, "", results)

        return results
```
