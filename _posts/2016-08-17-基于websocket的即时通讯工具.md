---
layout: post
title: "基于Websocket的即时通讯工具"
date: 2016-08-17T15:54:17
categories: [Aha moments]
tags: [elfsong.cn]
---

后来我想了想，我确实不擅长做“系统”。我擅长做工具……

这个假期在阿里没干什么正事，临走撸了一个P2P的即时通讯工具。

<!--more--> 其实代码量很少的，但是为了时髦用了最新的electron框架。这是Atom的兄弟项目，还是使用Chromium的V8引擎驱动的。这个家伙足足有100多M，实在压不下来了。另外，这个东西确实非常适合敏捷开发。

websocket用了node.js的Stock.io,前端SPAs主要是原生的js以及一小部分AngularJS，这样也是为了方便扩展。另外，由于自己审美实在不达标，羞耻的用了Bootstrap…

由于在公司什么东西都会被监控，这个小工具可以保证你的信息在传输工程中的安全。反向通道保证了内网的可用性，数据流也被我用一种十分丧病的方式加密了。

至于服务器嘛，我当然还用的是老家伙，水管小，人多了说不定就炸了。大家如果有想用的，可以上自己的服务器。

[![](/assets/img/blog/2016/08/捕获.png)](http://www.elfsong.cn/%e5%9f%ba%e4%ba%8ewebsocket%e7%9a%84%e5%8d%b3%e6%97%b6%e9%80%9a%e8%ae%af%e5%b7%a5%e5%85%b7/%e6%8d%95%e8%8e%b7-2/)
