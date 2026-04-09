---
layout: post
title: "基于Ricequant的一个量化分析公式实现"
date: 2017-01-23T01:11:34
categories: [Aha moments]
tags: [elfsong.cn]
---

在三亚待了半个月，天天都在家窝着，还没有去海边转转。

现在基本过的是黑白颠倒的生活，打算过几天把自己的生物钟调回来，然后去海边走走。

老爸这几天也没闲着，让我帮忙实现一个选股公式的需求。利用日线和分钟线的共振来选择适合的股票，下面是具体的实现代码：

```
import time
def average(order, prieod, M):
    now_date = time.strftime('%Y-%m-%d',time.localtime(time.time()))
    if prieod == '1d':
        begin_date = time.strftime('%Y-%m-%d',time.localtime(time.time()-5*7*24*3600))
        try:
            time_list = get_price(order, start_date = begin_date, end_date = now_date, frequency = prieod, adjust_type = 'pre', skip_suspended = False, country = 'cn')
            #print(time_list)
            return average_merge(time_list, M)
        except:
            #print("无法获取到数据")
            pass
    elif prieod == '60m' or  prieod == '30m':
        begin_date = time.strftime('%Y-%m-%d',time.localtime(time.time()-7*24*3600))
        try:
            time_list = get_price(order, start_date = begin_date, end_date = now_date, frequency = prieod, adjust_type = 'pre', skip_suspended = False, country = 'cn')
            #print(time_list)
            return average_merge(time_list, M)
        except:
            #print("无法获取到数据")
            pass
def average_merge(time_list, M):
    sum = 0
    item = len(time_list.index)
    for delay in range(1, M+1):
        sum += time_list['close'][item-delay]
    average = sum / M
    return average
def Fliter(fac):
    share_list = concept( fac )
    target_list = []
    for share in share_list:
        try:
            if average(share, '1d', 5) >= average(share, '1d', 10) and average(share, '1d', 10) >= average(share, '1d', 20):
                print("已通过一轮筛选:", share)
                if average(share, '60m', 5) >= average(share, '60m', 10) and average(share, '60m', 10) >= average(share, '60m', 20):
                    print("已通过二轮筛选:", share)
                    if average(share, '30m', 5) >= average(share, '30m', 10) and average(share, '30m', 10) >= average(share, '30m', 20):
                        print("已通过三轮筛选:", share)
                        target_list.append(share)
        except:
            #print("无法比较")
            pass
    print("\n",fac,"命中个股：")
    for item in target_list:
        print(item)
```
