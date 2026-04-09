---
layout: post
title: "Sentence Similarity II"
date: 2019-09-25T06:11:50
categories: [Aha moments, Leetcode]
tags: [elfsong.cn]
---

Given two sentences `words1, words2` (each represented as an array of strings), and a list of similar word pairs `pairs`, determine if two sentences are similar.

For example, `words1 = ["great", "acting", "skills"]` and `words2 = ["fine", "drama", "talent"]` are similar, if the similar word pairs are `pairs = [["great", "good"], ["fine", "good"], ["acting","drama"], ["skills","talent"]]`.

Note that the similarity relation **is** transitive. For example, if “great” and “good” are similar, and “fine” and “good” are similar, then “great” and “fine” **are similar**.

Similarity is also symmetric. For example, “great” and “fine” being similar is the same as “fine” and “great” being similar.

Also, a word is always similar with itself. For example, the sentences `words1 = ["great"], words2 = ["great"], pairs = []` are similar, even though there are no specified similar word pairs.

Finally, sentences can only be similar if they have the same number of words. So a sentence like `words1 = ["great"]` can never be similar to `words2 = ["doubleplus","good"]`.

**Note:**

- The length of `words1` and `words2` will not exceed `1000`.- The length of `pairs` will not exceed `2000`.- The length of each `pairs[i]` will be `2`.- The length of each `words[i]` and `pairs[i][j]` will be in the range `[1, 20]`.

```
class Solution:
    def areSentencesSimilarTwo(self, words1: List[str], words2: List[str], pairs: List[List[str]]) -> bool:
        parent = {}
        
        if len(words1) != len(words2):
            return False
        
        def find(w):
            if w not in parent:
                return w
            if parent[w] != w:
                w = find(parent[w])
            return w
        
        
        def union(w1, w2):
            parent[w1] = w2
        
        
        for pair in pairs:
            union(find(pair[0]), find(pair[1]))
        
        
        for word_pair in zip(words1, words2):
            if word_pair[0] == word_pair[1]:
                continue
            else:
                leader1 = find(word_pair[0])
                leader2 = find(word_pair[1])
                if leader1 == leader2:
                    continue
                else:
                    return False
        return True
```
