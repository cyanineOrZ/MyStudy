<!-- 文件名就是组件名，一般使用首字母大写（多单词和一个单词都是） -->


<!-- template: 组件结构 -->
<template>
    <div class="demo">
        
    </div>
</template>


<!-- script：组件交互相关的代码（data，methods等） -->
<script>

    // 创建组件实例， 并暴露组件
    const ComponentName = Vue.extend({
        data() {
            return {
                
            }
        },

        methods: {
            
        },
    })

    // 默认暴露
    // export default ComponentName
    // 统一暴露
    // export {ComponentName}
    // 分别暴露
    
</script>

<!-- 更好的暴露方式 -->
<script>
    export default {
        // 组件名
        name: "7单文件组件"，

        data() {
            return {
                
            }
        },

        methods: {
            
        },
    }


</script>


<!-- style: 组件的样式文件 -->
<style>
    .demo {
        background-color: aqua;
    }
</style>