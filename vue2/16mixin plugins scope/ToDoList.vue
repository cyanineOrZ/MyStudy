<template>
    <div class="todo-list-content">
        <form action="" class="todo-list-form">
            <input class="todo-list-input" type="text" name="" id="" placeholder="请输入您的待办事项">
            <button class="tode-list-input-button">提交</button>
        </form>
        <div class="todo-list-warntext">
            warn
        </div>
        <ul class="todo-list-ul">
            <li>
                <input type="checkbox" name="" id="">
                <div>testText555555555555555555555555555555555555555555</div>
                <button>删除</button>
            </li>
        </ul>

        <div class="todo-line">
        </div>

        <div class="todo-total-text">
            <input type="checkbox" name="" id="">全选
            <div>已完成 / 全部</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ToDoList",

        data() {
            return {
                
            }
        },

        methods: {
            
        },

        computed: {

        },

        watch: {

        },
    }
</script>

<style>
    .todo-list-content {
        /* flex布局， 主轴为纵向， 自适应宽度  居中 */
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: start;
        margin: 0 auto;
        border: 0.5px solid black;
        border-radius: 8px;
        padding: 10px;
        width: 80%;
        font-size: 1.5em;
    }
    .todo-list-form {
        width: 100%;
    }
    .todo-list-input {
        /* 输入框 自适应宽度，取消焦点？ 加大输入框 */
        width: calc(100% - 100px);
        height: calc(100% - 1.15em - 2px);
        border: 1px solid black;
        border-radius: 5px;
        padding: 0.65em 0.5em 0.5em;
        transition: linear 0.35s;
    }
    .todo-list-input:focus {
        /* 焦点颜色改变 */
        outline: 0;
        border-radius: 5px;
        border: 1px solid skyblue;
        transition: linear 0.35s;
    }
    .tode-list-input-button {
        /* 固定高宽按钮， 悬浮变色 */
        border: 1px solid skyblue;
        border-radius: 5px;
        background-color: transparent;
        height: 100%;
        width: 70px;
        transition: linear 0.35s;
    }
    .tode-list-input-button:hover {
        transition: linear 0.35s;
        background-color: skyblue;
    }
    .todo-list-warntext {
        /* 警告文本框 自适应 */
        width: 100%;
        margin: 5px 0;
        padding: 0 0 0 0px;
        color: rgb(252, 45, 45);
        font-size: 0.6em;
    }
    .todo-list-ul {
        /* u数据列表显示， 自适应， 去除默认样式 */
        list-style-type: none;
        width: 100%;
        border: 1px solid gray;
        border-radius: 8px;
        padding: 0;
        font-size: 0.8em;
    }
    .todo-list-ul li:nth-child(1) {
        /* 第一个list带有圆角 */
        border-top-left-radius: 7px;
        border-top-right-radius: 7px;
    }
    .todo-list-ul li:nth-child(n) {
        /* 最后一个list带有圆角 */
        border-bottom-left-radius: 7px;
        border-bottom-right-radius: 7px;
    }
    .todo-list-ul > li {
        /* list样式 */
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        transition: linear 0.35s;
    }
    .todo-list-ul li:hover {
        /* list被选中时的效果 */
        background-color: gray;
        transition: linear 0.35s;
    }
    .todo-list-ul > li input {
        /* list中选中框 固定宽度 */
        flex-shrink: 0;
        margin-left: 10px;
    }
    .todo-list-ul > li input[type='checkbox'] {
        width: 15px;
        height: 15px;
    }
    .todo-list-ul > li > div {
        /* list中的数据项文本样式（可自动换行） */
        flex-grow: 1;
        padding: 20px 10px;
        word-break: break-all;
    }
    .todo-list-ul > li > button {
        /* list中删除按钮，固定宽度 悬停变红 */
        flex-shrink: 0;
        border: 1px solid black;
        border-radius: 2px;
        margin-right: 10px;
        height: 32px;
        min-width: 40px;
        transition: linear 0.35s;
    }
    .todo-list-ul > li > button:hover {
        background-color: rgb(252, 45, 45);
        border: 1px solid rgb(252, 45, 45);
        transition: linear 0.35s;
    }
    .todo-line {
        flex-grow: 1;
        margin: 15px 0;
        background-color: gray;
        border-radius: 1px;
        height: 2px;
        width: 90%;
    }
    .todo-total-text {
        /*  */
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 100%;
        font-size: 0.6em;
    }
    .todo-total-text > input {
        flex-shrink: 0;
        margin-left: 10px;
        font-size: 0.5em;
    }
    .todo-total-text > input[type='check'] {
        width: 17px;
        height: 17px;
    }
    .todo-total-text > div {
        flex-grow: 1;
        margin-left: 15px;
    }
</style>