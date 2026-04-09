---
layout: post
title: "Daily Temperatures"
date: 2019-07-01T13:14:40
categories: [Aha moments]
tags: [elfsong.cn]
---

Given a list of daily temperatures `T`, return a list such that, for each day in the input, tells you how many days you would have to wait until a warmer temperature. If there is no future day for which this is possible, put `0` instead.

For example, given the list of temperatures `T = [73, 74, 75, 71, 69, 72, 76, 73]`, your output should be `[1, 1, 4, 2, 1, 1, 0, 0]`.

**Note:** The length of `temperatures` will be in the range `[1, 30000]`. Each temperature will be an integer in the range `[30, 100]`.

**Solution:**
This quiz is a classical application of the stack data structure. Here we can store indexes of each element which is waiting a bigger element in a stack, and calculate the difference between the current index and stored indexes when the current element is bigger than previous elements. The while loop part is really elegant and tricky, in which judging whether the stack is empty and comparing elements.

```
class Solution:
    def dailyTemperatures(self, T: List[int]) -> List[int]:
        ans = [0] * len(T)

        stk = list()

        for c_index, value in enumerate(T):
            while stk and T[stk[-1]] < value:
                p_index = stk.pop()
                ans[p_index] = c_index - p_index
            stk.append(c_index)

        return ans
```
