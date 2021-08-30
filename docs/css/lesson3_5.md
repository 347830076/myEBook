# 属性选择器

|      选择符      | 描述                                                                      | 出现版本 |
| :--------------: | ------------------------------------------------------------------------- | :------: |
|      E[att]      | 选择具有 att 属性的所有元素                                               |   CSS2   |
|    E[att=val]    | 选择具有 att 属性且属性值等于 val 的所有元素                              |   CSS2   |
| E[att&#124;=val] | 选择具有 att 属性且属性值为以 val 开头并用连接符"-"分隔的字符串的所有元素 |   CSS2   |
|  E[att~="val"]   | 选择具有 att 属性且属性值为包含 val 单词的所有元素                        |   CSS2   |
|  E[att*="val"]   | 选择具有 att 属性且属性值为包含 val 字符串的所有元素                      |   CSS3   |
|  E[att^="val"]   | 选择具有 att 属性且属性值为以 val 开头的字符串的所有元素                  |   CSS3   |
|  E[att$="val"]   | 选择具有 att 属性且属性值为以 val 结尾的字符串的所有元素                  |   CSS3   |

- 例子一

  - index.html

    ```html
    <h1 class="test">二级标题 class="test"</h1>
    <p class="test">正文内容 class="test"</p>
    <p class="green">正文内容 class="green"</p>
    <p>正文内容</p>
    <p>正文内容</p>
    ```

  - index.css

    ```cs
    [class] {
      color: #c82829;
    }

    p[class] {
      font-weight: bold;
    }

    p[class='green'] {
      color: #718c00;
    }
    ```
  <iframe height="580" style="width: 100%;" scrolling="no" title="css 属性选择器" src="https://codepen.io/347830076/embed/ZEWXpvo?height=265&theme-id=dark&default-tab=html,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/347830076/pen/ZEWXpvo'>css 属性选择器</a> by cylyiou
  (<a href='https://codepen.io/347830076'>@347830076</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

- 例子二

  - index.html

    ```html
    <p>正文内容</p>
    <p class="start1">正文内容 class="start1"</p>
    <p class="start-1">正文内容 class="start-1"</p>
    <p class="start-2">正文内容 class="start-2"</p>
    <p>正文内容</p>
    ```

  - index.css

    ```cs
    p[class|='start'] {
      color: red;
    }
    ```

<iframe height="480" style="width: 100%;" scrolling="no" title="css 属性选择器2" src="https://codepen.io/347830076/embed/QWNqKmq?height=265&theme-id=dark&default-tab=html,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/347830076/pen/QWNqKmq'>css 属性选择器2</a> by cylyiou
  (<a href='https://codepen.io/347830076'>@347830076</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

- 例子三

  - index.html

    ```html
    <p>正文内容</p>
    <p class="teststr">正文内容 class="teststr"</p>
    <p class="test str">正文内容 class="test str"</p>
    <p class="test substring">正文内容 class="test substring"</p>
    <p>正文内容</p>
    ```

  - index.css

    ```cs
    p[class~='str'] {
      font-size: 26px;
    }

    p[class*='str'] {
      color: red;
    }
    ```

<iframe height="500" style="width: 100%;" scrolling="no" title="css 属性选择器3" src="https://codepen.io/347830076/embed/NWNaRmw?height=265&theme-id=dark&default-tab=html,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/347830076/pen/NWNaRmw'>css 属性选择器3</a> by cylyiou
  (<a href='https://codepen.io/347830076'>@347830076</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

- 例子四

  - index.html

    ```html
    <p>正文内容</p>
    <p class="starttest">正文内容 class="starttest"</p>
    <p class="start_test">正文内容 class="start_test"</p>
    <p class="testend">正文内容 class="testend"</p>
    <p class="test_end">正文内容 class="test_end"</p>
    ```

  - index.css

    ```cs
    p[class^='start'] {
      color: #c82829;
    }

    p[class$='end'] {
      color: #718c00;
    }
    ```
  <iframe height="500" style="width: 100%;" scrolling="no" title="css 属性选择器4" src="https://codepen.io/347830076/embed/XWdeNWQ?height=265&theme-id=dark&default-tab=html,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/347830076/pen/XWdeNWQ'>css 属性选择器4</a> by cylyiou
  (<a href='https://codepen.io/347830076'>@347830076</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
