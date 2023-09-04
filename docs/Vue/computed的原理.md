### computed的原理
&emsp;&emsp;在vue初始化的过程中，会调用initComputed，去遍历computed对象的key，是每个key都创建一个Watcher，注意此时不调用Watcher.get，不会进行依赖收集，然后创建一个Object.defineproperty，对属性进行劫持。在模板编译的过程中，遍历des的时候，触发getter，执行computed属性的方法，才会对Dep进行相互依赖收集。总的来说，computed就是一个懒收集的过程
#### initComputed
```js
initComputed() {
  const computed = this.$options.computed
  if (!computed) return
  const keys = Object.keys(computed)
  for (const key of keys) {
    // 为计算属性创建 watcher
    const watcher = new Watcher(this, computed[key], () => {}, { lazy: true })
    // 将计算属性挂载到 Vue实例上
    Object.defineProperty(this, key, {
      // dirty为 true，则重新计算结果，否则直接返回缓存的值
      get() {
        if (watcher.dirty) {
          watcher.get()
          watcher.dirty = false
        }
        return watcher.value
      }
    })
  }
}
```

#### Watcher
```js
class Watcher {
  constructor(vm, key, cb, options = {}) {
	// 略 ...
    this.lazy = !!options.lazy
    this.dirty = this.lazy
    this.value = undefined

    // lazy为true，读取时再进行求值
    if (!this.lazy) {
      this.get()
    }
  }

  get() {
    Dep.target = this
    if (typeof this.key === 'function') {
      // 如果是函数，说明是计算属性，对函数进行调用，函数内部再对依赖项进行读取
      this.value = this.key.call(this.vm)
    } else {
      this.value = this.vm[this.key]
    }
    Dep.target = null
  }

  update() {
    if (this.lazy) {
      // 依赖性更新时，将 dirty设置为 true，下次读取时重新求值
      this.dirty = true
    } else {
      this.run()
    }
  }
}
```