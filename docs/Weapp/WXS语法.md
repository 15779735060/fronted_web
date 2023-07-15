### WXS
&emsp;&emsp;在微信小程序里，**wxml 是不可以之间调用 js 里面的方法的**，只能通过绑定事件的形式去访问定义在js的方法。因此官方提供了一个WXS，以供wxml调用。WXS（WeiXin Script）是小程序的一套脚本语言，结合 WXML，可以构建出页面的结构。WXS 与 JavaScript 是不同的语言，有自己的语法，并不和 JavaScript 一致。
#### 声明WXS
```js
/* pages/index.wxs */
var formatData=function(value){
  return value ? value : '-'
}
module.exports={
  formatData:formatData
}
```
#### 调用WXS（页面调用）
```html
<!-- pages/index.wxml -->
<wxs src="./index.wxs" module="tool"></wxs>
<view class="container">
  <view>{{tool.formatData('')}}</view>
</view>
```
&emsp;&emsp;需要再次强调的是，**WXS 并不和 JavaScript 一致**，有着诸多的限制，需要遵循[WXS](https://developers.weixin.qq.com/miniprogram/dev/reference/wxs/)的规范！！！