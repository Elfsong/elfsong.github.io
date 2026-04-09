---
layout: post
title: "Expected Value about Normal Distribution"
date: 2020-02-29T15:44:18
categories: [Aha moments, Atypical programmer]
tags: [elfsong.cn]
---

I could have completed this post in the last month, however I was too exhausted to write this article yesterday (the last day of Feb).

Recently, I am addicted in Probability & Statistics theorem and calculus. I found there is a lot of interesting formula derivation about Normal Distribution (aka Gaussian Distribution), so I’d like to proof it by myself. Here are several methods I tried:

The first formula is the expected value of lognormal distribution. We know, for a continuous function:

![](/assets/img/blog/external/latex_63a456069c3c.png)

And the Probability Density Function (PDF) of lognormal distribution function is:

![](/assets/img/blog/external/latex_a805dcd1423d.png)

Hence, we have:

![](/assets/img/blog/external/latex_df456e0368cd.png)

![](/assets/img/blog/external/latex_611c5e003923.png)

![](/assets/img/blog/external/latex_162e7f2a2685.gif)

![](/assets/img/blog/external/latex_b49d6d65302f.gif)

![](/assets/img/blog/external/latex_c1dfe4bed289.gif)

![](/assets/img/blog/external/latex_0543f2f583ed.gif)

Because of,

![](/assets/img/blog/external/latex_8f02cea6bb08.gif)

![](/assets/img/blog/external/latex_d8e624872c47.gif)

<!--more-->

For now, we are going to proof the above formula, that why the integral of normal distribution is 1.

We define:

![](/assets/img/blog/external/latex_64bf7bc15419.gif)

![](/assets/img/blog/external/latex_05872169148c.gif)

And we convert the Cartesian coordinates to polar coordinates:

![](/assets/img/blog/external/latex_c228e65170fc.gif)

![](/assets/img/blog/external/latex_0c7bc375e761.gif)

![](/assets/img/blog/2020/03/截屏2020-03-01下午11.42.41.png)
