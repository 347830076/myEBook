# 动态伪类选择器

|  选择器   |                   类型                    | 功能描述                       |
| :-------: | :---------------------------------------: | :----------------------------- |
|  E:link   |     [链接伪类选择器](#链接伪类选择器)     | E 元素被定义超链接并未被访问过 |
| E:visited |     [链接伪类选择器](#链接伪类选择器)     | E 元素被定义超链接并已被访问过 |
| E:active  | [用户行为伪类选择器](#用户行为伪类选择器) | E 元素被激活，常用于锚点和按钮 |
|  E:hover  | [用户行为伪类选择器](#用户行为伪类选择器) | 鼠标停留在 E 元素              |
|  E:focus  | [用户行为伪类选择器](#用户行为伪类选择器) | E 元素获取焦点                 |

## 链接伪类选择器

- 简介

  根据具有链接属性的 E 元素的被访问情况进行匹配。

- 例子

  - index.html

    ```html
    <a href="http://.cn">广州</a>
    ```

  - index.css

    ```css
    a:link {
      color: #f00;
    }

    a:visited {
      color: #0ff;
    }
    ```
</iframe>   

## 用户行为伪类选择器

- 简介

  根据用户对于 E 元素的操作来进行匹配。

- 例子

  - index.html

    ```html
    <a href="http://.cn">广州</a> <input name="" />
    ```

  - index.css

    ```css
    a:hover {
        color: black;
    }

    a:active {
        color: yellow;
    }

    input:focus {
      backgroud-color: #ccc;
    }
    ```

- a 标签伪类设置顺序

    a标签的伪类设置顺序一般按照l-v-h-a,lvha 规则是由于CSS特殊性导致，**css特殊性有一个按顺序的规则（同一条css规则，后出现会覆盖前面的同样规则）**，
    
    根据用户体验，active伪类样式应该在最后，hover伪类样式是不管链接是否被访问过，在鼠标移过的时候hover样式都应该展示，
    
    所以放在link和visited后面（第三的位置）。我们还需要去区分点击过和未被点击过的链接样式，所以visited伪类样式放在link后面（第二的位置）。

  - index.html

    ```html
    <a href="http://www.baidu.com">百度</a>
    ```
  - index.css

    ```css
    a:link {
        color: blue;
    }

    a:visited {
        color: red;
    }

    a:hover {
        color: black;
    }

    a:active {
        color: yellow;
    }
    ```
 <iframe height="450" style="width: 100%;" scrolling="no" title="css 动态伪类选择器" src="https://codepen.io/347830076/embed/GRZvarM?height=265&theme-id=dark&default-tab=html,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/347830076/pen/GRZvarM'>css 动态伪类选择器</a> by cylyiou
  (<a href='https://codepen.io/347830076'>@347830076</a>) on <a href='https://codepen.io'>CodePen</a>.
