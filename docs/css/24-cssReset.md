# CSS Reset 样式重置

所有浏览器都有附带的默认样式，这些样式应用在每一个页面，叫做“用户代理样式表”。

虽然大部分相同，但也有很多样式是不一致的，如搜索输入框

!['cssReset'](../assets/input.png)

所以我们需要reset css处理，统一不同浏览器差异确认团队开发的起始标准，弥补浏览器的‘缺点’。

写页面的时候，建立一个style.css , 把下面的css代码复制到style.css文件即可， 在页面通过引用css文件就可以了。

```css
html,
body {
	font-family: sans-serif, PingFangSC-Regular, "Noto Sans CJK SC", "Source Han Sans CN", Heiti, Heiti SC, DroidSans, DroidSansFallback, Arial, "Microsoft YaHei";
	font-size: 14px;
	color: #333;
	height: 100%;
	-webkit-touch-callout: none;
	-webkit-text-size-adjust: none;
	-webkit-tap-highlight-color: transparent;
	// -webkit-user-select: none;
}

a,
body,
center,
cite,
code,
dd,
del,
div,
dl,
dt,
em,
fieldset,
figcaption,
figure,
footer,
form,
h1,
h2,
h3,
h4,
h5,
h6,
header,
hr,
html,
img,
input,
label,
legend,
li,
mark,
ol,
p,
section,
span,
strong,
textarea,
time,
ul,
var {
	margin: 0;
	border: 0;
	padding: 0;
	font-style: normal;
	box-sizing: border-box;
}

article,
aside,
details,
fieldset,
figcaption,
figure,
footer,
header,
main,
nav,
section {
	display: block
}

a,
button,
cite,
code,
del,
em,
img,
label,
mark,
small,
strong,
textarea,
time,
var {
	display: inline-block
}

footer,
header,
section {
	position: relative
}

ol,
li,
ul {
	list-style: none
}

button,
input,
textarea {
	font-family: "Helvetica Neue", Helvetica, Arial, "Microsoft YaHei", "微软雅黑", "黑体", "宋体", Arial, sans-serif;
	border: 0;
	margin: 0;
	padding: 0;
	font-size: 1em;
	line-height: 1em;
	outline:none;
	background-color: transparent;
}
/*去掉按下的阴影盒子*/
input, textarea, a {
    -webkit-tap-highlight-color: transparent;
}
textarea{
	resize:none;
	-webkit-appearance: none;
} 
span {
  display: inline-block
}

a:active,
a:hover {
	outline: 0
}

a,
a:visited {
	text-decoration: none
}
a:focus{outline:none;}/*FF下 */
.wordWrap,
label {
	word-wrap: break-word;
	word-break: break-all
}

table {
	border-collapse: collapse;
	border-spacing: 0
}

td,
th {
	padding: 0
}

a,input{-webkit-tap-highlight-color:rgba(255,0,0,0);
}
input::-webkit-input-placeholder{/* WebKit browsers */
	color: #c7c7c7;
}
input:-moz-placeholder{ /* Mozilla Firefox 4 to 18 */
	color: #c7c7c7;
}
input::-moz-placeholder{ /* Mozilla Firefox 19+ */
	color: #c7c7c7;
}
input:-ms-input-placeholder{ /* Internet Explorer 10+ */
	color: #c7c7c7;
}

textarea::-webkit-input-placeholder{/* WebKit browsers */
	color: #c7c7c7;
}
textarea:-moz-placeholder{ /* Mozilla Firefox 4 to 18 */
	color: #c7c7c7;
}
textarea::-moz-placeholder{ /* Mozilla Firefox 19+ */
	color: #c7c7c7;
}
textarea:-ms-input-placeholder{ /* Internet Explorer 10+ */
	color: #c7c7c7;
}
```