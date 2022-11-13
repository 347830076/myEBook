# web存储

当我们的网站，想做一些数据存储的功能，怎么办呢？ 比如常见的就是，保存每个用户自己的登录账号密码信息。

浏览器就提供了三种数据存储的方式

## JavaScript Cookie

<!-- 2. UserData
    - 只有IE才支持
    - xml文件 -->

Cookie 用于存储 web 页面的用户信息。

    - 通过http请求头带到不同页面上
    - 一个域名下的cookie大小限制为4k（谷歌火狐不限制大小，但数量过多同样会有问题）
    - 主域名污染，子域名的请求，都会把主域名的cookie带上。
    (可以比较qq.com和y.qq.com的cookie比较`document.cookie="lesson=html5;path=/;domain=qq.com"`)

### 什么是 Cookie？

Cookie 是一些数据, 存储于你电脑上的文本文件中。

Cookie 的作用就是用于解决 "如何记录客户端的用户信息":
- 当用户访问 web 页面时，他的名字可以记录在 cookie 中。
- 在用户下一次访问该页面时，可以在 cookie 中读取用户访问记录。

Cookie 以名/值对形式存储，如下所示:

```js
username=阿离王
```
当浏览器从服务器上请求 web 页面时， 属于该页面的 cookie 会被添加到该请求中。服务端通过这种方式来获取用户的信息。

JavaScript 可以使用 document.cookie 属性来创建 、读取、及删除 cookie。


### 创建 cookie 如下所示：
```js
document.cookie="username=阿离王";
```

您还可以为 cookie 添加一个过期时间（以 UTC 或 GMT 时间）。默认情况下，cookie 在浏览器关闭时删除

```js
document.cookie="username=阿离王; expires=Thu, 18 Dec 2043 12:00:00 GMT; path=/d";
```

### 读取 cookie：

```js
const name = document.cookie;
```

### 修改 cookie

```js
document.cookie="username=阿离王2; expires=Thu, 18 Dec 2043 12:00:00 GMT; path=/";
```
旧的 cookie 将被覆盖。

### 删除 Cookie
删除 cookie 非常简单。您只需要设置 expires 参数为以前的时间即可，如下所示，设置为 Thu, 01 Jan 1970 00:00:00 GMT:
```js
document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
```

### 下面我们来个JavaScript Cookie 实例

在以下实例中，我们将创建 cookie 来存储访问者名称。

首先，访问者访问 web 页面, 他将被要求填写自己的名字。该名字会存储在 cookie 中。

访问者下一次访问页面时，他会看到一个欢迎的消息。

在这个实例中我们会创建 3 个 JavaScript 函数:

设置 cookie 值的函数

获取 cookie 值的函数

检测 cookie 值的函数

### 设置 cookie 值的函数

首先，我们创建一个函数用于存储访问者的名字：

```js
/*
cname:  键名
cvalue: 键值
exdays: 存储天数
*/
function setCookie(cname, cvalue, exdays)
{
  let d = new Date(); //时间对象， d.getTime() 获取时间戳
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  let expires = "expires=" + d.toGMTString();
  document.cookie = cname + "=" + cvalue + "; " + expires;
}
```
函数解析：

以上的函数参数中，cookie 的名称为 cname，cookie 的值为 cvalue，并设置了 cookie 的过期时间 expires。

该函数设置了 cookie 名、cookie 值、cookie过期时间。

### 获取 cookie 值的函数

然后，我们创建一个函数用于返回指定 cookie 的值：

```js
function getCookie(cname)
{
  let name = cname + "=";
  let ca = document.cookie.split(';');
  for(let i = 0; i < ca.length; i++) 
  {
    let c = ca[i].trim(); //清除字符串左右空格
    //找到则返回对应的值
    if (c.indexOf(name) == 0){
         return c.substring(name.length, c.length);
    }
  }
  return "";
}
```

函数解析：

cookie 名的参数为 cname。

创建一个文本变量用于检索指定 cookie :cname + "="。

使用分号来分割 document.cookie 字符串，并将分割后的字符串数组赋值给 ca (ca = document.cookie.split(';'))。

循环 ca 数组 (i=0;i < ca.length;i++)，然后读取数组中的每个值，并去除前后空格 (c=ca[i].trim())。

如果找到 cookie(c.indexOf(name) == 0)，返回 cookie 的值 (c.substring(name.length,c.length)。

如果没有找到 cookie, 返回 ""。

### 检测 cookie 值的函数
最后，我们可以创建一个检测 cookie 是否创建的函数。

如果设置了 cookie，将显示一个问候信息。

如果没有设置 cookie，将会显示一个弹窗用于询问访问者的名字，并调用 setCookie 函数将访问者的名字存储 365 天：

```js
function checkCookie()
{
  let username = getCookie("username");
  if (username != "")
  {
    alert("Welcome again " + username);
  }
  else 
  {
    username = prompt("Please enter your name:","");
    if (username != "" && username!=null)
    {
      setCookie("username", username, 365);
    }
  }
}
```

完整代码如下：

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>教程</title>
</head>
<head>
<script>
    // 设置cookie
    function setCookie(cname, cvalue, exdays)
    {
        let d = new Date(); //时间对象， d.getTime() 获取时间戳
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        let expires = "expires=" + d.toGMTString();
        document.cookie = cname + "=" + cvalue + "; " + expires;
    }
    // 获取cookie
    function getCookie(cname)
    {
        let name = cname + "=";
        let ca = document.cookie.split(';');
        for(let i = 0; i < ca.length; i++) 
        {
            let c = ca[i].trim(); //清除字符串左右空格
            //找到则返回对应的值
            if (c.indexOf(name) == 0){
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }
    // 检查是否设置过cookie，有则弹窗欢迎，没则弹窗请用户输入用户名
    function checkCookie()
    {
        let username = getCookie("username");
        if (username != "")
        {
            alert("Welcome again " + username);
        }
        else 
        {
            username = prompt("Please enter your name:","");
            if (username != "" && username!=null)
            {
            setCookie("username", username, 365);
            }
        }
    }
</script>
</head>
	
<body onload="checkCookie()"></body>
	
</html>
```

## html5提供的web存储方法

HTML5 web 存储,一种比cookie更好的本地存储方式。

提供两种web存储方法，localStorage 与 sessionStorage
    - 解决了存储大小的问题
    - 解决了请求头臃肿的问题
    - 跨浏览器
    - 键值对的形式进行存储
    

## localStorage 与 sessionStorage 区别

- 过期时间：
        localStorage没有过期时间，只要不clear或remove，数据会一直保存。
        sessionStorage 当用户关闭浏览器后，数据将被删除。
- 大小：
        localStorage标准大小限制为5M

## 浏览器是否支持:

```javascript
if(typeof(Storage)!=="undefined")
{
	// 是的! 支持 localStorage  sessionStorage 对象!
	// 一些代码.....
}
else
{
	// 抱歉! 不支持 web 存储。
}

```
	
Internet Explorer 8+, Firefox, Opera, Chrome, 和 Safari支持Web 存储。      
注意: Internet Explorer 7 及更早IE版本不支持web 存储.

## 两者特点：
localStorage和sessionStorage都具有相同的操作方法，例如setItem、getItem和removeItem等

## localStorage和sessionStorage的方法

- setItem存储value
用途：将value存储到key字段
用法：.setItem( key, value)

代码示例：

```javascript
sessionStorage.setItem("key", "value");
localStorage.setItem("site", "js8.in");
```

- getItem获取value
用途：获取指定key本地存储的值
用法：.getItem(key)
代码示例：

```javascript
let value = sessionStorage.getItem("key");
let site = localStorage.getItem("site");
```

- removeItem删除key
用途：删除指定key本地存储的值
用法：.removeItem(key)
代码示例：

```javascript
sessionStorage.removeItem("key");
localStorage.removeItem("site");
```

- clear清除所有的key/value
用途：清除所有的key/value
用法：.clear()
代码示例：

```javascript
sessionStorage.clear();
localStorage.clear();
```


- 其他操作方法：点操作和[]
web Storage不但可以用自身的setItem,getItem等方便存取，也可以像普通对象一样用点(.)操作符，及[]的方式进行数据存储，像如下的代码：

```javascript
let storage = window.localStorage;
storage.key1 = "hello";
storage["key2"] = "world";
console.log(storage.key1);
console.log(storage["key2"]);
```

- localStorage和sessionStorage的key和length属性实现遍历
sessionStorage和localStorage提供的key()和length可以方便的实现存储的数据遍历，例如下面的代码：

```javascript
let storage = window.localStorage;
for (let i=0, len = storage.length; i  <  len; i++){
    let key = storage.key(i);
    let value = storage.getItem(key);
    console.log(key + "=" + value);
}
```

或者用更直接的代码：

```javascript
for(let k in localStorage){
	alert(localStorage[k]);
}
```

- 保存非字符串的内容，建议使用JSON来处理。

写入数据时用JSON.stringify转成字符串

```javascript
let data = {a:1,b:2,c:3};
localStorage.setItem("data",JSON.stringify(data));
```

读取数据时用JSON.parse把字符串转为之前的格式。

```javascript
let JasonString =localStorage.getItem("data");
console.log(JSON.parse(JasonString));
```
- storage事件(存在兼容问题，有能力有时间的话才学习)
storage还提供了storage事件，当键值改变或者clear的时候，就可以触发storage事件，如下面的代码就添加了一个storage事件改变的监听：

```javascript
//可以通过添加storage侦听，来监测本地存储数据的变化
	if(window.addEventListener){
		window.addEventListener("storage",handle_storage,false);
	}else if(window.attachEvent){
		window.attachEvent("onstorage",handle_storage);
	}
	function handle_storage(e){
		if(!e){e=window.event;}
		let status = {};
	    status.key = event.key;
	    status.oldValue = event.oldValue;
	    status.newValue = event.newValue;
	    status.url = event.url;
	    status.storage = event.storageArea;
	  	console.log(status);
	}

```
- storage事件对象的具体属性如下表：

    - storageArea: 表示存储类型（Session或Local）
    - key:发生改变项的key
    - oldValue: key的原值
    - newValue: key的新值
    - url*: key改变发生的URL

>**PS:**

>1.注意: url 属性早期的规范中为uri属性。有些浏览器发布较早，没有包含这一变更。为兼容性考虑，使用url属性前，你应该先检查它是否存在，如果没有url属性，则应该使用uri属性。

>2.如果调用clear()方法，那么key、oldValue和newValue都会被设置为null。

>3.在静态页面(以file:///"形式)下web storage会失效,必须运用服务器来访问(以http://localhost:8080/...)。

>4.协议 + 域名 + 端口 一样才能算同一起源。
