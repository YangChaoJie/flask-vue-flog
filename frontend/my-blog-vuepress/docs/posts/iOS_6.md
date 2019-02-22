---
title: iOS如何获取崩溃日志
date: 2016-4-05 04:10:03
tags: [iOS, Swift]
---

# iOS如何获取崩溃日志

ios 设备应用会出现闪退现象，一般出现这种问题是程序出现bug导致。所以我们需要知道崩溃信息。一般系统会生成一个崩溃日志，保存在手机中。

崩溃日志上有很多有用的信息，包括应用是什么情况下闪退的。通常，上面有每个正在执行线程的完整堆栈跟踪信息，所以你能从中了解到闪退发生时各线程都在做什么，并分辨出闪退发生在哪个线程上。

## 从设备中获取崩溃日志

* 设备与电脑上的iTunes Store同步后，会将崩溃日志保存的电脑上，位置如下
  1. Mac OS X:~/Library/Logs/CrashReporter/MobileDevice/
  2. Windows Vista or 7:  C:Users USERNAME AppDataRoamingApple ComputerLogsCrashReporterMobileDeviceDEVICE_NAME

当用户抱怨闪退时，你可以要求他让设备与iTunes同步，并根据操作系统的不同，到上述位置把崩溃日志下载下来，然后通过电子邮件发送给你。

你必需尽量获取用户设备生成的所有崩溃日志。因为崩溃日志越多，就越容易诊断问题所在!

* 在安装Xcode 的前提下，能通过Xcode很容易的从设备上获得崩溃信息。连接设备， 选择Xcode-Windows-devices-view Device Logs查看 应用的崩溃日志  ![屏幕快照 2016-10-14 02.07.09 PM](/Users/yangchaojie/Desktop/屏幕快照 2016-10-14 02.07.09 PM.png)
* 应用提交到App Store后，你也能从 iTunes Connect 获取到用户的崩溃日志. 登录到 iTunes Connect 上, 选择Manage Your Applications, 点击相应的应用, 点击应用图标下面的 View Details 按钮, 然后点击右栏Links部分的  Crash Reports 。

