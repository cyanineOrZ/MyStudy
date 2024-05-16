/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 * 
 * 
现给定一个对象或数组 obj，返回一个 精简对象 。精简对象 与原始对象相同，只是将包含 假 值的键移除。该操作适用于对象及其嵌套对象。数组被视为索引作为键的对象。当 Boolean(value) 返回 false 时，值被视为假值

示例 1：

输入：obj = [null, 0, false, 1]
输出：[1]
解释：数组中的所有假值已被移除。
示例 2：

输入：obj = {"a": null, "b": [false, 1]}
输出：{"b": [1]}
解释：obj["a"] 和 obj["b"][0] 包含假值，因此被移除。
示例 3：

输入：obj = [null, 0, 5, [0], [false, 16]]
输出：[5, [], [16]]
解释：obj[0], obj[1], obj[3][0], 和 obj[4][0] 包含假值，因此被移除。
 */

obj = [null, 0, false, 1]
obj1 = {"a": null, "b": [false, 1]}
obj2 = [null, 0, 5, [0], [false, 16]]

var compactObject = function(obj) {
    if((obj instanceof Object) || (obj instanceof Array)) {
        if(obj instanceof Array) {
            obj = obj.filter(item => {
                if(item instanceof Array) {
                    item = compactObject(item)
                }
                else if(Boolean(item)) {
                    return item
                }
            })
            return obj
        }
        //对象部分，直接删除对象键值对还是再输出原对象还是会出现nuill， 所以通过字面量创建新对象来接收旧对象中的真值，并通过递归判断是否有嵌套对象
        else {
            const temp = {}
            for(let i in obj) {
                console.log(i);
                if(obj[i] instanceof Object) {
                    temp[i] = compactObject(obj[i])
                }
                else {
                    if(Boolean(obj[i])) {
                        temp[i] = obj[i] 
                    }
                }
            }
            return temp
        }
    }
    else {
        return obj
    }
}

console.log(compactObject(obj2));
console.log(obj1.length);