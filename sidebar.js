module.exports = {
  WebpackSidebar: [
    {
      title: '核心',
      collapsable: true, //可折叠
      children: [{
        title: 'Webpack介绍',
        path: '/Webpack/Webpack介绍.md'
      },
      {
        title: '安装',
        path: '/Webpack/安装.md'
      },
      {
        title: '配置文件',
        path: '/Webpack/配置文件.md'
      },
      {
        title: '构建入口与出口',
        path: '/Webpack/构建入口与出口.md'
      },
      {
        title: 'Resolve(路径解析)',
        path: '/Webpack/Resolve(路径解析).md'
      },
      {
        title: 'Loader',
        path: '/Webpack/Loader.md'
      },
      {
        title: 'Plugin',
        path: '/Webpack/Plugin.md'
      },
      {
        title: 'Optimization(优化)',
        path: '/Webpack/Optimization(优化).md'
      },
      {
        title: 'DevServer',
        path: '/Webpack/DevServer.md'
      },
      {
        title: 'package文件说明',
        path: '/Webpack/package文件说明.md'
      }
      ] //2级页面，第一个设置为空字符串时，显示的是README.md的内容
    }
  ]
}