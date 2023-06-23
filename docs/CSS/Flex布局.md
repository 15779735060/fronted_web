### Flex布局介绍
&emsp;&emsp;Flex布局也称弹性盒子，是CSS3的规范标准，目前也已被大多数浏览器支持（IE10以上部分兼容），而且是最流行的布局方式之一。
### 容器属性
#### 创建容器
```css
.box{
  display:flex | inline-flex
}
```
#### 1:设置主轴方向
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
#### 2:主轴对齐方式
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
#### 3:决定容器是否可以换行显示
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
#### 4:多跟轴线对齐方式（flex-wrap:nowrap时不显示，因为不换行，轴线只有一根）
```css
/* 
  flex-start：轴线全部在交叉轴上的起点对齐
  flex-end：轴线全部在交叉轴上的终点对齐
  center：轴线全部在交叉轴上的中间对齐
  space-between：轴线两端对齐，之间的间隔相等，即剩余空间等分成间隙。
  space-around：每个轴线两侧的间隔相等，所以轴线之间的间隔比轴线与边缘的间隔大一倍。
*/
.container {
  align-content: flex-start | flex-end | center | space-between | space-around | stretch;
}
```
#### 5:交叉轴上的对齐方式
```css
/* 
  flex-start：交叉轴的起点对齐
  flex-end：交叉轴的终点对齐
  center：交叉轴的中点对齐
  baseline: 项目的第一行文字的基线对齐
*/
.container{
  align-items: flex-start | flex-end | center | baseline | stretch;
}
```
### 容器子项目属性
&emsp;&emsp;有六种属性可运用在 item 项目上，如下所示：
#### 1： order: 定义项目在容器中的排列顺序，数值越小，排列越靠前，默认值为 0
```css
.item {
  order: <int>;
}
```
#### 2：flex-basis: 定义了在分配多余空间之前，项目占据的主轴空间，浏览器根据这个属性，计算主轴是否有多余空间
```css
/* 
  默认值：auto，即项目本来的大小, 这时候 item 的宽高取决于 width 或 height 的值。
  当主轴为水平方向的时候，当设置了 flex-basis，项目的宽度设置值会失效，flex-basis 需要跟 flex-grow 和 flex-shrink 配合使用才能发挥效果。
*/
.item {
  flex-basis: <length> | auto;
}
```
#### 3：flex-grow: 定义项目的放大比例
```css
/* 
  默认值为 0，即如果存在剩余空间，也不放大
*/  
.item {
  flex-grow: <number>;
}
```
#### 4：flex-shrink: 定义了项目的缩小比例
```css
/* 
  默认值: 1，即如果空间不足，该项目将缩小，负值对该属性无效。
*/
.item {
  flex-shrink: <number>;
}
```
#### 5：flex: flex-grow, flex-shrink 和 flex-basis的简写
```css
/* 
  flex 的默认值是以上三个属性值的组合。假设以上三个属性同样取默认值，则 flex 的默认值是 0 1 auto。
*/
.item{
  flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]
} 
```
#### 6：align-self: 允许单个项目有与其他项目不一样的对齐方式
```css
/* 
  这个跟 align-items 属性时一样的，只不过 align-self 是对单个项目生效的，而 align-items 则是对容器下的所有项目生效的。
*/
.item {
  align-self: auto | flex-start | flex-end | center | baseline | stretch;
}
```

