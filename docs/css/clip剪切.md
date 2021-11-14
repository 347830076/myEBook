## clip 剪辑一个绝对定位的元素

剪辑一个绝对定位的元素

```html
<!DOCTYPE html>
<html>
  <head>
  <meta charset="utf-8"> 
  <title></title> 
  <style>
    img {
      position:absolute;
      clip:rect(0px,60px,200px,0px);
    }
  </style>
  </head>
  <body>
    <img src="../img/lufei.jpg" alt="路飞">
  </body>
</html>
```