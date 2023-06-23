### 概述
&emsp;&emsp;CSS 动画用于实现元素从一个 CSS 样式配置转换到另一个 CSS 样式配置。动画包括两个部分: 描述动画的样式规则和用于指定动画开始、结束以及中间点样式的关键帧。
### 属性列表
|属性|说明|
|---|---|
|@keyframes|动画关键帧|
|animation|	所有动画属性的简写属性|
|animation-name|指定由 @keyframes 描述的关键帧名称|
|animation-duration|规定动画完成一个周期所花费的秒或毫秒。默认是 0|
|animation-timing-function|规定动画的速度曲线。默认是 "ease"|
|animation-fill-mode|指定动画执行前后如何为目标元素应用样式|
|animation-delay|设置延时，即从元素加载完成之后到动画序列开始执行的这段时间,默认值是0|
|animation-iteration-count|设置动画重复次数， 可以指定 infinite 无限次重复动画，默认值是0|
|animation-direction|默认是 "normal"|
|animation-play-state|允许暂停和恢复动画，默认是 "running"|
#### @keyframes 
&emsp;&emsp;设定动画关键帧:
```css
/* 
  合法值：
  0-100%
  from (和0%相同)
  to (和100%相同)
*/
@keyframes mymove{
  0% {top:0px;}
  25% {top:200px;}
  50% {top:100px;}
  75% {top:200px;}
  100% {top:0px;}
}
```
#### animation-name / animation-duration
&emsp;&emsp;通过 animation-name，CSS 引擎将会找到对应的 @keyframes 规则。而 animation-duration 是设置动画一个周期的时长：
```css
animation-name:name;
animation-duration:2s;
```
#### animation-timing-function
|属性|说明|
|---|---|
|linear|动画从头到尾的速度是相同的|
|ease|默认值，动画以低速开始，然后加快，在结束前变慢|
|ease-in|动画以低速开始|
|ease-out|动画以低速结束|
|ease-in-out|动画以低速开始和结束|
|steps(int,start or end)|指定了时间函数中的间隔数量（步长）。有两个参数，第一个参数指定函数的间隔数，该参数是一个正整数（大于 0）。 第二个参数是可选的，表示动画是从时间段的开头连续还是末尾连续。start：表示直接开始。end：默认值，表示戛然而止。|
|cubic-bezier(n,n,n,n)|自定义贝塞尔曲线|
#### animation-fill-mode
|属性|说明|
|---|---|
|none|默认值，动画在动画执行之前和之后不会应用任何样式到目标元素|
|forwards|在动画结束后（由 animation-iteration-count 决定），动画将应用该属性值|
|backwards|	动画将应用在 animation-delay 定义期间启动动画的第一次迭代的关键帧中定义的属性值。这些都是 from 关键帧中的值（当 animation-direction 为 "normal" 或 "alternate" 时）或 to 关键帧中的值（当 animation-direction 为 "reverse" 或 "alternate-reverse" 时）|
|both|动画遵循 forwards 和 backwards 的规则。也就是说，动画会在两个方向上扩展动画属性|
|initial|initial 关键字可用于任何 HTML 元素上的任何 CSS 属性|
|inherit|从父元素继承该属性|
#### 	animation-delay
&emsp;&emsp;规定动画何时开始，如果是负值，会跳过 x 秒进入动画
```css
/* 跳过两秒前的动画 */
animation-delay:-2s
```
#### animation-iteration-count
&emsp;&emsp;规定动画被播放的次数,可选值为n和infinite
#### animation-direction
|属性|说明|
|---|---|
|normal|默认值，动画按正常播放|
|reverse|动画反向播放|
|alternate|动画在奇数次（1、3、5...）正向播放，在偶数次（2、4、6...）反向播放|
|alternate-reverse|动画在奇数次（1、3、5...）反向播放，在偶数次（2、4、6...）正向播放|
|initial|initial 关键字可用于任何 HTML 元素上的任何 CSS 属性|
|inherit|从父元素继承该属性|
#### animation-play-state
&emsp;&emsp;规定动画是否正在运行或暂停(paused | running)



