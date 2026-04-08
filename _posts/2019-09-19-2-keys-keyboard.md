---
layout: post
title: "2 Keys Keyboard"
date: 2019-09-19T07:35:25
categories: [Aha moments, Leetcode]
tags: [elfsong.cn]
---

Initially on a notepad only one character ‘A’ is present. You can perform two operations on this notepad for each step:

- `Copy All`: You can copy all the characters present on the notepad (partial copy is not allowed).- `Paste`: You can paste the characters which are copied **last time**.

Given a number `n`. You have to get **exactly** `n` ‘A’ on the notepad by performing the minimum number of steps permitted. Output the minimum number of steps to get `n` ‘A’.

**Example 1:**

```
**Input:** 3
**Output:** 3
**Explanation:**
Intitally, we have one character 'A'.
In step 1, we use **Copy All** operation.
In step 2, we use **Paste** operation to get 'AA'.
In step 3, we use **Paste** operation to get 'AAA'.

```

**Note:**

- The `n` will be in the range [1, 1000].

```

from functools import lru_cache

class Solution:
    def minSteps(self, n: int) -> int:
        
#         @lru_cache(None)
#         def operation(notepad, current):
#         def operation(notepad, current):
#             if len(current) <= n:
#                 if len(current) == n:
#                     return 0

#                 # no notepad
#                 t1 = (operation(current, current) if not notepad else 0x7777777) + 1

#                 # paste from notepad
#                 t2 = (operation(notepad, current + notepad) if notepad else 0x7777777) + 1

#                 # update notepad
#                 t3 = (operation(current, current) if notepad and notepad != current else 0x7777777) + 1

#                 return min(t1, t2, t3)

#             else:
#                 return 0x7777777

#         result = operation(0, "A")

#         return result

        if n == 1: 
            return 0
        
        for i in range(2,n+1):
            if n % i == 0: 
                return i + self.minSteps(int(n/i))

```
