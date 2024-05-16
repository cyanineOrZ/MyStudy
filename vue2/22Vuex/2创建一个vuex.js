// 首先要引入vuex和vue，可以在项目中创建一个store文件夹用于存储store.js（vuex文件）

import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

const store = new Vue.store({
    state() {
        return {
            // State作为Vuex中管理状态的对象容器，设置为函数形式(与组件中data为何为函数一样，一个项目中可能存在多个vuex)

            // 所谓状态也就是数据，这里其实就是一个数据对象
        }
    },

    Getter: {

    },

    Mutation: {

    },

    Action: {

    },

    Moudle: {
        // 模块组区域，当项目过大且一个vuex管理了过多的数据时，可以使用这个来对vuex管理的数据进行分割，将其分为多个小的区域，或者说多个小的vuex
        
        // 假设有个小vuex，叫testA， 这里给他设定为AMoudle，也就是一个模块
        AMoudle: testA
        // 当去需要提取Amoudle中的数据时，需要this.$store.AMoudle

    }
})

const testA = new Vuex.store({
    state() {
        return {
            // 这里是一个小的Vuex
        }
    },
})

export default store


// 这样便创建了一个简单的Vuex，并且通过默认暴露，将Vuex文件暴露出去



