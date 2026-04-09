---
layout: post
title: "Most Stones Removed with Same Row or Column"
date: 2019-09-28T07:24:00
categories: [Aha moments, Leetcode]
tags: [elfsong.cn]
---

On a 2D plane, we place stones at some integer coordinate points.  Each coordinate point may have at most one stone.

Now, a *move* consists of removing a stone that shares a column or row with another stone on the grid.

What is the largest possible number of moves we can make?

**Example 1:**

```
**Input: **stones = [[0,0],[0,1],[1,0],[1,2],[2,1],[2,2]]
**Output: **5

```

**Example 2:**

```
**Input: **stones = [[0,0],[0,2],[1,1],[2,0],[2,2]]
**Output: **3

```

**Example 3:**

```
**Input: **stones = [[0,0]]
```

At very first I read this problem, the MOVE operation is described as confusing as heck. I read some explanations on the discussboard, and then finally got the actual meaning.

![](/assets/img/blog/2019/09/IMG_0036.jpg)

We can treat each coordinate as two parts (x and y), and can maintain an Union-Find in order to calculate how many groups in the entire field.

```
 class Solution:
    def removeStones(self, stones: List[List[int]]) -> int:
        UF = {}
        
        def find(x):
            if x != UF[x]:
                UF[x] = find(UF[x])
            return UF[x]
        
        def union(x, y):
            UF.setdefault(x, x)
            UF.setdefault(y, y)
            UF[find(x)] = find(y)

        for i, j in stones:
            print(i, j, ~j)
            union(i, ~j)
            
        return len(stones) - len({find(x) for x in UF})
```
