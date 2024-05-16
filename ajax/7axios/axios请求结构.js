// 一般格式 请求类型，请求url 参数 请求头 空行 请求体

// 在axios中，返回的是 axios 封装的 response 对象，服务器返回的真正数据在 response.data 中

axios({
    method: "post|get" ("此处为请求类型"),

    url: "url" ("此处为请求接口的url"),


    params: {

    } ("此处为请求参数"),

    headers: {

    } ("此处为请求头信息"),

    data: {
        name: "woc",
        age: "18"
    } ("此处为请求体（get方法没有此项）")

}).then((response) => {
    // 输出axios包装的对象中的data
    console.log(response.data);
}, (error) => {
    // 错误信息
    console.log(error);
})

// 函数格式发送请求 这种更好
axios({

    method: "POST|GET",

    url: "url",
    
    params: {
        a: 100,
        b: 200
    },

    headers: {
        c: 200
    },

    data: {
        test: "test"
    }
    
}).then((res) => {
    console.log(res); ("此处为接收响应信息的处理")
})


// 在 node.js 用GET请求获取远程图片
axios({
    method: 'get',
    url: 'http://bit.ly/2mTM3nY',
    responseType: 'stream'
}).then(function (response) {
    response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))
});
// 在获取图片url以及其数据流后，根据数据流进行图片创建


/method/

/url/

/baseurl/

/transformRequest(function(data) {return data})/

/transformResponse(function(data) {return data})/

/headers/

/params/

/data/

/timeout()【请求过时事件， 超过则中断请求】/

