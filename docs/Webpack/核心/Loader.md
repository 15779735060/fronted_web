### Loader
&emsp;&emsp;loader 用于对模块的源代码进行转换。在webpack里面，只能处理js以及json文件，如果需要处理如ts、css、png类型的文件，需要引入loader进行处理
### 基本使用
&emsp;&emsp;例如，你可以使用 loader 告诉 webpack 加载 CSS 文件，为此，首先安装相对应的 loader:
```
npm install --save-dev css-loader
```
然后指示 webpack 对每个 .css 使用 css-loader:
```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['css-loader']
      }
    ]
  }
}
```
### loader参数传递
&emsp;&emsp;一些loader需要你传递参数，以便按照用户喜欢处理文件，webpack提供了一个options对象，在loader被调用的时候可以拿到options：
```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [{
          loader:'css-loader',
          options:{
            name:'yxf'
          }
        }]
      }
    ]
  }
}
```
### loader的执行顺序
在use上声明了多个loader，会按照从右往左，从下往上的方式执行，每个loader的上下文信息取决于上一个loader的返回结果</br>
除了默认的处理顺序，webpack还提供了优先级配置，便于用户按照自定义规则进行处理，分别是：pre > normal > inline > post 
```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader:'css-loader',
            enforce:'pre' //先执行
          },
          {
            loader:'sass-loader',
            enforce:'normal' //后执行
          }
        ] 
      }
    ]
  }
}
```



