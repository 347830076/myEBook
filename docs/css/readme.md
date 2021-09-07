# CSS简介

## 什么是 CSS?

<!-- - CSS 指**层叠样式表** (Cascading Style Sheets)
- 样式定义**如何显示** HTML 元素
- 样式通常存储在**样式表**中
- 把样式添加到 HTML 中，是为了**解决内容与表现分离的问题**
- **外部样式表**可以极大提高工作效率
- 外部样式表通常存储在 **CSS 文件**中
- 多个样式定义可**层叠**为一个 -->

 **CSS** 英文全称 `Cascading Style Sheets`，直译过来就是 **层叠样式表**，是一种用来表现 `HTML` 或 `XML` 等文件的 **样式** 的计算机语言,

 和 HTML 类似，CSS 也不是真正的编程语言，甚至不是标记语言,它是一门样式表语言。

## 语言特点

#### 1. 表现与结构分离
- 将样式部分写到CSS文件中，让HTML独立负责页面结构，这样可以使HTML更加清爽简洁，对搜索引擎更加友好。
#### 2. 简化设计开发过程
- CSS具有完善的继承和丰富的层叠效果，在页面中子元素可以很好的继承父元素中的CSS属性，同样也可以通过叠加样式去设置不同的效果。
#### 3. 提高页面浏览速度
- 页面的效果CSS样式由独立的CSS引擎渲染，就像开了双核处理器一样，加载速度显著提升。
#### 4. 支持多种设备
- CSS可以支持多种设备，比如手机，PDA，打印机， 电视机，游戏机等。
#### 5. 易于维护和改版
- 表现与结构分离后，只要修改CSS文件中相应的代码，那么整个站点的所有页面都会随之发生变动。

## 作用

- CSS把很多以前需要使用图片和脚本来实现的效果、甚至动画效果，只需要短短几行代码就能搞定。比如圆角，图片边框，文字阴影和盒阴影，过渡、动画等。
- CSS简化了前端开发工作人员的设计过程，更灵活的页面布局，更快的页面加载速度。
- 可以将站点上所有的网页风格都使用一个CSS文件进行控制，只要修改这个CSS文件中相应的代码，那么整个站点的所有页面都会随之发生变动。
- CSS可以支持多种设备,比如手机,PDA,打印机,电视机,游戏机等。


## 兼容性

由于 **浏览器大战** 导致了浏览器对于 **CSS属性** 的支持标准不一致，部分 **CSS属性** 在浏览器中可能需要添加特定的前缀。虽然目前较新版本的浏览器都已遵循W3C标准了，但为了更好的向前兼容，前缀还是少不了的。[点击查询浏览器对于 **CSS属性** 的支持情况](https://caniuse.com/)

| 前缀 		| 浏览器			| 
| :-------: | :---------------: |
| -webkit- 	| Chrome和Safari 	|
| -moz- 	| Firefox 			|
| -ms- 		| IE 				|
| -o- 		| Opera 			|


## CSS 参考手册

你可以找到更完整的CSS属性、选择器的语法，浏览器支持等资料.

### <a href="https://www.runoob.com/cssref/css-reference.html" target="_blank">CSS 属性 参考手册</a>
### <a href="https://www.runoob.com/cssref/css-selectors.html" target="_blank">CSS 选择器 参考手册</a>
### <a href="https://www.runoob.com/cssref/css-units.html" target="_blank">CSS 单位 参考手册</a>
### <a href="https://www.runoob.com/cssref/css-colors.html" target="_blank">CSS 颜色 参考手册</a>

## CSS 更多学习资料

### <a href="https://www.runoob.com/css/css-tutorial.html" target="_blank">菜鸟 css教程</a>
### <a href="https://www.w3school.com.cn/css/index.asp" target="_blank">w3cschool css教程</a>
### <a href="https://www.imooc.com/learn/9"  target="_blank">慕课网 css教程</a>
### <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS"  target="_blank" >MDN Web Docs css教程</a>
