### iOS 项目开发规范
我们在做项目之前，都会根据公司的编程习惯来编写。这样才能很快的适应公司的工作习惯。良好的编程习惯，在无形中已经为我们解决了很多问题。正好这几天写了公司的开发文档和编程规范，顺便总结一下。
## 项目目录，要包含必要的文件：
* 工程名称
* README.md 文件
* DevelopDocumention(开发文档)
* Documentation(文件夹)
* CHANGLOG (日志)

 具体可以根据公司要求再添加

## 工程目录说明
* 在写代码之前，我们要确保我们工程的模块化，不能千篇一律，模糊化。这样不至于后期我们这查找修改文件上花费时间。关于工程目录怎么见，我们可以根据个人习惯和公司要求相结合，但是一定要确保，意义明确，查找方便。如下图：
<img src="http://7xpxoe.com1.z0.glb.clouddn.com/%E5%B1%8F%E5%B9%95%E5%BF%AB%E7%85%A7%202016-04-20%2003.37.50%20PM.png"  width="400px" />

 再具体功能模块内我们要，具体在模块化，避免混乱，比如我们在一个类中可以分类：
 
* View Life (view 生命周期调用的方法)
* Private Method (私有方法)
* Extension /delegate(扩展代理方法)
* 属性的 setter 与 getter

可以根据自己的编程习惯以及项目需求，添加分类和更改顺序
##  第三方库
我们可以cocoaPod 管理工具 导入三方库。并把三方库规范化处理。好的三方库可以极大地加大我们开发的效率。
 更多三方库地址参考博客地址:http://blog.csdn.net/sunnyboy9/article/details/50976137
 
##  命名规范
1）类

* 遵循大驼峰命名法(例如:ExamPaperController)
*  Controller 命名:XXXController(TableViewControll
er 子类命名规范:XXXTableController)
* View 子类命名规范:XXXView (View 的 Xib 与相应的类同名)

2） 协议
* 遵循大驼峰命名法
* 协议写在相应模块的 protocols 中
* 命名规范:XXXProtocol,XXX 和相应类名一致

3）枚举

* 遵循大驼峰命名法
* 枚举值得变量以枚举名开头
* OC与Swift有区别注意   

4） 方法

* 遵循小驼峰命名法
* 方法名须起有意义的单词组成
* 每个方法里不能有太多的行代码

5） 变量

* 遵循小驼峰命名法
* 变量必须起有意义的名字
* 控件类型变量命名尾缀添加相应类型(列如:UILabel 的类型变量: lblXXX)

6） 注释

* 变量注释应详细描述变量用处(文档注释)
* 枚举注释应详细描述枚举和每一个元素用处(文档注释)
* 方法注释应详细描述方法作用、参数意义、返回值意义(文档注释)
* 其他使用单行注释

7） 资源文件规范

* 资源文件全部放入 Supporting Files 文件夹下
* 图片资源放入 Assert.xcassets. 可以建立自己的 Folder
* 其他资源可以放在 Resources 中(将各个资源按照文件分类放在相应文件夹内,列如:
音频、视频、图片)

## 单元测试

* Apple 自带的 XCTes
* 第三方 GHUnit
* [quick](https://github.com/Quick/Quick)

推荐使用 XCTest,github 上大部分框架都是 XCTest 集成的,而且它还是 apple 自带的框架。 Quick 安卓和 iOS 通用 也很方便

##### 最后良好的编码规范，就像好的生活习惯一样，使我们避免许多代码疾病。希望以后多多注意。
 
      
 

