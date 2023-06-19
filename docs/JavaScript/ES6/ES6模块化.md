### 概述
&emsp;&emsp;在 ES6 前，实现模块化使用的是 Commonjs 或者 AMD ，由于它俩本身不是ECMAScript标准，所以无法得到浏览器的支持，那么在ES6里引入了模块化规范，其设计思想是在编译时就能确定模块的依赖关系，以及输入和输出的变量。ES6 的模块化分为导出（export） 与导入（import）两个模块。
#### export
&emsp;&emsp;export是js文件导出模块，其有两种导出方法，分别是默认导出和按需导出，需要注意的是：一个js文件只能有一个默认导出，但是按需导出不做限制，如下所示：
```js
//App.js
const name='yxf'
const age=24
const color='red'
export {
  name,
  age
}
export default color
```
#### import
&emsp;&emsp;import对应的就是文件导入模块，也有两种方法，分别是默认导入和按需导入,但是需要注意的是：必需要在文件头部声明导入。并且只会执行一次，也就是单例模式。如下所示：
```js
//index.js
import color,{name,age} from './App.js'
console.log(color) //red
console.log(name) //yxf
console.log(age) //24
```
#### as
&emsp;&emsp;as实际上是对导入对象的重命名。如果按需导入目标文件，那导入的名称要与导出的名称一致。那这个时候as就派上用场了，可以在导入的时候重命名，如下所示：
```js
//index.js
import color,{name as newName,age} from './App.js'
console.log(color) //red
console.log(newName) //yxf
console.log(age) //24
```
