### package.json文件说明
&emsp;&emsp;package.json 文件其实就是对项目或者模块包的描述，里面包含许多元信息。比如项目名称，项目版本，项目执行入口文件，项目贡献者等等
#### name
项目/模块名称，长度必须小于等于214个字符，不能以"."(点)或者"_"(下划线)开头，不能包含大写字母
#### version
项目版本
#### author
项目开发者
#### description 
项目描述，是一个字符串。它可以帮助人们在使用npm search时找到这个包
#### keywords
项目关键字，是一个字符串数组。它可以帮助人们在使用npm search时找到这个包
#### private
是否私有，设置为 true 时，npm 拒绝发布
#### dependencies
生产环境下，项目运行所需依赖
#### devDependencies
开发环境下，项目所需依赖
#### scripts
执行 npm 脚本命令简写
#### main
项目默认执行文件，比如 require(‘webpack’)；就会默认加载 lib 目录下的 webpack.js
文件，如果没有设置，则默认加载项目跟目录下的 index.js 文件
#### module
项目默认执行文件，比如 require(‘webpack’)；就会默认加载 lib 目录下的 webpack.js
文件，如果没有设置，则默认加载项目跟目录下的 index.js 文件
#### browserslist
供浏览器使用的版本列表
