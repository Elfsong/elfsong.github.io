---
layout: post
title: "Centos 7.2下安装MariaDB的步骤"
date: 2016-06-08T23:08:33
categories: [Aha moments]
tags: [elfsong.cn]
---

```
MariaDB是MySQL源代码的一个分支，在意识到Oracle会对MySQL许可做什么后分离了出来。
除了作为一个Mysql的“向下替代品”，MariaDB包括的一些新特性使它优于MySQL。
```

由于Oracle强行要收费，Centos 7 将mysql 替换为了 mariadb，如果安装mysql的话，会出现各种神奇的错误：

```
ERROR 2002 (HY000): Can't connect to local MySQL server through socket '/var/lib/mysql/mysql.sock' (2)
```

比如说上面这个~。~

所以我们还是愉快的安装MariaDB吧，下面是安装步骤：<!--more-->**Step 1.** 添加 yum 数据源

```
****$ vim /etc/yum.repos.d/MariaDB.repo 
# MariaDB 10.0 CentOS repository list - created 2015-08-12 10:59 UTC
# http://mariadb.org/mariadb/repositories/
[mariadb]
name = MariaDB
baseurl = http://yum.mariadb.org/10.0/centos6-amd64
gpgkey=https://yum.mariadb.org/RPM-GPG-KEY-MariaDB
gpgcheck=1
$ yum makecache
$ yum -y update
```

**Step 2.** 更新好yum源（时间可能比较漫长）就可以安装MariaDB啦

```
yum -y install mariadb*
```

**Step 3.** 又经过了一段时间的漫长等待，你的MariaDB应该已经complete了

```
systemctl start mariadb.service
systemctl enable mariadb.service
```

** Step 4.** 然后你就会发现mysql可以用来，还是熟悉的命令，还是熟悉的味道。。。

```
$ mysql
Welcome to the MariaDB monitor.  Commands end with ; or \g.
Your MariaDB connection id is 4
Server version: 5.5.44-MariaDB MariaDB Server
Copyright (c) 2000, 2015, Oracle, MariaDB Corporation Ab and others.
Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.
MariaDB [(none)] >
```

<hr />

如果报了关于my.cnf的错，记得把之前的 /etc/my.cnf 和 /etc/my.cnf.d 给删了。
