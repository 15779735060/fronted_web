### 概述
&emsp;&emsp;BFC，为 Block Formatting Context 的缩写，中文翻译为 块格式上下文。是 Web 页面 CSS 渲染的一个机制，是块级盒子布局中产生的区域。可以理解为一个容器，里面的元素不会影响到容器外的布局。
#### BFC有什么用？
&emsp;&emsp;BFC一般可以解决高度塌陷的问题，高度塌陷是指元素由子元素的高度撑开，而子元素脱离了文档流，造成父元素高度塌陷，这种情况可以在父元素使用BFC来解决：
```css
.container{
  background-color:blue;
  overflow:auto;
}
.item{
  float:left;
  widht:100px;
  height:100px;
  background-color:red;
}
```
&emsp;&emsp;
#### 怎样的元素属于 BFC？
+ 根元素，也就是 HTML 元素
+ 浮动元素，即使用了 float 属性且值不为 none
+ 绝对定位元素
+ 块级容器（如 display 的值为 inline-blocks、table-cells、table-captions）
+ overflow 的值不为 visible 的元素
+ 使用了 display: flow-root 的元素。这是新出的值，专门用来创建无副作用的 BFC。兼容性存疑，比较少用