/**
 * 5、当改变data中的数据被改动， Vue示例就会触发数据代理
 * 【此时数据data是新的，页面上的数据是旧的】update其实就是更新view的意思，而不是更新data或者vm
 * 
 * beforeupdate()
 * 
 * 6、根据新数据，创建新的虚拟Dom，并生成真实Dom，将真实Dom挂载到页面上
 * 
 * updated()
 * 
 * 
 * 
 * 
 * 
 * 7、vm.$destory(完全销毁一个Vue示例，并且会清理其与其他Vue示例的链接
 *                 【这里应该是销毁VueComponent示例时，会销毁其与其他组件VueComponent示例的链接】
 *                 【解绑所有的子组件的自定义事件的事件监听器（直接对所有子组件的实例对象进行$off(), 直接全部解绑）】)
 * 此时vm并未被销毁
 * 
 * beforeDestory()
 * 【在beforeDestory()中，可以使用方法，也可以访问数据，但是不能对数据进行更新】
 * 
 * 8、将Vue示例vm销毁，
 * 
 * destoryed()
 * [react中不存在该钩子]
 */