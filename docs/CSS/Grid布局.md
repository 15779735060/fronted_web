### 概述
&emsp;&emsp;CSS Grid 布局是 CSS 中最强大的布局系统。与 Flex 的一维布局系统不同，CSS Grid 布局是一个二维布局系统，也就意味着它可以同时处理列和行。通过将 CSS 规则应用于 父元素 (成为 Grid Container 网格容器)和其 子元素（成为 Grid Items 网格项），你就可以轻松使用 Grid(网格) 布局。
### Grid Container
```css
/* 
  grid - 生成一个块级(block-level)网格
  inline-grid - 生成一个行级(inline-level)网格
  subgrid - 如果你的 grid container 本身就是一个 grid item（即,嵌套网格），你可以使用这个属性来表示你想从它的父节点获取它的行/列的大小，而不是指定它自己的大小。
*/
.container{
  display: grid | inline-grid | subgrid;
}
```
#### grid-template-columns / grid-template-rows
```css
/* 
  使用以空格分隔的多个值来定义网格的列和行。这些值表示轨道大小(track size)，它们之间的空格代表表格线(grid line)。
  还可以使用fr单位，允许将轨道大小设置为网格容器自由空间的一部分
*/
.container {
  grid-template-columns: <track-size> ... | <line-name> <track-size> ...;
  grid-template-rows: <track-size> ... | <line-name> <track-size> ...;
}
```
#### grid-template-areas
```css
/* 
  通过引用 grid-area属性指定的网格区域的名称来定义网格模板。 重复网格区域的名称导致内容扩展到这些单元格。 点号表示一个空单元格。 语法本身提供了网格结构的可视化。
  <grid-area-name> - 使用 grid-area 属性设置的网格区域的名称
  . - 点号代表一个空网格单元
  none - 没有定义网格区域
  这将创建一个四列宽三行高的网格。 整个第一行将由 header 区域组成。 中间一行将由两个 main 区域、一个空单元格和一个 sidebar 区域组成。 最后一行是footer区域组成。
*/
.container {
  grid-template-columns: 50px 50px 50px 50px;
  grid-template-rows: auto;
  grid-template-areas: 
    "header header header header"
    "main main . sidebar"
    "footer footer footer footer";
}
```
#### grid-template
```css
/* 
  在单个声明中定义 grid-template-rows、grid-template-columns、grid-template-areas 的简写。
  值：
  none - 将三个属性都设置为其初始值
  subgrid - 把 grid-template-rows 和 grid-template-columns 设置为 subgrid, 并且 grid-template-areas 设置为初始值
  grid-template-rows / <grid-template-columns - 把 grid-template-columns 和 grid-template-rows 设置为指定值, 与此同时, 设置 grid-template-areas 为 none
*/
.container {
  grid-template: none | subgrid | <grid-template-rows> / <grid-template-columns>;
}
```
#### grid-column-gap / grid-row-gap
```css
/* 
  指定网格线的大小，你可以把它想象为设置列/行之间的间距的宽度。
*/
.container {
  grid-column-gap: <line-size>;
  grid-row-gap: <line-size>;
}
```
#### grid-gap
```css
/* 
  grid-row-gap 和 grid-column-gap 的缩写
*/
.container {
  grid-gap: <grid-row-gap> <grid-column-gap>;
}
```
#### justify-items
```css
/* 
  沿着行轴对齐网格内的内容（与之对应的是 align-items, 即沿着列轴对齐），该值适用于容器内的所有的 grid items。
  值：
  start: 内容与网格区域的左端对齐
  end: 内容与网格区域的右端对齐
  center: 内容位于网格区域的中间位置
  stretch: 内容宽度占据整个网格区域空间(这是默认值)
*/
.container {
  justify-items: start | end | center | stretch;
}
```
#### align-items
```css
/* 
  沿着列轴对齐grid item 里的内容（与之对应的是使用 justify-items 设置沿着行轴对齐），该值适用于容器内的所有 grid items。
  值：
  start: 内容与网格区域的顶端对齐
  end: 内容与网格区域的底部对齐
  center: 内容位于网格区域的垂直中心位置
  stretch: 内容高度占据整个网格区域空间(这是默认值)
*/
.container {
  align-items: start | end | center | stretch;
}
```
#### justify-content
```css
/* 
  有时，网格的总大小可能小于其网格容器的大小。如果你的所有 grid items 都使用像px这样的非弹性单位来设置大小，则可能发生这种情况。此时，你可以设置网格容器内的网格的对齐方式。 此属性沿着行轴对齐网格（与之对应的是 align-content, 沿着列轴对齐）。
  值：
  start - 网格与网格容器的左边对齐
  end - 网格与网格容器的右边对齐
  center - 网格与网格容器的中间对齐
  stretch - 调整g rid item 的大小，让宽度填充整个网格容器
  space-around - 在 grid item 之间设置均等宽度的空白间隙，其外边缘间隙大小为中间空白间隙宽度的一半
  space-between - 在 grid item 之间设置均等宽度空白间隙，其外边缘无间隙
  space-evenly - 在每个 grid item 之间设置均等宽度的空白间隙，包括外边缘
*/
.container {
  justify-content: start | end | center | stretch | space-around | space-between | space-evenly;  
}
```
#### align-content
&emsp;&emsp;此属性沿着列轴对齐网格（与之对应的是 justify-content, 即沿着行轴对齐）。属性与justify-content一样，不做介绍了。
### Grid Items
&emsp;&emsp;容器的子项属性
#### grid-column-start / grid-column-end / grid-row-start /grid-row-end
```css
/* 
  使用特定的网格线确定 grid item 在网格内的位置。grid-column-start/grid-row-start 属性表示grid item的网格线的起始位置，grid-column-end/grid-row-end属性表示网格项的网格线的终止位置。
  值：
  <line>: 可以是一个数字来指代相应编号的网格线，也可使用名称指代相应命名的网格线
  span <number>: 网格项将跨越指定数量的网格轨道
  span <name>: 网格项将跨越一些轨道，直到碰到指定命名的网格线
  auto: 自动布局， 或者自动跨越， 或者跨越一个默认的轨道
*/
.item {
  grid-column-start: <number> | <name> | span <number> | span <name> | auto
  grid-column-end: <number> | <name> | span <number> | span <name> | auto
  grid-row-start: <number> | <name> | span <number> | span <name> | auto
  grid-row-end: <number> | <name> | span <number> | span <name> | auto
}
```
#### grid-area
```css
/* 
  给 grid item 进行命名以便于使用 grid-template-areas 属性创建模板时来进行引用。另外也可以做为 grid-row-start + grid-column-start + grid-row-end + grid-column-end 的简写形式。
  值：
  <name> - 你的命名
  <row-start> / <column-start> / <row-end> / <column-end> - 可以是数字，也可以是网格线的名字
*/
.item {
  grid-area: <name> | <row-start> / <column-start> / <row-end> / <column-end>;
}
```
#### justify-self
```css
/* 
  沿着行轴对齐grid item 里的内容（与之对应的是 align-self, 即沿列轴对齐）。 此属性对单个网格项内的内容生效。
  值：
  start - 将内容对齐到网格区域的左端
  end - 将内容对齐到网格区域的右端
  center - 将内容对齐到网格区域的中间
  stretch - 填充网格区域的宽度 (这是默认值)
*/
.item-a {
  justify-self: start;
}
```
#### align-self
```css
/* 
  沿着列轴对齐grid item 里的内容（与之对应的是 justify-self, 即沿行轴对齐）。 此属性对单个网格项内的内容生效。
  值：
  start - 将内容对齐到网格区域的顶部
  end - 将内容对齐到网格区域的底部
  center - 将内容对齐到网格区域的中间
  stretch - 填充网格区域的高度 (这是默认值)
*/
.item {
  align-self: start | end | center | stretch;
}
```

