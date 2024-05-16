/1、setup执行时机（setup中不使用this的原因）/,

/**
 * setup的执行时机是
 * 
 * 1、在BeforeCreate之前执行一次， 此时setup内的this指向一定为undefined
 * 
 * 2、
 */


/2、setup的参数/,
/props/,
/**
 * 1、props
 * 
 * 假设传入msg
 * 
 * props:["msg"]
 * 
 * setup(props, context) {
 *   props: 与Vue2一样，组件外部传入的数值，并且需要在setup外部接收
 * }
 * 
 * setup中的props为一个代理对象，使用需要props['propName']
 */

/context/
/**
 * 2、context
 * 
 * 上下文对象，用于接收部分VC上下文产生的对象， 比如组件间的通信， 事件总线，自定义事件等
 * 
 * context是一个普通的对象， 里面有attrs， emit， slot
 */



/**
 * 2.1、attrs： 与Vue2中一样，用于接收props（注意是外部的props，而不是参数props）没有接收的
 * 
 * 返回一个代理对象
 */

/**
 * 2.2、emit
 * 
 * Vue3新增了如props一样的用于接收自定义事件的emits， 用于在setup外部接收需要接受的自定义事件
 * 
 * emits:['test']
 * 
 * setup(props, context) {
 *    触发组件上的自定义事件，并传输值123
 *    context.emit("test", 123)
 * }
 */


/**
 * 2.3、slot 插槽
 */