### CocoaPods : 本地安装与管理
关于cocoapads 的安装与管理第三方管理相比都比较了解，详细请看相关连接
<!-- more -->
* ####[cocoachina 关于cocoapads](http://www.cocoachina.com/bbs/read.php?tid=234948)
* ####[博客园](http://www.cnblogs.com/mgbert/p/3945273.html)

####cocoapods本地管理本地的库
* 有的时候我们暂时不想把库放到Github上。我们更想使用CocoaPods引用本地的代码；
* 首先，我们需要有个本地的git库，即还需要准备一个本地要使用的git repository。我们以一个例子说明
* 1.创建一个文件夹：其次 cd 到该文件夹
* 2.将此文件夹进行git初始化
<pre><code>git init</code></pre>
* 3.将我们的本地库拷贝在此文件夹下，目录如下
  <img src="http://7xpxoe.com1.z0.glb.clouddn.com/21_96411_36f6aa45ea87a0d.png"  width="400px" />
* 然后执行以下语句
<pre><code>git add . && git commit -m"Add new SDK"</code></pre>
这样我们这个目录已经成为一个git repository，里面是最新的SDK。
*这时我们仍然需要一个podspec文件，来说明我们从哪个仓库来获取代码：
<pre><code>pod spec create WX
vim WX.podspec
</code></pre>
* 然后输入下面这些，然后保存退出：（先输入：%d清空所有内容）  
<pre><code>
Pod::Spec.new do |s|
	s.name = 'ChartboostSDK'
	s.version = '3.1.1'
	s.license = 'Commercial'
	s.summary = 'ChartboostSDK for showing ads and more apps pages, and tracking analytics and in-app purchase revenue.'
	s.homepage = 'https://chartboost.com/'
	s.author = { 'Chartboost' => 'https://chartboost.com/' }
	s.source = { :git => '~/Desktop/ChartboostSDK' }
	s.platform = :ios
	s.source_files = '**/*.h'
	s.preserve_paths = '**/*.a'
	s.library = 'Chartboost'
	s.xcconfig = { 'LIBRARY_SEARCH_PATHS' => '"$(PODS_ROOT)/ChartboostSDK/Chartboost"' }
	s.weak_frameworks = 'AdSupport', 'StoreKit'
	s.frameworks = 'QuartzCore', 'SystemConfiguration', 'CoreGraphics'
end</code></pre>
* 接着我们运行ls -lh | awk '{print $9}'，ChartboostSDK目录的结构显示如下：
<pre><code>CBAnalytics.h
Chartboost.h
ChartboostSDK.podspec
libChartboost.a</code></pre>
* cd到需要微信sdk的项目目录，创建Podfile文件，配置Podfile文件：
<pre><code>platform :ios
        pod 'WX', :path => '/Users/yangchaojie/Desktop/company/PodsTest/Model'
pod install||pod update        
</code></pre>
<img src="http://7xpxoe.com1.z0.glb.clouddn.com/%E5%B1%8F%E5%B9%95%E5%BF%AB%E7%85%A7%202016-04-05%2003.23.13%20PM.png"  width="400px" />

* 最后就可以看到我们的项目在pods里面了。
<img src="http://7xpxoe.com1.z0.glb.clouddn.com/%E5%B1%8F%E5%B9%95%E5%BF%AB%E7%85%A7%202016-04-05%2003.26.51%20PM.png"  width="400px" />
#####我们也可以将自己写的一些框架上传到github上，让它支持cocoapods这样别人也可以使用你的框架了，当让你也可以设为私有的
具体可以参考下面的博客链接：
* #####[如何发布自己的开源框架到CocoaPods](http://www.cocoachina.com/ios/20160301/15459.html)
* #####[给自己的开源库添加cocopods支持](http://blog.csdn.net/woaifen3344/article/details/44786417)