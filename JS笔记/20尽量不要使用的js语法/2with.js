// with本意是减少键盘输入的语法糖，但是会导致低效率和阅读难解性，不建议使用
const obj = {
    a: 10,
    c: 1020
}

// 让obj赋值或者进行比较
obj.b = obj.a
obj.c = obj.d
console.log(obj);
//输出为{a: 10, b：10, c: undefined}

// 可以简写成
with(obj) {
    a = 100
    c = 20
    b = a
    d = c
}
console.log(obj);

// with会造成低效率，  在实际运行时， 编译器会先寻找对应对象中的值是否存在（比如上例， 就会先寻找obj.d是否存在）， 
// 如果不存在， 则会再去全局变量中寻找d是否存在， 降低了效率， 并且有可能会埋下错误

// 输出为{ a: 100, c: 20, b: 100 }