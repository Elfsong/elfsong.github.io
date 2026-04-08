---
layout: post
title: "Printing a pyramid matrix"
date: 2019-09-09T14:29:03
categories: [Leetcode, Uncategorized]
tags: [elfsong.cn]
---

How to print a pyramid matrix like that:

```
**n = 2**
[1, 1, 1]
[1, 2, 1]
[1, 1, 1]

**n = 3**
[1, 1, 1, 1]
[1, 2, 2, 1]
[1, 2, 2, 1]
[1, 1, 1, 1]

**n = 4**
[1, 1, 1, 1, 1]
[1, 2, 2, 2, 1]
[1, 1, 3, 2, 1]
[1, 2, 2, 2, 1]
[1, 1, 1, 1, 1]
```

```
def func(N):
    N += 1
    matrix = [[1 for _ in range(N)] for _ in range(N)]
    cnt = 0

    while cnt < N:
        # UP
        for i in range(cnt, N - cnt - 1):
            matrix[cnt][i] = cnt + 1

        # RIGHT
        for i in range(cnt, N - cnt - 1):
            matrix[i][N - cnt - 1] = cnt + 1

        # DOWN
        for i in range(N - cnt - 1, cnt, -1):
            matrix[N - cnt - 1][i] = cnt + 1

        # LEFT
        for i in range(N - cnt, cnt, -1):
            matrix[N - cnt - 1][cnt] = cnt + 1

        cnt += 1

    return matrix

if __name__ == "__main__":
    matrix = func(N=4)

    for line in matrix:
        print(line)

```
