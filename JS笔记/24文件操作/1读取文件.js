// 
let fs = require("fs")

// 函数形式，不建议使用
const testFile = fs.readFile("./", (err, data) => {
    // 如果读取错误，抛出异常
    if(err) {
        throw err;
    }
    else {
        console.log("成功读取");
    }
})

// promise封装
// 构造promise，并且进行读取文件的操作
let fsPromise = new Pormise((resolve, reject) => {

    // 进行文件的读取，根据路径的形式读取，获取错误（对象）和数据（buffer形式）的参数
    fs.readFile("./", (err, data) => {
        if(err) {
            // 如果读取文件失败，则使用失败的回调函数
            reject(err)
        }
        else {
            // 如果读取文件成功，则调用成功的回调函数
            resolve(data)
        }
    })
})
// 当成功时，对应的操作
fsPromise.then((value) => {
    console.log("success");
},
// 当失败时，对应的操作
(reason) => {
    console.log("fail");
})
