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
    }
  ]
}