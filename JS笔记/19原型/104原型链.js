// 原型链，指原型对象，实例对象和构造函数之间的链接

// 简要概括原型链： 在JavaScript中，每个函数都拥有prototype属性，这个prototype属性指向的便是该函数的原型对象，在原型对象中挂载的属性和方法可以被原型对象中constructor属性所指的函数的所有实例化对象享用
// 在通过new关键字以某个构造函数创建实例对象后， 该实例对象便拥有了proto属性 该属性指向该实例对象的对象原型——也即该实例对象的构造函数的原型对象， 原型对象和对象原型只是同一个东西在不同语境下的不同名称，实际为同一个对象
// 原型对象实际为Object构造函数的实例对象， 所以，实例对象的对象原型的proto属性指向的是Object的对象原型，同时，Object的对象原型的constructor属性指向Object构造函数，Object构造函数的prototype属性指向Object的原型对象
// 而Object的构造函数的原型对象的proto属性指向原型链的重点， 也即null

// 原型链的终点是null

// 原型链是JavaScript面向对象中，实现继承的重要方式

const people = function(name) {
    this.name = name
}

const wo = new people("woc")

// 实例对象指向对象原型， 构造函数指向原型对象 , 对象原型和原型对象为同一对象
console.log(wo.__proto__ === people.prototype);

// 实例对象指向构造函数
console.log(wo.constructor === people);

// 原型对象指向构造函数
console.log(people.prototype.constructor === people);

// 实例对象的对象原型指向Object的对象原型， Object构造函数指向Object的对象原型
console.log(wo.__proto__.__proto__ === Object.prototype);

// Object构造函数的原型对象constructor指向Object构造函数
console.log(Object.prototype.constructor === Object);

// 原型链终点是null
console.log(wo.__proto__.__proto__.__proto__ === null);
console.log(Object.prototype.__proto__ === null);




// 原型链有什么用？

// 1、判断某个对象是否属于某个构造函数（或者某个类）

// 2、