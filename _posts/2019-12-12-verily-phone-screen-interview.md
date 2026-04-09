---
layout: post
title: "Verily Phone Screen Interview"
date: 2019-12-12T10:53:59
categories: [Aha moments, Atypical programmer, Can be void]
tags: [elfsong.cn]
---

That is a sad story…

Just several days ago, I received an email from Verily, an Alphabet company which delicates in life science. Their HR passed my application and going to move me to the phone interview. However, I messed it up…

I have to say that interview is not a difficult one. The question is like a medium level question at Leetcode:

> 

Given a 1-dimensional axis, a man can move left or right in each time unit. How many possibilities that the man stands on x point after t time units?

I stupidly tried DP at first and struggled in how to implement the state transform formula, that wastes a lot of time.

Today, I reviewed this question and found a fairly easy solution. We do not even need Dynamic Programming. 

```
l + r = t   (1)
r - l = x   (2)
```

Once we solve this equation, we can directly calculate the number of combinations. For example, the total possibilities of that man stand on point 5 after 9 time units is C72 = 21.
