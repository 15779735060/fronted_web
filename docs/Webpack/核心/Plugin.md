### Plugin
&emsp;&emsp;插件 是 webpack 的 核心 功能。Webpack 自身也是构建于你在 webpack 配置中用到的 相同的插件系统 之上！插件目的在于解决 loader 无法实现的其他事
### 开始使用
```js
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.html' })
  ]
}
```
### 剖析
&emsp;&emsp;webpack 插件是一个具有 apply 方法的 JavaScript 对象。apply 方法会被 webpack compiler 调用，并且在 整个 编译生命周期都可以访问 compiler 对象。
```js
//consoleLogOnBuildWebpackPlugin.js
const pluginName = 'ConsoleLogOnBuildWebpackPlugin';

class ConsoleLogOnBuildWebpackPlugin {
  apply(compiler) {
    compiler.hooks.run.tap(pluginName, (compilation) => {
      console.log('webpack 构建正在启动！');
    });
  }
}

module.exports = ConsoleLogOnBuildWebpackPlugin;
```
调用plugin
```js
//webpack.config.js
const ConsoleLogOnBuildWebpackPlugin = require('./consoleLogOnBuildWebpackPlugin.js');
module.exports = {
  plugins: [
    new ConsoleLogOnBuildWebpackPlugin()
  ]
}
```