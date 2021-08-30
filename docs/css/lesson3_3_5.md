# 结构伪类选择器

| 选择器                | 功能描述	                          |
| :-------------------: | :---------------------------------- |
| E:first-child         | E元素的第一个子元素	              |
| E:last-child          | E元素的最后一个子元素            	  |
| E:first-of-type       | 第一个E元素                         |
| E:last-of-type        | 倒数第一个E元素                     |
| E F:nth-of-child(n)   | E元素里面的第n个F子元素             |
| E F:nth-last-child(n) | E元素里面的倒数第n个F子元素         |
| E:nth-of-type(n)      | 第n个E元素                          |
| E:nth-last-of-type(n) | 倒数第n个E元素                      |
| E:only-child          | E元素在其父元素内有且只有一个       |
| E:only-of-type        | E元素在其父元素内的类型有且只有一个 |
| E:root                | E元素的所在文档的根节点	          |
| E:empty               | E元素没有任何子元素和任何文本节点   |

## 注意

    * `E F:nth-of-child(n)`,`E F:nth-last-child(n)`,`E:nth-of-type(n)`,`E:nth-last-of-type(n)`的n可以填入数字、倍数、odd(单数)、even(双数)
    
    * `E:empty`换行符也属于文本节点
    
* 例子一

    * index.html
    
        ```html
        <ul>
        	<li>test1</li>
        	<li>test2</li>
        	<li>test3</li>
        	<li>test4</li>
        	<li>test5</li>
        </ul>
        ```
        
    * index.css
    
        ```cs
        ul:first-child {
        	color: #00ff00;
        }
        
        ul:last-child {
        	color: #ffff00;
        }
        
        ul li:first-of-type {
        	color: #ff0000;
        }
        
        ul li:last-of-type {
        	color: #000fff
        }
        ```
        
    
* 例子二

    * index.html
    
        ```html
        <ul>
            <li>test1</li>
            <li>test2</li>
            <li>test3</li>
            <li>test4</li>
            <li>test5</li>
            <li>test6</li>
            <p>test7</p>
            <p>test8</p>
            <p>test9</p>
            <p>test10</p>
            <p>test11</p>
        </ul>
        ```
        
    * index.css
    
        ```cs
        ul li:nth-child(2) {
        	color: #718c00;
        }
        
        ul li:nth-last-child(even) {
        	color: #f5871f;
        }
        
        ul li:nth-of-type(2n+1) {
        	color: #ff0000;
        }
        
        ul li:nth-last-of-type(odd) {
        	color: #000fff
        }
        ```

    