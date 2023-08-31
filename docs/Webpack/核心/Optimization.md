### Optimization(优化)
&emsp;&emsp;webpack允许在 optimization 的配置是用来优化打包后的代码，可以通过配置不同的选项来实现不同的优化效果。其中包括了如下几个选项：
#### minimize
是否压缩代码
#### minimizer
压缩代码的插件，可以配置多个
#### splitChunks
代码分割，将公共代码提取出来，避免重复打包
#### runtimeChunk
将运行时代码单独打包成一个文件，避免重复打包
### 优化案例
```js
module.exports={
  minimize:true,
  optimization: {
    runtimeChunk: {
      name: "manifest",
    },
    splitChunks: {
      minSize: 30000,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      name: false,
      //文件分组
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendor",
          chunks: "initial",
        },
      },
    },
  }
}
```