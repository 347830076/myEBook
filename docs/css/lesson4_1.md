# 图片边框

本属性具有兼容性问题，使用时需要加上各个浏览器的前缀

![浏览器前缀](../../static/images/css/lesson4/2.jpg)

## 语法

    border-image: none | <image> [<number> | <percentage>] {1,4} [/ <broder-width> {1,4}] ?[stretch | repeat | round] {0,2}
    
    border-image: border-image-source（引入背景图片） border-image-slice（切割引入背景图片） border-image-width（边框图片的宽度） border-image-repeat（边框背景图片的排列方式）
    
* `none` 默认值，表示边框无背景图片

* `<image>` 设置背景图片，这跟background-image一样，可以使用绝对或相对的URL地址，来指定边框的背景图片

* `<number>` number是一个数值，用来设置边框或者边框背景图片的大小，其单位是像素（px），可以使用1～4个值，表示4个方位的值，大家可以参考border-width设置方式

* `<percentage>` percentage也是用来设置边框或者边框背景图片的大小，跟number不同之处是，percentage使用的是百分比

* `stretch、repeat、round` 这三个属性参数是用来设置边框背景图片的铺放方式，类似于background-position，其中stretch会拉伸边框背景图片、repeat是会重复边框背景图片、round是平铺边框背景图片，其中stretch为默认值

### border-image-source（引入背景图片）

    border-image-source: url(image url);

* 默认值是`none`

### border-image-slice（切割引入背景图片）

    border-image-slice:[<number> | <percentage>] {1,4} && fill ?
    
* 取值支持 `<number>|<percentage>` 其中number单位是像素或者使用百分比值来表示

* 四个方向可以分别设置宽度进行图片的切割，四个方向遵循上右下左顺时针方向进行设置

* `border-image:url(XXX.jpg) 25% 30% 15% 20%;`如下图所示

![border-image-slice示例](../../static/images/css/lesson4/3.jpg)

* `fill` 是填充的意思，如果使用这个关键字时，图片边界的中间部分将保留下来。默认情况下为空

### border-image-width（边框图片的宽度） 

    boder-image-width: [<length> | <percentage> | <number> | auto] 

* 用来设置边框背景图片的显示大小，其实也可以理解为border-width

### border-image-repeat（边框背景图片的排列方式）

    border-image-repeat: [stretch | repeat | round] {1,2}
    
* 默认值为`stretch`

* `stretch`是水平拉伸

* `repeat`是此区域图片会水平重复

* `round`是水平平铺

### [参考链接](https://www.w3.org/TR/css-backgrounds-3/#border-images)