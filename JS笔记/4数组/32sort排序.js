const array = [1,5,6,7,2,5,1,6,4]

// a + b 为降序排序
const uparray = array.sort((a, b) => {
    return  a - b
})

console.log(uparray);

// b - a 为升序排序
const downarray = array.sort((a, b) => {
    return  b - a
})

console.log(downarray);

// 注意，在进行排序后，sort会将原来的数组改变，所以我们一般会改写sort让其不改变原数组
// 或者通过一个暂时性的数组，来进行排序
