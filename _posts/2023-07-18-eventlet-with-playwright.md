---
layout: post
title: "Eventlet with Playwright"
date: 2023-07-18T00:03:09
categories: [Uncategorized]
tags: [elfsong.cn]
---

I was developing an LLM application recently. the front-end javascript client interacts with the back-end Python server via socket.io:

```
# Back-end
eventlet                  0.33.3                   pypi_0    pypi
python-engineio           4.5.1                    pypi_0    pypi
python-socketio           5.8.0                    pypi_0    pypi
playwright                1.36.0                   pypi_0    pypi
unstructured              0.8.1                    pypi_0    pypi

# Front-end
socket.io                 4.6.0    

# System
Linux platform 5.10.0-19-cloud-amd64 #1 SMP 
Debian 5.10.149-2 (2022-10-21) x86_64 GNU/Linux
```

**The initial issue I found is that the socket.io emit function call cannot be received by the front-end client.**

I guess it was caused by the system sync operations, so I added “eventlet.monkey_patch()” and turned the system modules ‘green’. Then I found the emit issue was gone.

> 

The term “green” is related to a Python environment that facilitates the operation of green threads. The standard python library does not support the execution model that allows green threads to mutually yield control of the CPU in the same way as eventlet does. To address this, the developers behind eventlet had to modify certain segments of the Python standard library—a process they aptly term as “patching”. 

Consequently, if you are considering using eventlet within your application, you will need to explicitly render the modules you wish to import as “green”.

Nevertheless, upon adding the ‘monkey_patch’, I encountered another bug: the ‘sync_playwright’ context manager was hanging and failing to exit properly. I proceeded to trace the stack, where I discovered that ‘monkey_patch’ was altering the system threading libraries globally. However, I simply needed to apply ‘green’ threading to the socketio library, so I changed “eventlet.monkey_patch()” to “socketio = eventlet.import_patched(‘socketio’)”. 

The revised script appears as follows:

```
# Original 
import eventlet
eventlet.monkey_patch() # Modify the global library

# Modified and worked well
import eventlet
socketio = eventlet.import_patched("socketio") # Modify the specific library
```

PS: for MacOS, try adding this at the beginning of your code:

```
import sys
if sys.platform == "darwin":
    import selectors
    selectors.DefaultSelector = selectors.PollSelector
```
