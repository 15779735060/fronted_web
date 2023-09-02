module.exports = {
  WebpackSidebar: [
    {
      title: '核心',
      collapsable: true, //可折叠
      children: [{
        title: 'Webpack介绍',
        path: '/Webpack/核心/Webpack介绍.md'
      },
      {
        title: 'webpack的构建流程',
        path: '/Webpack/核心/webpack的构建流程.md'
      },
      {
        title: '安装',
        path: '/Webpack/核心/安装.md'
      },
      {
        title: '配置文件',
        path: '/Webpack/核心/配置文件.md'
      },
      {
        title: '构建入口与出口',
        path: '/Webpack/核心/构建入口与出口.md'
      },
      {
        title: 'Resolve',
        path: '/Webpack/核心/Resolve.md'
      },
      {
        title: 'Loader',
        path: '/Webpack/核心/Loader.md'
      },
      {
        title: 'Plugin',
        path: '/Webpack/核心/Plugin.md'
      },
      {
        title: 'Optimization',
        path: '/Webpack/核心/Optimization.md'
      },
      {
        title: 'DevServer',
        path: '/Webpack/核心/DevServer.md'
      },
      {
        title: 'package文件说明',
        path: '/Webpack/核心/package文件说明.md'
      }
      ] //2级页面，第一个设置为空字符串时，显示的是README.md的内容
    },
    {
      title: '搭建工具库',
      collapsable: true,
      children: [
        {
          title: '安装依赖',
          path: '/Webpack/搭建工具库/安装依赖.md'
        },
        {
          title: '配置webpackConfig',
          path: '/Webpack/搭建工具库/配置webpackConfig.md'
        },
        {
          title: '配置package',
          path: '/Webpack/搭建工具库/配置package.md'
        }
      ]
    },
    {
      title: '搭建react项目',
      collapsable: true,
      children: [
        {
          title: '安装依赖',
          path: '/Webpack/搭建React项目/安装依赖.md'
        },
        {
          title:'配置第三方插件',
          path: '/Webpack/搭建React项目/配置第三方插件.md'
        },
        {
          title: '配置typescript',
          path: '/Webpack/搭建React项目/配置typescript.md'
        },
        {
          title: '配置babel',
          path: '/Webpack/搭建React项目/配置babel.md'
        },
        {
          title: '配置loader',
          path: '/Webpack/搭建React项目/配置loader.md'
        },
        {
          title: '配置postcss',
          path: '/Webpack/搭建React项目/配置postcss.md'
        },
        {
          title: '配置eslint',
          path: '/Webpack/搭建React项目/配置eslint.md'
        },
        {
          title:'优化',
          path:'/Webpack/搭建React项目/优化.md'
        },
        {
          title: '配置构建缓存与多进程构建',
          path: '/Webpack/搭建React项目/配置构建缓存与多进程构建.md'
        },
        {
          title: '配置完整webpackConfig',
          path: '/Webpack/搭建React项目/配置完整webpackConfig.md'
        },
        {
          title: '配置完整package',
          path: '/Webpack/搭建React项目/配置完整package.md'
        }
      ]
    }
  ]
}