// 在JavaScript中 void并不是表示无类型， 而是表示运算符， void可以接受一个变量， 并将其变为undefined

console.log(void 10);

let a = 10
console.log(void a);

// void 0虽然也是undefined， 但是其实不推荐使用，增加了阅读成本（你不知道其他人知不知道这个被遗忘了很久的语法）
