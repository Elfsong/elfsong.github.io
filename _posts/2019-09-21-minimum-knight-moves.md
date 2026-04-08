---
layout: post
title: "Minimum Knight Moves"
date: 2019-09-21T16:29:26
categories: [Aha moments, Leetcode]
tags: [elfsong.cn]
---

In an **infinite** chess board with coordinates from `-infinity` to `+infinity`, you have a **knight** at square `[0, 0]`.

A knight has 8 possible moves it can make, as illustrated below. Each move is two squares in a cardinal direction, then one square in an orthogonal direction.

![](/assets/img/blog/external/knight.png)

Return the minimum number of steps needed to move the knight to the square `[x, y]`.  It is guaranteed the answer exists.

**Example 1:**

```
**Input:** x = 2, y = 1
**Output:** 1
**Explanation: **[0, 0] → [2, 1]

```

**Example 2:**

```
**Input:** x = 5, y = 5
**Output:** 4
**Explanation: **[0, 0] → [2, 1] → [4, 2] → [3, 4] → [5, 5]
```

```
class Solution:
    def minKnightMoves(self, x: int, y: int) -> int:
        x, y = abs(x), abs(y)
        
        q = collections.deque([(0,0,0)])
        seen = set([(0,0)])

        while q:
            s_x, s_y, s = q.popleft()
            if (s_x, s_y) == (x,y):
                return s

            d = []
            for dx, dy in [(-2,-1),(-2,1),(-1,2),(1,2),(2,1),(2,-1),(1,-2),(-1,-2)]:
                n_x = s_x + dx
                n_y = s_y + dy
                if -2 <= n_x <= x and -2 <= n_y <= y:
                    d.append((n_x,n_y))

            d.sort(key=lambda e: abs(x-e[0]) + abs(y-e[1]))

			# only enqueue towards the 2 directions closest to the x,y
            for n_x,n_y in d[:2]:
                if (n_x, n_y) not in seen:
                    q.append((n_x,n_y,s+1))
                    seen.add((n_x,n_y))
```
