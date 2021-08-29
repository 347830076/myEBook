# UI元素状态伪类选择器

| 选择器     | 类型		            | 功能描述	    |
| :--------: | :------------------: | :------------ |
| E:checked  | 选中状态伪类选择器   | 按钮表单元素	|
| E:enabled  | 启用状态伪类选择器   | 启用表单元素	|
| E:disabled | 不可用状态伪类选择器 | 禁用表单元素	|

* 简介
    
    UI元素状态伪类选择器针对表单元素。
    
* 例子

    * index.html
    
        ```html
        <form action="">
        <input>
        <input disabled>
        <input type="radio" name="sex" value="man">
        <input type="radio" name="sex" value="female">
        </form>
        ```
        
    * index.css
    
        ```css
        input:enabled{
          background:#ffff00;
        }
  
        input:disabled{
          background:#0000ff;
        }
  
        input:checked{
          color:#ff0000;
        }
        ```
        
    * 运行效果
        
        ![群组选择器](../../static/images/melon.jpg)