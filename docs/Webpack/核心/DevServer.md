### DevServer
&emsp;&emsp;使用devserver可以启动一个node服务，用于开发环境下的项目承载入口，用户可以自定义配置。webpack本身只是一个模块打包工具，并不提供node服务，因此使用node服务的前提需要安装webpack-dev-server
#### host
开启node服务的域名配置
#### port
开启node服务的端口号配置
#### hot
模块热更新，监测到模块内容改变，会刷新node服务
#### proxy
网络请求代理，配置了proxy，webpack会把浏览器的网络请求代理到node服务下面去向服务器发送请求，避开浏览器跨域问题
#### 案例
```js
module.exports={
  devServer: {
    historyApiFallback: true, // 在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html
    compress: true, // 启用gzip压缩
    hot: true, // 模块热更新，取决于HotModuleReplacementPlugin
    host: "127.0.0.1", // 设置默认监听域名，如果省略，默认为“localhost”
    port: "3000", // 设置默认监听端口，如果省略，默认为“8080”
    proxy: {
      '/api': process.env.SERVER_PORT,
    }
  }
}
```