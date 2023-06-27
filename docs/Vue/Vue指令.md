### 概述
&emsp;&emsp;除了核心功能默认内置的指令，Vue 也允许注册自定义指令。注意，在 Vue 中，代码复用和抽象的主要形式是组件。然而，有的情况下，你仍然需要对普通 DOM 元素进行底层操作，这时候就会用到自定义指令。
#### [内置指令](https://v2.cn.vuejs.org/v2/api/#v-text)
|指令|说明|
|---|---|
|v-text|更新元素的 textContent|
|v-html|更新元素的 innerHTML|
|v-show|根据表达式之真假值，切换元素的 display CSS property|
|v-if|根据表达式的值的 truthiness 来有条件地渲染元素。在切换时元素及它的数据绑定 / 组件被销毁并重建|
|v-else|前一兄弟元素必须有 v-if 或 v-else-if|
|v-else-if|前一兄弟元素必须有 v-if 或 v-else-if|
|v-for|迭代器，基于源数据多次渲染元素或模板块。此指令之值，必须使用特定语法 alias in expression，为当前遍历的元素提供别名（与v-if一起使用，优先级比v-if高）|
|v-on|绑定事件监听器，可以缩写为@|
|v-bind|动态地绑定一个或多个 attribute，或一个组件 prop 到表达式，可以缩写为:。修饰符.sync (2.3.0+) 语法糖，会扩展成一个更新父组件绑定值的 v-on 侦听器|
|v-model|双向绑定指令。修饰符.lazy - 取代 input 监听 change 事件|
|v-slot|组件插槽指令，可缩写为#|
|v-once|只渲染元素和组件一次。随后的重新渲染，元素/组件及其所有的子节点将被视为静态内容并跳过。这可以用于优化更新性能|
#### 自定义指令
&emsp;&emsp;自定义指令有两种注册方式，分别局部注册和全局注册。局部注册的自定义指令只能在当前组件下使用，而全局注册的自定义指令则所有组件可用，先来看下局部注册。如下所示：
```vue
<template>
  <!-- 自动聚焦 -->
  <input v-focus></input>
</template>
<script>
  export default {
    data(){
      return {
      }
    },
    directive:{
      focus: {
      // 指令的定义
        inserted: function (el) {
          el.focus()
        }
      }
    }
  }
</script>
<style></style>
```
&emsp;&emsp;全局注册自定义指令要在Vue实例上面注册，如下所示：
```js
//src/main.js
import Vue from 'vue'
import App from './App.vue'
const vm=new Vue({
  //渲染根组件
  render: h => h(App)
})
//全局注册自定义指令
vm.directive('focus',{
  inserted: function (el) {
    el.focus()
  }
})
//挂载到指定节点上
vm.$mount('#app')
```
#### 自定义指令的生命周期函数
&emsp;&emsp;如前面的demo所示，在focus指令中添加了inserted，这个属性就是生命周期函数，Vue会在特定的时机去调用它，下面我们看下所有的自定义指令生命周期函数：
|生命周期函数|说明|
|---|---|
|bind|只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置|
|inserted|被绑定元素插入父节点时调用 (仅保证父节点存在，但不一定已被插入文档中)|
|update|所在组件的 VNode 更新时调用，但是可能发生在其子 VNode 更新之前。指令的值可能发生了改变，也可能没有。但是你可以通过比较更新前后的值来忽略不必要的模板更新|
|componentUpdated|指令所在组件的 VNode 及其子 VNode 全部更新后调用|
|unbind|只调用一次，指令与元素解绑时调用|
&emsp;&emsp;上面已经了解了生命周期函数的调用时机，但是还缺少对指令绑定的Dom元素或者vNode进行通信。那么，生命周期函数也提供了四个参数，即el、binding、vnode 和 oldVnode。如下所示：
+ el：指令所绑定的元素，可以用来直接操作 DOM
+ binding：一个对象，包含name（指令名）、value（指令绑定值）、oldValue（指令绑定前一个值）、expression（字符串形式的指令表达式）、arg（传给指令的参数）、modifiers（一个包含修饰符的对象）
+ vnode：Vue 编译生成的虚拟节点
+ oldVnode：上一个虚拟节点，仅在 update 和 componentUpdated 钩子中可用