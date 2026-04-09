---
layout: post
title: "Reverse Linked List"
date: 2016-02-09T14:28:03
categories: [Aha moments]
tags: [elfsong.cn]
---

#### Reverse a singly linked list.
#### **Hint:**
#### A linked list can be reversed either iteratively or recursively. Could you implement both?
#### [Subscribe](https://leetcode.com/subscribe/) to see which companies asked this question.<!--more-->

Solving method:

```
class ListNode(object):
     def __init__(self, x):
         self.val = x
         self.next = None
class Solution(object):
    def reverseList(self, head):
        result = ListNode(None)
        while head:
            next = head.next
            head.next = result.next
            result.next = head
            head = next
        return result.next
```
