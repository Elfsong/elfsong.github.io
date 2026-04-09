---
layout: post
title: "How to SUDO in Windows"
date: 2018-12-19T10:11:00
categories: [Atypical programmer, MicroSoft Time]
tags: [elfsong.cn]
---

You may be a senior user of Linux, and sudo is your lifestyle. However, how to use “sudo” in Windows except using right-click is still a problem for you probably.

Since I am working for Microsoft now, Windows operation system is the unique choice for me. Through a long and hard exploration, I finally figured out how to use “sudo” like in Linux in Windows prompt.

Here is the command for your reference:

```
runas /noprofile /user:Administrator "your command"
```

Then, You might be required to input your password like in Linux (U cannot see what you input too, so just typing…)
