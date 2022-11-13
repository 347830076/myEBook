# json

JSON 是用于存储和传输数据的格式。

JSON 通常用于服务端向网页传递数据 。

JSON 格式在语法上与创建 JavaScript 对象代码是相同的。

由于它们很相似，所以 JavaScript 程序可以很容易的将 JSON 数据转换为 JavaScript 对象。

JSON 语法规则

- 数据为 键/值 对。
- 数据由逗号分隔。
- 大括号保存对象
- 方括号保存数组

## JSON 字符串转换为 JavaScript 对象

首先，创建 JavaScript 字符串，字符串为 JSON 格式的数据：

然后，使用 JavaScript 内置函数 JSON.parse() 将字符串转换为 JavaScript 对象:

```js
let text = '{ "sites" : [' +
    '{ "name":"Runoob" , "url":"www.runoob.com" },' +
    '{ "name":"Google" , "url":"www.google.com" },' +
    '{ "name":"Taobao" , "url":"www.taobao.com" } ]}';
    
let obj = JSON.parse(text);
console.log(obj);
```

## 将 JavaScript 值转换为 JSON 字符串。

```js
let obj = {name: '阿离王', age: '18', hobby: ['跑步', '爬山']};
JSON.stringify(obj);
console.log(obj);
```

<a href="https://www.runoob.com/json/json-tutorial.html" target="_blank" style="color:red; font-weight:bold;">点击查看 JSON 详细教程</a>