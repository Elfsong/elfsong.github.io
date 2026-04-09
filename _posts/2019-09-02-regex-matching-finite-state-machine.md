---
layout: post
title: "Regex Matching – Finite State Machine"
date: 2019-09-02T07:41:19
categories: [Aha moments]
tags: [elfsong.cn]
---

Given an input string (`s`) and a pattern (`p`), implement wildcard pattern matching with support for `'?'` and `'*'`.

```
'?' Matches any single character.
'*' Matches any sequence of characters (including the empty sequence).

```

The matching should cover the **entire** input string (not partial).

**Note:**

- `s` could be empty and contains only lowercase letters `a-z`.- `p` could be empty and contains only lowercase letters `a-z`, and characters like `?` or `*`.

这个时候，有限状态机(FSM)就可以派上用场了。

```
class Solution:
    def isMatch(self, s: str, p: str) -> bool:
        """
        :type s: str
        :type p: str
        :rtype: bool
        """
        transfer = {}
        state = 0

        # Build a Finite State Machine(FSM)
        for char in p:
            # If pattern is *, it can stay in the current state, or move to the next state via transfer links.
            if char == '*':
                transfer[state, char] = state
            # If pattern is ? or characters, we move to the next state.
            else:
                transfer[state, char] = state + 1
                state += 1

        # the last state (Final one) is the accept state
        accept = state

        # the initial state starts from 0
        state = {0}

        for char in s:
            # There are two ways to achieve state transfer.
            # 1) We can use two rolling sets saving previous and current situations
            # 2) We also can use python syntactic sugar (Actually as same as the first method)
            # I personally think the first method is more readable.

            new_state = set()

            for token in [char, '*', '?']:
                for at in state:
                    # For each previous state, we can parallelly move to next states
                    new_state.add(transfer.get((at, token)))

            # Set the current state as the previous one
            state = new_state

            # the second method (elegant but not readable)
            # state = set([transfer.get((at, token)) for at in state for token in [char, '*', '?']])

        return accept in state

if __name__ == "__main__":
    obj = Solution()
    result = obj.isMatch("aa", "aa")
    print(result)
```
