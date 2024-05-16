// 自定义promise

// OverWrite Promise的构造函数,参数为执行器函数
function Promise(executor) {
    const self = this
    
    // 声明resolve 和 reject, 并获取参数
    function resolve(data) {

        // 改变状态，并改变结果值
        self.PromiseState = 'success'
        self.PromiseResult = data
    }

    function reject(data) {
        self.PromiseState = 'fail'
        self.PromiseResult = data
    }

    // 同步调用执行器函数
    executor(resolve, reject)
}

// 添加then方法到Promise的原型链上
Promise.prototype.then = (onResolve, onReject) => {

}

// 添加默认状态和默认结果值
Promise.prototype.PromiseState = 'pending'
Promise.prototype.PromiseResult = undefined


// 这是一普通的promise对象
const promisetest = new Promise((resolve, reject) => {

})



console.log(typeof(promisetest));