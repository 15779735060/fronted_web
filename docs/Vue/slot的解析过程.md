### slot的解析过程
&emsp;&emsp;在模板编译的过程中，遇到slot标签，会挂载到vm.slotContent上面，然后遍历子元素，找template标签，然后把子元素添加进去，最后遍历des数组的slot指令，执行bind来更新视图。
![image](./image/slot.png)