// ts中一共有 any， number， String， none， boolean， truple(元组)， Array(数组), enum(枚举),
// void, null, undefined， never
// 11种数据类型

// any
// any 类型，代表该变量可以使用并转变为任意类型且不会报错
let test : any = 'woc';
test = 0;
test = 1.2;
test = true;

// other
// 其余的跟js一样， 但ts中，对变量的数据类型进行规定后，变量的数据类型就只能
// 使用ts规定的数据类型， 不然会报 TypeError 类型错误


// null undefined void
// null， 和undefined 跟js 一样， null表示无， undefined 表示未定义
// ts中， unll 和undefined 属于void 的子类型， 对于js而言， 任意一种类型的变量都可以被赋值为null 或者 undefined
// 但在ts 中， null 和 undefined 只能被赋值给void 类型的变量或者 其本身就是该类型的变量
// 人话就是， 一旦规定了类型， 除非是null， undefined和 void， 变量被赋这几个值都会报错

// enmu 枚举数据类型
// 枚举只能拥有String 和 number

// void 空值， 不返回值

// never