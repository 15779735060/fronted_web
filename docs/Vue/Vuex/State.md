### State
&emsp;&emsp;State作为Vuex的状态对象，凡是预先在state中定义的状态，都会被加入到响应式系统中，当状态发生了变化，对应的视图（View）都将发生改变。
#### 定义State
&emsp;&emsp;在createdStore方法传入一个state即可：
```js
const store = createStore({
  state () {
    return {
      count: 0
    }
  }
})
```
### 使用State
&emsp;&emsp;使用state的前提是**必须使用use安装到Vue项目里**，然后才可以继续使用：
```vue
<!-- src/App.vue -->
<template>
  <div>{{store.state.count}}</div>
</template>
<script>
import store from './store/index'
export default {
  created(){
    console.log(store.state.count) // 0
  }
}
</script>
```
