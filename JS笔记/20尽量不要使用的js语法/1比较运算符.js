// 在JavaScript中， 有两组比较运算符 一、==和!= 二、 ===和!== 尽量只使用第二种而不是第一种， 第一种比较运算符会触发隐式类型转换，规则非常复杂
let a = 10
let b = 10
console.log(a === b);