<template>
    
</template>

<script>
    // App作为管理组件的组件， 并不提供样式和相关事件，只提供组件导入接口
    import Test from './Test';

    export default {
        name: "App",

        components: {
            Test,

        },

        template: `<App></App>`
    }
</script>

<style>
</style>