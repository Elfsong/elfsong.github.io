---
layout: post
title: "Python Daemon"
date: 2019-09-28T10:22:35
categories: [Aha moments]
tags: [elfsong.cn]
---

```
# coding=utf8
import os
import sys
import atexit

def daemonize(pid_file=None):
    """
    Create daemon process
    :param pid_file: File that saves process id
    :return:
    """
    # Fork a subprocess from parent process
    pid = os.fork()

    # The id of subprocess equals 0, and of parent process must larger than 0
    if pid:
        # Exit from parent process(sys.exit() executes flush while os._exit() doesn't)
        sys.exit(0)

    # The subprocess defaults the working directory of its parent process. 
    os.chdir('/')

    # The subprocess defaults umask(File permission mask), reset it to 0(Fully control) in order to avoiding R/W operations.
    os.umask(0)

    # Let the subprocess be the leader of the conversation and the process.
    os.setsid()

    # Second Fork
    _pid = os.fork()
    if _pid:
        # Exit subprocess
        sys.exit(0)

    # Grandson process is daemon right now. Redirecting stdin/stdout/stderr descriptions to avoid errors in the printing process.

    # Flush stdout/stderr buffer
    sys.stdout.flush()
    sys.stderr.flush()

    # Atomically close and duclipate file description, and redirect into /dev/null(Drop off all input and output)
    with open('/dev/null') as read_null, open('/dev/null', 'w') as write_null:
        os.dup2(read_null.fileno(), sys.stdin.fileno())
        os.dup2(write_null.fileno(), sys.stdout.fileno())
        os.dup2(write_null.fileno(), sys.stderr.fileno())

    # Write PID
    if pid_file:
        with open(pid_file, 'w+') as f:
            f.write(str(os.getpid()))
        # Register Exit function for abnormal exit
        atexit.register(os.remove, pid_file)
```

- Fork sub-process, and exit parent-process.- Change Working Directory (chdir), File Permission Mask(umask), Process Group and Conversation Group (setsid).- Fork grandson-process, and exit sub-process.- Flush buffer and atomically close and duclipate file description, and redirect into /dev/null(Drop off all input and output)- (Option) Write PID.
