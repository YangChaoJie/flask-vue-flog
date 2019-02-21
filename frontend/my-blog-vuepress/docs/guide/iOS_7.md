# Swift 里面的函数
个人感觉，函数的应用是swift改变最大的一块。相对于OC，swift里面的函数更加强大高效率。
并且在Swift里，函数经常像对象一样使用。
下面我将逐一介绍Swift中函数的作用
## Swift 的函数格式
* Swift 的函数格式与OC的有很大不同。但从格式上说跟Java有点类似，也有点不同。
``` Swift
/*
格式:
func 函数名称(参数列表) -> 返回值
语义: 将前面的计算结果, 输出给后面的返回值
*/

// 没有参数没有返回值
/*
1. 可以写为 ->Void
2. 可以写为 ->()
3. 可以省略
*/
func sum3(a: Int, b: Int) ->Int{
    return a + b
}
sum3(9,6)
``` 
* 当然函数可以被private,pubilc 修饰，来决定是否需要被外部访问
* 当然闭包也是一种函数，我们下面介绍。
* Swift引入了大量的函数式编程,我们是可以把函数当做对象处理（赋值，当做参数传递，可以当做返回值）
``` Swift
let yFunc = {()->String
    in
  return "linghulingxi"
}
//返回值
func factory<T>(value: T)->(T->T) {
    func add(value2: T) -> T {
        return value
    }
    return add
}
``` 

## 函数参数
* 在Swift中，函数可以像OC那样通过参数传值。但是Swift 比OC更加复杂，形式更加多样。
* * 1 参数默认值   		 可以为任何参数设定默认值来作为函数的定义的一部分。如果默认值已经定义，调用函数时就可以省略该参数的传值。
``` Swift
func join(string s1: String, toString s2: String, withJoiner joiner: String = "hello") -> String {
    return s1 + joiner + s2
} 
``` 

 可变参数 一个可变参数的参数接受零个或多个指定类型的值。当函数被调用时，您可以使用一个可变参数的参数来指定该参数可以传递不同数量的输入值。写可变参数的参数时，需要参数的类型名称后加上点字符（...）。
``` Swift
func arithmeticMean(numbers: Double...) -> Double {
    var total: Double = 0
    for number in numbers {
        total += number
    }
    return total / Double(numbers.count)
}
arithmeticMean(1, 2, 3, 4, 5)
``` 
 参数的省略 函数的参数在Swift 中常常可以被省略（Swift有类型推导）例子：
``` Swift
let array = [1, 3, 2, 4]
let res = array.sort {
    (a: Int, b: Int) -> Bool in
    return a < b
}
//返回类型、参数的类型、以及参数的个数，都能推导出来所以可以简化为
let array = [1, 3, 2, 4]
let res = array.sort {
    return $0 < $1
}

``` 

## 参数中的关键字

*  1. @noescape 它是专门用于修饰函数闭包这种参数类型的，当出现这个参数时，它表示该闭包不会跳出这个函数调用的生命期：即函数调用完之后，这个闭包的生命期也结束了


*  2. throws 关键字表示：这个函数（闭包）可能抛出异常。而 rethrows 关键字表示：这个函数如果抛出异常，仅可能是因为传递给它的闭包的调用导致了异常。

## 函数作为参数
在Swift中可以像对象一样，被当作参数传递或者被当作值返回
``` Swift
 //     Alamofire.request(Router.GetOptionalList("789afd225bd2443691204a486657696d")).validate().responseJSON { response  in
            print("request-> \(response.result.value)")
            let data : NSArray  = response.result.value!.valueForKey("data")as! NSArray
             print("dfajnjksfnasnfa\(response.request)")
          
            self.listCount = data.count
            for obj in data {
              //  print("dfajnjksfnasnfa \(obj)")
                //let dict: NSDictionary = (try! NSJSONSerialization.JSONObjectWithData(obj as! NSData, options: .AllowFragments)) as! NSDictionary
                let modelTool = DictModelManager.sharedManager
                let data1 = modelTool.objectWithDictionary(obj as! NSDictionary, cls: OptionModel.self) as? OptionModel
                print(data1?.change)
              
                //self.getdata(data!)
               
                completion(data: data1,Count: self.listCount!,error: nil)
                  }
                
            }
 //map函数
  let arry = [1, 2, 3]


let arr1 = arry.map {
    "No." + String($0)
}  
//["No.1", "No.2", "No.3"]   
``` 

## 参数的泛型
当函数中的参数再引入范型之后，函数的功能更加强大，但是可读性进一步下降。比如刚刚的例子，限制函数只能是 Int -> Int 其实是没有必要的，我们将两个函数拼成一个函数，只需要保证一个函数的输出类型，与另一个函数的输入类型匹配即可。
``` Swift
func funcBuild<T, U, V>(f: T -> U, _ g: V -> T)
    -> V -> U {
        return {
            f(g($0))
        }
}
let f3 = funcBuild({ "No." + String($0) }, {$0 * 2})
f3(23) // 结果是 "No.46"
``` 
## 函数的返回值
* Swift的返回值是写在方法后面的用 （->返回值表示）
* Swift 的返回值为空时可以省略
* Swift的返回值可以像参数一样传递函数（闭包）（像是一些链式函数）
``` Swift
//snapkit 里面的代码
 public func snp_makeConstraints(file: String = #file, line: UInt = #line, @noescape closure: (make: ConstraintMaker) -> Void) -> Void {
        ConstraintMaker.makeConstraints(view: self, file: file, line: line, closure: closure)
    }
    
``` 

