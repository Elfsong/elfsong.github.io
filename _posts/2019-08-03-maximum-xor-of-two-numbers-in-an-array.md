---
layout: post
title: "Maximum XOR of Two Numbers in an Array"
date: 2019-08-03T15:05:54
categories: [Aha moments]
tags: [elfsong.cn]
---

Given a **non-empty** array of numbers, a<sub>0</sub>, a<sub>1</sub>, a<sub>2</sub>, … , a<sub>n-1</sub>, where 0 ≤ a<sub>i</sub> < 2<sup>31</sup>.

Find the maximum result of a<sub>i</sub> XOR a<sub>j</sub>, where 0 ≤ *i*, *j* < *n*.

Could you do this in O(*n*) runtime?

**Example:**

```
**Input:** [3, 10, 5, 25, 2, 8] 
**Output:** 28 
**Explanation:** The maximum result is **5** ^ **25** = 28.
```

![](/assets/img/blog/2019/08/无标题绘图.png)

这道题是在刷Explore的Trie tree topic里面看到的。首先一拿到题目，下意识的反应就是这道题没那么简单。最暴力的方法就是穷举遍历了，这样的话time complexity就会达到O(n^2)。

之后联想Trie tree和Binary之间的关系，可以画出上面这个图。这样问题就被转换为了找到最高的具有1节点的父节点，然后向下尽量找a^b = 1的分支 (我感觉我没有说清楚。。。)

之后看了讨论版里一位大佬的题解，真的是颇为震撼。他用了位运算的方法省去了很多不必要的步骤。 其中比较不好理解的是：

> 

result += any(result ^ 1 ^ p in prefixes for p in prefixes)

为了理解这句话，首先我们得知道：a^b^a=b.

在这里result^1 == a^b, p = a, 所以result^1^p = b。如果在prefixes中有任意两个数a,b可以得到result^1, 而且这两个数a,b构成了previous result，那么新的result就可以是result += 1了，不然只能是result <<= 1(末位为0)。

```
class Solution:
    def findMaximumXOR(self, nums: List[int]) -> int:
        result = 0
        
        for i in range(32)[::-1]:
            result <<= 1
            prefixes = {num >> i for num in nums}
            result += any(result ^ 1 ^ p in prefixes for p in prefixes)
            
        return result
```
