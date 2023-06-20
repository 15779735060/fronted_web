### HTML插件
&emsp;&emsp;HTML插件可用于播放音频、视频和嵌套网页等，我总结了一下，可分为三大部分，分别是iframe、object、embed，下面会对这三个标签逐一进行讲解。
#### iframe
&emsp;&emsp;iframe的主要作用是嵌套外部网页，是外部网页能够正常显示在我们特定的位置上，如下所示：
```html
<iframe src="http://yanxiufei.gitee.io/myblog_web" width="500" height="500"></iframe>
<iframe src="http://yanxiufei.gitee.io/myblog_web/images/logo.jpeg" width="500" height="500"></iframe>
```
#### object与embed
&emsp;&emsp;这两个与iframe最大的不同就是，object和embed可以嵌套flash、ActiveX等控件，而iframe不可以。
```html
<object data="http://yanxiufei.gitee.io/myblog_web" width="500" height="500"></object>
<object data="http://yanxiufei.gitee.io/myblog_web/images/logo.jpeg" width="500" height="500"></object>
<embed src="http://yanxiufei.gitee.io/myblog_web" width="500" height="500"></embed>
<embed src="http://yanxiufei.gitee.io/myblog_web/images/logo.jpeg" width="500" height="500"></embed>
```
