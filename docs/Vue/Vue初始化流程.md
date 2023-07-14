### 概述
&emsp;&emsp;这是一道 vue 的面试题，下面会结合部分源码对初始化流程展开讲解。
#### init
&emsp;&emsp;首先会注册 指令、插件、Mixin等：
```js
initMixin(Vue)
stateMixin(Vue)
eventsMixin(Vue)
lifecycleMixin(Vue)
renderMixin(Vue)
```
&nbsp;&nbsp;在初始化mixin的时候，会在Vue原型上添加一个_init方法，然后在我们 new Vue() 的时候，去调用_init方法：
```js
export function initMixin (Vue: Class<Component>) {
  Vue.prototype._init = function (options?: Object) {
    const vm: Component = this
    // a uid
    vm._uid = uid++
    initLifecycle(vm)
    initEvents(vm)
    initRender(vm)
    callHook(vm, 'beforeCreate')
    initInjections(vm) // resolve injections before data/props
    initState(vm)
    initProvide(vm) // resolve provide after data/props
    callHook(vm, 'created')
  }
}
function Vue (options) {
  if (process.env.NODE_ENV !== 'production' &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword')
  }
  this._init(options)
}
export Vue
```
#### 流程图
&emsp;&emsp;下面是一张vue详细的初始化流程图：
![image](../Vue/image/init.png)