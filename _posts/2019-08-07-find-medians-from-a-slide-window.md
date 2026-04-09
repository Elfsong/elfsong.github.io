---
layout: post
title: "Find medians from a slide window"
date: 2019-08-07T07:49:45
categories: [Aha moments]
tags: [elfsong.cn]
---

*实现一个一维的中位数滤波器。*

*形式化地来说，给出一个长度为n的数列a_1,a_2,a_3,…,a_n，# 求一个数列b_1,b_2,…,b_{n-k+1}，使得b_i是子列(a_i,a_{i+1},…,a_{i+k-1})的中位数。*

*可以理解为一个长度为k的滑窗在长度为n的数列上滑动，每滑一次输出滑窗里面的数的中位数。*

```
a = [1,2,3,12,-5,33]
k = 3
b = [2,3,3,12]*b*
```

<!--more-->

```
def find_mid(window, k):
  if k % 2 == 0: 
    return (window[k//2-1] + window[k//2]) / 2
  else:
    return window[k//2]

def insert(window, new):
  for index, value in enumerate(window):
    if value >= new:
      return window[:index] + [new] + window[index:]
  return window + [new]

def solution(a, k):
  window = sorted(a[:k])

  result = [find_mid(window, k)]

  for index, value in enumerate(a[k:]):
    window.remove(a[index])
    window = insert(window, value)
    result += [find_mid(window, k)]

  return result

if __name__ == "__main__":
  a = [1,2,3,12,-5,33,44,0]
  k = 4

  result = solution(a, k)
  print(result)
```
