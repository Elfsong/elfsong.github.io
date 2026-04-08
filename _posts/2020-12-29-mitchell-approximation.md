---
layout: post
title: "Mitchell Approximation"
date: 2020-12-29T03:31:47
categories: [Aha moments, Atypical programmer]
tags: [elfsong.cn]
---

A method of computer multiplication and division is proposed which uses binary logarithms. The logarithm of a binary number may be determined approximately from the number itself by simple shifting and counting. A simple add or subtract and shift operation is all that is required to multiply or divide.

```
#include<stdio.h>

int main() {
    float a = 12.3f;
    float b = 4.56f;
    int c = *(int*)&a + *(int*)&b - 0x3f800000;
    printf("Approximate result：%f\n", *(float*)&c);
    printf("Accurate result：%f\n", a * b);
    return 0;
}
```
