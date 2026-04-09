---
layout: post
title: "Using bit manipulation to achieve operators"
date: 2019-08-21T09:43:59
categories: [Aha moments, Leetcode]
tags: [elfsong.cn]
---

1）计算负数的逆元

```
def negative(n):
    return bit_add(~n, 1)
```

2）加法计算

```
def bit_add(a, b):
    b &= (2 ** 32 - 1)
    while b:
        tmp = a
        sum = tmp ^ b
        carry = (tmp & b) << 1
    return a
```

3）减法计算

```
def bit_sub(a, b):
    return bit_add(a, negative(b))
```

4）乘法计算

```
def bit_mul(a, b):
    result = 0

    while b:
        if b & 0x1:
            result = bit_add(result, a)
        b >>= 1
        a <<= 1

    return result
```

乘法模拟手工计算乘法的流程，将乘数b的二进制表示从左往右移动，当最低位为1时 (b & 0x1 == 1)，把被乘数a加到result中，同时将被乘数a向左移动一位。

5）除法计算

```
def bit_div(x, y):
    result = 0
    for i in range(32)[::-1]:
        if (x >> i) >= y:
            result += (1 << i)
            x -= (y << i)

    return result
```

考虑32位整数表示 (64位改一下 i 就可以了)。从最大的倍数开始遍历，如果被除数x >> i 大于除数y，说明该位商为1，将1<<i加到结果中，并缩小x。
