### 概述
&emsp;&emsp;CSS3提供了强大的过渡属性，它可以在不使用Flash动画或者JavaScript脚本的情况下，为元素从一种样式转变为另一种样式时添加效果，例如渐显、渐弱、动画快慢等。
#### transition-property
&emsp;&emsp;transition-property 属性用来设置元素中参与过渡的属性名称，语法格式如下：
```css
transition-property: none | all | property;
```
&emsp;&emsp;参数说明如下：
+ none：表示没有属性参与过渡效果；
+ all：表示所有属性都参与过渡效果；
+ property：定义应用过渡效果的 CSS 属性名称列表，多个属性名称之间使用逗号,进行分隔。
#### transition-duration
&emsp;&emsp;transition-duration 属性用来设置过渡需要花费的时间（单位为秒或者毫秒），语法格式如下：
```css
transition-duration: time;
```
&emsp;&emsp;如果有多个参与过渡的属性，也可以依次为这些属性设置过渡需要的时间，多个属性之间使用逗号进行分隔，例如transition-duration: 1s, 2s, 3s;
#### transition-timing-function
&emsp;&emsp;transition-timing-function 属性用来设置过渡动画的类型，属性的可选值如下：
|属性|说明|
|---|---|
|linear|以始终相同的速度完成整个过渡过程，等同于 cubic-bezier(0,0,1,1)|
|ease|以慢速开始，然后变快，然后慢速结束的顺序来完成过渡过程，等同于 cubic-bezier(0.25,0.1,0.25,1)|
|ease-in|以慢速开始过渡的过程，等同于 cubic-bezier(0.42,0,1,1)|
|ease-out|以慢速结束过渡的过程，等同于 cubic-bezier(0,0,0.58,1)|
|ease-in-out|以慢速开始，并以慢速结束的过渡效果，等同于 cubic-bezier(0.42,0,0.58,1)|
|cubic-bezier(n, n, n, n)|使用 cubic-bezier() 函数来定义自己的值，每个参数的取值范围在 0 到 1 之间|
#### transition-delay
&emsp;&emsp;transition-delay 属性用来设置过渡效果何时开始，属性的语法格式如下：
```css
transition-delay: time;
```
#### transition
&emsp;&emsp;transition 属性是上面四个属性的简写形式，通过该属性可以同时设置上面的四个属性，属性的语法格式如下：
```css
transition: transition-property transition-duration transition-timing-function transition-delay;
```
