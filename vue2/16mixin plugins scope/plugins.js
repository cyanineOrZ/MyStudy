// Vue 插件一般为对象， 并且对象内一定会有一个方法install() 

// 在组件中，通过使用 Vue.use(PluginsName.install() )来进行插件的使用)
const testPlugins = {
    install(Vue) {
        console.log(Vue);

        Vue.filters({
            // 设置全局过滤器
        }),

        Vue.directives({
            // 设置全局自定义指令
        }),

        Vue.mixins({
            // 设置全局混合
        }),

        Vue.prototype.test = () => {

        }

        Vue.prototype.test2 = function() {
            // 往Vue的原型对象添加全局方法
        }
    }


}

export default testPlugins