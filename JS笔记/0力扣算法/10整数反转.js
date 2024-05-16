/**
给你一个 32 位的有符号整数 x ，返回将 x 中的数字部分反转后的结果。

如果反转后整数超过 32 位的有符号整数的范围 [−231,  231 − 1] ，就返回 0。

假设环境不允许存储 64 位整数（有符号或无符号）。
 

示例 1：

输入：x = 123
输出：321
示例 2：

输入：x = -123
输出：-321
示例 3：

输入：x = 120
输出：21
示例 4：

输入：x = 0
输出：0
 */

/**
思路一、直接进行反转（记录负号）
 */

var reverse1 = function(x) {
    let list = []
    let targer = 0
    if(x < 0) {
        targer = 1
        x = -x
    }
    list = [...x.toString()].reverse()
    result = targer === 0? list.join("") : -1 * list.join("")
    
    return result = (result > (2 ** 31) - 1) || (result < -1 * (2 ** 31))? 0 : result
};

var reverse = function(x) {
    let targer = 0
    let result = 0
    if(x < 0) {
        targer = 1
        x = -x
    }
    while(x > 0) {
        temp = x % 10
        x = (x - temp) / 10
        result = result * 10 + temp
    }
    result = targer === 1 ? result * -1 : result
    return result = (result > (2 ** 31) - 1) || (result < -1 * (2 ** 31))? 0 : result
};

console.log(reverse(1534236469));

console.log(reverse(15342));