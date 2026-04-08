---
layout: post
title: "Reverse Linked List"
date: 2019-07-13T08:28:08
categories: [Uncategorized]
tags: [elfsong.cn]
---

Reverse a singly linked list.

**Example:**

```
**Input:** 1->2->3->4->5->NULL
**Output:** 5->4->3->2->1->NULL

```

**Follow up:**

A linked list can be reversed either iteratively or recursively. Could you implement both?

As you can seen that recursion implementation is pretty easy to achieve, but iteratively achievement might not. Above are two implementations.

```
# iteratively
class Solution(object):
    def reverseList(self, head):
        """
        :type head: ListNode
        :rtype: ListNode
        """
        if not head:
            return None
        
        pionner = head
        
        while pionner.next:
            old_head = head
            head = pionner.next
            pionner.next = pionner.next.next
            head.next = old_head
        
        return head
```

```
# recursively
```
