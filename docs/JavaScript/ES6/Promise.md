### Promise介绍
&emsp;&emsp;Promise是异步编程的一种解决方案，可以替代传统的解决方案–回调函数和事件。可以替代传统的解决方案–回调函数和事件。ES6统一了用法，原生提供了Promise对象。Promise有三种状态，分别是：Pending（进行中），Resolved (已完成)， Rejected(已失败)。Promise从Pending状态开始。
#### 基本用法
&emsp;&emsp;Promise接收一个带resolve、reject参数的函数，一旦声明，会立即执行，真正执行异步操作的是Promise原型对象上的then和catch，这两个方法的触发取决于什么时候调用resolve、reject，如下所示：
```js
const sleep = (timer = 1000) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject()
      resolve()
    }, timer)
  })
}
sleep().then(() => {
  //一秒后输出
})
```
#### resolve和reject
&emsp;&emsp;这两个方法实际上就代表这Promise的状态，如果在Promise里面调用resolve，那么Promise的状态就会改为Resolved。反之调用reject的话，会进入到Rejected，需要注意的是：一旦状态改变了就不会在变，也就是说任何时候Promise都只有一种状态。如下所示，虽然连续调用了resolve和reject，但是因为Promise先进入到了Rejected（已失败）状态，所以这个Promise的状态依然是Rejected：
```js
const sleep = (timer = 1000) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject()
      resolve()
    }, timer)
  })
}
sleep().then(() => {}).catch(()=>{
  //一秒后输出
})
```
#### Promise.all
&emsp;&emsp;该方法为Promise的静态方法，也是具有三种状态（Pending、Resolved、Rejected），它可接收一组（多个）Promise方法，统一获取各个Promise的结果，根据各个Promise的结果，返回Resolved或者Rejected。返回状态解析：假设接收的任意一个Promise出现了Rejected，那么就返回Rejected，只有这一组（多个）Promise方法，全部成功了，才会返回Resolved，如下所示：
```js
//示例一：
const sleep = (timer = 1000) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true)
    }, timer)
  })
}
const sleep2 = (timer = 1000) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //Rejected
      reject(false)
    }, timer)
  })
}
Promise.all([sleep(), sleep2()]).catch(err=>{
  //执行该回调
})
//示例二：
const sleep = (timer = 1000) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true)
    }, timer)
  })
}
const sleep2 = (timer = 1000) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true)
    }, timer)
  })
}
Promise.all([sleep(), sleep2()]).then(res=>{
  //执行该回调
})
```
### Promise.allSettled
&emsp;&emsp;这个也是Promise的静态方法，但是跟all不一的地方就是：接收的一组（多个）Promise，只有其中有任何一个Promise的状态为Resolved，那么就返回Resolved，如果这一组Promise里的状态全是Rejected，那么它就返回Rejected。

