# iOS 微信支付 ---Swift版

## 微信商户平台
* 1 在新建应用后并通过审核过后，需要申请支付功能
* 2 登陆「微信商户平台」 和腾讯签约。签约需要扫描上传「营业执照」、「组织机构代码证」、「经营许可证/资格证」、「身份证」等信息。在微信商户平台可以进行查询交易订单，提现等功能。在此需要说明一下的是，微信商户平台和财付通数据其实是通的，在微信和财付通都可以看到同样的交易记录。

## SDK 下载
[官方网站下载SDK及Demo](https://pay.weixin.qq.com/wiki/doc/api/app/app.php?chapter=11_1)

## 微信支付流程
以下是交互时序图，统一下单API、支付结束通知API和查询订单API等都涉及签名过程，调用都必须在商户服务端完成。如下图

 <img src="http://7xpxoe.com1.z0.glb.clouddn.com/chapter8_3_1.png" width="500px" />
  
 * 1  用户在商户APP中选择商品，提交订单，选择微信支付。
 * 2 商户后台收到用户支付单，调用微信支付统一下单接口。
 * 3 统一下单接口返回正常的prepay_id，再按签名规范重新生成签名后，将数据传输给APP。参与签名的字段名为appId，partnerId，prepayId，nonceStr，timeStamp，package。注意：package的值格式为Sign=WXPay
 * 4 商户APP调起微信支付
 * 5 商户后台接收支付通知
 * 6 商户后台查询支付结果


## 关联库

 解压后的Demo中在文件夹SDKExport下面有 libWeChatSDK.a 、WXApi.h 、 WXApiObject.h 这三个文件。把这三个文件拖到你的项目里面,并在Bridging-Header.h文件中添加如下两行代码。
``` Objective-C
 #import "WXApi.h"
 #import "WXApiObject.h"
``` 

## 设置URL Types
 URL Schema中填写之前创建的应用的AppID
 <img src= "http://7xpxoe.com1.z0.glb.clouddn.com/URL%20Types.png" width="500px" />
 
## 在Appdelegate中注册微信支付
``` Swift
WXApi.registerApp(WAPPID, withDescription: "DEMO")
``` 
## 获取PrePay信息并发起支付请求
微信支付和支付宝支付流程有些不一样，微信支付会在真正发起支付请求钱先发起PrePay(预支付)请求，然后利用PrePay发起支付请求。Demo中的PrePay是在客户端生成的，但是更加安全的方式是在服务端生成PrePay。
``` Swift
       DataService.wxPrePay(order.id) {[weak self] (prepay, error) -> () in
            if let strongSelf = self {
                if let prepay = prepay {
                    let req = PayReq()
                    req.openID = prepay.appID
                    req.partnerId = prepay.partnerID
                    req.prepayId = prepay.prepayID
                    req.nonceStr = prepay.noncestr
                    req.timeStamp = UInt32(prepay.timestamp)
                    req.package = prepay.package
                    req.sign = prepay.sign
                    WXApi.sendReq(req)
                } else {
                    strongSelf.delegate?.paymentFail(paymentType: .Weichat)
                    let alert = UIAlertView(title: nil, message: "获取支付信息失败，请重新支付！", delegate: nil, cancelButtonTitle: "好的")
                    alert.show()
                }
            }
        }
```

## 支付回调
App支付完成后返回App, 在Appdelegate中实现协议 WXApiDelegate 中的 onResp方法
``` Swift
    func onResp(resp: BaseResp!) {
        var strTitle = "支付结果"
        var strMsg = "\(resp.errCode)"
        if resp.isKindOfClass(PayResp) {
            switch resp.errCode {
            case 0 :
                NSNotificationCenter.defaultCenter().postNotificationName(WXPaySuccessNotification, object: nil)
            default:
                strMsg = "支付失败，请您重新支付!"
                print("retcode = \(resp.errCode), retstr = \(resp.errStr)")
            }
        }
        let alert = UIAlertView(title: nil, message: strMsg, delegate: nil, cancelButtonTitle: "好的")
        alert.show()
    }
```

#### 9 通知服务器支付成功
如果支付成功后，微信服务器会向你的服务器 notify URL 发起支付成功的请求。这样就可以在服务端实现一些相关的业务逻辑，比如标机订单为已支付，发短信给用户等

#### 10 参考文档
[微信官方文档](https://pay.weixin.qq.com/wiki/doc/api/app/app.php?chapter=8_5)

[iOS集成微信支付-Swift版](http://www.qinyejun.com/ios/ios-wechatpay-swift/)