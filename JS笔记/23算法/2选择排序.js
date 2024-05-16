/**
 * 选择排序，选择排序，就是通过选出来进行的排序，算是一种优化的冒泡排序
 * 
 * 对于一个无序数组而言，选择排序有以下步骤
 * 
 * 1、选定一个值，一般选择为数组第一项，作为排序基准
 * 
 * 2、使用基准与数组除该值以外的值进行对比，如果比基准小（大），则让基准与该值交换位置，让该值变为基准
 * 
 * 3、如果确定了没有其他值比基准小（大），则进行下一轮排序
 * 
 * 4、确定上一轮基准的下一个值list[i + 1](i为上一轮基准的索引)为基准，重复123步骤
 * 
 * 5、直到这一轮基准索引为数组最后一个值，该值一定是数组最大（最小）值，所以不需要排序
 * 
 * 选择排序的时间复杂度为 T(n**2)，跟冒泡排序的时间复杂度一样，但是比冒泡快
 */


let testList = [1, 2, 55, 4, 46, 6, 7, 9 ,1, 6, 5, 4, 999]
const selectSort = function(list) {
    if(list.length <= 1) {
        return list
    }

    for(let i = 0; i < list.length - 1; i++) {
        console.log(list);
        let minElemnt = list[i]
        let temp = 0
        for(let k = i + 1; k < list.length; k++) {
            if(minElemnt > list[k]) {
                temp = list[k]
                list[k] = minElemnt
                minElemnt = temp
            }
        }
    }
    return list
}
console.log(selectSort(testList));