# Swift 中的 IBDesignable/IBInspectable

* IBDesignable/IBInspectable，是iOS8的新特性。其主要功能是可以直接在XIB或者Storyboard中直接，设置UI类的属性。例如我们自定义一些控件，可以把控件的属性映射到XIB上。

* 下面是控件的例子，更直观的将IBDesignable/IBInspectable的作用显现出来。

## 1. 首先我们新建一个RatingBar类

     	@IBDesignable
     	class RatingBar: UIView {
     	@IBInspectable var  ratingMax: CGFloat = 10	//总分
     	@IBInspectable var starNums: Int = 5		//星星总数
     	//分数
     	@IBInspectable var rating: CGFloat = 0 {
     		didSet {
     			if 0 > rating { rating = 0 }
     			else if ratingMax < rating { rating = ratingMax }
     			//回调给代理
     			self.setNeedsLayout()
     		}
     	}
     	
     	@IBInspectable var imageLight: UIImage = UIImage(named: "ratingbar_star_light")!
     	@IBInspectable var imageDark: UIImage = UIImage(named: "ratingbar_star_dark")!
     	
     	@IBInspectable var canAnimation: Bool = false	//是否开启动画模式
     	@IBInspectable var animationTimeInterval: NSTimeInterval = 0.2 //动画时间
     	@IBInspectable var isIndicator: Bool = false	//是否是一个指示器 (用户无法进行更改)
     	
     	private var foregroundRatingView: UIView!
     	private var backgroundRatingView: UIView!
     	
     	private var isDrew = false	//是否创建过
     	
     	override init(frame: CGRect) {
     		super.init(frame: frame)
     		self.buildView()
     	} ·· 

## 2. 然后在XIB或Storyboard里面，拖一个UIView上去，把class改成自己定义的RatingBar

   <img src="http://7xpxoe.com1.z0.glb.clouddn.com/%E5%B1%8F%E5%B9%95%E5%BF%AB%E7%85%A7%202016-11-21%2010.53.07%20AM.png"  width="200px" />
   
* 这样更方便我们使用较复杂的控件是设置属性，希望以后可以多借鉴使用。

  ​           