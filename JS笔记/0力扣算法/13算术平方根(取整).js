/**
给你一个非负整数 x ，计算并返回 x 的 算术平方根 。

由于返回类型是整数，结果只保留 整数部分 ，小数部分将被 舍去 。

注意：不允许使用任何内置指数函数和算符，例如 pow(x, 0.5) 或者 x ** 0.5 。

 

示例 1：

输入：x = 4
输出：2
示例 2：

输入：x = 8
输出：2
解释：8 的算术平方根是 2.82842..., 由于返回类型是整数，小数部分将被舍去。

 */

//暴力破解
var mySqrt1 = function(x) {
    if(x < 1) {
        return 0
    }
    else if(x < 4) {
        return 1
    }
    else {
        let i = 2
        while(true) {
            if(i * i > x) {
                return i - 1
            }
            i++
        }
    }
};

//二分
var mySqrt = function(x) {
    if(x < 1) {
        return 0
    }
    else if(x <= 4) {
        return x === 4 ? 2 : 1
    }

    let left = 0
    let right = x / 2

    while(left < right) {
        let mid = Math.floor(((left + right) / 2))
        if(mid * mid <= x) {
            if((mid + 1) * (mid + 1) > x) {
                return mid
            }
            else {
                left = mid + 1
            }
        }
        else {
            right = mid
        }
    }
};
console.log(mySqrt(5));