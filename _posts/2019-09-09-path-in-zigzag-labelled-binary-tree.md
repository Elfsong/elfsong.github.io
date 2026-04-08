---
layout: post
title: "Path In Zigzag Labelled Binary Tree"
date: 2019-09-09T07:28:18
categories: [Aha moments, Leetcode]
tags: [elfsong.cn]
---

In an infinite binary tree where every node has two children, the nodes are labelled in row order.

In the odd numbered rows (ie., the first, third, fifth,…), the labelling is left to right, while in the even numbered rows (second, fourth, sixth,…), the labelling is right to left.

![](/assets/img/blog/external/tree.png)

Given the `label` of a node in this tree, return the labels in the path from the root of the tree to the node with that `label`.

**Example 1:**

```
**Input:** label = 14
**Output:** [1,3,4,14]

```

**Example 2:**

```
**Input:** label = 26
**Output:** [1,2,6,10,26]
```

```
from math import log

class Solution:
    def pathInZigZagTree(self, label: int) -> List[int]:
        ans = [label]
        
        def findParent(label):
            level =  math.floor(math.log(label,2))            
            diff = math.ceil((label - 2**level + 1) / 2)       
            parent = 2**(level) - diff
            return parent
            
        while label != 1:
            label = findParent(label)
            ans.append(label)
            
        return ans[::-1]
```
