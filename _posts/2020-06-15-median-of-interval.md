---
layout: post
title: "Median of interval"
date: 2020-06-15T13:33:09
categories: [Aha moments]
tags: [elfsong.cn]
---

There are two methods to calculate the median of an interval [low, high].

- m = ( l + h ) / 2- m = l + ( h – l ) / 2

l + h may have addition overflow, but h-l will not. Therefore, it is best to use the second method of calculation.
