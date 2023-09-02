### $store是如何挂载到vm实例上的？
&emsp;&emsp;首先，在vuex需要通过Vue提供的use方法来完成插件的安装，use会执行install方法，Vuex针对Vue1.0与2.0分别进行了不同的处理，如果是Vue1.0，Vuex会将vuexInit方法放入Vue的_init方法中，而对于Vue2.0，则会将vuexinit混淆进Vue的beforeCreacte钩子中。来看一下vuexInit的代码：
```js
function vuexInit () {
  const options = this.$options
  // store injection
  if (options.store) {
    /*存在store其实代表的就是Root节点，直接执行store（function时）或者使用store（非function）*/
    this.$store = typeof options.store === 'function'
      ? options.store()
      : options.store
  } else if (options.parent && options.parent.$store) {
    /*子组件直接从父组件中获取$store，这样就保证了所有组件都公用了全局的同一份store*/
    this.$store = options.parent.$store
  }
}
```
vuexInit会尝试从options中获取store，如果当前组件是根组件（Root节点），则options中会存在store，直接获取赋值给store引用。这样一来，所有的组件都获取到了同一份内存地址的Store实例