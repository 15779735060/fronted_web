module.exports = {
  JavaScriptSidebar: [
    {
      title: '起步',
      sidebarDepth: 2,
      collapsable: true, //可折叠
      children: [{
        title: 'JavaScript介绍',
        path: '/JavaScript/JavaScript介绍.md'
      }] //2级页面，第一个设置为空字符串时，显示的是README.md的内容
    },
    {
      title: 'ECMAScript',
      sidebarDepth: 2,
      collapsable: true, //可折叠
      children: [{
        title: '变量声明方式',
        path: '/JavaScript/变量声明方式.md'
      }, {
        title: '数据类型说明',
        path: '/JavaScript/数据类型说明.md'
      }] //2级页面，第一个设置为空字符串时，显示的是README.md的内容
    },
  ]
}