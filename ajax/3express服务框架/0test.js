const tempObject = {
    name:"woc",
    age: "16",
    sex: 'nam'
}

const testJsonObject = JSON.stringify(tempObject)

// 1、创建express对象
const express = require('express');

const app = express();

// 2、创建路由规则

// 当请求域名为/test，执行该回调函数
app.get('/test', (request, response) => {
    //设置允许跨域
    response.setHeader("Access-Control-Allow-Origin", "*")
    response.send('woc get\n')
});

app.post('/test', (request, response) => {
    // 允许跨域
    response.setHeader("Access-Control-Allow-Origin", "*")
    // 允许自定义请求头和请求头跨域
    response.setHeader("Access-Control-Allow-Headers", "*")
    response.send('woc post')
})

app.get('/jsontest', (request, response) => {
    //设置允许跨域
    response.setHeader("Access-Control-Allow-Origin", "*")

    response.send(testJsonObject)
});

//ie缓存解决接口
app.post('/ie', (request, response) => {
    response.setHeader("Access-Control-Allow-Origin", "*")

    response.send("woc")
})

// 延时反应
app.get('/setTimeOut', (request, response) => {
    response.setHeader("Access-Control-Allow-Origin", "*")

    setTimeout(() => {
        response.send("TimeOut")
    }, 3000)
})

//主动取消请求接口
app.get("/cancel", (request, response) => {
    response.setHeader("Access-Control-Allow-Origin", "*")

    setTimeout(() => {
        response.send("cancel") 
    }, 3000);
})

//重复请求接口
app.post("/again", (request, response) => {
    response.setHeader("Access-Control-Allow-Origin", "*")

    setTimeout(() => {
        response.send("again") 
    }, 3000);
})



// axios请求
app.get('/axiosTest', (request, response) => {
    //设置允许跨域
    response.setHeader("Access-Control-Allow-Origin", "*")
    response.send('woc axios\n')
});


// fetch请求
app.get('/fetchTest', (request, response) => {
    //设置允许跨域
    response.setHeader("Access-Control-Allow-Origin", "*")
    // 允许自定义请求头和请求头跨域
    response.setHeader("Access-Control-Allow-Headers", "*")


    response.send(testJsonObject)
});

//JSONP服务测试
app.get("/jsonp-server", (request, respone) => {
    respone.send("hello fuck")
})


//检验服务是否启动
app.listen(8000, ()=> {
    console.log("服务已经启动\n");
});