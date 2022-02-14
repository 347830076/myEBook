# CSS Grid 网格布局教程

## 一、概述

网格布局（Grid）是最强大的 CSS 布局方案。

它将网页划分成一个个网格，可以任意组合不同的网格，做出各种各样的布局。以前，只能通过复杂的 CSS 框架达到的效果，现在浏览器内置了。

<img  class="zoom-custom-imgs" src="https://www.wangbase.com/blogimg/asset/201903/1_bg2019032501.png">

上图这样的布局，就是 Grid 布局的拿手好戏。

Grid 布局与 [Flex 布局](./17-flex弹性布局.md)有一定的相似性，都可以指定容器内部多个项目的位置。但是，它们也存在重大区别。

Flex 布局是轴线布局，只能指定"项目"针对轴线的位置，可以看作是**一维布局**。Grid 布局则是将容器划分成"**行**"和"**列**"，产生**单元格**，然后指定"项目所在"的单元格，可以看作是**二维布局**。Grid 布局远比 Flex 布局强大。

## 二、基本概念

学习 Grid 布局之前，需要了解一些基本概念。
### 2.1 容器和项目

采用网格布局的区域，称为"**容器**"（container）。容器内部采用网格定位的子元素，称为"**项目**"（item）。

```html
<style>
    .box{
        display: grid;
    }
</style>

<div class="box">
  <div><p>1</p></div>
  <div><p>2</p></div>
  <div><p>3</p></div>
</div>
```

上面代码中，最外层的`<div>`元素就是`容器`，内层的三个`<div>`元素就是`项目`。

注意：项目只能是`容器的顶层子元素`，不包含项目的子元素，比如上面代码的`<p>`元素就不是项目。`Grid 布局只对项目生效`。

### 2.2 行和列

容器里面的**水平区域称为"行"**（row），**垂直区域称为"列"**（column）。和表格 table 一样

### 2.3 单元格

行和列的**交叉区域**，称为"**单元格**"（cell）。

正常情况下，**n 行**和 **m 列**会产生 **n x m 个单元格**。比如，3行3列会产生9个单元格。

### 2.4 网格线

划分网格的线，称为"网格线"（grid line）。水平网格线划分出行，垂直网格线划分出列。

正常情况下，n行有n + 1根水平网格线，m列有m + 1根垂直网格线，比如三行就有四根水平网格线。

<img  class="zoom-custom-imgs" src="https://www.wangbase.com/blogimg/asset/201903/1_bg2019032503.png">

上图是一个 4 x 4 的网格，共有5根水平网格线和5根垂直网格线。

## 三、容器属性

Grid 布局的属性分成两类。一类定义在容器上面，称为**容器属性**；另一类定义在项目上面，称为**项目属性**。这部分先介绍容器属性。

### 3.1 display 属性

`display: grid;` 指定一个容器采用网格布局。

```css
div {
  display: grid;
}
```
<iframe height="340" style="width: 100%;" scrolling="no" title="Untitled" src="https://codepen.io/347830076/embed/XWzgGeK?default-tab=html%2Cresult&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/347830076/pen/XWzgGeK">
  Untitled</a> by cylyiou (<a href="https://codepen.io/347830076">@347830076</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

默认情况下，容器元素都是**块级元素**，但也可以设成**行内元素**。

```css
div {
  display: inline-grid;
}
```

<iframe height="340" style="width: 100%;" scrolling="no" title="Untitled" src="https://codepen.io/347830076/embed/xxPrBYd?default-tab=html%2Cresult&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/347830076/pen/xxPrBYd">
  Untitled</a> by cylyiou (<a href="https://codepen.io/347830076">@347830076</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

上面代码指定div是一个行内元素，该元素内部采用网格布局。

> 注意，设为网格布局以后，容器子元素（项目）的float、display: inline-block、display: table-cell、vertical-align和column-*等设置都将失效。

### 3.2 grid-template-columns 属性，grid-template-rows 属性

容器指定了网格布局以后，接着就要划分行和列。
- `grid-template-columns`属性定义每一列的列宽
- `grid-template-rows`属性定义每一行的行高



转载文章：[阮一峰 Grid 网格布局教程](https://www.ruanyifeng.com/blog/2019/03/grid-layout-tutorial.html)

<!-- ### 想了解Grid 网格布局教程，可以去看看 <a href="https://www.ruanyifeng.com/blog/2019/03/grid-layout-tutorial.html" target="_blank">阮一峰 Grid 网格布局教程</a>

阮一峰老师的博客教程，讲的很详细了，我这里就不再重复造轮子了。 -->