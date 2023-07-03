### 挂载store容器
&emsp;&emsp;要在Vue项目中挂载Vuex非常简单，只需要调用Vue实例的use方法。作为插件安装，传入一个store就可以了：
```js
//src/main.js
import Vue from 'vue'
import App from './App.vue'
import store from './store/index'
const vm=new Vue({
  render:h=>h(App)
})
// 将 store 实例作为插件安装
vm.use(store)
vm.$mount('#app')
```