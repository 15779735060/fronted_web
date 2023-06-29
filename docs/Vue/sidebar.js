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
          path: '/Vue/组件插槽.md'
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
      title: 'VueRouter',
      collapsable: true, //可折叠
      children: [
        {
          title: 'VueRouter介绍',
          path: '/Vue/VueRouter/VueRouter介绍.md'
        },
        {
          title: '创建路由表',
          path: '/Vue/VueRouter/创建路由表.md'
        },
        {
          title: '挂载路由表',
          path: '/Vue/VueRouter/挂载路由表.md'
        },
        {
          title: '路由视口',
          path: '/Vue/VueRouter/路由视口.md'
        },
        {
          title: '路由导航',
          path: '/Vue/VueRouter/路由导航.md'
        },
        {
          title: '路由懒加载',
          path: '/Vue/VueRouter/路由懒加载.md'
        },
        {
          title: '路由守卫',
          path: '/Vue/VueRouter/路由守卫.md'
        }
      ]
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