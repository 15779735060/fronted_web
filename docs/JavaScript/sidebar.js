module.exports = {
  JavaScriptSidebar: [
    {
      title: 'JavaScript介绍',
      path: '/JavaScript/JavaScript介绍.md'
    },
    {
      title: 'ECMAScript',
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
      },
      {
        title: 'Object对象静态方法',
        path: '/JavaScript/Object对象静态方法.md'
      },
      {
        title: 'Ajax',
        path: '/JavaScript/Ajax.md'
      }
      ] //2级页面，第一个设置为空字符串时，显示的是README.md的内容
    },
    {
      title: 'ECMAScript6',
      collapsable: true, //可折叠
      children:[
        {
          title: 'ES6介绍',
          path: '/JavaScript/ES6/ES6介绍.md'
        },
        {
          title: '解构赋值',
          path: '/JavaScript/ES6/解构赋值.md'
        },
        {
          title: 'Map和Set',
          path: '/JavaScript/ES6/Map和Set.md'
        },
        {
          title:'Reflect和Proxy',
          path:'/JavaScript/ES6/Reflect和Proxy.md'
        },
        {
          title:'ES6新增原型方法集合',
          path:'/JavaScript/ES6/ES6新增原型方法集合.md'
        },
        {
          title:'ES6函数',
          path:'/JavaScript/ES6/ES6函数.md'
        },
        {
          title:'Class类',
          path:'/JavaScript/ES6/Class类.md'
        },
        {
          title:'Promise',
          path:'/JavaScript/ES6/Promise.md'
        },
        {
          title:'ES6模块化',
          path:'/JavaScript/ES6/ES6模块化.md'
        }
      ]
    }
  ]
}