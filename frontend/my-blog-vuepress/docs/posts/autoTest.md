---
title: 自动化测试 Appium 在iOS 中的 使用
date: 2018-4-11 15:10:30
tags: [iOS, 测试]
---

# 自动化测试 Appium 在iOS 中的 使用

## 1. 自动化测试 的 原理

>  1. 白盒测试 ： 白盒测试主要测试APP的内部结构或运作，以代码实现的角度来设计测试案例。白盒测试优点在于要求测试人员去学习软件的实现，可以检测代码中的每条分支和路径，揭示隐藏在代码中的错误，对代码的测试比较彻底。

>  2. 黑盒测试的时候，测试人员不需要接触源代码。是从App层面对其行为以及UI的正确性进行验证，黑盒测试由iOS测试完成。
>  3. 自动化测试的 定义 ： 自动化测试就是写一些测试代码，用代码代替人工去完成模块和业务的测试。


测试金子塔如下 ： <img src="../images/329784-ff379d7a7a202665.png" width = "300" height = "200" alt="图片名称" align=center />

自动化测试的 优点： 

* 1.优点 ： 测试速度快，避免重复性的工作

* 2.避免regression，让<http://开发>更有信心去修改和重构代码
*  具有一致性。
* 有了自动化测试，持续集成（CI）会变得更可靠。
迫使开发人员写出更高质量的代码。（自动化测试不通过，代码不允许合并）

缺点：

* 1.开发和维护成本高。
* 2.不能完全替代人工测试。
* 3.无法完全保证测试的准确性 - 


* 自动化测试 的 框架

 [具体内容查看此链接](http://tmq.qq.com/2016/09/mobile-app-test-automation-framework/)

 <img src="../images//1054552-c48679f96e8c1527.jpg" width = "500" height = "200" alt="图片名称" align=center />
 
## 2. Appium 框架的 使用
* 原理

  1.  Appiums是由Nodejs编写的，集成了现有优秀框架，以Selenium WebDriver的协议统一起来，
遵循RESTful设计风格web 服务器，它接受客户端的连接，接收客户端的命令，在手机设备上执行命令，然后通过HTTP的响应收集命令执行的结果。

<img src="../images/iphone.png" width = "200" height = "400" alt="图片名称" align=center />

简单 解释 为 对于App来说就是一个Server，基于 WebDriver JSON wire protocol 对实际的UI操作库进行了封装，并且暴露出RESTFUL的接口。然后测试代码通过HTTP请求的方式，来进行实际的测试。

Appium iOS比较慢的原因：

(1)python client <====> Http Server

(2)Http Server <====> Appium Server

(3)Appium Server <====> bootstrap 耗时长

(4)bootstrap <====> UIAutomation 耗时长
中间层较多，各种通信传输是非常耗时。

*   WebDriverAgent

<img src="../images/01f1f5fa3e36f4ce4c1b4af186b76bfe.png" width = "600" height = "200" alt="图片名称" align=center />



(1)WebDriverAgent封装的是XCTest，而XCTest框架是苹果在xcode5提出的，在Xcode7中已经支持UI功能测试，facebook于2015年提出了WebDriverAgent，可支持真机和模拟器。

(2)WebDriverAgent Api支持W3C WebDriver Spec设计风格。通过命令行或者xcode启动testRunner以后，会在手机端安装一个WebDriverAgentRunner，类似于appium中的bootstrap，可以接收client端发送的http请求，然后将请求转义为XCTest的命令，在手机端进行操作，并且操作结果再以Json的形式反馈给client端进行汇总。

webDrierAgent
WebDriverAgent相对于Appium有着很大优势：

1. 支持一台 mac 连接多台设备进行测试（走 xcodebuild ，不走 instruments）
2. 任意应用的 UI 测试，是任意
3. 支持跨应用（任意界面都能控制)
4 .控件定位方便，直接通过ip:port/inspector查看，无需启动Appium GUI查看
5.亲测比Appium执行速度快
最重要的是苹果官方将UIAutomation标识为废弃，XCTest是未来的趋势，必然会发挥更大的作用

WebDriverAgent 取代 UIAutomation 或者 XCUITesting 做为 Appium 底部驱动

* 配置

[appium Getting Start](https://github.com/appium/appium/blob/master/docs/en/about-appium/getting-started.md)

[WebDriverAgent 配置]()

* demo 演示