### 创建store容器
&emsp;&emsp;使用Vuex的第一步就是创建一个store，创建过程直截了当——仅需要提供一个初始 state 对象和一些 mutation：
```js
//src/store/index.js
import { createStore } from 'vuex'
// 创建一个新的 store 实例
const store = createStore({
  state () {
    return {
      count: 0
    }
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})
export default store
```
&emsp;&emsp;至此，一个Vuex容器就创建好了，接下来就是挂载到Vue上面去了。