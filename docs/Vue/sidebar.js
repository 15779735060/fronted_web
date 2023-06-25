module.exports = {
  VueSidebar: [
    {
      title: 'Vue介绍',
      path: '/Vue/Vue介绍.md'
    },
    {
      title: 'Vue核心',
      collapsable: true, //可折叠
      children: [
        {
          title: 'Vue实例',
          path: '/Vue/Vue实例.md'
        },
        {
          title: '模板语法',
          path: '/Vue/模板语法.md'
        },
        {
          title: '生命周期',
          path: '/Vue/生命周期.md'
        },
        {
          title: '计算属性与侦听器',
          path: '/Vue/计算属性与侦听器.md'
        },
        {
          title: 'Vue指令',
          path: '/Vue/Vue指令.md'
        },
        {
          title: '组件基础',
          path: '/Vue/组件基础.md'
        },
        {
          title: '组件插槽',
          path: '/Vue/组件基础.md'
        },
        {
          title: '组件之间的通信',
          path: '/Vue/组件之间的通信.md'
        },
        {
          title: '双向绑定原理',
          path: '/Vue/双向绑定原理.md'
        },
        {
          title: '响应式原理',
          path: '/Vue/响应式原理.md'
        }
      ]
    },
    {
      title: 'Vue-Router',
      collapsable: true, //可折叠
      children: [{
        title: 'Vue介绍',
        path: '/Vue/Vue介绍.md'
      }]
    },
    {
      title: 'Vuex',
      collapsable: true, //可折叠
      children: [{
        title: 'Vue介绍',
        path: '/Vue/Vue介绍.md'
      }]
    },
    {
      title: 'Pinia',
      collapsable: true, //可折叠
      children: [{
        title: 'Vue介绍',
        path: '/Vue/Vue介绍.md'
      }]
    }
  ]
}