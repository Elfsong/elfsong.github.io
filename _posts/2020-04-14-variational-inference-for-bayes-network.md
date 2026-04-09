---
layout: post
title: "Variational inference for Bayes Network"
date: 2020-04-14T09:57:53
categories: [Uncategorized]
tags: [elfsong.cn]
---

![](/assets/img/blog/2020/04/image.png)

In general neural networks have a sort of loss like that:

![](/assets/img/blog/2020/04/math-20200414.png)

However, The part of the denominator integral is intractable of finding an analytic solution solution in practice. Therefore, we are going to make a distribution approaching the original distribution. KL divergence can be used to indicate the difference between these two distributions.

![](/assets/img/blog/2020/04/image-4.png)
