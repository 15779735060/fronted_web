### TypeScript支持
&emsp;&emsp;Vuex一开始是为 JavaScript 编写的，即便4x版本，对TypeScript的支持都比较差。需要一些繁琐的配置。
#### $store类型声明
&emsp;&emsp;Vuex 没有为 this.$store 属性提供开箱即用的类型声明。如果你要使用 TypeScript，首先需要声明自定义的模块补充。为此，需要在项目文件夹中添加一个声明文件来声明 Vue 的自定义类型 ：
```ts
/* vuex.d.ts */
import { Store } from 'vuex'

declare module '@vue/runtime-core' {
  // 声明自己的 store state
  interface State {
    count: number
  }

  // 为 `this.$store` 提供类型声明
  interface ComponentCustomProperties {
    $store: Store<State>
  }
}
```
#### useStore 组合式函数类型声明
&emsp;&emsp;要在useStore里面添加类型声明，必须使用 Vue 内置的 InjectionKey类型提供支持，如下：
```ts
/* /src/store/type.ts */
export interface RootState {
  name: string,
  age: number
}
export interface DemoState {
  userInfo: string
}
const key = 'demo'
export interface AllState extends RootState {
  [key]: DemoState
}

/* /src/store/modules/demo.ts */
import { Module } from 'vuex'
import { RootState } from '../type'
import { DemoState } from '../type'
const Demo: Module<DemoState, RootState> = {
  state: {
    userInfo: ''
  },
  namespaced: true
}
export default Demo

/* src/index.ts */
import { createStore, Store, useStore as baseUseStore } from 'vuex';
import { AllState, RootState } from './type';
import { InjectionKey } from 'vue'
import demo from './modules/demo';
const store = createStore<RootState>({
  state: {
    name: '',
    age: 0
  },
  modules: {
    demo:demo
  }
})
export function useStore<T = AllState>() {
  return baseUseStore<T>(key)
}
export const key: InjectionKey<Store<RootState>> = Symbol()
export default store

/* src/main.ts */
import { createApp } from 'vue'
import App from './App.vue'
import store, { key } from './store';
const app = createApp(App)
app.use(store, key)
app.mount('#app')

/* 调用方式 */
import {useStore} './store/index'
const store=useStore()
```
&emsp;&emsp;如上所示，vuex要获取ts支持非常繁琐，好在上面配置比较全面，如果是基于 Webpack 的项目，可以使用 **require.context** 自动导入模块。