# 显示网页 icon

**实例：**

1. 访问<a href="http://www.bitbug.net/" target="_blank">在线制作ico图标</a>，上传你想显示的图片，最好是方形的图片

2. 下载 32X32 尺寸，并把图片放到项目目录中

3. 在页面 head 标签中，插入以下代码，href 的值为你的 icon 相对地址

```html
<!-- 
  rel: 规定当前文档与被链接文档之间的关系。
  href: 规定被链接文档的位置。
  type：规定被链接文档的 MIME 类型。
 -->
<link rel="shortcut icon" href="img/web.icon" type="image/x-icon"/>
```
