---
layout: post
title: "Largest Sum of Averages"
date: 2019-09-17T13:25:23
categories: [Aha moments, Leetcode]
tags: [elfsong.cn]
---

We partition a row of numbers `A` into at most `K` adjacent (non-empty) groups, then our score is the sum of the average of each group. What is the largest score we can achieve?

Note that our partition must use every number in A, and that scores are not necessarily integers.

```
**Example:**
**Input:** 
A = [9,1,2,3,9]
K = 3
**Output:** 20
**Explanation:** 
The best choice is to partition A into [9], [1, 2, 3], [9]. The answer is 9 + (1 + 2 + 3) / 3 + 9 = 20.
We could have also partitioned A into [9, 1], [2], [3, 9], for example.
That partition would lead to a score of 5 + 2 + 6 = 13, which is worse.

```

**Note:**

- `1 <= A.length <= 100`.- `1 <= A[i] <= 10000`.- `1 <= K <= A.length`.- Answers within `10^-6` of the correct answer will be accepted as correct.

Solution 1 (TLE):
这个解法的思路非常简单粗暴（所以超时了）总而言之就是遍历搜索所有符合条件的结果，然后从里面选一个最大的出来。这种方法因为没有经过任何优化，所以总体性能上是很捉急的。

```
class Solution:
    def largestSumOfAverages(self, A, K) -> float:

        def func(remind, groups, cur, ans):
            if not remind and groups == K:
                ans.append(cur)

            elif groups < K:
                for index in range(1, len(remind)+1):
                    func(remind[index:], groups + 1, cur + (sum(remind[:index]) / index), ans)

        ans = []
        func(A, 0, 0.0, ans)

        return max(ans)
```

Solution 2 (DP):
这是一个二维的DP解法。在计算区间和的部分，其实还可以做进一步的优化。

```
class Solution:
    def largestSumOfAverages(self, A, K) -> float:

        dp = [[0 for _ in range(K)] for _ in A]

        for end in range(len(A)):
            for segment in range(K):
                if segment == 0:
                    dp[end][segment] = sum(A[:end + 1]) / len(A[:end + 1])
                else:
                    for start in range(end):
                        dp[end][segment] = max(dp[end][segment], dp[start][segment - 1] + sum(A[start + 1:end + 1]) / (end - start))

        return dp[-1][-1]
```

Solution 3 (Memory recursion):
这个解法首先对区间和的计算进行了一些优化，之后使用Python Functools Library的LRU_Cache实现了记忆化递归。

```
from functools import lru_cache

class Solution:
    def largestSumOfAverages(self, A, K) -> float:

        n = len(A)
        p = [0] * (n + 1)

        for i in range(n):
            p[i + 1] = p[i] + A[i]

        @lru_cache(maxsize=None)
        def dfs(start, k):
            if k == 1:
                return (p[n] - p[start]) / (n - start)

            ans = float('-inf')

            for i in range(start + 1, n + 2 - k):
                ans = max(ans, (p[i] - p[start]) / (i - start) + dfs(i, k - 1))

            return ans

        return dfs(0, K)
```
