---
layout: post
title: "Find K-th Palindrome Number of N Digits"
date: 2019-09-18T15:14:49
categories: [Aha moments, Leetcode]
tags: [elfsong.cn]
---

Given N and K, output K-th Palindrome that has N digits.

**Input: **N = 2, K = 3
**Output: **[3, 3]
**Explanation:**  [1,1] => [2,2] => [3, 3]

**Input:** N = 3, K = 5
**Output:** [1, 4, 1]
**Explanation:** [1, 0, 1] => [1, 1, 1] => [1, 2, 1] => [1, 3, 1] => [1, 4, 1]

**Input:** N = 5, K = 201
**Output:** [3, 0, 0, 0, 3]
**Explanation:**    … => [2, 9, 8, 9, 2] => [2, 9, 9, 9, 2] => [3, 0, 0, 0, 3]

```
def func(n, k, ans):
    if n > 0:
        segment = 10 ** ((n - 1) // 2)
        element, next_k = divmod(k, segment)
        ans.append(element)
        func(n - 2, next_k, ans)

def generate(n, k):
    ans = []
    func(n, k - 1, ans)

    ans[0] += 1

    if n % 2:
        return ans[:-1] + ans[::-1]
    else:
        return ans + ans[::-1]

if __name__ == "__main__":
    result = generate(5, 201)
    print(result)
```
