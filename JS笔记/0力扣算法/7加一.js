/**
给定一个由 整数 组成的 非空 数组所表示的非负整数，在该数的基础上加一。

最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。

你可以假设除了整数 0 之外，这个整数不会以零开头。

 

示例 1：

输入：digits = [1,2,3]
输出：[1,2,4]
解释：输入数组表示数字 123。
示例 2：

输入：digits = [4,3,2,1]
输出：[4,3,2,2]
解释：输入数组表示数字 4321。
示例 3：

输入：digits = [0]
输出：[1]

 */

/**
 * 并不难，但是有坑[9] 怎么算， [9, 9, 9]怎么算 等等等
 */

var plusOne = function(digits) {
    //如果最后一位不为9， 则直接+1
    if(digits[digits.length - 1] !== 9) {
        digits[digits.length - 1] = digits[digits.length - 1] + 1
        return digits
    }

    //最后一位为9
    else {
        //从最后一位开始，看最后一位前有多少个9
        for(let i = digits.length - 1; i >= 0; i--) {
            //等于9
            if(digits[i] === 9) {

                //如果整个list一直有9，且第一位也为9，说明需要延长list的长度，
                if(i === 0 && digits[i] === 9) {
                    //将===9的值变为0
                    digits[i] = 0
                    //直接返回一个拼接一个数字1的list
                    return [1].concat(digits)
                }
                //将等于9的数字变为0
                digits[i] = 0
            }

            //直到找到有一位数字不为9， 则将这个数字直接+1
            else {
                digits[i] = digits[i] + 1
                //直接返回，中断循环
                return digits
            }
        }
    }
    return digits
}

