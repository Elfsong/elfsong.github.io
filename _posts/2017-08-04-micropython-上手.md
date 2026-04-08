---
layout: post
title: "MicroPython 上手"
date: 2017-08-04T12:59:00
categories: [Aha moments]
tags: [elfsong.cn]
---

这个板子其实已经买了很久，并且也被我蹂躏了很多次了。但是为什么说是上手呢？

因为我差不多已经忘完了……

我一直在尝试用Xshell去连接PyBoard的串口，但是不知道为什么Xshell识别不出系统的串口信息，所以就只能下载了一个上世纪神器——PuTTy。

看到熟悉的PuTTy界面，然后选择设备串口（可以在设备管理器中查看），最后记得修改串口传输速率，就可以愉快和PyBoard的玩耍了。

打开MicroPython的官方Document，发现现在手头上啥也没有，能玩的只有板载的LED了。于是写了一个简单的跑马灯，布灵布灵的。

```

for i in range(1000):
    led = LED(i%4 + 1)
    led.toggle()
    time.sleep(1)

```
