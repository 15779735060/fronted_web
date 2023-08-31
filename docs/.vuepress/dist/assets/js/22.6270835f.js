(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{295:function(t,s,a){"use strict";a.r(s);var e=a(14),r=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h3",{attrs:{id:"创建版本库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建版本库"}},[t._v("#")]),t._v(" 创建版本库")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("cd myProject\ngit init\n")])])]),s("h3",{attrs:{id:"由工作区提交至暂存区"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#由工作区提交至暂存区"}},[t._v("#")]),t._v(" 由工作区提交至暂存区")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("git add file "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//提交指定文件")]),t._v("\ngit add "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//全部提交")]),t._v("\n")])])]),s("h3",{attrs:{id:"由暂存区提交至本地仓库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#由暂存区提交至本地仓库"}},[t._v("#")]),t._v(" 由暂存区提交至本地仓库")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("git commit "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("m "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"message"')]),t._v("\n")])])]),s("h3",{attrs:{id:"版本回退"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#版本回退"}},[t._v("#")]),t._v(" 版本回退")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这将使HEAD指向上一个提交，但不会删除您最新的更改。如果您希望完全返回到以前的提交并放弃所有更改，则可以添加--hard选项：")]),t._v("\ngit reset "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("HEAD")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\ngit reset "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("hard "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("HEAD")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n")])])]),s("h4",{attrs:{id:"理解工作区与暂存区的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#理解工作区与暂存区的区别"}},[t._v("#")]),t._v(" 理解工作区与暂存区的区别")]),t._v(" "),s("p",[t._v("Git有三个主要的工作区域：工作区（working directory）、暂存区（staging area）和版本库（repository）。")]),t._v(" "),s("p",[t._v("工作区是指您电脑文件系统上用于修改文件的目录。在这里，您可以创建、编辑和删除文件。")]),t._v(" "),s("p",[t._v("暂存区是一个中间状态，它充当了您提交更改的缓冲区。在Git中，您必须明确地将文件添加到暂存区，然后才能将其提交到版本库中。这样做的好处是，您可以对每个更改进行精细控制，并确保只提交需要保存的更改。")]),t._v(" "),s("p",[t._v("版本库包含Git存储库的所有历史记录和元数据。它是Git存储库的核心组成部分，是由Git自动维护的。")]),t._v(" "),s("p",[t._v("简而言之，工作区是您正在处理的实际文件，而暂存区是下一次提交所需更改的文件列表。它们之间的区别在于，您可以对工作区中的任何文件进行修改，但只有将它们添加到暂存区并将其提交到版本库中，它们才会成为Git跟踪的部分。")]),t._v(" "),s("h4",{attrs:{id:"撤销修改和删除文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#撤销修改和删除文件"}},[t._v("#")]),t._v(" 撤销修改和删除文件")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//撤销")]),t._v("\ngit checkout "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v(" flie\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//修改")]),t._v("\ngit rm flie\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);