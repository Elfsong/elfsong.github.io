---
layout: post
title: "Remove Zero Sum Consecutive Nodes from Linked List"
date: 2019-09-10T10:06:01
categories: [Aha moments, Leetcode]
tags: [elfsong.cn]
---

> 

Firstly, I can’t help myself to say: “Lee, you are a fucking genius!”

Given the `head` of a linked list, we repeatedly delete consecutive sequences of nodes that sum to `0` until there are no such sequences.

After doing so, return the head of the final linked list.  You may return any such answer.

(Note that in the examples below, all sequences are serializations of `ListNode` objects.)

**Example 1:**

```
**Input:** head = [1,2,-3,3,1]
**Output:** [3,1]
**Note:** The answer [1,2,1] would also be accepted.

```

**Example 2:**

```
**Input:** head = [1,2,3,-3,4]
**Output:** [1,2,4]

```

**Example 3:**

```
**Input:** head = [1,2,3,-3,-2]
**Output:** [1]
```

```
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def removeZeroSumSublists(self, head: ListNode) -> ListNode:
        cur = dummy = ListNode(0)
        dummy.next = head
        
        prefix = 0
        seen = collections.OrderedDict()
        
        while cur:
            prefix += cur.val
            node = seen.get(prefix, cur)
            while prefix in seen:
                seen.popitem()
            seen[prefix] = node
            node.next = cur = cur.next
            
        return dummy.next
```
