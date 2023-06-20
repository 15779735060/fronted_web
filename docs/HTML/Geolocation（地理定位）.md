### Geolocation（地理定位）
&emsp;&emsp;HTML5 的 Geolocation API 用于获得用户的地理位置。鉴于该特性可能侵犯用户的隐私，除非用户同意，否则用户位置信息是不可用的。
#### 使用地理定位
&emsp;&emsp;使用 getCurrentPosition() 方法来获得用户的位置。下例是一个简单的地理定位实例，可返回用户位置的经度和纬度:
```js
if (navigator.geolocation){
  navigator.geolocation.getCurrentPosition((res) => {
  console.log(res);//{latitude: 29.8199, longitude: 121.5386,...}
})
}else{
  console.log('该浏览器不支持获取地理位置');
}
```
#### 处理错误和拒绝
&emsp;&emsp;getCurrentPosition() 方法的第二个参数用于处理错误。它规定当获取用户位置失败时运行的函数：
```js
if (navigator.geolocation){
  navigator.geolocation.getCurrentPosition((res) => {
  console.log(res);//{latitude: 29.8199, longitude: 121.5386,...}
},(err) => {
  switch (err.code) {
    case err.PERMISSION_DENIED:
      console.log('用户拒绝对获取地理位置的请求');
      break;
    case err.POSITION_UNAVAILABLE:
      console.log('位置信息是不可用的');
      break;
    case err.TIMEOUT:
      console.log('请求用户地理位置超时');
      break;
    case err.UNKNOWN_ERROR:
      console.log('未知错误');
      break;
  }
})
}else{
  console.log('该浏览器不支持获取地理位置');
}
```
#### 在地图中显示结果
&emsp;&emsp;如需在地图中显示结果，您需要访问可使用经纬度的地图服务，比如谷歌地图或百度地图：
```js
if (navigator.geolocation){
  navigator.geolocation.getCurrentPosition((res) => {
  console.log(res);//{latitude: 29.8199, longitude: 121.5386,...}
  var latlon=res.coords.latitude+","+res.coords.longitude
  var href="http://maps.googleapis.com/maps/api/staticmap?center="+latlon+"&zoom=14&size=400x300&sensor=false"
  window.location.href=href
})
}else{
  console.log('该浏览器不支持获取地理位置');
}
```

