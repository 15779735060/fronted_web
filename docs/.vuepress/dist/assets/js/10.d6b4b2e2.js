(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{283:function(t,s,a){"use strict";a.r(s);var n=a(14),r=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h3",{attrs:{id:"概述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[t._v("#")]),t._v(" 概述")]),t._v(" "),s("p",[t._v("  BFC，为 Block Formatting Context 的缩写，中文翻译为 块格式上下文。是 Web 页面 CSS 渲染的一个机制，是块级盒子布局中产生的区域。可以理解为一个容器，里面的元素不会影响到容器外的布局。")]),t._v(" "),s("h4",{attrs:{id:"bfc有什么用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#bfc有什么用"}},[t._v("#")]),t._v(" BFC有什么用？")]),t._v(" "),s("p",[t._v("  BFC一般可以解决高度塌陷的问题，高度塌陷是指元素由子元素的高度撑开，而子元素脱离了文档流，造成父元素高度塌陷，这种情况可以在父元素使用BFC来解决：")]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".container")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-color")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("blue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("overflow")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("auto"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".item")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("float")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("left"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("widht")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("100px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("100px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-color")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("red"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p"),t._v(" "),s("h4",{attrs:{id:"怎样的元素属于-bfc"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#怎样的元素属于-bfc"}},[t._v("#")]),t._v(" 怎样的元素属于 BFC？")]),t._v(" "),s("ul",[s("li",[t._v("根元素，也就是 HTML 元素")]),t._v(" "),s("li",[t._v("浮动元素，即使用了 float 属性且值不为 none")]),t._v(" "),s("li",[t._v("绝对定位元素")]),t._v(" "),s("li",[t._v("块级容器（如 display 的值为 inline-blocks、table-cells、table-captions）")]),t._v(" "),s("li",[t._v("overflow 的值不为 visible 的元素")]),t._v(" "),s("li",[t._v("使用了 display: flow-root 的元素。这是新出的值，专门用来创建无副作用的 BFC。兼容性存疑，比较少用")])])])}),[],!1,null,null,null);s.default=r.exports}}]);