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
          title: 'Vue初始化流程',
          path: '/Vue/Vue初始化流程.md'
        },
        {
          title: '响应式原理',
          path: '/Vue/响应式原理.md'
        },
        {
          title:'computed的原理',
          path:'/Vue/computed的原理.md'
        },
        {
          title: 'slot的解析过程',
          path: '/Vue/slot的解析过程.md'
        },
        {
          title: 'Diff算法过程',
          path: '/Vue/Diff算法过程.md'
        },
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
          title: '安装',
          path: '/Vue/VueRouter/安装.md'
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
      children: [
        {
          title: 'Vuex介绍',
          path: '/Vue/Vuex/Vuex介绍.md'
        },
        {
          title: '安装',
          path: '/Vue/Vuex/安装.md'
        },
        {
          title: '创建store容器',
          path: '/Vue/Vuex/创建store容器.md'
        },
        {
          title: '挂载store容器',
          path: '/Vue/Vuex/挂载store容器.md'
        },
        {
          title: 'State',
          path: '/Vue/Vuex/State.md'
        },
        {
          title: 'Mutation',
          path: '/Vue/Vuex/Mutation.md'
        },
        {
          title: 'Action',
          path: '/Vue/Vuex/Action.md'
        },
        {
          title: 'Getter',
          path: '/Vue/Vuex/Getter.md'
        },
        {
          title: 'Module',
          path: '/Vue/Vuex/Module.md'
        },
        {
          title: '$store是如何挂载到vm实例上的？',
          path: '/Vue/Vuex/$store是如何挂载到vm实例上的？.md'
        },
        {
          title: '组合式API',
          path: '/Vue/Vuex/组合式API.md'
        },
        {
          title: 'TypeScript支持',
          path: '/Vue/Vuex/TypeScript支持.md'
        }
      ]
    },
    /*     {
          title: 'Pinia',
          collapsable: true, //可折叠
          children: [{
            title: 'Vue介绍',
            path: '/Vue/Vue介绍.md'
          }]
        } */
  ]
}