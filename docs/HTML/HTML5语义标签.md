### 概述
&emsp;&emsp;在HTML5种增加了一些性的标签，其中在布局中比较的常用的就有几个语义化结构标签，分别是：header,nav,main,article,aside,以及footer，接下来也就是简单的说一下这几个元素的使用：
#### 标签结构
&emsp;&emsp;下面是一组比较经典的后台布局（div）：
```html
<div>头部</div>
  <div>导航</div>
  <div>
    <div>左边</div>
    <div>右边</div>
  </div>
<div>底部</div>
```
&emsp;&emsp;这种方式虽然可以实现，但是语义化不强，一眼看去，全是div。但是如果使用html5中的语义化标签来实现就要好一些。优点也就是语义化强一点：
```html
<header>头部</header>
  <nav>导航</nav>
  <main>
    <article>左边</article>
    <aside>右边</aside>
  </main>
<footer>底部</footer>
```
#### 语义结构标签的兼容性
&emsp;&emsp;在IE8及以下的版本中是不支持的，在IE9及以上的版本中是选择性支持的。而在chrome, firefox等浏览器中几乎都是支持的。
```css
/* 
  在IE9中会被当做行内块元素来解析，那么所设置的宽高就会失去效果。那么为了兼容IE9浏览器，就需要转换元素的类型
*/
header,nav,main,article,aside,footer{
  display: block;
}
```