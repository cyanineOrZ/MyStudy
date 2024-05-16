// 通过组合式API的形式使用生命周期函数的使用

// 在Vue3中， 可以通过特殊的API进行生命周期的操作，一般来说，就是生命周期前加on即可，但有两个特殊

/BeforeCreate和Created/

/**
 * setup的执行时机是比这两个生命周期早的，也就是Vue在进行初始化和检验是否挂载后，就执行setup了
 * 
 * 所以setup就相当于BeforeCreat和Created， 直接将需要放在这两个生命周期的进程提取至setup即可
 * 
 * 其他的如
 * 
 * onBeforeMount({
 * })
 * 
 * onMounted({
 * })
 * 
 * onBeforeupdate({
 * })
 * 
 * onUpdated({
 * })
 * 
 * onBeforeUnmount({
 * })
 * 
 * onUnmouted({
 * })
 */