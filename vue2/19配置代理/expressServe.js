// 创建一个服务器

const express = require('express')

const server = express()

server.listen(1000, () => {
    console.log("服务已经启动\n");
})

// 测试用例
const message = {
    response: [
        {
            code: 200,
            msg: "test",
            data
        }
    ]
}

//配置个测试接口
server.get("/test", (request, response) => {
    // 跨域
    response.setHeader("Access-Control-Allow-Origin", "*")

    // 处理
    response.send("test") 
})