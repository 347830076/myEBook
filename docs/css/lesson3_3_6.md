# 否定伪类选择器

| 选择器  | 功能描述                |
| :-----: | :---------------------- |
| :not(E) | 除了E元素之外的兄弟元素 |

* 简介
    
    否定伪类选择器是排除目标元素之外的其他元素。
    
* 例子

    * index.html
    
        ```html
        <p>test1</p>
        <p>test2</p>
        <p>test3</p>
        ```
        
    * index.css
    
        ```cs
        p:not(:first-child){
            color: #ff000;
        }
        ```
        
    * 运行效果
        
        ![群组选择器](../../static/images/melon.jpg)

