# iOS 集成支付宝 ---- swift

### 1. 准备工作
## 签约与审核
* 1 商户在[b.alipay.com](https://b.alipay.com/newIndex.htm)里进行产品签约
* 2 商户登录[qy.alipay.com](https://enterpriseportal.alipay.com/login.htm)，可在“签约订单”中查看审核进度

## PID 和 密钥管理
* 1 登录支付宝官方网站b.alipay.com 点击导航栏中“商家服务，即可查询 PID
* 2 [生成公钥和私钥](https://doc.open.alipay.com/doc2/detail.htm?spm=a219a.7629140.0.0.E6q7o3&treeId=58&articleId=103242&docType=1)
* 3 RSA加密
 
## SDK 下载
首先从支付宝开放平台[下载SDK](https://doc.open.alipay.com/doc2/detail.htm?spm=a219a.7629140.0.0.ZHyT6C&treeId=59&articleId=103796&docType=1). 解压后的目录下包含「服务端demo」和「客户端demo」。「客户端demo」包含了集成支付宝所需要的所有文件。
## 交易流程
* 1 首先是用户在App上面下订单，同时App请求服务端API，服务端接收到POST请求后生成相应的订单，记录到DB，然后将订单信息返回到。
* 2  App接收到返回订单信息后，在客户端生成符合支付宝API要求 的数据请求。其中就包括notify URL,这个URL必须是外网可以访问的,目的是用来接收支付宝支付成功后的反馈。
* 3 App调用支付宝支付API。
* 4 支付成功或失败后返回App,并根据返回结果给用户相应反馈信息。
* 5 如果支付成功后，支付宝服务器会调用第2步提到的 notify URL. 这个notify URL需要在你自己的服务器端实现相应功能，用来接受支付宝服务器发送的支付成功的通知，并将相应订单标记为已经支付。
* ##### 流程图如下：
 <img src="http://7xpxoe.com1.z0.glb.clouddn.com/aliipay2.png" width="500px" />
 
## 关联库
* 1 启动IDE（如Xcode），把iOS包中的压缩文件中以下文件拷贝到项目文件夹下，并导入到项目工程中。
 
  （1）AlipaySDK.bundle
  
  （2）AlipaySDK.framework
  
  （3）在Build Phases选项卡的Link Binary With Libraries中，增加以下依赖：
  <img src="http://7xpxoe.com1.z0.glb.clouddn.com/alipay-library.png" width="500px" />
  
* 2 新建一个Bridging-Header.h文件，并把该文件的路径添加到 Build Settings => Objective-C Bridging Header。然后在该文件中添加下面两行.

``` Swift
#import < AlipaySDK/AlipaySDK.h>
#import "RSADataSigner.h" 
``` 

### 5. code
* 1 配置请求信息
``` Swift
        let aliOrder = AlipayOrder(partner: AlipayPartner, seller: AlipaySeller, tradeNO: order.id, productName: order.title, productDescription: order.content, amount: order.price, notifyURL: AlipayNotifyURL, service: "mobile.securitypay.pay", paymentType: "1", inputCharset: "utf-8", itBPay: "30m", showUrl: "m.alipay.com", rsaDate: nil, appID: nil)
        
        
        let orderSpec = aliOrder.description //orderA.description
        
        let signer = RSADataSigner(privateKey: AlipayPrivateKey)
        let signedString = signer.signString(orderSpec)
        
        let orderString = "\(orderSpec)&sign=\"\(signedString)\"&sign_type=\"RSA\""
        
        print(orderString)
                AlipaySDK.defaultService().payOrder(orderString, fromScheme: AppScheme, callback: {[weak self] resultDic in
            if let strongSelf = self {
                print("Alipay result = \(resultDic as Dictionary)")
                let resultDic = resultDic as Dictionary
                if let resultStatus = resultDic["resultStatus"] as? String {
                    if resultStatus == "9000" {
                        strongSelf.delegate?.paymentSuccess(paymentType: .Alipay)
                        let msg = "支付成功！"
                        let alert = UIAlertView(title: nil, message: msg, delegate: nil, cancelButtonTitle: "好的")
                        alert.show()
                        //strongSelf.navigationController?.popViewControllerAnimated(true)
                    } else {
                        strongSelf.delegate?.paymentFail(paymentType: .Alipay)
                        let alert = UIAlertView(title: nil, message: "支付失败，请您重新支付！", delegate: nil, cancelButtonTitle: "好的")
                        alert.show()
                    }
                }
            }
            })

        
``` 

* 2 配置支付宝客户端返回url处理方法
``` Swift
 //跳转支付宝钱包进行支付，处理支付结果
        AlipaySDK.defaultService().processOrderWithPaymentResult(url, standbyCallback: { (resultDict:[NSObject : AnyObject]!) -> Void in
            print("openURL result: \(resultDict)")
        })
``` 

## 通知服务器支付成功
如果支付成功后，支付宝服务器会向你的服务器 notify URL 发起支付成功的请求。这样就可以在服务端实现一些相关的业务逻辑，比如标记订单为已支付，发短信给用户等.

参考 ：

* 1  [支付宝移动开发文档](https://doc.open.alipay.com/doc2/detail?treeId=59&articleId=103676&docType=1)

* 2  [iOS集成支付宝](http://www.qinyejun.com/ios/ios-alipay-swift/)
