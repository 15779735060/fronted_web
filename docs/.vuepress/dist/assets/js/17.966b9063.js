(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{290:function(t,s,a){"use strict";a.r(s);var e=a(14),n=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h3",{attrs:{id:"概述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[t._v("#")]),t._v(" 概述")]),t._v(" "),s("p",[t._v("  浏览器存储是浏览器特有的功能，所以js的运行环境必须要在浏览器上。在HTML5规范新增了WebStorage和IndexedDB。目前为止，浏览器的本地存储主要分为Cookie、WebStorage和IndexedDB，其中WebStorage又分为localStorage（本地存储）和sessionStorage（会话存储），下面我们一一介绍：")]),t._v(" "),s("h4",{attrs:{id:"cookie"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cookie"}},[t._v("#")]),t._v(" Cookie")]),t._v(" "),s("p",[t._v("  Cookie的出现其实是为了弥补HTTP在状态管理上的不足，只要设置了Cookie，那么在向服务器发送请求的时候，会把Cookie带上，由此服务器就可以获取到对应的Cookie数据，返回一些特定的数据。但是Cookie也是有缺陷的，比如：1、体积上限只有4KB，只能用来存储少量的信息。2、Cookie紧跟域名的，不管域名下面的某个地址需不需要这个Cookie，它都会携带上完整的Cookie。这样随着请求数据的增多，很容易造成性能上的浪费。3、由于Cookie以纯文本的形式在浏览器和服务器中传递，很容易被非法用户截获，然后进行一系列的篡改。下面是Cookie的基本使用：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" now"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nnow"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setMinutes")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("now"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getMinutes")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("600")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//设置Cookie和过期时间")]),t._v("\ndocument"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cookie"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy5ta...;expires='")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("now"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toUTCString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("  Cookie的常用属性，具体在下面罗列出来了（注意：expires和max-age的默认值为session代表关闭浏览器，该cookie则清空、失效）：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("属性")]),t._v(" "),s("th",[t._v("说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("name")]),t._v(" "),s("td",[t._v("cookie名称")])]),t._v(" "),s("tr",[s("td",[t._v("value")]),t._v(" "),s("td",[t._v("cookie值")])]),t._v(" "),s("tr",[s("td",[t._v("expires")]),t._v(" "),s("td",[t._v("指cookie过期的时间")])]),t._v(" "),s("tr",[s("td",[t._v("max-age")]),t._v(" "),s("td",[t._v("指cookie最大的存活有效期（单位：秒）")])]),t._v(" "),s("tr",[s("td",[t._v("domain")]),t._v(" "),s("td",[t._v("指的是cookie当前的域")])]),t._v(" "),s("tr",[s("td",[t._v("path")]),t._v(" "),s("td",[t._v("指cookie当前的路径")])]),t._v(" "),s("tr",[s("td",[t._v("size")]),t._v(" "),s("td",[t._v("指cookie存放的大小")])]),t._v(" "),s("tr",[s("td",[t._v("secure")]),t._v(" "),s("td",[t._v("指cooke的安全属性")])])])]),t._v(" "),s("h4",{attrs:{id:"localstorage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#localstorage"}},[t._v("#")]),t._v(" LocalStorage")]),t._v(" "),s("p",[t._v("  LocalStorage是HTML5规范标准，它的特点是使数据长期保留浏览器中，即使关闭浏览器，也不会造成数据丢失，除非手动清除。并且容量也很大，达到了5MB。LocalStorage提供了两个方法，分别是setItem(key,value)和getItem(key)，具体案例如下所示：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//设置localStorage")]),t._v("\nlocalStorage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setItem")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'token'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy5ta...'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//获取localStorage")]),t._v("\nlocalStorage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getItem")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'token'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy5ta...")]),t._v("\n")])])]),s("h4",{attrs:{id:"sessionstorage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sessionstorage"}},[t._v("#")]),t._v(" SessionStorage")]),t._v(" "),s("p",[t._v("  SessionStorage也是HTML5规范标准，它跟LocalStorage最大的不同就是，SessionStorage只是浏览器会话储存，一旦浏览器被关闭，数据就会被清除掉。容量和方法也跟LocalStorage一致，具体案例如下所示：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//设置sessionStorage")]),t._v("\nsessionStorage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setItem")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'token'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy5ta...'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//获取sessionStorage")]),t._v("\nsessionStorage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getItem")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'token'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy5ta...")]),t._v("\n")])])]),s("h4",{attrs:{id:"indexeddb"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#indexeddb"}},[t._v("#")]),t._v(" IndexedDB")]),t._v(" "),s("p",[t._v("  IndexedDB是浏览器提供的数据库，而且存储容量在理论上没有大小的限制。由于不怎么常用，本文不再讲解该API的用法，但是后续有可能会补上。")])])}),[],!1,null,null,null);s.default=n.exports}}]);