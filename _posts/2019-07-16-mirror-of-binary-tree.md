---
layout: post
title: "Mirror of Binary Tree"
date: 2019-07-16T02:22:44
categories: [Aha moments]
tags: [elfsong.cn]
---

The question is that we need to invert a binary tree by a given string.

<!--more-->

The most traditional way is that simulating each step by step:

```
import queue

class TreeNode(object):
    def __init__(self, val):
        self.val = val
        self.left = None
        self.right = None

def str2tree(index):
    if index <= length:
        val = node_list[index - 1]
        node = TreeNode(val)
        node.left = str2tree(index * 2)
        node.right = str2tree(index * 2 + 1)
        return node
    else:
        return None

def tree2str(root):
    result = list()
    q = queue.Queue()
    q.put(root)

    while not q.empty():
        cur = q.get()
        if cur:
            result += [cur.val]
            q.put(cur.left)
            q.put(cur.right)
        else:
            result += ["#"]

    # while result[-1] == "#":
    #     result.pop()

    return result

def invertTree(root):
    if not root:
        return None

    root.left, root.right = invertTree(root.right), invertTree(root.left)

    return root

def shortcut(string):
    index = 1
    result = list()
    while string:
        result += [string[:index]]
        string = string[index:]
        index *= 2

    return "".join([item[::-1] for item in result])

if __name__ == "__main__":
    node_list = "427#369"
    length = len(node_list)

    root = str2tree(1)
    root = invertTree(root)
    result = tree2str(root)

    print(result)
```

However, it’s really stupid for contest if you just simulate it. We actually are able to invert segments of the entire string in O(n) time complexity.

```
def shortcut(string):
    index = 1
    result = list()
    while string:
        result += [string[:index]]
        string = string[index:]
        index *= 2

    return "".join([item[::-1] for item in result])
```
