# String对象

String 对象用于处理文本（字符串）。

JavaScript 字符串
一个字符串用于存储一系列字符就像 " 阿离王".

一个字符串可以使用**单引号**或**双引号**：

```js
let userName = " 阿离王";
let saying = 'I love to share';
```

你使用位置（索引）可以访问字符串中任何的字符：

**因为字符串在底层是以字符串数组的形式去保存的**

```js
let saying = 'I love to share';
console.log(saying[2]);
```
字符串的索引从零开始, 所以字符串第一字符为 [0],第二个字符为 [1], 等等。

**通过 length 获取字符串的长度**

```js
let saying = 'I love to share';
console.log(saying.length);
```

你可以在字符串中使用引号，如下实例：
```js
let sentence = "It's alright";
let content = "He is called 'lufei'";
let text = 'He is called "suolong"';
```
或者你可以在字符串中使用转义字符(\)使用引号：

```js
let sentence = 'It\'s alright';
let content = "He is called \"lufei\"";
```

## 特殊字符

Javascript 中可以使用反斜线（\）插入特殊符号，如：撇号,引号等其他特殊符号。

下表列出其他特殊字符，可以使用反斜线转义特殊字符：

|代码|	输出|
| --- | --- |
|\'|	单引号|
|\"|	双引号|
|\\|	斜杆|
|\n|	换行|
|\r|	回车|
|\t|	tab|
|\b|	空格|
|\f|	换页|

## 字符串对象常用方法

**字符串（String）使用长度属性length来计算字符串的长度：**
```js
let txt = "Hello World!";
console.log(txt.length);
```

**charAt()可以返回字符串指定位置的字符**
```js
/*
  不会改变原字符串
  返回根据索引获取指定的字符
*/
let str = 'abc d';
str.charAt(1); // b
```

**charCodeAt()可以返回字符串指定位置的字符的Unicode编码**
```js
/*
  不会改变原字符串
  返回根据索引获取指定的字符的Unicode编码
*/
let str = 'abc d';
str.charCodeAt(1);
```

**String.formCharCode 根据字符编码去获取字符**
```js
let str = String.formCharCode(72);
console.log(str); // H
```

**concat()连接两个或者多个字符串**
```js
/*
    concat()连接两个或者多个字符串, 
    作用和 + 号一样
*/
let str = 'a';
let result = str.concat('哈', 'yu');
console.log(result);
```

**在字符串中查找字符串**

字符串使用 **indexOf()** 来定位字符串中某一个指定的字符首次出现的位置：
```js
/*
 indexOf()
   该方法可以检查一个字符串中是否含有指定的内容
   如果字符串中含有该内容，则会返回其第一次出现的索引值
   如果没有找到指定的内容，则返回 -1

   可以传入第二个参数，第二个参数的作用是，指定开始查找的位置

   lastIndexOf();
     该方法的用法和indexOf()一样，
       不同的是indexOf是从前往后找，而lastIndexOf是从后往前找
     也可以传入第二个参数，从指定的位置开始找
*/
let str = "Hello world, welcome to the .";
let n = str.indexOf("welcome"); //13
let n1 = str.indexOf("H"); //0
let n2 = str.indexOf("l", 3); //3
```

**lastIndexOf()** 方法在字符串末尾开始查找字符串出现的位置。 和indexOf()用法一样

**替换内容**
**replace()** 方法在字符串中用某些字符替换另一些字符。
```js
let str = "Please visit taobao!";
let n = str.replace("taobao", "");
console.log(n);
```

将"今天是什么鬼天气，这么热，明天要去游泳！"里面的有"天"都替换成"日"

```js
let str = "今天是什么鬼天气，这么热，明天要去游泳!";
let now_place = 0;
for (let i = 0; i < 1; i++) {
    now_place = str.indexOf('天', now_place);
    if (now_place !== -1) {
        str = str.replace('天', '日');
        i--;
    }
}
console.log(str);
```

**slice()**  可以从字符串中截取指定的内容，不影响原字符串，并将截取的内容返回

```js
/*
 可以从字符串中截取指定的内容，
 不影响原字符串，并将截取的内容返回
 参数：
  第一个参数：开始截取的位置的索引值（包括开始位置）
      只有一个参数时，如果传入一个负值，将会从后边计算，
  第二个参数：结束截取的位置的索引值（不包括结束位置）
      如果省略第二个参数，则会截取到后边所有的字符串，
      如果传入一个负值，将会从后边计算，
         -1 倒数第一个位置
         -2 倒数第二个位置
*/
let str = "Hello world!";
let n = str.slice(3);
console.log(n); // lo world!
```

从字符串的第3个位置到第8个位置直接的字符串片段:
```js
let str = "Hello world!";
let n = str.slice(3,8);
console.log(n); //lo wo
```

提取最后一个字符:
```js
let str = 'Hello world!';
let n = str.slice(-1);
console.log(n); // !
```

**substring()** 提取字符串中两个指定的索引号之间的字符。


```js
/*
 可以从字符串中截取指定的内容，和slice()类似
 不影响原字符串，并将截取的内容返回
 参数：
  第一个参数：开始截取的位置的索引值（包括开始位置）
  第二个参数：结束截取的位置的索引值（不包括结束位置）
  
  与slice()不同的是， substring()不能接收负值作为参数
  如果传递一个负值，则默认使用0
  而且它还会自动调整参数的位置，如果第二个参数小于第一个，则自动交换   
*/
let str = "Hello world!";
console.log(str.substring(3)); //lo world!
console.log(str.substring(3, 7)); //lo w
```

**substr()**从起始索引号提取字符串中指定数目的字符。

提示： substr() 的参数指定的是字符串的开始位置和长度，因此它可以替代 substring() 和 slice() 来使用。

注意： substr() 方法不会改变源字符串。

```js
let str = "Hello world!";
let n = str.substr(2, 3);
console.log(n); //llo
```

```js
let str = "Hello world!";
let n = str.substr(2);
console.log(n); //llo world!
```

**字符串转为数组**
字符串使用**split()**函数转为数组:
```js
/*
  split()可以将一个字符串拆分成一个数组
  参数：
    传入一个字符串作为参数，将会根据该字符串去拆分成数组
    如果传递一个空字符串，则会将每个字符都拆为数组中的一个元素
*/
let txt = "a,b,c,d,e";   // String
txt = txt.split(",");   // 使用逗号分隔
console.log(txt);
```

**字符串大小写转换**
字符串大小写转换使用函数 **toUpperCase()** / **toLowerCase()**:
```js
let txt = "Hello World!";       // String
let txt1 = txt.toUpperCase();   // txt1 文本会转换为大写
let txt2 = txt.toLowerCase();   // txt2 文本会转换为小写
console.log('全部转成大写：', txt1);
console.log('全部转成小写：', txt2);
```



**trim()** 去除字符串的头尾空格:

trim() 方法用于删除字符串的头尾空白符，空白符包括：空格、制表符 tab、换行符等其他空白符等。

trim() 方法不会改变原始字符串。

trim() 方法不适用于 null, undefined, Number 类型。

```js
var str = "       阿离王        ";
console.log(str.trim()); //阿离王
```

如果你的浏览器不支持 trim() 方法，你可以使用正则表达式来实现:
```js
function myTrim(x) {
  return x.replace(/^\s+|\s+$/gm,'');
}
 
let str = myTrim("                ");
console.log(str);
}
```

**repeat() 复制字符串指定次数，并将它们连接在一起返回。**
```js
let str = "啊哈";
str.repeat(2);
console.log(str);
```

## String对象
String全局对象是由零个或多个16位Unicode字符组成的字符序列，即字符串。

## String对象语法

1. new操作符

	```javascript
	new String(thing)
	Srting(thing)
	```

2. 字符串字面量   

	```javascipt
	let firstName="Nicholas"
	let lastName = 'Zakas'
	``` 
	
### 转义字符   
String数据类型包含一些特殊的字符字面量，也叫转义序列，用于表示非打印字符，或者具有其他用途的字符   

| 字面量 | 含义 |
| :---: | --- |
| \\n | 换行 |
| \\t | 制表 |
| \\b | 空格 |
| \\r | 回车 |
| \\f | 换页 |
| \\\ | 斜杠 |

### 字符串拼接
一、使用+运算符将字符串拼接起来
```javascript
let longString = "This is a very long string which needs " +
             "to wrap across multiple lines because " +
             "otherwise my code is unreadable.";
```
二、可以在每行末尾使用反斜杠字符("\"),以指示字符串将在下一行继续。确保反斜杠后面没有空格或任何除换行符之外的字符或缩进; 否则反斜杠将不会工作。
```javascript
let longString = "This is a very long string which needs \
				to wrap across multiple lines because \
				otherwise my code is unreadable.";
```
## String对象属性

>**String对象的属性有:**   
>(1) length (返回字符串的字符长度)    
>(2) prototype    
>(3) constructor


>**String对象的方法:**   
1. 检测方法:检测当前对象是否为字符串类型
2. 转换方法:将当前对象的值转换为字符串
3. 操作方法:字符串的拼接、截取、插入、删除、替换
4. 位置方法:查找字符串、返回索引值


### 1 检测String对象
- OBject.prototype.toString.call()
- typeof

- OBject.prototype.toString.call() 获取每个对象的类型
```javascript
let toString = Object.prototype.toString;
toString.call(new Date); // [object Date]
toString.call(new String); // [object String]
toString.call(Math); // [object Math]
//Since JavaScript 1.8.5
toString.call(undefined); // [object Undefined]
toString.call(null); // [object Null]
``` 
- typeof   
在使用 typeof 运算符时采用引用类型存储值会出现一个问题，无论引用的是什么类型的对象，它都返回 "object"。
```javascript
let arry=[];
let res = typeof(arry)
console.log(res) //返回 object
```
所以，如果只是单纯地判断是否为字符串，不需要区分数据类型是数组还是对象，可以用typeof
```javascript
let str = "Hello"
console.log(typeof str==="string");//返回true
```

### 2 转换字符串方法
- toString()
- valueOf()
- String()
- toUpperCase()和toLowerCase() 
- `toString()` //这个方法返回相应值的字符串表现
```javascript
let age = 11;
let ageString = age.toString();
console.log(ageString) //字符串"11"
```
数值，布尔值，对象，和字符串值都有`toString()`方法,   
但**null**和**undefined**没有这个方法
- `valueOf()`//String 对象的 valueOf 方法返回一个String对象的原始值。该值等同于String.prototype.toString()
```javascript
x = new String("Hello world");
alert(x.valueOf())          // Displays "Hello world"
```
- `String()` //将任何类型的值转换为字符串
```javascript
let value1=10;
let value2 = true;
let value3 = null;
let value4;
alert(String(value1));//"10"
alert(String(value2));//"true"
alert(String(value3));//"null"
alert(String(value4));//"undefined"
```
- `toUpperCase()`//使用本地化（locale-specific）的大小写映射规则将输入的字符串转化成大写形式并返回结果字符串。   
语法:   
```javascript
str.toLocaleUpperCase()
```
返回值:   
一个新的字符串，即根据本地化的大小写映射规则将输入的字符串转化成大写形式的结果。   
```javascript
console.log('alphabet'.toLocaleUpperCase()); // 'ALPHABET'
```
- `toLowerCase()`//根据任何特定于语言环境的案例映射，返回调用字符串值转换为小写的值。       
语法:   
```javascript
str.toLocaleLowerCase()
```
返回值:   
根据任何特定于语言环境的案例映射，将表示调用字符串的新字符串转换为小写
```javascript
console.log('ALPHABET'.toLocaleLowerCase()); 
// 'alphabet'
console.log('中文简体 zh-CN || zh-Hans'.toLocaleLowerCase());
// '中文简体 zh-cn || zh-hans'
```
### 3 操作方法
- concat()
- slice()
- split()
- substr()
- substring()
- replace()
- trim()
- trimLeft()//未被纳入标准
- trimRight()//未被纳入标准

- `concat()`//将一个或多个字符串与原字符串连接合并，形成一个新的字符串并返回
语法:
```javascript
str.concat(string2, string3[, ..., stringN])
```
参数:   
string2...stringN   
和原字符串连接的多个字符串
```javascript
let hello = "Hello, ";
console.log(hello.concat("Ken", " have a nice day.")); /* Hello, Ken have a nice day. */
```	
- `slice()`//将一个或多个字符串与原字符串连接合并，形成一个新的字符串并返回。   
语法:
```javascript
str.slice(beginSlice[, endSlice])
```
参数:   
beginSlice   
从该索引（以 0 为基数）处开始提取原字符串中的字符。如果值为负数，会被当做 sourceLength + beginSlice 看待，这里的sourceLength 是字符串的长度 (例如， 如果beginSlice 是 -3 则看作是: sourceLength - 3)   
endSlice   
可选。在该索引（以 0 为基数）处结束提取字符串。如果省略该参数，slice会一直提取到字符串末尾。如果该参数为负数，则被看作是 sourceLength + endSlice，这里的 sourceLength 就是字符串的长度(例如，如果 endSlice 是 -3，则是, sourceLength - 3)   
**注意**：slice() 提取的新字符串包括beginSlice但**不包括** endSlice。
```javascript
let str1 = 'The morning is upon us.';
let str2 = str1.slice(4, -2);
console.log(str2); // OUTPUT: morning is upon u
```
- split()//将一个String对象分割成字符串数组，通过将字符串分成子串
语法:   
```javascript
str.split([separator[, limit]])
//  [ ]表示可选项，所以 [, limit] 这种写法才是正确的！
```	
参数:   
separator   
指定用来分割字符串的字符（串）。   
limit   
一个整数，限定返回的分割片段数量。   
- substr()//返回一个字符串中从指定位置开始到指定字符数的字符。   
语法:   
```javascript
str.substr(start[, length])
```
参数:   
start   
开始提取字符的位置。如果为负值，则被看作 strLength + start，其中 strLength 为字符串的长度（例如，如果 start 为 -3，则被看作 strLength-3）。   
length   
可选。提取的字符数。   
```javascript
let str = "abcdefghij";
console.log("(1,2): "    + str.substr(1,2));   // (1,2): bc
console.log("(-3,2): "   + str.substr(-3,2));  // (-3,2): hi
console.log("(-3): "     + str.substr(-3));    // (-3): hij
console.log("(1): "      + str.substr(1));     // (1): bcdefghij
```
- substring()//返回一个字符串在开始索引到结束索引之间的一个子集, 或从开始索引直到字符串的末尾的一个子集
语法:   
```javascript
str.substring(indexStart[, indexEnd])
```
参数:   
indexStart   
一个 0 到字符串长度之间的整数。   
indexEnd   
可选。一个 0 到字符串长度之间的整数。   
描述:   
- 如果 indexStart 等于 indexEnd，substring 返回一个空字符串。
- 如果省略 indexEnd，substring 提取字符一直到字符串末尾。
- 如果任一参数小于 0 或为 NaN，则被当作 0。
- 如果任一参数大于 stringName.length，则被当作 stringName.length。   
如果 indexStart 大于 indexEnd，则 substring 的执行效果就像两个参数调换了一样。例如，str.substring(1, 0) == str.substring(0, 1)。
```javascript
let anyString = "Mozilla";
// 输出 "Moz"
console.log(anyString.substring(0,3));
console.log(anyString.substring(3,0));
// 输出 "lla"
console.log(anyString.substring(4,7));
console.log(anyString.substring(7,4));
// 输出 "Mozilla"
console.log(anyString.substring(0,7));
console.log(anyString.substring(0,10));
```

- `replace()`//返回一个由替换一些或所有匹配的模式后的新字符串。模式可以是一个字符串或者一个正则表达式，替换值可以是一个字符或者一个每次匹配都要调用的函数   
语法:   
```javascript
str.replace(regexp|substr,NewSubStr|function)
```
参数:   
regexp (pattern)   
一个 RegExp 对象或者其字面量。该正则所匹配的内容会被第二个参数的返回值替换掉。
substr (pattern)   
一个要被 newSubStr 替换的字符串。其被视为一整个字符串，而不是一个正则表达式。仅仅是第一个匹配会被替换。   
newSubStr (replacement)   
 用于替换掉第一个参数在原字符串中的匹配部分的 字符串。该字符串中可以内插一些特殊的变量名。参考下面的使用字符串作为参数。   
function (replacement)   
一个用来创建新子字符串的函数，该函数的返回值将替换掉第一个参数匹配到的结果。参考下面的指定一个函数作为参数。 
```javascript
function replacer(match, p1, p2, p3, offset, string) {
  // p1 is nondigits, p2 digits, and p3 non-alphanumerics
  return [p1, p2, p3].join(' - ');
}
let newString = 'abc12345#$*%'.replace(/([^\d]*)(\d*)([^\w]*)/, replacer);//输出'abc - 12345 - #$*%'
```  
- `trim()`//会删除一个字符串两端的空白字符。在这个字符串里的空格包括所有的空格字符 (space, tab, no-break space 等)以及所有的行结束符（如 LF，CR）。   
语法:   
```javascript
str.trim();
```
描述:   
`trim()` 方法并不影响原字符串本身，它返回的是一个新的字符串。   
```javascript
let orig = '   foo  ';
console.log(orig.trim()); // 'foo'
// 另一个.trim()例子，只从一边删除
let orig = 'foo    ';
console.log(orig.trim()); // 'foo'
```
### 4 位置方法
- chartAt()
- charCodeAt()
- indexOf()
 
(1)`charAt()` -返回字符串在下标index位置的字符
```javascript
stringObject.charAt(index)  // 如果参数index不在0与字符串长度之间，则返回一个空的字符串  
'kdfjrjrtj'.charAt(3);   //  ====>返回 'j';
```
(2) `charCodeAt()` -返回字符串相应下标index位置的字符的unicode编码
```javascript
stringObject.charCodeAt(index)   // 返回unicode编码
'sjdlfkjsrf'.charCodeAt(3);    // 108  ('l'的unicode编码为108)
```
(3) `indexOf()` -返回某个指定的字符串值在字符串中首次出现的位置
```javascript
stringObject.indexOf(searchvalue,fromindex); 
// searchvalue为需要搜索的子字符串，fromindex为从某个下标开始查询
'hello world!'.indexOf('lo wo');  // 3 (子字符串首次出现的位置)
```

### 5 匹配方法
- match()
- search()
- localeCompare()(Safari不支持,移动端都不支持，除了Chrome for Android26)
- include()(兼容性差)    
(1) `match()` -在字符串内检索指定的值，或找到一个或多个正则表达式的匹配
```javascript
stringObject.match(regexp)   // regexp为匹配子字符串的正则表达式
let str = 'hello world , l love the world';
str.match(/world/g);    //  [world, world]
```
(2)`search()` -执行正则表达式和 String对象之间的一个搜索匹配
```javascript
function testinput(re, str){
  let midstring;
  if (str.search(re) != -1){
    midstring = " contains ";
  } else {
    midstring = " does not contain ";
  }
  console.log (str + midstring + re);
}
```
(3)`localeCompare()`//返回一个数字来表明调用该函数的字符串（reference string）的排列顺序是否在某个给定的字符串的前面或者后面，或者是一样的（编码中的位置）
```javascript
当 referenceStr 在 compareStr 前面时返回负数
当 referenceStr 作 compareStr 后面时返回正数
相同位置时返回0
'check'.localeCompare('against');//1
```
(4)include()(Firefox (Gecko)才支持，其他浏览器均不支持)//用于判断一个字符串是否包含在另一个字符串中，根据情况返回true或false   
语法:   
```javascript
str.includes(searchString[, position])
```
参数:   
searchString   
要在此字符串中搜索的字符串。   
position   
可选。从当前字符串的哪个索引位置开始搜寻子字符串；默认值为0。   
返回值   
如果当前字符串包含被搜寻的字符串，就返回true；否则，返回false。   
区分大小写    
includes() 方法是区分大小写的。例如，下面的表达式会返回 false ：   
```javascript
'Blue Whale'.includes('blue'); // returns false
```
### String对a标签的方法
- `String.link` //创建一个 `<a\>` HTML 元素，用该字符串作为超链接的显示文本，参数作为指向另一个 URL的超链接。   
语法:
```javascript
str.link(url)
```
参数:   
url   
任何能够指定 a标签的 href 属性的字符串；它应当是有效的 URL（相对或绝对），任何 & 字符将会被转义为 &amp;，任何 " 字符将会被转义为 &quot;。
```javascript
let hotText = "MDN";
let URL = "https://developer.mozilla.org/";
document.write("Click to return to " + hotText.link(URL));
```
该例输出下面的 HTML   
```html
Click to return to<a href="https://developer.mozilla.org/">MDN</a>
```
- `String.anchor` //用于创建 HTML锚
语法:
```javascript
str.anchor(name)
```
参数:   
name   
一个字符串，表示被创建的标签的 name 属性。
```javascript
let myString = "Table of Contents";
document.body.innerHTML = myString.anchor("contents_anchor");
```

### ES6新增
- `Str.endsWith` //判断当前字符串是否是以另外一个给定的子字符串“结尾”的，根据判断结果返回 true 或 false   
语法:
```javascript
str.endsWith(searchString [, position]);
```
参数:   
searchString   
要搜索的子字符串。   
position   
在 str 中搜索 searchString 的结束位置，默认值为 str.length，也就是真正的字符串结尾处.
```javascript
let str = "To be, or not to be, that is the question.";
alert( str.endsWith("question.") );  // true
alert( str.endsWith("to be") );      // false
alert( str.endsWith("to be", 19) );  // true
alert( str.endsWith("To be", 5) );   // true
```

- `Str.normalize` //按照指定的一种 Unicode 正规形式将当前字符串正规化   
语法:
```javascript
str.normalize([form]);
```
参数:   
form   
四种 Unicode 正规形式 "NFC", "NFD", "NFKC", 以及 "NFKD" 其中的一个, 默认值为 "NFC".
- NFC - Normalization Form Canonical Composition.
- NFD - Normalization Form Canonical Decomposition.
- NFKC - Normalization Form Compatibility Composition.
- NFKD - Normalization Form Compatibility Decomposition.
可能出现的异常   
RangeError   
如果给 form 传入了非法的参数值, 则会抛出 RangeError 异常.   
```javascript   
let str = "\u1E9B\u0323";
str.normalize("NFC"); // "\u1E9B\u0323"
str.normalize(); // same as above
```
- Str.raw // 是一个模板字符串的标签函数,是用来获取一个模板字符串的原始字面量值的。   
语法:
```javascript   
String.raw(callSite, ...substitutions)
```
参数   
callSite  
一个模板字符串的"调用点对象"
...substitutions   
任意个可选的参数，表示任意个内插表达式对应的值。   
异常
TypeError   
如果第一个参数没有传入一个格式良好的调用点对象，则会抛出 TypeError 异常。   
```javascript   
String.raw `Hi\n!`;                 
// "Hi\\n!"，这里得到的不是 Hi 后面跟个换行符，而是跟着 \ 和 n 两个字符
String.raw `Hi\u000A!`;             
// "Hi\\u000A!"，同上，这里得到的会是 \、u、0、0、0、A 6个字符，
// 任何类型的转义形式都会失效，保留原样输出，不信你试试.length
let name = "Bob";
String.raw `Hi\n${name}!`;           
// "Hi\\nBob!"，内插表达式还可以正常运行
String.raw({raw: "test"}, 0, 1, 2); 
// "t0e1s2t"，我认为你通常不需要把它当成普通函数来调用
```


<a href="https://www.runoob.com/jsref/jsref-obj-string.html" target="_blank" style="color:red">点击查看 更多String对象的方法</a>