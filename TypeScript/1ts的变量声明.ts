// ts 中，变量声明使用 声明器 [变量名] : [变量类型] = 值;
// 例
let num : number = 1;

// 声明， 但不赋予初始值， 会让变量值变为未定义， 并且将数据类型转变为undefined类型
let tss : number;
// console.log(tss); 结果为 undefined
// console.log(typeof(tss)); 结果为 undefined

// 声明， 但不赋予初始数据类型， 则该变量初始数据类型为any
let test0;
test0 = 1;
console.log(typeof(test0));
test0 = "0.0"
console.log(typeof(test0));
test0 = true
console.log(typeof(test0));

// 声明，但既不赋予初始值也不赋予初始类型
let test1;

// 多类型声明 使用 | 进行多类型声明
let test2 : number | boolean | String = 0;
test2 = "0.0";
test2 = true
// 以上均不会报错， 该变量可以使用三种数据类型

// 数组， 一般用于存储相同数据类型的一组数据
let arr : number[] = [1, 2, 3]
let arr1 : Array<String> = ["1", "2", "3"]

// 元组 一般用于储存有不同数据类型的一组数据, 元组长度是不可改变的
let tur : [number, String, number] = [1, "2", 3]

// 未知声明， 使用 ? 进行类型声明， 用于表示未知类型的数据的声明

// 类型断言(Type Assertion)
// 对于操作结果一定有预知才使用
let num1 : any = 1;
let num2 : String = <String>num1;
