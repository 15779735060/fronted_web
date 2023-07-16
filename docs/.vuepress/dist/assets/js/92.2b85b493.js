(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{360:function(t,a,s){"use strict";s.r(a);var e=s(14),r=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h3",{attrs:{id:"全局配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#全局配置"}},[t._v("#")]),t._v(" 全局配置")]),t._v(" "),a("p",[t._v("  微信小程序的全局配置都写入在根目录下的App.json里面，下面会列出必填项，以及常用的配置，详细的配置请异步"),a("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("官网"),a("OutboundLink")],1)]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("属性")]),t._v(" "),a("th",[t._v("类型")]),t._v(" "),a("th",[t._v("必填")]),t._v(" "),a("th",[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("pages")]),t._v(" "),a("td",[t._v("String[]")]),t._v(" "),a("td",[t._v("true")]),t._v(" "),a("td",[t._v("页面路径列表")])]),t._v(" "),a("tr",[a("td",[t._v("window")]),t._v(" "),a("td",[t._v("Object")]),t._v(" "),a("td",[t._v("false")]),t._v(" "),a("td",[t._v("全局的默认窗口表现")])]),t._v(" "),a("tr",[a("td",[t._v("sitemapLocation")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("true")]),t._v(" "),a("td",[t._v("指明 sitemap.json 的位置")])]),t._v(" "),a("tr",[a("td",[t._v("entryPagePath")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("false")]),t._v(" "),a("td",[t._v("小程序默认启动首页")])]),t._v(" "),a("tr",[a("td",[t._v("tabBar")]),t._v(" "),a("td",[t._v("Object")]),t._v(" "),a("td",[t._v("false")]),t._v(" "),a("td",[t._v("底部 tab 栏的表现")])]),t._v(" "),a("tr",[a("td",[t._v("subpackages")]),t._v(" "),a("td",[t._v("Object[]")]),t._v(" "),a("td",[t._v("false")]),t._v(" "),a("td",[t._v("分包结构配置")])]),t._v(" "),a("tr",[a("td",[t._v("preloadRule")]),t._v(" "),a("td",[t._v("Object")]),t._v(" "),a("td",[t._v("false")]),t._v(" "),a("td",[t._v("分包预下载规则")])]),t._v(" "),a("tr",[a("td",[t._v("usingComponents")]),t._v(" "),a("td",[t._v("Object")]),t._v(" "),a("td",[t._v("false")]),t._v(" "),a("td",[t._v("全局自定义组件配置")])]),t._v(" "),a("tr",[a("td",[t._v("networkTimeout")]),t._v(" "),a("td",[t._v("Object")]),t._v(" "),a("td",[t._v("false")]),t._v(" "),a("td",[t._v("网络超时时间")])]),t._v(" "),a("tr",[a("td",[t._v("debug")]),t._v(" "),a("td",[t._v("Boolean")]),t._v(" "),a("td",[t._v("false")]),t._v(" "),a("td",[t._v("是否开启 debug 模式，默认关闭")])])])]),t._v(" "),a("h4",{attrs:{id:"pages"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pages"}},[t._v("#")]),t._v(" pages")]),t._v(" "),a("p",[t._v("  用于指定小程序由哪些页面组成，每一项都对应一个页面的 路径（含文件名） 信息。文件名不需要写文件后缀：")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"pages"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pages/tabbar/workbench/workbench"')]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),a("h4",{attrs:{id:"window"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#window"}},[t._v("#")]),t._v(" window")]),t._v(" "),a("p",[t._v("  用于设置小程序的状态栏、导航条、标题、窗口背景色:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("属性")]),t._v(" "),a("th",[t._v("类型")]),t._v(" "),a("th",[t._v("默认值")]),t._v(" "),a("th",[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("navigationBarBackgroundColor")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("#000000")]),t._v(" "),a("td",[t._v("导航栏背景颜色")])]),t._v(" "),a("tr",[a("td",[t._v("navigationBarTextStyle")]),t._v(" "),a("td",[t._v("black/white")]),t._v(" "),a("td",[t._v("white")]),t._v(" "),a("td",[t._v("导航栏标题颜色，仅支持 black / white")])]),t._v(" "),a("tr",[a("td",[t._v("navigationBarTitleText")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("-")]),t._v(" "),a("td",[t._v("导航栏标题文字内容")])]),t._v(" "),a("tr",[a("td",[t._v("navigationStyle")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("default")]),t._v(" "),a("td",[t._v("导航栏样式，仅支持以下值：default 默认样式custom 自定义导航栏，只保留右上角胶囊按钮")])]),t._v(" "),a("tr",[a("td",[t._v("backgroundColor")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("#ffffff")]),t._v(" "),a("td",[t._v("窗口的背景色")])]),t._v(" "),a("tr",[a("td",[t._v("backgroundTextStyle")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("dark")]),t._v(" "),a("td",[t._v("下拉 loading 的样式，仅支持 dark / light")])])])]),t._v(" "),a("h4",{attrs:{id:"sitemaplocation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sitemaplocation"}},[t._v("#")]),t._v(" sitemapLocation")]),t._v(" "),a("p",[t._v("  指明 sitemap.json 的位置；默认为 'sitemap.json' 即在 app.json 同级目录下名字的 sitemap.json 文件：")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"sitemapLocation"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"sitemap.json"')]),t._v("\n")])])]),a("h4",{attrs:{id:"entrypagepath"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#entrypagepath"}},[t._v("#")]),t._v(" entryPagePath")]),t._v(" "),a("p",[t._v("  配置小程序启动首页，如果不配置，默认pages下的第一个页面")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"entryPagePath"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pages/tabbar/workbench/workbench"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n")])])]),a("h4",{attrs:{id:"tabbar"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tabbar"}},[t._v("#")]),t._v(" tabbar")]),t._v(" "),a("p",[t._v("  如果小程序是一个多 tab 应用（客户端窗口的底部或顶部有 tab 栏可以切换页面），可以通过 tabBar 配置项指定 tab 栏的表现，以及 tab 切换时显示的对应页面。下面tabbar的配置：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("属性")]),t._v(" "),a("th",[t._v("类型")]),t._v(" "),a("th",[t._v("必填")]),t._v(" "),a("th",[t._v("默认值")]),t._v(" "),a("th",[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("color")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("true")]),t._v(" "),a("td",[t._v("-")]),t._v(" "),a("td",[t._v("tab 上的文字默认颜色，仅支持十六进制颜色")])]),t._v(" "),a("tr",[a("td",[t._v("selectedColor")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("true")]),t._v(" "),a("td",[t._v("-")]),t._v(" "),a("td",[t._v("tab 上的文字选中时的颜色，仅支持十六进制颜色")])]),t._v(" "),a("tr",[a("td",[t._v("backgroundColor")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("true")]),t._v(" "),a("td",[t._v("-")]),t._v(" "),a("td",[t._v("tab 的背景色，仅支持十六进制颜色")])]),t._v(" "),a("tr",[a("td",[t._v("borderStyle")]),t._v(" "),a("td",[t._v("black/white")]),t._v(" "),a("td",[t._v("false")]),t._v(" "),a("td",[t._v("black")]),t._v(" "),a("td",[t._v("tabbar 上边框的颜色， 仅支持 black / white")])]),t._v(" "),a("tr",[a("td",[t._v("list")]),t._v(" "),a("td",[t._v("Object[]")]),t._v(" "),a("td",[t._v("true")]),t._v(" "),a("td",[t._v("-")]),t._v(" "),a("td",[t._v("tab 的列表，最少 2 个、最多 5 个 tab")])]),t._v(" "),a("tr",[a("td",[t._v("position")]),t._v(" "),a("td",[t._v("bottom/top")]),t._v(" "),a("td",[t._v("false")]),t._v(" "),a("td",[t._v("bottom")]),t._v(" "),a("td",[t._v("tabBar 的位置，仅支持 bottom / top")])]),t._v(" "),a("tr",[a("td",[t._v("custom")]),t._v(" "),a("td",[t._v("Boolean")]),t._v(" "),a("td",[t._v("false")]),t._v(" "),a("td",[t._v("false")]),t._v(" "),a("td",[t._v("是否开启自定义 tabBar")])])])]),t._v(" "),a("p",[t._v("  如下所示，list属性代表是tabar的列表是一个Object[]类型的值，下面会对list列表属性做一个样例：")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"tabbar"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"list"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"text"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"工作台"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//每项tabbar的标题")]),t._v("\n\t    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"pagePath"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pages/tabbar/workbench/workbench"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//跳转路径")]),t._v("\n\t    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"iconPath"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"static/tabbar/workbench.png"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//未选中时的icon")]),t._v("\n\t    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"selectedIconPath"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"static/tabbar/workbench_active.png"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//已选中时的icon")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h4",{attrs:{id:"subpackages"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#subpackages"}},[t._v("#")]),t._v(" subpackages")]),t._v(" "),a("p",[t._v("  微信小程序官方为了优化用户体验，规定小程序"),a("strong",[t._v("总体积不得超过20MB，主包体积不得超过2MB")]),t._v("，因此提供了一个分包规则，对于体积较大的小程序，可以合理使用分包，下面是一个样例：")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"subPackages"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"root"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"loginPackages"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//分包根目录")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"loginPackages"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//分包别名，分包预下载时可以使用")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"pages"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"path"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pages/tabbar/workbench/workbench"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//分包页面路径，相对于分包根目录")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"style"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"navigationBarTitleText"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"工作台"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//页面标题")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"enablePullDownRefresh"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//是否开启下拉刷新")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"navigationStyle"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"custom"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//自定义页面导航栏")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"independent"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//分包是否是独立分包")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),a("p",[t._v("  分包虽然可以拆分主包体积，优化用户体验，但是也有一些注意事项：")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("tabbar页面不能放在分包里，并且分包里也不能引用另一个分包的资源，只能引用主包的资源")])]),t._v(" "),a("li",[t._v("独立分包是小程序中一种特殊类型的分包，可以独立于主包和其他分包运行，"),a("strong",[t._v("不依赖主包即可运行")]),t._v("。从独立分包中页面进入小程序时，不需要下载主包。当用户进入普通分包或主包内页面时，主包才会被下载。"),a("strong",[t._v("如果开启了独立分包，则不能依赖主包和其他分包中的内容，而且主包中的 app.wxss 对独立分包无效")])])]),t._v(" "),a("h4",{attrs:{id:"preloadrule"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#preloadrule"}},[t._v("#")]),t._v(" preloadRule")]),t._v(" "),a("p",[t._v("  开发者可以通过配置，在进入小程序某个页面时，由框架自动预下载可能需要的分包，提升进入后续分包页面时的启动速度：")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"preloadRule"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//key 是页面路径，value 是进入此页面的预下载配置")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"pages/index"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"network"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"all"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//在指定网络下预下载，可选值为：all: 不限网络wifi: 仅wifi下的预下载")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"packages"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"testPack"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//进入页面后预下载分包的 root 或 name。__APP__ 表示主包")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h4",{attrs:{id:"usingcomponents"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usingcomponents"}},[t._v("#")]),t._v(" usingComponents")]),t._v(" "),a("p",[a("strong",[t._v("全局自定义组件会视为被所有页面依赖，会在所有页面启动时进行初始化，影响启动性能且会占用主包大小。只被个别页面或分包引用的自定义组件应尽量在页面配置中声明")]),t._v("。开发者应谨慎考虑！！！")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"usingComponents"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"van-button"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"path/to/vant-weapp/dist/button/index"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h4",{attrs:{id:"networktimeout"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#networktimeout"}},[t._v("#")]),t._v(" networkTimeout")]),t._v(" "),a("p",[t._v("  各类网络请求的超时时间，如果超时，则会进入Fila阶段：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("属性")]),t._v(" "),a("th",[t._v("类型")]),t._v(" "),a("th",[t._v("必填")]),t._v(" "),a("th",[t._v("默认值")]),t._v(" "),a("th",[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("request")]),t._v(" "),a("td",[t._v("number")]),t._v(" "),a("td",[t._v("false")]),t._v(" "),a("td",[t._v("60000")]),t._v(" "),a("td",[t._v("wx.request 的超时时间，单位：毫秒")])]),t._v(" "),a("tr",[a("td",[t._v("connectSocket")]),t._v(" "),a("td",[t._v("number")]),t._v(" "),a("td",[t._v("false")]),t._v(" "),a("td",[t._v("60000")]),t._v(" "),a("td",[t._v("wx.connectSocket 的超时时间，单位：毫秒")])]),t._v(" "),a("tr",[a("td",[t._v("uploadFile")]),t._v(" "),a("td",[t._v("number")]),t._v(" "),a("td",[t._v("false")]),t._v(" "),a("td",[t._v("60000")]),t._v(" "),a("td",[t._v("wx.uploadFile 的超时时间，单位：毫秒")])]),t._v(" "),a("tr",[a("td",[t._v("downloadFile")]),t._v(" "),a("td",[t._v("number")]),t._v(" "),a("td",[t._v("false")]),t._v(" "),a("td",[t._v("60000")]),t._v(" "),a("td",[t._v("wx.downloadFile 的超时时间，单位：毫秒")])])])])])}),[],!1,null,null,null);a.default=r.exports}}]);