---
layout: post
title: "Maximum Product of Word Lengths"
date: 2018-07-12T20:16:06
categories: [Aha moments]
tags: [elfsong.cn]
---

Given a string array `words`, find the maximum value of `length(word[i]) * length(word[j])` where the two words do not share common letters. You may assume that each word will contain only lower case letters. If no such two words exist, return 0.

Example 1:

```
Input: `["abcw","baz","foo","bar","xtfn","abcdef"]`
Output: `16 Explanation: `The two words can be `"abcw", "xtfn"`.
```

Example 2:

```
Input: `["a","ab","abc","d","cd","bcd","abcd"]`
Output: `4 Explanation: `The two words can be `"ab", "cd"`.
```

Example 3:

```
Input: `["a","aa","aaa","aaaa"]`
Output: `0 Explanation: `No such pair of words.
```

<!--more-->看到这道题之后，我首先试了一下力大砖飞法，但是很不幸，超时了。

于是我观察了一下代码，发现Set这个操作可以在初始化阶段一次性完成。所以加上初始化字典之后就顺利AC了。

但是在我查看Submission的时候，发现了一段特别厉害的Code。仔细拜读了一下之后发现其中的技巧真的非常精妙。

```
d = {}
for w in words:
    mask = 0
    for c in set(w):
        mask |= (1 << (ord(c) - 97))
    d[mask] = max(d.get(mask, 0), len(w))
return max([d[x] * d[y] for x in d for y in d if not x & y] or [0])
```

这位作者用用Bit-Set位操作的方式避免了使用Python原生Set的比较方式。

真的是一波操作猛如虎，秀的我目瞪口呆。果然还是需要多学习啊。
