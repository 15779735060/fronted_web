### 路径解析
&emsp;&emsp;这些选项能设置模块如何被解析。webpack 提供合理的默认值，但是还是可能会修改一些解析的细节
#### alias配置
&emsp;&emsp;创建 import 或 require 的别名，来确保模块引入变得更简单。例如，一些位于 src/ 文件夹下的常用模块
```js
const path = require('path');
module.exports = {
  //...
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src/'),
    }
  }
}
```
现在，替换“在导入时使用相对路径”这种方式，就像这样：
```js
//原来引入方式
import Login from '../src/login/index.jsx'
//现在引入方式
import Login from '@/login/index.jsx'
```