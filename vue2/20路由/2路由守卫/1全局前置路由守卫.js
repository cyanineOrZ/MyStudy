// 全局前置路由守卫，是在路由每次切换前进行的一个钩子函数

// 


/**
 * 全局前置路由守卫
 * router.beforeEach(function() {
 *      当路由每次切换前，都会回调的函数
 * })
 * 
 * 
 * 回调函数的参数function(to, from, next) {
 *  to: 切换至哪个路由 一般为"/a/b这种形式
 *  from: 从哪个路由切换 一般为 “/b/a 这种形式
 *  next：next是一个函数，即继续进行路由切换， next() 为调用next
 * }
 */