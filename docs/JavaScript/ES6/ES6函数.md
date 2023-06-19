### ES6函数
&emsp;&emsp;ES6新增了一些关于函数新功能，如箭头函数、函数默认参数、不定参数等，下面会逐一讲解。
#### 箭头函数
&emsp;&emsp;箭头函数提供了一种更加简洁的函数书写方式。与普通函数最大的不同就是this指向问题，箭头函数的this指向始终指向的是它的父函数的this，换句话说就是：箭头函数没有自己的this，如下所示：
```js
const observer={
  run:()=>{
    console.log(this);//window
  },
  render:function(){
    console.log(this);//observer
  }
}
obj.run()
obj.render()
```
#### 函数默认参数
&emsp;&emsp;函数默认参数是指：在函数声明的时候定义了形参，但是在函数调用的时候，传的是一个undefined类型的数据或者不传，那么该函数会把这个默认值，当作该函数的参数去使用，如下所示：
```js
function fn(name='yxf'){
  return name
}
fn('xm') // xm
fn() // yxf
fn(undefined) // yxf
```
#### 不定参数
&emsp;&emsp;不定参数用来表示不确定参数个数，形如，...变量名，由...加上一个具名参数标识符组成。具名参数只能放在参数组的最后，并且有且只有一个不定参数。如下所示：
```js
function fn(...values) {
  console.log(values);
  return values
}
fn(1, 2) //[1,2]
fn(1, 2, 3, 4) //[1,2,3,4]
```


