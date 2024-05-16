// 该文件用于管理组件，或者说是载入组件

import App from "./App.vue";
import Vue from '../../0vue搭建/0vue.js'

new Vue({
    el: "root",

    // 注册组件
    components: {
        App
    }
})