# 语言伪类选择器

| 选择器          | 功能描述	      |
| :-------------: | :---------------- |
| :lang(language) |  语言编码匹配元素 |

* 简介
    
    语言伪类选择器是根据元素的语言编码匹配元素。
    
* 例子

    * index.html
    
        ```html
        <p lang="en-US">广州</p>
        <p lang="fr">广州</p>
        ```
        
    * index.css
    
        ```cs
        :lang(en-US){
            color: #ff000;
        }
  
        :lang(fr){
            color: #0000ff;
        }
        ```
        

