### Object对象静态方法
&emsp;&emsp;Object对象静态方法指的是JavaScript在Object对象上内置的一些方法，它跟Object原型对象上的方法不同，无法被原型链查找到。那既然是静态方法，就只能用Object.xxx的去调用。下面列出比较常用的一些Object静态方法。
#### Object.keys(value)
&emsp;&emsp;keys方法遍历可枚举的属性，只包括对象自身可枚举的属性，不包括对象原型链上的可枚举属性。返回值为一个数组。
```js
let arr = ["a", "b", "c"]
console.log(Object.keys(arr))//["0", "1", "2"]
let obj = { color: "red", size: 14 }
console.log(Object.keys(obj))//["color", "size"]
```
#### Object.values(value)
&emsp;&emsp;values方法遍历可枚举的属性值，只包括对象自身可枚举的属性值，不包括对象原型链上的可枚举的属性值。返回值为一个数组。
```js
let arr = ["a", "b", "c"]
console.log(Object.values(arr))//["a", "b", "c"]
let obj = { color: "red", size: 14 }
console.log(Object.keys(obj))//["red", "14"]
```
#### Object.assign(object,object)
&emsp;&emsp;assign方法用于对象的合并，将源对象的所有可枚举属性拷贝到目标对象，但是只拷贝源对象自身的属性，不拷贝源对象原型链上的属性，也不拷贝不可枚举的属性。如果传递多个源对象，每个源对象里有重复的key，最后一个对象会覆盖前面的对象。
```js
let font = { color: "red", size: 14 }
let padding={left:10,right:20}
console.log(Object.assign(font,padding))//{ color: "red", size: 14, left: 10, right: 20 }
```
#### Obejct.getPrototypeOf(object)
&emsp;&emsp;getPrototypeOf获取指定对象的原型。
```js
let obj={}
console.log(Object.getPrototypeOf(obj)===Object.prototype)//true
```
#### Obejct.setPrototypeOf(object,object)
&emsp;&emsp;setPrototypeOf设置指定对象的原型，传两个参数，第一个为指定的对象，第二个为要指定的原型。
```js
const obj = {a: 1}, proto = {b: 2}
console.log(obj.__proto__ === proto)//false
Object.setPrototypeOf(obj, proto)
console.log(obj.__proto__ === proto)//true
```
#### Object.defineProperty(object,key,{})
&emsp;&emsp;该方法可以为一个对象新增属性，用于描述该属性的状态（可写？可枚举？可删除？）。有一个set方法，还可用于监听该属性值的变化，如Vue2的响应式就是使用该方法实现的。
```js
var obj = {}
Object.defineProperty(obj, "name", {
  value: "yxf",
  wirtable: true, //是否可写
  enumerable: true, //是否可枚举
  configurable: false, //是否可删除
  // set() {},
  // get() {} //value  和get与set只能选一个
});
console.log(obj) // {name:'yxf'}
```
#### Object.create(prototype,{})
&emsp;&emsp;以xxx为原型，新建一个实例对象，以这种方式新建的对象都是Object类型，例如：
```js
var obj = {
  name: "karen"
}
var obj1 = Object.create(obj, {
  life: {
    value: 7
  }
})
console.log(obj1.__proto__===obj); //true
```
#### Object.getOwnPropertyDescriptor(object,key)
&emsp;&emsp;返回object对象的属性描述符：
```js
var obj = {
  name: "karen"
}
console.log(Object.getOwnPropertyDescriptor(obj,'name')); // {value: 'karen', writable: true, enumerable: true, configurable: true}
```
#### Object.freeze(object)
&emsp;&emsp;冻结目标对象，使其不可修改和删除：
```js
var obj = {
  name: "karen"
}
Object.freeze(obj)
obj.name='yxf'
console.log(obj.name); // karen
```



