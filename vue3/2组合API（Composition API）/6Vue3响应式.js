// Proxy() 代理

// 简单来说，就是通过Proxy代理需要进行操作的对象（也就是进行数据劫持）， 通过Reflect反射去操作源对象【被代理的对象】（也即是具体操作增删改查）


/**
 * Proxy(Object, {
 *  get(target, propName) {
 * 
 *  },
 * 
 * set(target, propName, value) {
 * 
 *  },
 * 
 * deleteProperty(target, propName) {
 * 
 *  }
 * })
 */

const test = {
    type: "woc",
    content: "test"
}

const t = new Proxy(test, {
    /**
     * target 目标对象， 也就是test
     * 
     * proxyObject 代理对象， 也就是t
     * 
     * propName 属性名， 也就是test里面的属性名
     * 
     * Reflcet 反射对象
     */

    get(target, propName) {
        return Reflect.getPrototypeOf(target, propName)
    },

    set(target, propName, value) {

    },

    deleteProperty(target, propName) {

    }
})