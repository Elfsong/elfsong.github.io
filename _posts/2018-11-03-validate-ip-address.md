---
layout: post
title: "Validate IP address"
date: 2018-11-03T06:15:03
categories: [Atypical programmer, Can be void, MicroSoft Time]
tags: [elfsong.cn]
---

昨天面试了微软北京的组，Coding问了一道判断IP是否合法的问题，然鹅当时脑子打铁，写的完全惨不忍睹，今天早上起床吓得我赶紧重新写了一遍。

<!-- HTML generated using hilite.me -->

```
class Solution(object):
    def isIPv4(self, s):
            try: 
                return str(int(s)) == s and 0 <= int(s) <= 255
            except: 
                return False
            
    def isIPv6(self, s):
        if len(s) > 4: 
            return False
        try: 
            return int(s, 16) >= 0 and s[0] != '-'
        except: 
            return False

    def validIPAddress(self, IP):
        """
        :type IP: str
        :rtype: str
        """
        if IP.count(".") == 3 and all(self.isIPv4(i) for i in IP.split(".")): 
            return "IPv4"
        if IP.count(":") == 7 and all(self.isIPv6(i) for i in IP.split(":")): 
            return "IPv6"
        return "Neither"
        

```
