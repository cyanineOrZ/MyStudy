"use strict";
const obj = {
    x: 1,
    getX: function() {
        return this.x
    }
}

const obj2 = {
    getY: function() {
        return 10
    }
}

obj.x = 10
console.log(obj.getX());

//这里是无法更改y的值的
obj2.y = 100
console.log(obj2.getY());