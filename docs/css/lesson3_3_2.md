# 目标伪类选择器

| 选择器  | 功能描述 |
| :-----: | :------- |
| :target | 页内锚点 |

- 简介
  目标伪类选择器是动态选择器，匹配只有存在 URL 指向的 E 元素，注意这里的 URL 是指向本页面的元素，常用于做手风琴效果。
- 例子

  - index.html

    ```html
    <p><a href="#news1">跳转至内容 1</a></p>
    <p><a href="#news2">跳转至内容 2</a></p>
    <p id="news1"><b>内容 1...</b></p>
    <p id="news2"><b>内容 2...</b></p>
    ```

  - index.css

    ```css
    :target {
      border: 2px solid #d4d4d4;
      background-color: #e5eecc;
    }
    ```

  - 运行效果
    ![群组选择器](../static/images/melon.jpg)
