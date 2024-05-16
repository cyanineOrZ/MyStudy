// instanceof 用于检测某个实例对象的原型链上是否存在某个对象原型, 也可以用来判断是否为一个对象（Object一定会出现在对象的原型链上）
const people = function(name) {
    this.name = name
}

const wo = new people("woc")

const you = new Object()


console.log(wo instanceof people);
console.log(wo instanceof Object);

console.log(you instanceof people);
console.log(you instanceof Object);

console.log(null instanceof Object);

console.warn("分割");

// 判断是否为对象
let a = 10

console.log(a instanceof Object);