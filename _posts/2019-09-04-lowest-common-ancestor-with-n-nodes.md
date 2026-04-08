---
layout: post
title: "Lowest Common Ancestor with N nodes"
date: 2019-09-04T13:04:11
categories: [Aha moments, Leetcode]
tags: [elfsong.cn]
---

Today, I have taken an interview from Wechat.

To be honest, this question is easy, but I do not have sufficient time to complete coding. Maybe I took too much time in same trivial points with the **“VERY PROFESSIONAL” **interviewer.

The actual question is find the lowest common ancestor of three given nodes, but I thought we can expend this question to N nodes. For testing this question rapidly, I reuse the previous code of constructing a binary tree by the in-order and post-order traversals.

<!--more-->

```
# Definition for a binary tree node.
class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None

class Solution:
    def buildTree(self, inorder, postorder):
        if not inorder or not postorder:
            return None

        while postorder:
            if postorder[-1] not in inorder:
                postorder.pop()
            else:
                break

        if len(postorder) == 1:
            return TreeNode(postorder[0])

        else:
            node = TreeNode(postorder[-1])
            in_index = inorder.index(postorder[-1])
            node.left = self.buildTree(inorder[:in_index], postorder[:-1])
            node.right = self.buildTree(inorder[in_index + 1:], postorder[:-1])
            return node

    def find(self, root, nodes):
        if not root:
            return None
        else:
            if root.val in nodes:
                return root

            left = self.find(root.left, nodes)
            right = self.find(root.right, nodes)

            if left and right:
                return root

            return right if not left else left

if __name__ == "__main__":
    obj = Solution()
    root = obj.buildTree([6, 5, 7, 2, 4, 3, 0, 1, 8], [6, 7, 4, 2, 5, 0, 8, 1, 3])
    nodes = [0, 1, 8, 7]
    result = obj.find(root, nodes)
    print(result.val)
```
