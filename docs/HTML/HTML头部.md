### 概述
&emsp;&emsp;HTML head元素用于展示介绍性内容，通常包含一组介绍性的或是辅助导航的实用元素。在 head 元素中你可以插入脚本（scripts）, 样式文件（CSS），及各种meta信息。可以添加在头部区域的元素标签为: title、style、meta、link、script、noscript 和 base。
#### title元素
&emsp;&emsp;定义了浏览器工具栏的标题，当网页添加到收藏夹时，显示在收藏夹中的标题：
```html
<title>文档标题</title>
```
#### base元素
&emsp;&emsp;base标签描述了基本的链接地址/链接目标，该标签作为HTML文档中所有的链接标签的默认链接：
```html
<base href="https://yanxiufei.gitee.io/myblog_web/" target="_blank">
```
#### link元素
&emsp;&emsp;link标签定义了文档与外部资源之间的关系，通常用于链接到样式表：
```html
<link rel="stylesheet" type="text/css" href="./index.css">
```
#### style元素
&emsp;&emsp;style标签定义了HTML文档的样式文件引用地址，也可以直接添加样式来渲染 HTML 文档：
```html
<style type="text/css">
*{
  margin: 0;
  padding: 0;
}
</style>
```
#### meta元素
&emsp;&emsp;meta标签描述了一些基本的元数据。元数据不显示在页面上，但会被浏览器解析。元数据可以使用于浏览器（如何显示内容或重新加载页面），搜索引擎（关键词），或其他Web服务。
```html
<!-- 为搜索引擎定义关键词: -->
<meta name="keywords" content="HTML, CSS, JavaScript">
<!-- 为网页定义描述内容: -->
<meta name="description" content="YXF的个人笔记">
<!-- 定义网页作者: -->
<meta name="yxf" content="yanxiufei">
<!-- 每30秒钟刷新当前页面: -->
<meta http-equiv="refresh" content="30">
<!-- 定义文档在移动设备上的显示视口 -->
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
```


