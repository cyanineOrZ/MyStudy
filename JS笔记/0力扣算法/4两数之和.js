/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

/**
 * 
给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。

你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。

你可以按任意顺序返回答案。
 */

/**
 * 
示例 1：

输入：nums = [2,7,11,15], target = 9
输出：[0,1]
解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。
示例 2：

输入：nums = [3,2,4], target = 6
输出：[1,2]
示例 3：

输入：nums = [3,3], target = 6
输出：[0,1]
 */

var twoSum = function(nums, target) {
    const list = []
    let k = null
    for(let i = 0; i < nums.length; i++) {
        //如果k为空， 则进行大小判断
        if(k === null) {
            k = i
        }
        else {
            //如果此时 nums.k + nums.i === target 则返回数组
            if(nums[k] + nums[i] === target) {
                list.push(k, i)
                console.log(list);
                return list
            }
            // 如果一直不等，当i等于数组长度-1时， 重置 i 和 k
            else {
                if(i == (nums.length - 1)) {
                    //i重置为k
                    i = k
                    //k重置为null
                    k = null
                }
            }
        }
    }
}


twoSum([-3, 2, 3, 90], 0)

