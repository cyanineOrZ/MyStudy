// axios拦截器（Interceptors）可以拦截请求和响应，并且对请求或者响应中的参数进行修改

// axios拦截器是一个promise对象，存在着成功和失败的方法，执行顺序为

// 请求拦截器， 发送请求， 相应拦截器， 请求结果回调



<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
// 1、请求拦截器

axios.interceptors.request.use(function (config) {
    
    console.log("成功拦截请求");
}, (congif) => {
    console.log("拦截请求失败");
})


// 2、相应拦截器