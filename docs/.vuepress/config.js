
module.exports = {
    title: 'Chen\'s blog',
    description: '我的个人网站',
    head: [ // 注入到当前页面的 HTML <head> 中的标签
      ['link', { rel: 'icon', href: '/logo.jpg' }], // 增加一个自定义的 favicon(网页标签的图标)
    ],
    base: '/', // 这是部署到github相关的配置
    markdown: {
      lineNumbers: false // 代码块显示行号
    },
    themeConfig: {
      nav:[ // 导航栏配置
        {text: 'JavaScript', link: '/guide/' },
        {text: 'Vue', link: '/algorithm/'},
        {//这个导航栏对应多个子导航栏
          text: 'CS与浏览器', // 这里的text就是导航栏上的名字
          items: [
            {text: '计算机网络', link: '/cs/network/'},
            {text: '浏览器相关', link: '/cs/browser/'}, // 对应的路径如下图所示
            {text: '数据库', link: '/cs/database/'},
            {text: '操作系统', link: 'cs/os/'}
          ]
       },
        {text: 'React', link: 'https://baidu.com'}      
      ],
      sidebar: {
        '/guide/': [
          '测试文档11'
        ]
      }, // 侧边栏配置
      sidebarDepth: 2, // 侧边栏显示2级
    },
  }