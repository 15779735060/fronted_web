### Action
&emsp;&emsp;Action 类似于 mutation，一般用于执行异步操作，而且Action 提交的是 mutation，而不是直接变更状态。
#### 创建Action
&emsp;&emsp;Action 函数接受一个与 store 实例具有相同方法和属性的 context 对象，因此你可以调用 context.commit 提交一个 mutation，或者通过 context.state 和 context.getters 来获取 state 和 getters：
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
  },
  actions: {
    increment (context){
      //调用mutation更改state状态
      context.commit('increment',1024)
    }
  }
})
```
#### 调用Action
&emsp;&emsp;Action 通过 store.dispatch 方法触发：
```vue
<!-- src/App.vue -->
<template>
  <div>{{store.state.count}}</div>
</template>
<script>
import store from './store/index'
export default {
  created(){
    store.dispatch('increment');
    console.log(store.state.count) //1024
  }
}
</script>
```

