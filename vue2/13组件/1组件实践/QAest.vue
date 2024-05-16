<template>
    <div class="test">
        <button @click="say($event)">
            dianwo
        </button>
    </div>
</template>

<script>
    export default {
        name: "Test",

        data() {
            return {
                
            }
        },

        methods: {
            say: function(event) {
                
            }
        },
    }
</script>

<style>
    .test {
        border: 1px solid black;
    }
</style>