---
layout: post
title: "Lowest Common Ancestor with N nodes"
date: 2019-09-07T15:54:37
categories: [Aha moments, Leetcode]
tags: [elfsong.cn]
---

Similar with finding lowest common ancestor of two nodes, we can extend this function to N nodes.

The method **buildTree** in the solution is in order to building a tree instantly by given strings.

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
    nodes = [0, 1, 8]
    result = obj.find(root, nodes)
    print(result.val)

```
