### 概述
&emsp;&emsp;AJAX 是一种用于创建快速动态网页的技术,在无需重新加载整个网页的情况下，能够更新部分网页的技术。其核心对象是 XHR(XmlHttpRequest) ,下面会着重讲解XHR的使用方式。
#### XHR(XmlHttpRequest)
&emsp;&emsp;XHR主要是向服务器发送请求的，得到服务器返回的数据后，再进行处理，如下所示：
```js
//创建xhr对象
let xhr = new XMLHttpRequest()
//向服务器发送请求
xhr.open("POST", 'https:baidu.com', true)
//向服务器发送请求的时候携带data
xhr.send({})
//请求结束后的返回结果
xhr.onreadystatechange = function () {
  //请求成功
  if (xhr.readyState === 4 && xhr.status === 200) {
    console.log('success');
  }
  //请求失败
  else {
    console.log('error');
  }
}
```
&emsp;&emsp;其实上面代码属性没有详细说明，下面会单独列出一张表格，用于记录xhr对象的所有属性：
|属性|说明|
|---|---|
|open(method,url,isAsyn)|1：method 请求方式：POST或GET&emsp;&emsp;2：url请求地址&emsp;&emsp;3：isAsyn使用同步(false)还是异步(true)的方式发送请求|
|send(body)|body：发送的请求数据。如果是get提交方式，此处为null；如果是post提交方式，此处就是提交的数据|
|onreadystatechange|该属性是一个事件，可传入一个函数，当xhr接收到响应信息的时候触发|
|status|表示服务器相应状态码，如200、404、500|
|readyState|0：请求发送还未发送&emsp;1：已经打开到WEB服务器的连接&emsp;2：xhr对象已经接受响应消息的头部&emsp;3：xhr对象已经接受响应消息的主体&emsp;4：xhr已经接受完成响应消息|