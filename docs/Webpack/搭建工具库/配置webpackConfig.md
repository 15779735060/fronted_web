### 配置构建入口和出口
```js
const path = require('path')
module.exports={
  //入口文件，可灵活配置
  entry: './index.ts',
  //出口文件配置
  output: {
    //打包文件夹路径
    path: path.resolve(__dirname, 'lib'),
    //文件名称
    filename: `${pkg.name}.min.js`,
    // 全局模块名称
    library: `${pkg.name}`,
    // 打包方式
    libraryTarget: 'umd',
    globalObject: 'this'
  }
}
```
### 配置loader
```js
// 配置了babel-loader还没完，后续还要配置babelrc文件
module.exports={
  module: {
    rules: [
      {
        test: /\.(js|ts)$/,
        exclude: /(node_modules|bower_components)/, // 屏蔽不需要处理的文件（文件夹）（可选）
        use: ["babel-loader"],
      }
    ]
  },
}
```
### 配置babelrc
```js
// 处理ts语法以及做代码转化，保证对低版本浏览器的兼容性
{
    "presets": [
        "@babel/preset-env",
        "@babel/preset-typescript"
    ]
}
```
### 配置plugin
```js
//前面我们安装了一些第三方插件，这一步主要是使用他们
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
module.exports={
  plugins: [
    new CleanWebpackPlugin()
  ]
}
```
### 配置resolve
```js
//这一步是简化import导入的时候路径配置
const path = require('path')
module.exports={
  resolve: {
    extensions: [".ts", ".js", ".json"],
    alias: {
      "@": path.resolve("src")
    },
  },
}
```
### 优化
```js
//前面我们安装了一些第三方插件，这一步主要是使用他们
const TerserPlugin = require('terser-webpack-plugin')
module.exports={
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin(),
    ]
  }
}
```
### 完整webpackConfig配置
```js
const path = require('path')
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const TerserPlugin = require('terser-webpack-plugin')
module.exports = {
  entry: './index.ts',
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: 'index.js',
    library: `utils`,
    libraryTarget: 'umd',
    globalObject: 'this'
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.(js|ts)$/,
        exclude: /(node_modules|bower_components)/, // 屏蔽不需要处理的文件（文件夹）（可选）
        use: ["babel-loader"],
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin()
  ],
  // 解析
  resolve: {
    extensions: [".ts", ".js", ".json"],
    alias: {
      "@": path.resolve("src")
    },
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin(),
    ]
  }
};
```

