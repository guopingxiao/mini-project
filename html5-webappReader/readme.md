1、html5的应用场景

![](http://i.imgur.com/VR3kYSj.jpg)

（1）pc端的web站点，---本地存储，浏览器的兼容性

（2）基于webview的hybrid native App开发，更新很灵活

（3）html5的web app  


2、html5技术的新特性

（1）语义化标签

（2）快速的更新与迭代，---提交到应用市场

（3）一次开发，多终端收益

3、web app现状

（1）一次开发，多终端适配，实现不了，传统的是一次开发，多浏览器兼容性适配。

（2）andriod , ios ,windows phone===交互不一样，没有返回按钮，只有home键。

（3）CPU 计算 +　GPU-图形渲染 == 相比于pc端不行的。

（4）一次开发，多终端适配【媒介查询，css3的动画】

![](http://i.imgur.com/YVaxy2R.jpg)

![](http://i.imgur.com/wZ8rjjo.jpg)

发展趋势：无限趋近 native app;===react(解决构建界面严重的瓶颈问题)

服务器的调试 fiddler调试的经验。==调试http文本流。

JavaScript设计模式。

单例模式==在一个对象上扩展方法，直接通过 单例调用

	var single = {
	    attr:'1',
		base64:'...',
	    fun: function(){
		    console.log(this.attr);
		}
		
	}
	single.attr;
	single.fun();

很多时候，很多对象都是共用的，我们只需创建一次对象，而不需要实例化多个对象，创建新的对象意味着，占用更多的内存。

js中的类

	function class_A(name){
	    this.name = name;
		this.fun = function(){
			console.log(this.name);
		}
	}
	
	var instance1 = new class_A("小平果");
	instance1.fun();
	var instance2 = new class_A("小李子");
	instance2.name;
不同于单例可以直接调用，这里要先实例化，在调用。

响应式布局==手机做一个阅读器，希望可以了解一些响应式布局。

通过媒介查询  @media来设置一套css样式，从而达到响应式布局的效果。


做开发，==上战场打仗，不是有武器就上，还要先进行战术分析。

做的东西一定是用的到的，不想学习，不一定有用，阅读器的功能与用途。

![](http://i.imgur.com/kdCq3ms.jpg)


1、顶部导航（返回），底部导航（菜单，字体，夜间模式）

2、文本展示区(服务器传递的数据进行标签替换)


3、分页

希望一页放满内容，下一页进行数据加载。

性能上考虑，一次加载过多，有点卡。也可能用不到。

4、字体调节，背景，base64格式的图片。


用到的技术：

字号，css3的圆角，背景：base64格式的图片，文本展示，jsDOM节点操作的API。保存字号和背景，html5的localStorage.



案例中技术的分解。


1、base64格式的图片
优势，加快首屏显示速度。

![](http://i.imgur.com/m1TQy8T.jpg)

background:url()地址，减少了一次请求，直接将数据放到了css文件中,但是有缺点，不容易维护，要写备注。另一个是未压缩的，体积更大。

	url(data:image/png; base64,img_data)//img_data是字符串。


2、使用base64 格式的图片 制作icon. 可以使用css3制作icon，体积更小。几行代码就行，问题：不易维护，存在兼容性问题。但在移动端兼容性较少。

常用的属性：

	border-radius:
	
	box-shadow:
	
	transform:

菜单是base64格式， 背景用的是css3的新特性。


3、h5新特性（逻辑部分）

querySelector--》DOM节点操作。简单好用，性能又好。

postMessage。

window.performane.timing:性能监控的接口,时间戳 。==new Date().getTime();

localStorage==提升了浏览器的存储性能,以key和value的形式存储，主要是setItem(),getItem()

window.localStorage.setItem('a','1');

window.localStorage.getItem('a');

cookie一方面数据大小有限制，另一方面，和服务端交互，造成一定量的流量。


web workers:

mdn网站，[https://developer.mozilla.org/zh-CN/docs/Web/API/Web_Workers_API/Using_web_workers](https://developer.mozilla.org/zh-CN/docs/Web/API/Web_Workers_API/Using_web_workers)

新的跨域方式：

动态script脚本，jsonp的形式， iframe，也可以。

XMLHTTPRequest Level2;

如何跨域；

一般是进行同源的跨域

	var xhr = new XMLHttpRequest();
	
	xhr.onreadystatechange = function(){
	
	}
	
	xhr.open("get",url);
	
	xhr.send();

请求的url必须是同源的，如何请求跨域请求呢？

在服务器的响应头CORS

	header('Access-Control-Allow-Origin:www.baidu.com,www.qq.com')；


![](http://i.imgur.com/msgARLh.jpg)


Content Editable:设置父文本可编辑的，

H5 触屏事件

分别绑定touchstart, touchmove, touchend, click, mousedown,mouseup, mousemove事件的出发顺序。


鼠标移动，start,move,end.

原地不动点击，start，click，move，end

原地长按一下，start ,move ,end ,mousemove,mousedown,mouseup ,click


使用viewport移动端的页面布局

使用meta标签

	<meta name="viewport" content = "width=device-width,initial-scale = 1.0,minium-scale = 1.0, 
	maximum-scale = 1.0, user-scalable = no"/>

移动端性能陷阱和硬件加速

1、减少重绘，重排，repaint,reflow,回流。将dom先拿出来，做好了，再放进去。

2、缓存一些可以缓存的东西。Cache-Control:max-age,Expire,Etag,Last-Modify

现在H5，之后，localStorage可以缓存一些东西，有个问题就是只能缓存一些字符串。假如要缓存对象，需要序列化，和反序列化。

	localStorage.setItem('data_1',JSON.stringify({a:1}))
	localStorage.getItem('data_1');//"{"a":1}"
	JSON.parse(localStorage.getItem('data_1'));//Object {a: 1}

sessionStorage==会话关闭就没了，indexDB；

3、使用css3的transform来代替DOM节点操作，从浏览器引擎做操作，--animate.css

4、适当的使用硬件加速。 用canvas来画图。局部的性能优化。`transform：translate3d(0,0,0);`调用GPU来就加速优化。


代码优化与重构


如何更好的处理异步的代码？

可以看到getChapterContent有3重回调函数，这种代码，嵌套过深，如何避免这些问题呢？

1、事件消息通知


2、ES6 的promise【在jQuery早已经实现了，在ES6中引入了规范】

3、ES6 的generator===阮一峰的教程可以看看。


这里主要看看promise的应用，处理多重回调：

1、将异步的代码包在一个promise中；promise会立即执行，所以放到一个函数总，return的形式new出Promise；

2、然后给promise增加resolve和reject方法代替原来的回调函数；

3、调用的时候成功或失败的时候会进入then方法，如果多重回调，可以在第一个then中return另外一个promise对象，这样就构成了一个then的链式调用；

由嵌套的方式变成了平行的调用；

总结：

代码的组织分层

交互开发

与服务器端的数据通信

代码优化

ES6新特性的使用



![](http://i.imgur.com/nn2PLcV.jpg)

应用场景：

在线的文档管理





问题：
1、蒙层点透的问题

2、对于px 和 rem



PX是相素字体，无论屏幕有多大都是按分辨率来计算的。无论网页变大变小，字体都是那么大。
如果你使用em来控制字体的话，就会根据你网页大小缩放来显示了。
1em=16px.         em具有继承性。

如果定义了
body{font-size=12px;}
#title{font-siez=2.6em;}

而id=title恰好在body里面，那么，id=title的字体大小就是2.6*16-12=29.6px
国外大多用em作为字体单位，因为ie和ff都能调整大小
ie无法调整px作为单位的网页字体大小
作为设计来说各有利弊
用em作为单位的好处是方便老年人阅览，方便非JS方式调整大小。
用px作为单位的好处来说是不管浏览器字体大小如何设置，都不会“乱套”。但是可以通过JS方式调整大小。

3、callback && callback(data);
如果存在前面的那个函数就执行那个函数，是一种简化的写法。










