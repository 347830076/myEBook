## overflow

设置当元素的内容溢出其区域时发生的事情，它是`overflow-x`和`overflow-y`的简写属性 。

|值| 	描述|
| ---- | ---- |
|visible |	默认值。内容不会被修剪，会呈现在元素框之外。|
|hidden |	内容会被修剪，并且其余内容是不可见的。|
|scroll |	内容会被修剪，但是浏览器会显示滚动条以便查看其余的内容。|
|auto |	如果内容被修剪，则浏览器会显示滚动条以便查看其余的内容。|
|inherit 	|规定应该从父元素继承 overflow 属性的值。|
|overlay | 行为与auto相同，但滚动条绘制在内容之上而不是占用空间。`（实验中的属性）`仅在基于WebKit（例如，Safari）和基于Blink的（例如，Chrome或Opera）浏览器中受支持|

```
overflow: auto;
overflow-x: scroll;
overflow-y: hidden;
```

如果指定了两个关键字，第一个关键字应用于`overflow-x`，第二个关键字应用于`overflow-y`。

```
overflow: auto hidden;
```

<iframe height="650" style="width: 100%;" scrolling="no" title="css overflow" src="https://codepen.io/347830076/embed/LYNjWWw?height=265&theme-id=dark&default-tab=html,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/347830076/pen/LYNjWWw'>css overflow</a> by cylyiou
  (<a href='https://codepen.io/347830076'>@347830076</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>