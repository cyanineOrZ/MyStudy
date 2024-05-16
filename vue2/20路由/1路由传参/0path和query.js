// 对于一个route-link组件而言， to属性是必须的， 下面有两种to属性的定义格式

// 1、字符串型
to="path"

// 2、对象型，更推荐对象型(记得前面要进行绑定)
// :to={
//     path: "",
// }


// path即为跳转到的或者要展示的组件




// query， 一个路由参数，用于配合path进行传参，与浏览器url传递参数的方式相同，在url后添加 ?key=value&key1=value1 的方式进行传递
// 两种书写方式
// 1、字符串型(不推荐)
to="'path?${value}'"

// 2、对象型
// :to = {
//     path: "path",
//     query: {
//         key: value,
//         key1: value1,
//     }
// }

// 如何提取数值
// 在router-view组件里面，使用this.$route.query.key 即可根据key提取数据



