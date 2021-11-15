## cursor 定义光标形状

cursor属性定义了鼠标指针放在一个元素边界范围内时所用的光标形状

|值| 	描述|
| ---- | ---- |
| url | 	需使用的自定义光标的 URL。 注释：请在此列表的末端始终定义一种普通的光标，以防没有由 URL 定义的可用光标。|
| default | 	默认光标（通常是一个箭头）|
| auto 	|默认。浏览器设置的光标。|
| context-menu| 指针下有可用内容目录。|
| pointer| 	光标呈现为指示链接的指针（一只手）|
| cell |  指示单元格可被选中 |
| crosshair| 	光标呈现为十字线。|
| text 	|此光标指示文本。|
| vertical-text | 指示垂直文字可被选中 |
| alias | 复制或快捷方式将要被创建 |
| copy | 指示可复制 |
| no-drop | 不能执行 |
| not-allowed | 不能执行 |
| grab | 可抓取 |
| grabbing | 抓取中 |
| all-scroll | 元素可任意方向滚动 （平移）|
| col-resize | 元素可被重设宽度。通常被渲染为中间有一条竖线分割的左右两个箭头 |
| row-resize | 元素可被重设高度。通常被渲染为中间有一条横线分割的上下两个箭头 |
| move |	此光标指示某对象可被移动。|
| e-resize| 	此光标指示矩形框的边缘可被向右（东）移动。|
| ne-resize |	此光标指示矩形框的边缘可被向上及向右移动（北/东）。|
| nw-resize 	| 此光标指示矩形框的边缘可被向上及向左移动（北/西）。|
| n-resize 	| 此光标指示矩形框的边缘可被向上（北）移动。|
| se-resize |	此光标指示矩形框的边缘可被向下及向右移动（南/东）。|
| sw-resize |	此光标指示矩形框的边缘可被向下及向左移动（南/西）。|
| s-resize 	| 此光标指示矩形框的边缘可被向下移动（南）。|
| w-resize 	| 此光标指示矩形框的边缘可被向左移动（西）。|
| wait 	| 此光标指示程序正忙（通常是一只表或沙漏）。|
| help 	| 此光标指示可用的帮助（通常是一个问号或一个气球）。|
| zoom-in | 指示可被放大 |
| zoom-out | 指示可被缩小 |


<iframe height="600" style="width: 100%;" scrolling="no" title="css 光标" src="https://codepen.io/347830076/embed/xxVLqgB?height=265&theme-id=dark&default-tab=html,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/347830076/pen/xxVLqgB'>css 光标</a> by cylyiou
  (<a href='https://codepen.io/347830076'>@347830076</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

### 自定义鼠标显示图标，需注意下面几个问题

- 一般将图片存为cur或ico或svg格式比较好
- 图片地址为绝对路径，
- 图片大小最好是32*32的大小

```css
html{
  cursor: url('http://ebook.wanggege.cn/assets/img/hot.a7dac470.svg'), auto;
}
```

<div style="cursor: url('http://ebook.wanggege.cn/assets/img/hot.a7dac470.svg'), auto;">
  svg图片，可以右键复制链接 <img src="./img/hot.svg" class="zoom-custom-imgs" />
</div>