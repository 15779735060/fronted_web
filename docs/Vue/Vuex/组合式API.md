### 组合式API
&emsp;&emsp;在Vue3中，如果使用组合式API，那么就无法访问到Vue实例。Vuex默认提供了一个useStore，可以通过调用 useStore 函数，来在 setup 钩子函数中访问 store。这与在组件中使用选项式 API 访问 this.$store 是等效的。
```js
import { useStore } from 'vuex'

export default {
  setup () {
    const store = useStore()
  }
}
```
#### 访问 State 和 Getter
&emsp;&emsp;为了访问 state 和 getter，需要创建 computed 引用以保留响应性，这与在选项式 API 中创建计算属性等效：
```js
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  setup () {
    const store = useStore()

    return {
      // 在 computed 函数中访问 state
      count: computed(() => store.state.count),

      // 在 computed 函数中访问 getter
      double: computed(() => store.getters.double)
    }
  }
}
```
#### 访问 Mutation 和 Action
&emsp;&emsp;要使用 mutation 和 action 时，只需要在 setup 钩子函数中调用 commit 和 dispatch 函数：
```js
import { useStore } from 'vuex'

export default {
  setup () {
    const store = useStore()

    return {
      // 使用 mutation
      increment: () => store.commit('increment'),

      // 使用 action
      asyncIncrement: () => store.dispatch('asyncIncrement')
    }
  }
}
```
