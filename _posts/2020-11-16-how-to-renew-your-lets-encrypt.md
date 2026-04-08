---
layout: post
title: "How to renew your Let’s encrypt"
date: 2020-11-16T11:11:31
categories: [Aha moments, Atypical programmer]
tags: [elfsong.cn]
---

Step 1. Suspend your web server (nginx for example)
`sudo service nginx stop`

Step 2. Renew your certificate
`sudo letsencrypt certonly --standalone --email {email address} -d elfsong.cn -d {web address}`

Step 3. Restart your web server
`sudo service nginx start`

Step 4. Check the status
`sudo service nginx status`
