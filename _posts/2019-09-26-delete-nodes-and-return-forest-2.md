---
layout: post
title: "Delete Nodes And Return Forest"
date: 2019-09-26T13:11:36
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
    def delNodes(self, root: TreeNode, to_delete: List[int]) -> List[TreeNode]:
        forest = []
        to_delete = set(to_delete)
        
        def buttom_up(root):
            if root:
                left, right = dfs(root.left), dfs(root.right)
                
                root.left, root.right = left, right
                
                if root.val in to_delete:
                    if left: forest.append(left)
                    if right: forest.append(right)
                else:
                    return root
        
        dfs(root)
        
        return ([] if root.val in to_delete else [root]) + forest
        
        #########################################################
        
        to_delete_set = set(to_delete)
        res = []

        def top_down(root, is_root):
            if not root: 
                return None
            
            root_deleted = root.val in to_delete_set
            
            if is_root and not root_deleted:
                res.append(root)
                
            root.left = helper(root.left, root_deleted)
            root.right = helper(root.right, root_deleted)
            
            return None if root_deleted else root
        
        top_down(root, True)
        
        return res
```
