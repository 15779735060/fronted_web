(window.webpackJsonp=window.webpackJsonp||[]).push([[126],{401:function(t,a,r){"use strict";r.r(a);var s=r(14),e=Object(s.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h3",{attrs:{id:"初始化参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#初始化参数"}},[t._v("#")]),t._v(" 初始化参数")]),t._v(" "),a("p",[t._v("  解析webpack配置参数，合并shell传入和webpack.config.js文件配置的参数，形成最后的配置结果。")]),t._v(" "),a("h3",{attrs:{id:"开始编译"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开始编译"}},[t._v("#")]),t._v(" 开始编译")]),t._v(" "),a("p",[t._v("  上一步得到的参数初始化compiler对象，注册所有配置的插件，插件监听webpack构建生命周期的事件节点，做出相应的反应，执行对象的 run 方法开始执行编译。")]),t._v(" "),a("h3",{attrs:{id:"确定入口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#确定入口"}},[t._v("#")]),t._v(" 确定入口")]),t._v(" "),a("p",[t._v("  从配置的entry入口，开始解析文件构建AST语法树，找出依赖，递归下去。")]),t._v(" "),a("h3",{attrs:{id:"编译模块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编译模块"}},[t._v("#")]),t._v(" 编译模块")]),t._v(" "),a("p",[t._v("  递归中根据文件类型和loader配置，调用所有配置的loader对文件进行转换，再找出该模块依赖的模块，再递归本步骤直到所有入口依赖的文件都经过了本步骤的处理。")]),t._v(" "),a("h3",{attrs:{id:"完成模块编译并输出"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#完成模块编译并输出"}},[t._v("#")]),t._v(" 完成模块编译并输出")]),t._v(" "),a("p",[t._v("  递归完事后，得到每个文件结果，包含每个模块以及他们之间的依赖关系，根据entry配置生成代码块chunk")]),t._v(" "),a("h3",{attrs:{id:"输出完成"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#输出完成"}},[t._v("#")]),t._v(" 输出完成")]),t._v(" "),a("p",[t._v("  输出所有的chunk到文件系统。")])])}),[],!1,null,null,null);a.default=e.exports}}]);