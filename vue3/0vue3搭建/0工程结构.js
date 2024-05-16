// 引入Vue的构造函数，或者说是一个名为create的工厂函数
import { createApp } from 'vue'
import App from './App.vue'


//使用app，会比Vm更加轻量级
// createApp(App).mount('#app')


// 在Vue2中
// const vm = new Vue({
//     render:h => h(APP)
// })
// vm.$mount("#app")