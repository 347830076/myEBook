# DOM对象

## 什么是DOM对象

- **DOM**，全称`Document Object Model` 文档对象模型
- JS通过DOM来对HTML文档进行操作。只要理解了DOM就可以随心所欲的操作WEB页面。

- **文档** Document
    - 文档表示的就是整个的HTML网页
- **对象**
    - 对象表示将网页中的每一个部分都转换为了一个对象
- **模型**
    - 使用模型来表示对象之间的关系， 这样方便我们获取对象


**DOM 将 HTML 文档表达为树结构。**

<img src="./img/d1.gif" class="zoom-custom-imgs" />

**节点**

- `节点Node`,是构成我们网页的最基本的组成部分，网页中每一个部分都可以称为一个节点。
- 比如：html标签、属性、文本、注释、整个文档等都是一个节点。
- 虽然都是节点，但实际上他们的具体类型是不同的。
- 比如：标签我们称为`元素节点`，属性称为`属性节点`，文本称为`文本节点`，文档称为`文档节点`

节点的类型不同，属性和方法也都不相同

**节点：Node  --  构成HTML文档最基本的单元。**

常用节点分为四类

- **文档节点**：整个HTML文档
- **元素节点**：标签
- **属性节点**：标签的属性
- **文本节点**：标签中的文本内容

|          |   |  |  |
| :------: | :-------: | :------: | :-------: |
|          | nodeName  | nodeType | nodeValue |
| 文档节点 | #document |    9     |   null    |
| 元素节点 |  标签名   |    1     |   null    |
| 属性节点 |  属性名   |    2     |  属性值   |
| 文本节点 |   #text   |    3     | 文本内容  |

## 获取元素节点

**1.getElementById()**

通过**id**属性获取**一个**元素节点对象

**2.getElementsByTagName()**

通过**标签名**获取**一组**元素节点对象，该方法会返回一个类数组对象，把所有查询到的元素都会封装到类数组对象中

**3.getElementsByName()**

通过**name**属性获取**一组**元素节点对象，该方法会返回一个类数组对象，把所有查询到的元素都会封装到类数组对象中




## 事件

- 事件，就是文档或浏览器窗口中发生的一些特定的交互瞬间。
- Javascript与HTML之间的交互是通过事件实现的。
- 对于Web应用来说，有下面这个代表性的事件：点击某个元素、将鼠标移动至某个元素上方、按下键盘某个键，等等。


#### 移动设备像素比： window.devicePixelRatio;
#### 移动端视口分辨率宽 window.innerWidth;
#### 移动端视口分辨率高 window.innerHeight;
#### 移动端独立设备像素宽、PC端屏幕分辨率的宽 window.screen.width;
#### 移动端独立设备像素高、PC端屏幕分辨率的高 window.screen.height;

#### 网页中的可视宽度：document.body.clientWidth;
#### 网页中的可视高度：document.body.clientHeight;
#### 网页中的可见区域宽：document.body.offsetWidth(包括边线的宽);
#### 网页中的可见区域高：document.body.offsetHeight(包括边线的宽);

#### 网页正文全文宽：document.body.scrollWidth;
#### 网页正文全文高：document.body.scrollHeight;

#### 网页被卷去的高：document.body.scrollTop;
#### 网页被卷去的左：document.body.scrollLeft;

#### 网页正文部分上：window.screenTop; //返回当前窗口距离屏幕顶端的距离
#### 网页正文部分左：window.screenLeft; //返回当前窗口距离屏幕左侧边的距离

#### 屏幕可用工作区高度：window.screen.availHeight;
#### 屏幕可用工作区宽度：window.screen.availWidth;

#### offsetWidth(width+padding+border)

只读，表示当前对象的宽度。
`style.width`也是当前**对象的宽度(width+padding+border)**。 

**offsetWidth 和 style.width 的区别：**
1. `style.width`返回值除了数字外还带有单位px;
2. 如对象的宽度设定值为百分比宽度,则无论页面变大还是变小，`style.width`都返回此百分比,而`offsetWidth`则返回在不同页面中对象的宽度值而不是百分比值；
3. 如果没有给HTML元素指定过width样式，则style.width返回的是空字符串；
> **结论：** offsetWidth总可以获取到当前元素的最终所占宽度

```js
console.log(document.body.offsetWidth);
console.log(document.body.style.width);
```

#### offsetHeight:(Height+padding+border)
只读，表示当前对象的高度。   
`style.height`也是当前**对象的高度(height+padding+border)**。    
**区别：**
1. `style.height`返回值除了数字外还带有单位px；
2. 如对象的高度设定值为百分比高度,则无论页面变高还是变矮，`style.height`都返回此百分比,而`offsetHeight`则返回在不同页面中对象的高度值而不是百分比值；
3. 如果没有给HTML元素指定过height样式，则`style.height`返回的是空字符串；
> **结论：** offsetHeight总可以获取到当前元素的最终所占高度

#### offsetLeft:
只读，表示当前对象到其上级层(position不是静态定位的时候)左边的距离。   
`style.left`也是当前**对象到其上级层左边的距离**。   
**区别：**
1. `style.left`返回值除了数字外还带有单位px；
2. 如对象到其上级层左边的距离设定值为百分比，`style.left`返回此百分比,而`offsetLeft`则返回到其上级层左边的距离的值；
3. 如果没有给HTML元素指定过left样式，则`style.left`返回的是空字符串；


#### offsetTop:
只读，表示当前对象到其上级层(position不是静态定位的时候)顶部边的距离。
`style.top`也是当前**对象到其上级层顶部边的距离**。    
**区别：**
1. `style.top`返回值除了数字外还带有单位px；
2. 如对象到其上级层顶部边的距离设定值为百分比，`style.top`返回此百分比,而`offsetTop`则返回到其上级顶部边的距离的值；
3. 如果没有给HTML元素指定过top样式，则`style.top`返回的是空字符串；


#### scrollWidth:获取对象的滚动宽度。

#### scrollHeight:获取对象的滚动高度。

#### scrollLeft:设置或获取位于对象左边界和对象中目前可见内容的最左端之间的距离(width+padding为一体)

#### scrollTop:设置或获取位于对象最顶端和对象中可见内容的最顶端之间的距离；(height+padding为一体)

#### clientWidth:获取对象可见内容的宽度，不包括滚动条，不包括边框；

#### clientHeight:获取对象可见内容的高度，不包括滚动条，不包括边框；

#### clientLeft:获取对象的border宽度

#### clientTop：获取对象的border高度

#### offsetParent:当前对象的上级层对象.


## 查找

**1.getElement系列：**
```js
	document.getElementById("idName");					//根据id查找
	document.getElementsByClassName("className");		//根据类名查找
	document.getElementsByTagName("p");					//根据标签名查找
	document.getElementsByName("username");				//根据name值查找
```

参数：string：Id名/class名/标签名/属性name的值

返回一个节点或者一个类数组的节点集合，HTMLCollection对象(动态的NodeList对象)


**2.querySelector系列：**

```js
	//支持css3选择器语法
	querySelector("#id");
	querySelector(".class");
	querySelector("label");
	querySelector("input[type='text']");
	
	//querySelectorAll用法也是如此
	//不同的是querySelectorAll会以类数组的形式返回所有匹配的元素
	//querySelector只会返回匹配的第一个元素
	querySelectorAll("#id");
	querySelectorAll(".class");
	querySelectorAll("label");
	querySelectorAll("input[type='text']");
```

参数：支持css3选择器

返回一个节点或者一个类数组的节点集合，静态NodeList对象

<!-- [d](./getElement和querySelector.md ':include :type=markdown') -->


**3.查找表单**

document.forms
获取当前页面所有form，返回一个HTMLCollection对象。




**4.查找子节点**

Node.childNodes
返回包含文本的集合
```js
	html:
		<div>
			<p>这是div下的p标签</p>
		</div>
	
	js:
		let div = document.querySelector("div");
		div.childNodes;
		//[text,p,text]
```



parentNode.children
返回元素节点的集合
```js
	html:
		<div>
			<p>这是div下的p标签</p>
			<p>这是div下的p标签</p>
			<p>这是div下的p标签</p>
		</div>
	
	js:
		let div = document.querySelector("div");
		div.children;
		//[p,p,p]
```


firstChild 和 lastChild
返回第一个或者最后一个子节点的文本内容
```js
	html:
		<div>
			<p>这是div下第一个的p标签</p>
			<p>这是div下的p标签</p>
			<p>这是div下最后一个的p标签</p>
		</div>
	
	js:
		let div = document.querySelector("div");
		div.firstChild;
		//#text
		
		div.lastChild;
		//#text
```



firstElementChild 和 lastElementChild
返回第一个或者最后一个子元素节点
```js
	html:
		<div>
			<p>这是div下第一个的p标签</p>
			<p>这是div下的p标签</p>
			<p>这是div下最后一个的p标签</p>
		</div>
	
	js:
		let div = document.querySelector("div");
		div.firstChild;
		//<p>这是div下第一个的p标签</p>
		
		div.lastChild;
		//<p>这是div下最后一个的p标签</p>
```

**5.父节点和兄弟节点**
	
	child.parentNode
	返回这个节点的父节点
	
	child.previousElementSibling
	返回该节点的前一个同级元素节点
	
	
	child.nextElementSibling
	返回该节点的下一个同级元素节点
	
	
```js
	html:
		<div>
			<p>这是id为p的前一个的p标签</p>
			<p id="p">这是div下的p标签</p>
			<p>这是id为p的后一个的p标签</p>
		</div>
	
	js:
		let p = document.querySelector("#p");
		
		div.parentNode;
		/**
		 * <div>
				<p>这是div下第一个的p标签</p>
				<p id="p">这是div下的p标签</p>
				<p>这是div下最后一个的p标签</p>
			</div>
		 */
		
		div.previousElementSibling;
		//<p>这是id为p的前一个的p标签</p>
		
		div.nextElementSibling;
		//<p>这是id为p的前一个的p标签</p>
```

<!-- DOM之间的关系：
![dom之间的关系.png](../../../static/images/es6/dom之间的关系.png) -->


## 增加

### 创建
1.创建元素节点:**createElement(labelName)**

参数：labelName：标签名（String）

```js
	let div = document.createTextNode('div');
```
>注意：这个节点不会自动添加到文档（document）中。


2.创建文本节点:**createTextNode(content)**

参数：content：文本内容（String）

```	js
	let text = document.createTextNode('text');
```	
>如果插入的内容不带HTML格式，这个方法兼容性比innerHTML要好（待考究）


### 复制
1.克隆节点:**cloneNode(boolean)**

参数：boolean：是否需要深度克隆（boolean）

```js
	let ul = document.getElementsByTagName("ul")[0];
	
	ul.cloneNode(false);			//<ul></ul>
	
	ul.cloneNode(true);				//<ul><li></li></ul>
```

复制目标节点，参数是一个布尔值；true为深度克隆，克隆整个节点和内容；false为浅克隆，只复制节点自身；


## 删除

1、删除自身节点:**remove()**

参数：无

```	js
	let div = document.getElementById("div");
	div.remove();
```


2、删除子节点:**removeChild(Element)**

参数：Element：要删除的子节点（HTMLElement）

```	js
	let div = document.getElementById("div");
	let p = div.getElementById("p");
	
	div.removeChild(p)
```


## 修改

### 修改HTML

1.插入节点的末尾:**appendChild(Element)**

参数：Element：元素对象（HTMLElement）

```js
	let ul = document.getElementsByTagName("ul")[0];
	let p = document.createElement("p");
	
	ul.appendChild(p);
```

将节点插入到目标的末尾，之前两个创建节点的方法不会自动添加到文档中，所以要使用appendChild来进行添加插入。
>如果是新的节点会插入到目标的末尾，而如果本身存在的节点则是移动到最后，很多时候没注意到这点，这里可以作为移动节点来操作。


2.插入节点的目标位置:**insertBefore(new_Element,Element)**

参数：new_Element：要插入的元素对象（HTMLElement）, Element：要插入该元素对象之前（HTMLElement）

```	js
	let ul = document.getElementsByTagName("ul")[0];
	let li = ul.getElementsByTagName("li");
	let p = document.createElement("p");
	
	ul.insertBefore(p,li[1]);
```	

>将node插入到div里的p节点之前；第二个参数填null，默认会将插入的节点添加到目标的末尾，相当于appendChild。
和appendChild同理，如果插入节点存在则新删除原来的节点，然后移动到指定的位置。


3.节点替换：**replaceChild**

```js
	parent.replaceChild(newChild, oldChild);
```

### 修改内容


innerHTML	设置或获取位于对象起始和结束标签内的 HTML

outerHTML	设置或获取对象及其内容的 HTML 形式

innerText  	设置或获取位于对象起始和结束标签内的文本

outerText  	设置(包括标签)或获取(不包括标签)对象的文本
  
```js
	html:
		<div id="test1">
			这是div中的文字
			<span>这是span中的文字</span>
		</div>
		
	js:
		let test1 = document.getElementById("test1")
		
		console.log('innerHTML:'+test1.innerHTML); 
		//innerHTML:这是div中的文字<span>这是span中的文字</span>
		
        console.log('outerHTML:'+test1.outerHTML);
        //outerHTML:<div id="test1">这是div中的文字<span>这是span中的文字</span></div>
          
        console.log('innerText:'+test1.innerText);  
		//innerText:这是div中的文字这是span中的文字
        
        console.log('outerText:'+test1.outerText);  
		//outerText:这是div中的文字这是span中的文字
		
```

### DOM的样式

设置DOM的样式有很多种方式

## 1.通过元素属性设置

### setAttribute(AttrName,AttrValue)

设置元素属性

```js
	let input = document.getElementByTagName("input")[0];
	input.setAttribute("style","color:skyblue;");			
```

### getAttribute(AttrName)

获取行内属性

```js
	let input = document.getElementByTagName("input")[0];
	input.getAttribute("style");			//"color:skyblue;"
```

### removeAttribute(AttrName)

移除行内属性

```js
	let input = document.getElementByTagName("input")[0];
	input.removeAttribute("style");			
```

## 2.通过样式相关API设置

### style
只能获取和设置行内样式

```js
	elem.style.color = 'red';
	elem.style.cssText = "color:red;font-weight:bold;"
	elem.style.setProperty('font-size', '16px');
	elem.style.removeProperty('color');
```


### getComputedStyle()

能获取页面属性的最终样式，并且能获取全部样式，如果没有设置对应属性的样式，则会输出默认样式出来。
```js
	window.getComputedStyle(element, null);
```

但是，在某些浏览器下的某些属性下，会出现差异化，例如**float**浮动属性，在chrome的getComputedStyle方法中的属性名叫做ccsFloat，但IE支持下的currentStyle中的属性值叫做styleFloat。


### getPropertyValue
`getPropertyValue`方法可以获取CSS样式申明对象上的属性值（直接属性名称）

```js
	window.getComputedStyle(element, null).getPropertyValue("float");
```

### 获取样式的兼容写法

```js
	//获取当前样式
	function getStyle(element, att){
	    //特性侦测
	    if(window.getComputedStyle){
	        //优先使用W3C规范
	        return window.getComputedStyle(element).getPropertyValue(att);
	    }else{
	        //针对IE9以下兼容
	        return element.currentStyle[att];
	    }
	}
```

## 3.通过切换类名改变样式

### className

可读取或改写元素的class的属性值

example:
```js
	div.className = "div1 div2";
```

### classList

可读取、增加、删除、切换元素的class类名，和获取元素的class类数组和字符串。

example:
```js
	//读取
	console.log( div.classList );
	// ["div1", "div2", value: "div1 div2"]
	
	//增加
	div.classList.add("active");
	// ["div1", "div2","active", value: "div1 div2 active"]
	
	//删除
	div.classList.remove("active");
	// ["div1", "div2", value: "div1 div2"]
	
	//切换（有则删除，无则增加）
	div.classList.toggle("active");
	// ["div1", "div2","active", value: "div1 div2 active"]
```

# 获取元素最终渲染样式列表——getComputedStyle
getComputedStyle(元素,伪对象)
```js
getComputedStyle(div,":after")
```

# 样式列表中获取指定的样式值-getPropertyValue
```js
let div = document.querySelector("div");
let div_css = getComputedStyle(div,":after");

div_css.getPropertyValue("width");  //两种方式都可以
div_css.width;

```

# 获取行内属性——getAttribute
只能获取设置在元素上设置好的属性   
经典的几个场景，例如复选框单选框的checked属性，最好是直接
```js
input.checked   //这样来获取
```

# 设置行内属性——setAttribute
只能把属性设置在元素上设置  
经典的几个场景，例如复选框单选框的checked属性，最好是直接
```js
input.checked=true  //这样来设置
```

### getElement和querySelector

getElement系列返回一个节点或者一个类数组的节点集合，HTMLCollection对象（动态的NodeList对象）。动态的 Node List， 每一次调用 lis 都会重新对文档进行查询，导致无限循环的问题。
querySelector系列返回一个节点或者一个类数组的节点集合，静态NodeList对象。静态的 Node List，是一个 li 集合的快照，对文档的任何操作都不会对其产生影响。

### 什么是NodeList？
本质上是一个动态的 Node 集合，只是规范中对 querySelectorAll 有明确要求，规定其必须返回一个静态的 NodeList 对象。

### 什么是HTMLCollection？
HTMLCollection 和 NodeList 十分相似，都是一个动态的元素集合，每次访问都需要重新对文档进行查询。两者的本质上差别在于，HTMLCollection 是属于 Document Object Model HTML 规范，而 NodeList 属于 Document Object Model Core 规范。

### 两者的区别
NodeList 对象会包含文档中的所有节点，如 Element、Text 和 Comment 等。HTMLCollection  对象只会包含文档中的 Element 节点。另外，HTMLCollection 对象比 NodeList 对象 多提供了一个 namedItem 方法。





