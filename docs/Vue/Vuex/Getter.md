#### Getter
&emsp;&emsp;Getter实际上可以看作一个计算属性，如 Computed 一般，通过属性访问时是作为 Vue 的响应式系统的一部分缓存其中的。
#### 创建Getter
&emsp;&emsp;Getter 接受 state 作为其第一个参数：
```js
const store = createStore({
  state: {
    count: 1
  },
  getters: {
    getCount(state){
      return state.count + 70
    }
  }
})
```
#### 调用Getter
&emsp;&emsp;Getter 会暴露为 store.getters 对象，你可以以属性的形式访问这些值：
```vue
<!-- src/App.vue -->
<template>
  <!-- 70+1=71 -->
  <div>{{store.getters.getCount}}</div>
</template>
<script>
import store from './store/index'
export default {
  created(){
    console.log(store.getters.getCount)//70+1=71
  }
}
</script>
```
