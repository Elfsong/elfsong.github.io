---
layout: post
title: "Unique Binary Search Trees II"
date: 2019-09-20T13:40:07
categories: [Aha moments, Leetcode]
tags: [elfsong.cn]
---

Given an integer *n*, generate all structurally unique **BST’s** (binary search trees) that store values 1 … *n*.

**Example:**

```
**Input:** 3
**Output:**
[
  [1,null,3,2],
  [3,2,null,1],
  [3,1,null,null,2],
  [2,1,3],
  [1,null,2,null,3]
]
**Explanation:**
The above output corresponds to the 5 unique BST's shown below:

   1         3     3      2      1
    \       /     /      / \      \
     3     2     1      1   3      2
    /     /       \                 \
   2     1         2                 3
```

```
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None
from functools import lru_cache

class Solution:
    def generateTrees(self, n):
        if n == 0: return []
        
        @lru_cache(maxsize=None)
        def generate(start, end):
            ans = []
            
            if start > end: return [None]

            for i in range(start, end+1):
                for left_node in generate(start, i-1):
                    for right_node in generate(i+1, end):
                        node = TreeNode(i)
                        node.left = left_node
                        node.right = right_node
                        ans.append(node)

            return ans

        return generate(1, n)
```
