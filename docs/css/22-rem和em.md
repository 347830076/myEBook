# em 和 rem

## em

**相对长度单位。相对于当前对象内文本的字体尺寸。**

**如当前对行内文本的字体尺寸未被人为设置，则相对于浏览器的默认字体尺寸。**

```html
<p class="text">
  我是一段文字我是一段文字我是一段文字我是一段文字我是一段文字
  我是一段文字我是一段文字我是一段文字我是一段文字我是一段文字我是一段文字我是一段文字
  我是一段文字我是一段文字我是一段文字我是一段文字我是一段文字我是一段文字我是一段文字我是一段文字我是一段文字
</p>
```

```cs
.text {
  font-size: 16px;
  text-indent: 2em;
}
```

**通过 text-indent: 2em;首行缩进两个字符。**

## rem

**相对长度单位。相对于根元素(即 html 元素)font-size 计算值的倍数**

```html
<div class="wrapper">
  <p class="text">
    我是一段文字我是一段文字我是一段文字我是一段文字我是一段文字
    我是一段文字我是一段文字我是一段文字我是一段文字我是一段文字我是一段文字我是一段文字
    我是一段文字我是一段文字我是一段文字我是一段文字我是一段文字我是一段文字我是一段文字我是一段文字我是一段文字
  </p>
  <p class="text1">
    我是一段文字我是一段文字我是一段文字我是一段文字我是一段文字
    我是一段文字我是一段文字我是一段文字我是一段文字我是一段文字我是一段文字我是一段文字
    我是一段文字我是一段文字我是一段文字我是一段文字我是一段文字我是一段文字我是一段文字我是一段文字我是一段文字
  </p>
</div>
```

```cs
html {
  font-size: 18px;
}

.wrapper {
  font-size: 12px;
}

.text {
  font-size: 1rem;
  text-indent: 2em;
}

.text1 {
  font-size: 18px;
  text-indent: 2em;
}
```

## em 和 rem 的区别

**em 和 rem 单位之间的区别是浏览器根据谁来转化成 px 值**

- rem 单位翻译为像素值是由 html 元素的字体大小决定的。 此字体大小会被浏览器中字体大小的设置影响，除非显式重写一个具体单位。
- em 单位转为像素值，取决于他们使用的字体大小。 此字体大小受从父元素继承过来的字体大小，除非显式重写与一个具体单位。

## vw 和 vh 的认识和使用

## vw

**相对于视口的宽度。视口被均分为 100 单位的 vw**

## vh

**相对于视口的高度。视口被均分为 100 单位的 vh**

## 什么是视口

**在桌面端，视口指的是在桌面端，指的是浏览器的可视区域；而在移动端，它涉及 3 个视口：Layout Viewport（布局视口），Visual Viewport（视觉视口），Ideal Viewport（理想视口）。**

**视口单位中的“视口”，桌面端指的是浏览器的可视区域；移动端指的就是 Viewport 中的 Layout Viewport。**

- 1vw：1vw 等于视口宽度的 1%
- 1vh：1vh 等于视口高度的 1%


## rem的应用

### <a href="http://imochen.github.io/hotcss/" target="_blank" style="color:red">移动端布局终极解决方案</a>

## CSS3 @media 查询

**定义和使用**

使用 `@media` 查询，你可以针对不同的媒体类型定义不同的样式。

`@media` 可以针对不同的屏幕尺寸设置不同的样式，特别是如果你需要设置设计响应式的页面，`@media` 是非常有用的。

当你重置浏览器大小的过程中，页面也会根据浏览器的宽度和高度重新渲染页面。

### CSS 语法

```cs
@media mediatype and|not|only (media feature) {
    CSS-Code;
}
```

你也可以针对不同的媒体使用不同 stylesheets :

```cs
<link rel="stylesheet" media="mediatype and|not|only (media feature)" href="mystylesheet.css">
```

### 媒体类型

|值|	描述|
| ---- | ---- |
|all|	用于所有设备|
|print	|用于打印机和打印预览|
|screen|	用于电脑屏幕，平板电脑，智能手机等。|
|speech	|应用于屏幕阅读器等发声设备|


### 媒体功能

|值|	描述|
| ---- | ---- |
|aspect-ratio	|定义输出设备中的页面可见区域宽度与高度的比率|
|color	|定义输出设备每一组彩色原件的个数。如果不是彩色设备，则值等于0|
|color-index	|定义在输出设备的彩色查询表中的条目数。如果没有使用彩色查询表，则值等于0|
|device-aspect-ratio	|定义输出设备的屏幕可见宽度与高度的比率。|
|device-height	|定义输出设备的屏幕可见高度。|
|device-width	|定义输出设备的屏幕可见宽度。|
|grid	|用来查询输出设备是否使用栅格或点阵。|
|height	|定义输出设备中的页面可见区域高度。|
|max-aspect-ratio	|定义输出设备的屏幕可见宽度与高度的最大比率。|
|max-color	|定义输出设备每一组彩色原件的最大个数。|
|max-color-index	|定义在输出设备的彩色查询表中的最大条目数。|
|max-device-aspect-ratio	|定义输出设备的屏幕可见宽度与高度的最大比率。|
|max-device-height	|定义输出设备的屏幕可见的最大高度。|
|max-device-width	|定义输出设备的屏幕最大可见宽度。|
|max-height	|定义输出设备中的页面最大可见区域高度。|
|max-monochrome	|定义在一个单色框架缓冲区中每像素包含的最大单色原件个数。|
|max-resolution	|定义设备的最大分辨率。|
|max-width	|定义输出设备中的页面最大可见区域宽度。|
|min-aspect-ratio	|定义输出设备中的页面可见区域宽度与高度的最小比率。|
|min-color	|定义输出设备每一组彩色原件的最小个数。|
|min-color-index	|定义在输出设备的彩色查询表中的最小条目数。|
|min-device-aspect-ratio	|定义输出设备的屏幕可见宽度与高度的最小比率。|
|min-device-width	|定义输出设备的屏幕最小可见宽度。|
|min-device-height	|定义输出设备的屏幕的最小可见高度。|
|min-height	|定义输出设备中的页面最小可见区域高度。|
|min-monochrome	|定义在一个单色框架缓冲区中每像素包含的最小单色原件个数|
|min-resolution	|定义设备的最小分辨率。|
|min-width	|定义输出设备中的页面最小可见区域宽度。|
|monochrome	|定义在一个单色框架缓冲区中每像素包含的单色原件个数。如果不是单色设备，则值等于0|
|orientation	|定义输出设备中的页面可见区域高度是否大于或等于宽度。|
|resolution	|定义设备的分辨率。如：96dpi, 300dpi, 118dpcm|
|scan	|定义电视类设备的扫描工序。|
|width	|定义输出设备中的页面可见区域宽度。|

```cs
/* 最大宽度320px, 意思是小于320的屏幕则引入m320.css这个css文件 */
<link rel="stylesheet" type="text/css" href="m320.css" media="only screen and (max-width:320px)"/>
/* 最小宽度321px,最大375px, 意思是大于320px和小于375px的屏幕则引入m375.css这个css文件 */
<link rel="stylesheet" type="text/css" href="m375.css" media="only screen and (min-width:321px) and (max-width:375px)"/>
```

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>媒体查询</title>
    <!--  最大宽度320px, 意思是小于320的屏幕则引入m320.css这个css文件  -->
    <link rel="stylesheet" type="text/css" href="m320.css" media="only screen and (max-width:320px)" />
    <!--  最小宽度321px,最大375px, 意思是大于320px和小于375px的屏幕则引入m375.css这个css文件  -->
    <link rel="stylesheet" type="text/css" href="m375.css"
        media="only screen and (min-width:321px) and (max-width:375px)" />

    <style>
        @media screen and (min-width: 500px) {
            div{
                font-size: 50px;
            }
        }
        @media screen and (min-width: 1000px) {
            div{
                font-size: 100px;
            }
        }
    </style>
</head>

<body>
    <div>我是一个div</div>
</body>

</html>
```

## Bootstrap

简洁、直观、强悍的前端开发框架，让web开发更迅速、简单。

### <a href="https://www.bootcss.com/" style="color:red">点击查看 Bootstrap框架官网</a>
