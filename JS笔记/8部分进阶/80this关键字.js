// 简单来说，this就是当前点运行环境， this指向当前的运行环境（不论是函数还是其他对象的调用）

// 1、函数调用
const test = function() {
    let a = 10
    console.log(this.a);
    //当前运行环境为 test函数的调用者windows， 
    // 所以this指向windows，a只在test函数内部定义了，所以为undefined
}

// 2、对象调用
const obj = {
    c: 10,
    d: function() {
        console.log(this.c);
    }
    //此时this指向 d 函数的调用者， 也就是d函数的运行环境为obj对象
}

// 3、构造函数调用
const con = function(f) {
    this.e = 20
    this.f = f
}

//4、apply()调用
// apply()时函数的一个方法


const main = function() {
    test()
    //这里相当于windows.test()
    obj.d()
    //此时的调用者很明显， 就是obj

    let e = 30
    const contest = new con(30)
    console.log(contest);
    console.log(e);
    //此时由于有new关键字，会生成一个新的对象，此时的运行环境为新的对象， this指向新的对象
    // 可以看见， 在main作用域中， e为30， 最后输出结果为30
    //表明在使用构造函数时， 由于new关键字的介入， this的运行环境为新对象而不是全局
}
main()

// 