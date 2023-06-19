#### Proxy
&emsp;&emsp;其中Proxy 可以对目标对象的读取、函数调用等操作进行拦截，然后进行操作处理。它不直接操作对象，而是像代理模式，通过对象的代理对象进行操作，在进行这些操作时，可以添加一些需要的额外操作。如下所示：
```js
let target = {
  name: 'Tom',
  age: 24
}
let proxy = new Proxy(target, {
  get: function (target, key) {
    console.log('getting ' + key);
    return target[key]; // 不是target.key
  },
  set: function (target, key, value) {
    console.log('setting ' + key);
    target[key] = value;
  }
})
proxy.name     // 实际执行 handler.get
proxy.age = 25 // 实际执行 handler.set
```
#### Reflect
&emsp;&emsp;可以用于获取目标对象的行为,为操作对象提供了一种更优雅、更优雅的方式。而且未来操作对象新方法会只部署在Reflect对象上。
|方法|说明|
|---|---|
|get(target, name, receiver)|target: 目标对象 name: 是我们要读取的属性。receiver(可选)： 可以理解为上下文this对象|
|set(target,name,value,receiver)|target: 我们需要操作的对象|
|apply(target,thisArg,args)|target: 我们的目标函数。 thisArg: target函数调用的时候绑定的this对象。args: 就是函数参数列表|
|defineProperty(target,name,desc)|该方法Object.defineProperty方法类似的，不过唯一的区别是 Reflect.defineProperty返回值是一个Boolean的值|
|deleteProperty(target,name)|target: 表示要操作的对象。 name: 表示要删除该对象上的属性|
|ownKeys(target)|target参数：它是一个对象，用于获取该对象属性共有多少个
|getOwnPropertyDescriptor(target, name)|跟Object.getOwnPropertyDescriptor一样，用于获取该对象属性的描述符|
|getPrototypeOf(target)|跟Object.getPrototypeOf一样，用于获取该对象的原型|
|setPrototypeOf(target, prototype)|跟Object.setPrototypeOf一样，用于设置该对象的原型