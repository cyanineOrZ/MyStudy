// 每一个实例对象里面都拥有原型属性 _poto_ 这个属性指向这个实例对象的构造函数的原型对象。

// 原型对象——挂载公共方法的对象， 构造函数中的prototype属性指向该原型对象

// 对象原型——实例化对象的原型对象， 通过实例对象中的_poto_属性指向该对象
const people = function(name) {
    this.name = name
} 
people.prototype.sing = function() {
    console.log('wpc');
}

const lll = new people("woc")
console.log(lll.__proto__);

// 这样写不规范
console.log(lll.__proto__ === people.prototype);


//Object.getPrototypeOf(ObjectName) 获取对象原型
console.log(Object.getPrototypeOf(lll) === people.prototype);
