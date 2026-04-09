---
layout: post
title: "Delete Nodes And Return Forest"
date: 2019-09-23T07:40:32
categories: [Aha moments, Leetcode]
tags: [elfsong.cn]
---

Given the `root` of a binary tree, each node in the tree has a distinct value.

After deleting all nodes with a value in `to_delete`, we are left with a forest (a disjoint union of trees).

Return the roots of the trees in the remaining forest.  You may return the result in any order.

**Example 1:**

![](/assets/img/blog/external/screen-shot-2019-07-01-at-53836-pm.png)

```
**Input:** root = [1,2,3,4,5,6,7], to_delete = [3,5]
**Output:** [[1,2,null,4],[6],[7]]

```

**Constraints:**

- The number of nodes in the given tree is at most `1000`.- Each node has a distinct value between `1` and `1000`.- `to_delete.length <= 1000`- `to_delete` contains distinct values between `1` and `1000`.

```
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:    
    def delNodes(self, root, to_delete):
        """
        :type root: TreeNode
        :type to_delete: List[int]
        :rtype: List[TreeNode]
        """
        self.forests = []
        self.delete = to_delete
        
        node = self.divideAndConquer(root)
        
        if node:
            self.forests.append(node)
        
        return self.forests
    
    def divideAndConquer(self, node):
        
        if not node:
            return None
        
        left = self.divideAndConquer(node.left)
        right = self.divideAndConquer(node.right)
        
        if node.val not in self.delete:
            node.left = left
            node.right = right
            return node
        else:
            if left:
                self.forests.append(left)
            if right:
                self.forests.append(right)
                
            return None
```
