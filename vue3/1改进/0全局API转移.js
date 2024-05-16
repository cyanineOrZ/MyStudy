// 1、将全局API进行了转移，转移到了app上，不再提供如 Vue.component这类写法

/**
 * 1、Vue.config -> app.config
 * 
 * 2、Vue.config.productTips 该全局API移除,不再提供全局生产环境提示
 * 
 * 3、Vue.use -> app.use
 * 
 * 4、Vue.component -> app.component
 * 
 * 5、Vue.mixin -> Vue.mixin
 * 
 * 6、Vue.prototype -> app.config.globalProoerties 这个重要，将原来属于原型的放置于此
 */



// 2、data。setup应该被声明为一个函数

/**
 * 
 */