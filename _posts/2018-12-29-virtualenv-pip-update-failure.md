---
layout: post
title: "Virtualenv pip update failure"
date: 2018-12-29T04:18:20
categories: [Aha moments, MicroSoft Time]
tags: [elfsong.cn]
---

很久之前就一直被pip的更新困扰了。由于Virtualenv自带的pip版本是10.1的，而现在的pip版本已经进化到了18，所以每次安装的时候都会被提醒要升级pip。

但是不知道为什么，pip在virtualenv里面的升级貌似会有报错。而且由于不升级的话，也不影响使用，所以也就一直没有升级。

今天实在受不了了，于是Google了一下解决的方法，其实只要强制升级一下就可以了（我估计是Python类型检查出的问题）。下面是更新命令：

If you can’t understand Chinese, and just want to update your pip in the virtialenv. Please ignore these blather, typing the following command and hit the Enter:

```
python -m pip install -U --force-reinstall pip
```

嗯，就是这么简单…
