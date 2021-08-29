# 伪元素

|     选择器      | 功能描述                 |
| :-------------: | :----------------------- |
| E::first-letter | E 元素的第一个字         |
|  E::first-line  | E 元素的第一行字         |
|    E::before    | E 元素的第一个子伪元素   |
|    E::after     | E 元素的最后一个子伪元素 |
|  E::selection   | E 元素选中目标           |
| E::placeholder  | E 元素文字占位符         |

## 伪元素说明

    伪元素可用于定位文档包含的文本，但是无法在文档树中定位，伪类一般放映无法在CSS中轻松或可靠地检测的某个元素属性或状态。

## 双冒号说明

    1. IE6~8仅支持单冒号表示法

    2. 用来区分伪类和伪元素

- 例子一

  - index.html

    ```html
    <p>
      习近平同志在上海工作期间，高度重视“三农”工作。在短短7个多月的时间内，他深入郊区农村，走田头、访农户、听民生、摸民情、解民忧，足迹遍布上海郊区乡村。在2007年5月24日上海市第九次党代表大会报告中，习近平同志指出：“加大城乡统筹力度，加快社会主义新农村建设。更加注重郊区农村发展，坚持工业反哺农业、城市支持农村和多予少取放活的方针，加快转变农村生产生活方式，在解决‘三农’问题、破除城乡二元结构上走在前列。”重温习近平同志对上海“三农”工作的一系列重要论述，总结上海这些年来的探索实践，对于新时代实施乡村振兴战略，更好地开创“三农”工作新局面，具有重要指导意义
    </p>
    ```

  - index.css

    ```css
    p::first-letter {
      font-size: 3em;
      font-weight: bold;
    }

    p::first-line {
      color: blue;
    }

    p::-moz-selection {
      background-color: #e13300;
      color: white;
    }

    p::selection {
      background-color: #e13300;
      color: white;
    }
    ```

<iframe height="500" style="width: 100%;" scrolling="no" title="css 伪元素" src="https://codepen.io/347830076/embed/JjXrKWr?height=265&theme-id=dark&default-tab=html,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/347830076/pen/JjXrKWr'>css 伪元素</a> by cylyiou
  (<a href='https://codepen.io/347830076'>@347830076</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

- 例子二

  - index.html

    ```html
    <p>
        我是一个段落
    </p>
    ```

  - index.css

    ```css
    p{
        position: relative;
        padding: 30px 0;
        font-size: 30px;
    }
    p::before {
        content: 'before 内容';
        position: absolute;
        left: 0;
        top: 0;
        font-size: 25px;
        color: red;
    }

    p::after {
        content: 'after 内容';
        position: absolute;
        left: 0;
        bottom: 0;
        font-size: 25px;
    }
    ```

- 例子三

  - index.html

    ```html
    <input type="search" placeholder="测试" />
    ```

  - index.css

    ```css
    input::-webkit-input-placeholder {
      color: red;
    }

    /* IE10+ */
    input:-ms-input-placeholder {
      color: red;
    }

    /* Firefox4-18 */
    input:-moz-placeholder {
      color: red;
    }

    /* Firefox19+ */
    input::-moz-placeholder {
      color: red;
    }
    ```

<iframe height="700" style="width: 100%;" scrolling="no" title="css 伪元素2" src="https://codepen.io/347830076/embed/bGpoeRX?height=265&theme-id=dark&default-tab=html,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/347830076/pen/bGpoeRX'>css 伪元素2</a> by cylyiou
  (<a href='https://codepen.io/347830076'>@347830076</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
