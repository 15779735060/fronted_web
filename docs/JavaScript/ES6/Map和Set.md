#### Map
&emsp;&emsp;Map对象实际上是多组键值对的集合，跟Object对象不同的是：Map的键可以是任意值，并且每组键值对都是有序的。而Object的键只能是String和Symbol，并且是无序的。下面罗列出Map原型对象的操作方法：
|原型方法|说明|
|---|---|
|size|属性，获取当前Map对象的长度，同数组的 length|
|set(key,value)|向当前Map对象中添加一个值，返回的Map对象，支持链式写法|
|get(key)|通过key找到value（key为对象时，必须为同一对象的引用），如果找不到，返回undefined|
|delete(key)|删除当前Map对象中的一个值，返回一个布尔值，表示是否删除成功|
|has(key)|检测这个value是否是当前Map对象的一个元素，通过返回的布尔值表示|
|clear()|清除当前Map对象所有元素，没有返回值|
|keys()|返回该Set对象键名的遍历器|
|values()|返回该Set对象键值的遍历器|
|entries()|使用回调函数遍历该Set对象的每个元素，可以接受第二个参数，用来绑定this|
### Set
&emsp;&emsp;Set对象允许你存储任何类型的唯一值，无论是原始值或者是对象引用。Set的用途比较广，可以对数组去重、还可以求并集、交集、差集，如下所示：
```js
//数组去重
let mySet = new Set([1, 2, 3, 4, 4]);
console.log([...mySet];) // [1, 2, 3, 4]
//并集
let a = new Set([1, 2, 3]);
let b = new Set([4, 3, 2]);
let union = new Set([...a, ...b]); // {1, 2, 3, 4}
//交集
let a = new Set([1, 2, 3]);
let b = new Set([4, 3, 2]);
let intersect = new Set([...a].filter(x => b.has(x))); // {2, 3}
//差集
let a = new Set([1, 2, 3]);
let b = new Set([4, 3, 2]);
let difference = new Set([...a].filter(x => !b.has(x))); // {1}
```
