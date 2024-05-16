// Vue3是拥有向下兼容的，直接在Vue3项目中书写Vue2语法比如data，methods等都是可以的

// 当data中的数据与setup中返回的对象的数据有重复时，优先使用setup的（变量遮蔽）

// 但是Vue3中，setup无法读取data中的数据（作用域），所以最好不要混用

