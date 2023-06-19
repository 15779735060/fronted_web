### Class类
&emsp;&emsp;在ES6中，class (类)作为对象的模板被引入，可以通过 class 关键字定义类。class 的本质是 function。它可以看作一个语法糖，让对象原型的写法更加清晰、更像面向对象编程的语法。
#### 类声明
```js
class Example {
  constructor(name) {
    this.name = name;
  }
}
const target=new Example('xm')
```
#### 类的Prototype
&emsp;&emsp;前面也说了，class的本质是function，那么必定有prototype原型对象，我们可以定义原型对象，让对象实例可以访问到。那除了使用prototype定义原型对象，其实在class里面还可以用另一种方式定义，那就是直接写在class类里面，如下所示：
```js
//方式一：
class Example {
  constructor(name) {
    this.name = name;
  }
  myFn(){
    console.log(this)
  }
}
//方式二：
class Example {
  constructor(name) {
    this.name = name;
  }
}
Example.prototype.myFn=function (){
  console.log(this)
}
//实例化
const target=new Example('xm')
target.myFn() //target
```
#### 类的静态属性
&emsp;&emsp;类的静态属性跟原型对象不一样，原型对象上的属性是公共的，并且正常情况下，this指向的是实例，但类静态属性就不同了，它只能通过类访问到，无法在实例化对象上访问。那么静态属性的声明方式有两种，如下所示：
```js
//方式一（新提案，可能会存在兼容性问题）
class Example {
  static props='hello'
}
//方式二(推荐写法)
class Example {
}
Example.props='hello'
```
#### 类的继承
&emsp;&emsp;类可以通过 extends 实现类的继承，被继承的类，可以访问到它父类上的属性。需要注意的是，如果子类如果写了constructor，那么就必须调用Super方法，且必须出现在 this 之前，如下所示：
```js
class School{
}
class Person extends School{
  // error:Must call super constructor in derived
  constructor(){
  }
  // success
  constructor(){
    super()
  }
}
    const p=new Person()
```
