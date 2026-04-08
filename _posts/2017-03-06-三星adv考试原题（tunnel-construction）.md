---
layout: post
title: "三星ADV考试题(Tunnel Construction)"
date: 2017-03-06T13:26:59
categories: [Aha moments]
tags: [elfsong.cn]
---

好久没有写东西啦。

因为前两天和同学一起玩的很开心，于是就索性放纵了自己一下下，把写东西的任务暂时抛掷脑后了。

前天花花给我发来了一道新鲜出炉的算法题，奈何我已经好久不写这种东西了，所以一路过程十分曲折。打算记录一下，权当好玩。

题目是图片版的，讲道理看的非常不爽。原文链接在这里：[http://www.cnblogs.com/linux0537/p/6163158.html](http://www.cnblogs.com/linux0537/p/6163158.html)

```
s = [1, 4, 1, 3, 11]
c1 = 7
r1 = 2
c2 = 2
r2 = 6
ans = float("inf")
```

```
for i in range(0, len(s)+1):
    offset = 0
    result = 0
    if len(s) - 2*i > 0: offset = r2*(len(s)-2*i-1)
    if len(s) - 2*i < 0: offset = r1*(2*i-len(s)-1)
    for l in range(0, i): result += c1*s[l]
    for r in range(i,len(s)): result += c2*s[r]
    if (result + offset) < ans: ans = result + offset
print ans
```
