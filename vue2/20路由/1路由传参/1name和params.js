// 命名路由：在配置路由时，通过给路由配置进行命名（配置name属性），可以实现通过name进行跳转

// 类似

test = {
    path: "path",
    name: "name", // 此处即为name属性， 也就是该路由配置的名字（不可以重复）
    component: "testComponent"
}

// 命名路由实现跳转
to='name'







// params 一个常用的参数名，在axios里面就是请求体的参数， 在路由里面，只能配合name进行传参
// 只有一种书写方式
// :to={
//     name: "name",
//     params: {
//         key: value,
//         key1: value1,
//     }
// }

// 如何提取数值
// 在router-view组件里面，使用this.$route.params.key 即可根据key提取数据



