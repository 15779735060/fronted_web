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
      },
      {
        title: '数据类型说明',
        path: '/JavaScript/数据类型说明.md'
      },
      {
        title: '操作符',
        path: '/JavaScript/操作符.md'
      },
      {
        title: '控制流语句',
        path: '/JavaScript/控制流语句.md'
      },
      {
        title: '函数与函数作用域链',
        path: '/JavaScript/函数与函数作用域链.md'
      },
      {
        title: '闭包与递归',
        path: '/JavaScript/闭包与递归.md'
      },
      {
        title: '原型和原型链',
        path: '/JavaScript/原型和原型链.md'
      },
      {
        title: '各数据类型的原型方法',
        path: '/JavaScript/各数据类型的原型方法.md'
      }
      ] //2级页面，第一个设置为空字符串时，显示的是README.md的内容
    },
  ]
}