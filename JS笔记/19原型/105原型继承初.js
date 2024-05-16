// 原型继承，因为原型对象是一个实例对象， 是可以被赋值的，通过把原型对象转变为一个实例对象， 从而实现原型对象挂载多个实例对象的相同的属性，并且实例对象都能够访问并且使用这些公共属性，就称为继承。

// 注意，使用原型继承时， 必须要注意原型constructor属性的重定向

// 比如
const people = {
    name: 'u',
    age: '22',
    talk: function() {
        console.log("nigger");
    }
}

const Man = function(dick) {
    this.dick = dick
}

// 继承man
Man.prototype = people
// 重定向
Man.prototype.constructor = Man

// 实例化对象
const wo = new Man(18)

console.log(wo.name); //输出u
console.log(Man.prototype.constructor === Man); //输出true


// 封装一个函数，实现继承和重定向
const extendAndReconstruct = (objectFather, objectSon, az) => {
    objectSon.prototype = objectFather
    objectSon.prototype.constructor = objectSon
    const resultObject = new objectSon(az)
    return resultObject
}

const Woman = function(az) {
    this.az = az
}
const you = extendAndReconstruct(people, Woman, "woc")


console.log(you);
// 输出 Woman { az: 'woc' }
console.log(you.name);
// 输出u， 实现了继承

console.log(Woman.prototype.constructor === Woman)

// 但是这种继承对于man和woman来说，所共享成员属性和成员方法都是一样的，并且如果共享的成员属性和成员变量被添加或者删除， 全部继承people对象的实例对象也都会受到影响

// 比如这里只想给通过Woman构造函数创建的实例对象添加一个sing()方法， 但是一样会给Man构造函数的实例对象添加该方法，所以这种方法只能在被继承对象完全不变的情况下使用（节省内存）
Woman.prototype.sing = () => console.log("a");

// 输出a， 但是意图不在这里
wo.sing()



