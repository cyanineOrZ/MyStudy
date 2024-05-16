// 对于对象，浅拷贝有两种方法， 对于数组对象， 浅拷贝有四种方法
// 1、常用Object.assign(target, src)
const test = {
    name: "wocc",
    age: 12
}

const test2 = {}
Object.assign(test2, test)
console.log(test2);

//可以进行封装为一个工具函数
const ShallowCopy = function(srcObjecgt) {
    const temp = {}
    Object.assign(temp, srcObjecgt)
    return temp
}
const test3 = ShallowCopy(test)
console.log(test3);


// 2、拓展运算符...
console.log("分割");
const text = {
    name: "wocc",
    age: 24
}

const text2 = {...text}
console.log(text2);


//封装为工具函数
const tShallowCopy = function(srcObjecgt) {
    return {...srcObjecgt}
}
const text3 = tShallowCopy(text)
console.log(text3);
console.log("分割");


// 对于数组对象，以下方法适用
// 3、Array.prototype.concat()     ,通过拼接一个空数组，实现对原数组的浅拷贝
const arr = [1, 2, 3]
console.log(arr);
const newarr = arr.concat()
console.log(newarr);


// 4、Array.prototy.slice()
const testarr = [1, 2, 3, 4]
console.log(testarr);
const newtestarr = testarr.slice()
console.log(newtestarr);

console.log(testarr === newtestarr);