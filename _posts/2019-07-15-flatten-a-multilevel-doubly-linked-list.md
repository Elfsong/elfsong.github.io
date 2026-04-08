---
layout: post
title: "Flatten a Multilevel Doubly Linked List"
date: 2019-07-15T17:04:49
categories: [Aha moments]
tags: [elfsong.cn]
---

You are given a doubly linked list which in addition to the next and previous pointers, it could have a child pointer, which may or may not point to a separate doubly linked list. These child lists may have one or more children of their own, and so on, to produce a multilevel data structure, as shown in the example below.

Flatten the list so that all the nodes appear in a single-level, doubly linked list. You are given the head of the first level of the list.

**Example:**

```
**Input:**  1---2---3---4---5---6--NULL          
                |          
                7---8---9---10--NULL              
                    |              
                    11--12--NULL 
**Output:** 1-2-3-7-8-11-12-9-10-4-5-6-NULL 
```

```
"""
# Definition for a Node.
class Node:
    def __init__(self, val, prev, next, child):
        self.val = val
        self.prev = prev
        self.next = next
        self.child = child
"""

class Solution:
    def flatten(self, head: 'Node') -> 'Node':
        if not head:
            return None
        
        stack = list()
        cur = head
        
        while cur:
            if cur.child:
                if cur.next:
                    stack += [cur.next]
                cur.next = cur.child
                cur.next.prev = cur
                cur.child = None
           
            if not cur.next and stack:
                temp = stack.pop()
                cur.next = temp
                temp.prev = cur
                
            cur = cur.next
        
        return head
```
