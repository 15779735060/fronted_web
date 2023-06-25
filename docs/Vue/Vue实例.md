### 概述
&emsp;&emsp;每个 Vue 应用都是通过用 Vue 函数创建一个新的 Vue 实例开始的：当创建一个 Vue 实例时，你可以传入一个选项对象。这篇教程主要描述的就是如何使用这些选项来创建你想要的行为。作为参考，你也可以在 [API](https://v2.cn.vuejs.org/v2/api/#%E9%80%89%E9%A1%B9-%E6%95%B0%E6%8D%AE) 文档中浏览完整的选项列表。
#### 创建Vue实例
&emsp;&emsp;当一个 Vue 实例被创建时，也就意味着一个Vue项目开始了，一般来说，一个 Vue 项目只有一个Vue实例，在这个实例下面，包含一个根组件，以及根组件下面的若干个子组件，它们的关系就像一张树形结构图，以下是如何基于工程化项目进行实例创建：
```js
/* src/App.vue(根组件文件) */
<template></template>
<script>
  export default {
    data(){
      return {
      }
    },
    methods:{
    }
  }
</script>
<style></style>
/* src/main.js(项目入口文件) */
import Vue from 'vue'
import App from './App.vue'
const vm=new Vue({
  //渲染根组件
  render: h => h(App)
})
//挂载到指定节点上
vm.$mount('#app')
```
