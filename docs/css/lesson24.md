# css 常见兼容性问题以及 hack 方案

## 主流浏览器内核

| IE 浏览器 | Opera 浏览器  | Safari 浏览器 | Firefox 浏览器 | Chrome 浏览器 |
| :-------: | :-----------: | :-----------: | :------------: | :-----------: |
|  Trident  | Presto、Blink |    Webkit     |     Gecko      |     Blink     |

**因为不同浏览器的不同内核，导致了不同的渲染效果，我们在实际开发中，为了达到一致的效果，所以就出现了兼容性问题。**

## hack 方案

**由于不同厂商的流览器或某浏览器的不同版本（如 IE6-IE11,Firefox/Safari/Opera/Chrome 等），对 CSS 的支持、解析不一样，导致在不同浏览器的环境中呈现出不一致的页面展现效果。这时，我们为了获得统一的页面效果，就需要针对不同的浏览器或不同版本写特定的 CSS 样式，让它能够同时兼容不同的浏览器,我们把这个针对不同的浏览器/不同版本写相应的 CSS code 的过程，叫做 CSS hack!**

### 1.条件注释法

- lt：小于
- gt：大于
- lte：小于等于
- gte：大于等于
- !：不等于

```
// 如果浏览器是IE
<!--[if IE]>
你想要执行的代码
<![endif]-->

// 如果浏览器是IE5的版本
<!--[if IE 5]>
你想要执行的代码
<![endif]-->

<!--[if gt IE 5.5]> / 如果IE版本大于5.5 /
<!--[if lte IE 6]> / 如果IE版本小于等于6 /
<!--[if !IE]> / 如果浏览器不是IE /
```

### 2.css 属性前缀法

- `*`可以被 IE6/IE7 识别
- `-`只能被 IE6 识别
- `_`IE6 以下识别，跟`-`一样的作用
- `\9`IE6-IE10 都可以识别
- `\0`IE8/IE9/IE10 可以识别
- `\9\0` IE9 和 IE10 可以识别
- IE6 不能识别`!important`

![css属性前缀](../static/images/css/lesson24/hack.png)

```css
/*在不同IE版本显示不同文本颜色*/

.test {
  color: #090\9; /* For IE8+ */
  *color: #f00; /* For IE7 and earlier */
  -color: #ff0; /* For IE6 and earlier */
}
```

### 3. 选择符前缀法

- `*html` `*`前缀只对 IE6 生效
- `*+html` `*+`前缀会对 IE7 生效

```css
* html .test {
  color: #090;
} /* For IE6 and earlier */
* + html .test {
  color: #ff0;
} /* For IE7 */
```

## 常见兼容性问题

### 1.padding 和 margin 问题

**不同的浏览器，对默认的 margin 和 padding 解析方式不同**

#### 解决方案：

##### 解决方案一

```
body {
  margin: 0px;
  padding: 0px;
}
```

##### 解决方案二

**引入 reset.css**

```
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
```

### 2.IE6 的双倍 margin 的 bug

**当出现连续浮动的元素，携带与浮动方向相同的 margin 时，队首的元素，会双倍 marign。**

```css
<ul>
  <li></li>
  <li></li>
  <li></li>
</ul>
```

#### 解决方案

##### 方案一、

**使浮动的方向和 margin 的方向，相反。**

```css
float: left;
margin-right: 40px;
```

##### 方案二、

**使用 hack：**

```
/*单独给队首的元素，写一个一半的margin：*/

<li class='no1'></li >

ul li.no1 {
  _margin-left: 20px;
}
```

### 3.IE6 下 div 高度无法小于 10px

#### 解决方案

```css
<div style="height:2px;overflow:hidden;background:#000000;width:778px;"></div>

<div style="height:2px;font-size:2px;background:#000000;width:778px;">&nbps;</div>
```
