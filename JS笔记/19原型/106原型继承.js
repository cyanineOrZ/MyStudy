// 因为原型继承中， 对于以同一个实例对象作为继承目标的方法中， 继承对象的构造函数的原型对象都只指向这唯一一个实例对象， 所以，当其中一个狗杂函数对这个实例对象进行修改时，就会牵一发动全身

// 解决办法， 如果每次继承的是一个新的实例化对象， 就可以解决这个问题了， 所以将这唯一一个的实例化对象转变为构造函数， 这时每次在构造函数通过原型对象实现继承的时候，被继承的对象都是一个全新的对象，这样就不会因为只
// 拥有唯一一个实例对象并且实例对象被修改的时候会牵一发动全身了。

// 例
const people = function() {
    this.name = "void 0 = undefined"
}

const Man = function(dick) {
    this.dick = dick
}
// 实现继承
Man.prototype = new people()
// 重定向
Man.prototype.constructor = Man

const wo = new Man(18)
console.log(wo.name);
console.log(Man.prototype.constructor === Man)
// 完美实现

// 再来
const Woman = function(az) {
    this.az = az
}
Woman.prototype = new people()
Woman.prototype.constructor = Woman


// 检验继承的是否为唯一实例化对象
console.log(Man.prototype === Woman.prototype); //输出false， 所以是继承不同的对象


