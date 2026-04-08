---
layout: post
title: "How to swap two variables without extra space"
date: 2019-03-27T13:02:59
categories: [Aha moments]
tags: [elfsong.cn]
---

Let’s say, we have two variables, A and B, and our task is swapping these two variables without extra space.

First, we can this:

> 

A = A + B

and, 

> 

B = A – B = A + B – B = A         (import A from Step 1)

finally,

> 

A = A – B = A + B – A = B        (import A, B from Step 1 and 2 respectively)

That’s it, Dude!
