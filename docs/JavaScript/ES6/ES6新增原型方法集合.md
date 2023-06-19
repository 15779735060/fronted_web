#### String新增方法
|原型方法|说明|
|---|---|
|includes(str)|返回布尔值，判断是否找到参数字符串|
|startsWith(str)|返回布尔值，判断参数字符串是否在原字符串的头部|
|endsWith(str)|返回布尔值，判断参数字符串是否在原字符串的尾部|
|repeat(int)|返回新的字符串，表示将字符串重复指定次数返回|
|padStart(start,str)|返回新的字符串，表示用参数字符串从头部（左侧）补全原字符串|
|padEnd(start,str)|返回新的字符串，表示用参数字符串从尾部（右侧）补全原字符串|
#### Number新增方法
&emsp;&emsp;这里讲到的方法会包含Math对象的方法，但由于有些方法不常用（其实是我不会用:smile:），故只罗列出部分Math方法
|原型方法|说明|
|---|---|
|isFinite(int)|用于检查一个数值是否为有限的（ finite ），即不是 Infinity|
|parseInt(str or int)|用于将给定字符串转化为指定进制的整数。|
|Math.trunc(int)|用于返回数字的整数部分。|
|Math.sign(int)|判断数字的符号（正、负、0）|
|Math.abs(int)|获取绝对值|
|Math.ceil(int)|向上取整|
|Math.floor(int)|向上下取整|
|Math.round(int)|四舍五入|
|Math.random(int)|返回随机数|
|Math.max(str)|获取一组数据中的最大值|
|Math.min(str)|获取一组数据中的最小值|
|Math.PI|获取圆周率π的值，返回值是3.141592653589793|
#### Object新增方法
|原型方法|说明|
|---|---|
|assign(target,obj,obj)|用于将源对象的所有可枚举属性复制到目标对象中。如果目标对象和源对象有同名属性，或者多个源对象有同名属性，则后面的属性会覆盖前面的属性|
|is(val,val)|用来比较两个值是否严格相等，与（===）效果一样|
#### Array新增方法
|原型方法|说明|
|---|---|
|of(...val)|将参数中所有值作为元素形成数组。Array.of(1, 2, 3, 4)//[1, 2, 3, 4]|
|from(arr or obj)|将类数组对象或可迭代对象转化为数组。( Array.from([1, 2])//[1, 2] ) or ( Array.from({0: '1',1: '2',2: 3,length: 3})//['1', '2', 3] )|
|of(...val)|将参数中所有值作为元素形成数组。Array.of(1, 2, 3, 4)//[1, 2, 3, 4]|
|find(function)|查找数组中符合条件的元素,若查找到则立即返回元素。|
|findIndex(function)|查找数组中符合条件的元素,若查找到则立即返回该元素的下标。|
|entries()|遍历键值对。for(let [key, value] of ['a', 'b'].entries())|
|keys()|遍历键名。for(let key of ['a', 'b'].keys())|
|values()|for(let value of ['a', 'b'].values())|
|includes(function)|检测数组是否包含指定值，返回一个布尔值|
