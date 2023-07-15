var JavaScript = require('../JavaScript/sidebar.js')
var HTMLSidebar = require('../HTML/sidebar.js')
var CSSSidebar = require('../CSS/sidebar.js')
var VueSidebar = require('../Vue/sidebar.js')
var WeappSideBar = require('../Weapp/sidebar.js')
var UniappSideBar = require('../Uniapp/sidebar.js')
module.exports = {
  title: 'YXF的个人笔记',
  description: 'YXF的个人笔记',
  head: [ // 注入到当前页面的 HTML <head> 中的标签
    ['link', { rel: 'icon', href: '/images/logo.jpeg' }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  base: '/myblog_web/', // 这是部署到github相关的配置
  markdown: {
    lineNumbers: false // 代码块显示行号
  },
  themeConfig: {
    nav: [ // 导航栏配置
      {//这个导航栏对应多个子导航栏
        text: '前端基础', // 这里的text就是导航栏上的名字
        items: [
          { text: 'HTML', link: '/HTML/HTML介绍.md' },
          { text: 'CSS', link: '/CSS/CSS介绍.md' }, // 对应的路径如下图所示
          { text: 'JavaScript', link: '/JavaScript/JavaScript介绍.md' }
        ]
      },
      {//这个导航栏对应多个子导航栏
        text: '前端框架', // 这里的text就是导航栏上的名字
        items: [
          { text: 'Vue', link: '/Vue/Vue介绍.md' },
          { text: 'React', link: '/React/React介绍.md' }, // 对应的路径如下图所示
          { text: '微信小程序', link: '/Weapp/介绍.md' },
          { text: 'Uniapp', link: '/Uniapp/介绍.md' },
        ]
      },
      {//这个导航栏对应多个子导航栏
        text: '前端工程化', // 这里的text就是导航栏上的名字
        items: [
          { text: 'Webpack', link: '/Webpack/WebPack介绍.md' },
          { text: 'Vite', link: '/Vite/Vite介绍.md' }, // 对应的路径如下图所示
        ]
      },
      { text: 'Gitee', link: 'https://gitee.com/yanxiufei' }
    ],
    sidebar: {
      '/HTML': HTMLSidebar.HTMLSidebar,
      '/CSS': CSSSidebar.CSSSidebar,
      '/JavaScript/': JavaScript.JavaScriptSidebar,
      '/Vue/': VueSidebar.VueSidebar,
      '/Weapp': WeappSideBar.WeappSidebar,
      '/Uniapp': UniappSideBar.UniappSidebar,
      '/React/': [{
        title: '起步',
        sidebarDepth: 2,
        collapsable: true,
        children: [{
          title: 'React介绍',
          path: '/React/React介绍.md'
        }]
      }],
      '/Webpack/': [{
        title: '起步',
        sidebarDepth: 2,
        collapsable: true,
        children: [{
          title: 'Webpack介绍',
          path: '/Webpack/Webpack介绍.md'
        }]
      }],
      '/Vite/': [{
        title: '起步',
        sidebarDepth: 2,
        collapsable: true,
        children: [{
          title: 'Vite介绍',
          path: '/Vite/Vite介绍.md'
        }]
      }]
    }
  },
}