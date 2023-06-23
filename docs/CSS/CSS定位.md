### 概述
&emsp;&emsp;position 属性指定了元素的定位类型，元素可以使用top，bottom，left和right属性定位。然而，这些属性无法工作，除非是先设定position属性。他们也有不同的工作方式，这取决于定位方法。其中有这五个定位方法，分别是：static、relative、absolute、fixed和sticky，下面会逐一讲解。
#### Static
&emsp;&emsp;position属性的默认值。如果元素定位为static，则该元素将根据原始文档流中的位置按顺序呈现。
```css
.container {
  position: static;
}
```
#### Relative
&emsp;&emsp;它将像使用默认的static一样出现在文档中。通过将position设置为relative，我们可以访问以下CSS属性：top、left、right、bottom。有了这些，我们就可以添加偏移量。例如，如果我们设置为left: 20px，则元素将往右侧偏移20px。如果我们提供-20px，则会将元素向左推送20px。
```css
.container {
  position: relative;
  top:70px;
  left:20px;
}
```
#### Fixed
&emsp;&emsp;使用fixed定位，我们也可以访问top、left、right、bottom属性。在这种情况下，元素相对于浏览器窗口的视口定位。因此，如果我们在fixed定位的元素上设置top:70px和left: 20px，则元素将出现在距视口顶部70px和距视口左边缘20px处。fixed定位还会将文档从正常文档流中移除。
```css
.container {
  position: fixed;
  top:70px;
  left:20px;
}
```
#### Absolute
&emsp;&emsp;absolute像fixed定位一样工作，但不是相对于视口定位，而是基于最近的定位元素（其定位不同于static）来定位。如果没有定位的父项，则将相对于视口定位（与fixed的结果相同）。
```css
.container {
  position: absolute;
  top:70px;
  left:20px;
}
```
#### Sticky
&emsp;&emsp;使用sticky将根据用户的滚动位置来定位元素，在relative和fixed定位之间切换。我们可以使用top、left、right、bottom提供偏移量。在满足指定的偏移量之前，元素就像一个相对定位的元素，当滚动位置大于偏移量时，就切换到固定位置并相对于视口定位。它将一直保持fixed直到用户向相反方向滚动并且距离小于偏移量，然后再次返回表现得像相对定位的元素。
```css
.container {
  position: sticky;
  top:70px;
  left:20px;
}
```



