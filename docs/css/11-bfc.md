# BFC

## 1.常见定位方案

### 1.1 普通流(normal flow)

> 在普通流中，元素按照其在 HTML 中的先后位置至上而下布局，在这个过程中，行内元素水平排列，直到当行被占满然后换行，块级元素则会被渲染为完整的一个新行，除非另外指定，否则所有元素默认都是普通流定位，也可以说，普通流中元素的位置由该元素在 HTML 文档中的位置决定。

### 1.2 浮动(float)

> 在浮动布局中，元素首先按照普通流的位置出现，然后根据浮动的方向尽可能的向左边或右边偏移，其效果与印刷排版中的文本环绕相似。

### 1.3 绝对定位(absolute positioning)

> 在绝对定位布局中，元素会整体脱离普通流，因此绝对定位元素不会对其兄弟元素造成影响，而元素具体的位置由绝对定位的坐标决定。

## 2.BFC 概念

**Formatting context(格式化上下文) 是 W3C CSS2.1 规范中的一个概念。它是页面中的一块渲染区域，并且有一套渲染规则，它决定了其子元素将如何定位，以及和其他元素的关系和相互作用。**

**块格式化上下文（block formatting context） 是 Web 页面的可视化 CSS 渲染出的一部分。它是块级盒布局出现的区域，也是浮动层元素进行交互的区域。**

### 2.1 BFC(块格式化上下文)的布局规则

- 内部的 Box 会在垂直方向，一个接一个地放置。
- Box 垂直方向的距离由 margin 决定。属于同一个 BFC 的两个相邻 Box 的 margin 会发生重叠。
- 每个盒子（块盒与行盒）的 margin box 的左边，与包含块 border box 的左边相接触(对于从左往右的格式化，否则相反)。即使存在浮动也是如此。
- BFC 的区域不会与 float box 重叠。
- BFC 就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。反之也如此。
- 计算 BFC 的高度时，浮动元素也参与计算。

### 2.2 如何创建 BFC

- body 根元素
- 浮动元素：float 除 none 以外的值
- 绝对定位元素：position (absolute、fixed)
- display 为 inline-block、table-cells、flex
- overflow 除了 visible 以外的值 (hidden、auto、scroll)

### 2.3 BFC 特性的应用

#### 2.3.1 同一个 BFC 下外边距会发生折叠

```html
<div></div>
<div></div>
```

```css
div {
  width: 100px;
  height: 100px;
  background-color: skyblue;
  margin: 100px;
}
```

**由于两个 div 同处于同一个 BFC 容器下(body 元素)，所以第一个 div 的 margin-bottom 和第二个 div 的 margin-top 发生重叠。**

---

```html
<div>
  <p></p>
</div>
<div>
  <p></p>
</div>
```

```css
div {
  overflow: hidden;
}

p {
  width: 100px;
  height: 100px;
  background-color: skyblue;
  margin: 100px;
}
```

**两个 div 都通过 overflow: hidden;开启了 BFC，所以两个 p 标签处于不同的 BFC 容器里面，就可以避免上下外边距重叠。**

#### 2.3.2 BFC 可以包含浮动元素(清除浮动)

**由于里面的 div 浮动脱离文档流，所以外面的容器只剩下 2px 的边框高度。**

```html
<div style="border: 1px solid #000;">
  <div style="width: 100px;height: 100px;background: #eee;float: left;"></div>
</div>
```

<iframe height="350" style="width: 100%;" scrolling="no" title="css bfc4" src="https://codepen.io/347830076/embed/wvGqxzL?height=265&theme-id=dark&default-tab=html,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/347830076/pen/wvGqxzL'>css bfc4</a> by cylyiou
  (<a href='https://codepen.io/347830076'>@347830076</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

**设置 外面容器bfc模式，就可以清除了浮动效果**
```html
<div style="border: 1px solid #000;overflow: hidden">
  <div style="width: 100px;height: 100px;background: #eee;float: left;"></div>
</div>
```

<iframe height="350" style="width: 100%;" scrolling="no" title="css bfc3" src="https://codepen.io/347830076/embed/abNyjmy?height=265&theme-id=dark&default-tab=html,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/347830076/pen/abNyjmy'>css bfc3</a> by cylyiou
  (<a href='https://codepen.io/347830076'>@347830076</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

#### 2.3.3 BFC 可以阻止元素被浮动元素覆盖

```html
<div style="height: 100px;width: 100px;float: left;background: lightblue">
  我是一个左浮动的元素
</div>
<div style="width: 200px; height: 200px;background: #eee">
  我是一个没有设置浮动, 也没有触发 BFC 元素, width: 200px; height:200px;
  background: #eee;
</div>
```
<iframe height="350" style="width: 100%;" scrolling="no" title="css bfc " src="https://codepen.io/347830076/embed/dyMzjMe?height=265&theme-id=dark&default-tab=html,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/347830076/pen/dyMzjMe'>css bfc </a> by cylyiou
  (<a href='https://codepen.io/347830076'>@347830076</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

---

```html
<div style="height: 100px;width: 100px;float: left;background: lightblue">
  我是一个左浮动的元素
</div>
<div style="width: 200px; height: 200px;background: #eee; overflow: hidden;">
  我是一个没有设置浮动, 触发 BFC 元素, width: 200px; height:200px; background:
  #eee;
</div>
```
<iframe height="350" style="width: 100%;" scrolling="no" title="css bfc2" src="https://codepen.io/347830076/embed/JjXyBKO?height=265&theme-id=dark&default-tab=html,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/347830076/pen/JjXyBKO'>css bfc2</a> by cylyiou
  (<a href='https://codepen.io/347830076'>@347830076</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>