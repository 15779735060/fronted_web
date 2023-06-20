### 概述
&emsp;&emsp;在HTML里，所有script脚本文件都是通过script标签来进行加载的。通常浏览器在解析HTML的时候，是从上往下解析，遇到js脚本会执行完才会继续往下解析，所以我们一般会把脚本文件放在body尾部，以免阻碍HTML的解析，造成页面卡顿。当然，script标签也提供了两种加载方式，分别是：async和defer。只要声明了加载方式，就不会阻塞HTML解析。需要注意的是：只有外链脚本（src）才可以有效使用加载方式。那么，async和defer也是有不同之处的，下面会逐一讲解。
#### async
&emsp;&emsp;async 属性会在 HTML 解析期间异步下载js脚本文件，并在完成下载后立即执行该脚本。如果此时HTML还没解析完的话，会先执行下载下来的js脚本文件，执行完之后继续解析HTML，还有一点需要注意的是，如果 js 前后有依赖性，用 async，就很有可能出错（因为是异步下载，立即执行）。
```html
<body>
  <div id="box"></div>
  <script src="http://libs.baidu.com/jquery/2.0.0/jquery.min.js" async></script>
  //index.js
  //var box=$('#box')//Uncaught ReferenceError: $ is not defined
  <script src="./demo.js" async></script>
</body>
```
#### defer
&emsp;&emsp;defer也是在 HTML 解析期间异步下载js脚本文件，但是跟async不同的是：会等HTML解析完之后，会按照顺序逐一执行脚本文件，也就避免了上面所列的情况：
```html
<body>
  <div id="box"></div>
  <script src="http://libs.baidu.com/jquery/2.0.0/jquery.min.js" defer></script>
  //index.js
  //var box=$('#box')//div#box
  <script src="./demo.js" defer></script>
</body>
```