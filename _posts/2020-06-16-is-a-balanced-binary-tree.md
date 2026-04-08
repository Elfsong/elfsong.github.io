---
layout: post
title: "Is a Balanced Binary Tree"
date: 2020-06-16T07:48:42
categories: [Aha moments, Leetcode]
tags: [elfsong.cn]
---

For this problem, a height-balanced binary tree is defined as:

> 

a binary tree in which the left and right subtrees of *every* node differ in height by no more than 1.

This problem is an easy-level at Leetcode. I probably did it more than five times, once and once again. Just like a muscle memory.

However, I found an interesting solution today, which literally changed my mind about Python…

Here is the code:

```
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:        
    def isBalanced(self, root: TreeNode, h = 1) -> bool:
        if not root: return h
        l = self.isBalanced(root.left, h + 1)
        r = self.isBalanced(root.right, h + 1)
        return abs(l - r) <= 1 and max(l, r)
```

I am very confused at the last line, the max(l, r) part.

I thought that max(l, r) should be converted as a bool value even it returns a integer type value, because as the second component of the operation AND, max(l, r) should represent as a bool variable.

Following by my worst idea, I supposed that the function isBalanced would return either 1 (True) or 0 (False).  However, I found a crazy truth after experiments, that Python executor actually return a integer value (the maximum value of l and r) if abs(l – r) <= 1 is matched.

So, it really makes sense. Gain new knowledge of Python 🙂
