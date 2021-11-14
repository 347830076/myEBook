## overflow 属性

设置当元素的内容溢出其区域时发生的事情。

|值| 	描述|
| ---- | ---- |
|visible |	默认值。内容不会被修剪，会呈现在元素框之外。|
|hidden |	内容会被修剪，并且其余内容是不可见的。|
|scroll |	内容会被修剪，但是浏览器会显示滚动条以便查看其余的内容。|
|auto |	如果内容被修剪，则浏览器会显示滚动条以便查看其余的内容。|
|inherit 	|规定应该从父元素继承 overflow 属性的值。|

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8"> 
<title>菜鸟教程(runoob.com)</title> 
<style>
div.ex1 {
    background-color: lightblue;
    width: 110px;
    height: 110px;
    overflow: scroll;
}

div.ex2 {
    background-color: lightblue;
    width: 110px;
    height: 110px;
    overflow: hidden;
}

div.ex3 {
    background-color: lightblue;
    width: 110px;
    height: 110px;
    overflow: auto;
}

div.ex4 {
    background-color: lightblue;
    width: 110px;
    height: 110px;
    overflow: visible;
}
</style>
</head>
<body>
<h1>overflow 属性</h1>

<p>如果元素中的内容超出了给定的宽度和高度属性，overflow 属性可以确定是否显示滚动条等行为。</p>

<h2>overflow: scroll:</h2>
<div class="ex1"> -- 学的不仅是技术，更是梦想！！！ -- 学的不仅是技术，更是梦想！！！ -- 学的不仅是技术，更是梦想！！！ -- 学的不仅是技术，更是梦想！！！</div>

<h2>overflow: hidden:</h2>
<div class="ex2"> -- 学的不仅是技术，更是梦想！！！ -- 学的不仅是技术，更是梦想！！！ -- 学的不仅是技术，更是梦想！！！ -- 学的不仅是技术，更是梦想！！！</div>

<h2>overflow: auto:</h2>
<div class="ex3"> -- 学的不仅是技术，更是梦想！！！ -- 学的不仅是技术，更是梦想！！！ -- 学的不仅是技术，更是梦想！！！ -- 学的不仅是技术，更是梦想！！！</div>

<h2>overflow: visible (默认):</h2>
<div class="ex4"> -- 学的不仅是技术，更是梦想！！！ -- 学的不仅是技术，更是梦想！！！ -- 学的不仅是技术，更是梦想！！！ -- 学的不仅是技术，更是梦想！！！</div>

</body>
</html>
```

<iframe height="650" style="width: 100%;" scrolling="no" title="css overflow" src="https://codepen.io/347830076/embed/LYNjWWw?height=265&theme-id=dark&default-tab=html,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/347830076/pen/LYNjWWw'>css overflow</a> by cylyiou
  (<a href='https://codepen.io/347830076'>@347830076</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>