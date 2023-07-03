### Mutation
&emsp;&emsp;更改 Vuex 的 store 中的状态的唯一方法是提交 mutation。Vuex 中的 mutation 非常类似于事件：每个 mutation 都有一个字符串的事件类型 (type)和一个回调函数 (handler)。这个回调函数就是我们实际进行状态更改的地方，并且它会接受 state 作为第一个参数。
#### 创建Mutation
```js
const store = createStore({
  state: {
    count: 1
  },
  mutations: {
    increment (state,value) {
      // 变更状态
      state.count=value ? value : state.count++
    }
  }
})
```
#### 调用Mutation更改store状态
&emsp;&emsp;你不能直接调用一个 mutation 处理函数。这个选项更像是事件注册：“当触发一个类型为 increment 的 mutation 时，调用此函数。”要唤醒一个 mutation 处理函数，你需要以相应的 type 调用 store.commit 方法：
```vue
<!-- src/App.vue -->
<template>
  <div>{{store.state.count}}</div>
</template>
<script>
import store from './store/index'
export default {
  created(){
    //
    store.commit('increment',100);
    console.log(store.state.count) // 100
  }
}
</script>
```
