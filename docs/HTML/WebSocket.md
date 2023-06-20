### HTML5 WebSocket
&emsp;&emsp;WebSocket 是 HTML5 对外提供的一种全双工通讯的传输层协议。从而使得客户端和服务器之间的数据交换变得更加简单，允许服务端主动向客户端推送数据。在 WebSocket API 中，浏览器和服务器只需要完成一次握手，两者之间就直接可以创建持久性的连接，并进行双向数据传输。可以有效的代替 Ajax 轮询的方式（即浏览器需要不断的向服务器发出请求，然而HTTP请求可能包含较长的头部，其中真正有效的数据可能只是很小的一部分，显然这样会浪费很多的带宽等资源。）
#### WebSocket 属性
|属性|说明|
|---|---|
|readyState|只读属性 readyState 表示连接状态，0：连接尚未建立&emsp;1：连接已建立，可以进行通信&emsp;2：连接正在进行关闭&emsp;3：连接已经关闭或者连接不能打开|
|bufferedAmount|只读属性 bufferedAmount 已被 send() 放入正在队列中等待传输，但是还没有发出的 UTF-8 文本字节数|
#### WebSocket 事件
|事件|说明|
|---|---|
|open|连接建立时触发|
|message|客户端接收服务端数据时触发|
|error|通信发生错误时触发|
|close|连接关闭时触发|
#### WebSocket 方法
|方法|说明|
|---|---|
|send|使用连接向服务器发送数据|
|close|关闭连接|
#### WebSocket 实例
```js
var ws = new WebSocket("ws://localhost:8080/ws")
ws.onopen=function(){
  console.log('已连接');
}
ws.onmessage=function(msg){
  console.log('已接受服务器的消息',msg);
}
ws.onclose=function(){
  console.log('连接已关闭');
}
ws.onerror=function(err){
  console.log(err);
}
```