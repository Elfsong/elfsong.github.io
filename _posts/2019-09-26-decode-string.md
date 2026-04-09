---
layout: post
title: "Decode String"
date: 2019-09-26T11:44:37
categories: [Aha moments, Leetcode]
tags: [elfsong.cn]
---

Given an encoded string, return its decoded string.

The encoding rule is: `k[encoded_string]`, where the *encoded_string* inside the square brackets is being repeated exactly *k* times. Note that *k* is guaranteed to be a positive integer.

You may assume that the input string is always valid; No extra white spaces, square brackets are well-formed, etc.

Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, *k*. For example, there won’t be input like `3a` or `2[4]`.

**Examples:**

```
s = "3[a]2[bc]", return "aaabcbc".
s = "3[a2]", return "accaccacc".
s = "2[abc]3[cd]ef", return "abcabccdcdcdef".
```

```
class Solution:
    def decodeString(self, s: str) -> str:
        stack = list()
        times = list()

        for i, v in enumerate(s):
            if v.isdigit():
                # Single Digit, like 1,2,3...
                if not s[i-1].isdigit():
                    times.append(int(v))
                # Multiple digits, like 100, 200...
                else:
                    times[-1] = times[-1] * 10 + int(v)
            
            # push
            elif v != "]":
                stack.append(v)
            
            # reach "]"
            else:
                # Retrive string in cloest level square brackets
                b = ""
                t = stack.pop()
                while t != "[":
                    b = t + b
                    t = stack.pop()

                stack.append(b * times.pop())

        return "".join(stack)
```
