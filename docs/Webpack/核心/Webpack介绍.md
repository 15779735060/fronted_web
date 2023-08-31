### webpack介绍
&emsp;&emsp;[webpack](https://www.webpackjs.com) 是一个用于现代 JavaScript 应用程序的 静态模块打包工具。当 webpack 处理应用程序时，它会在内部从一个或多个入口点构建一个 依赖图(dependency graph)，然后将你项目中所需的每一个模块组合成一个或多个 bundles，它们均为静态资源，用于展示你的内容
### webpack与vite的区别
&emsp;&emsp;webpack在编译过程中，会将所有模块打包为一个bundle.js文件，然后再运行这个文件。而vite在开发模式下，没有打包的步骤，它利用了浏览器的ES Module Imports特性，只有在真正需要时才编译文件。因此在开发环境下，vite的启动速度非常快。在生产模式下，vite使用Rollup进行打包，提供更好的tree-shaking，代码压缩和性能优化。
