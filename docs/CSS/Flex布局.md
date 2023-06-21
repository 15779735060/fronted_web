### Flex布局介绍
&emsp;&emsp;Flex布局也称弹性盒子，是CSS3的规范标准，目前也已被大多数浏览器支持（IE10以上部分兼容），而且是最流行的布局方式之一。
#### 创建容器
```css
.box{
  display:flex | inline-flex
}
```
#### 设置主轴方向
```css
/*
  row(默认值) 水平方向，左边为起点
  row-reverse 水平方向，右边为起点 
  column 垂直方向，上边为起点
  column-reverse 垂直方向，下边为起点
*/
.box{
  flex-direction：row | row-reverse | column | column-reverse;
}
```
### 主轴对齐方式
```css
/* 
  flex-start(默认值) 左对齐
  flex-end 右对齐
  center 居中
  space-between 两端对齐
  space-around 居中对齐
  baseline 项目的第一行文字的基线对齐
*/
.box{
  justify-content: flex-start | flex-end | center | space-between | space-around;
}
```
#### 决定容器是否可以换行显示
```css
/*
  nowrap(默认值) 不换行
  warp 换行，第一行在上方
  wrap-reverse 换行，第一行在下方
*/
.box{
  flex-wrap: nowrap | wrap | wrap-reverse;
}
```
#### 多跟轴线对齐方式（flex-wrap:nowrap时不显示，因为不换行，轴线只有一根）
```css
.container {
    align-content: flex-start | flex-end | center | space-between | space-around | stretch;
}
```
