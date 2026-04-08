---
layout: post
title: "Debian下Zsh的安装"
date: 2017-01-21T18:05:28
categories: [Aha moments]
tags: [elfsong.cn]
---

这两天要被解压各式各样的压缩包搞得痛不欲生。我感觉我就是那种死活也记不住tar命令的人，于是又心心念想起了Zsh。

在默认Shell的选择上，Debian还是选择了Bash。我觉得主要的原因还是Zsh要是没有Oh-my-Zsh的辅助配置起来还是比较麻烦的。

安装好了Zsh之后，Autojump出了一点小插曲。按照以前的方法安装不上了，最后上官网一查，原来是路径设置错了。

```
[[ -s /usr/share/autojump/autojump.zsh ]] & . /usr/share/autojump/autojump.zsh
```

愿我成为萝卜，为你填掉一个坑。

下面是懒人专用alias：

```
alias -s gz='tar -xzvf'
alias -s tgz='tar -xzvf'
alias -s zip='unzip'
alias -s bz2='tar -xjvf'
```
