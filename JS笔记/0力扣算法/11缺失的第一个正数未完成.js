
let test = [1,2,3,40,5,60,9,8, 22, 4,9,20]
let test2 = [0, 2, 2, 1, 1]

// [0,1,2,2,1]
// [0,1,1,2,2]

var firstMissingPositive = function(nums) {
    let result = 1
    let count = 0
    for(let i = 0; i < nums.length; i++) {
        let temp = 0
        for(let k = i; k < nums.length; k++) {
            if(nums[i] > nums[k]) {
                temp = nums[k]
                nums[k] = nums[i]
                nums[i] = temp
            }
        }
        if((nums[i] >= 1)) {
            if(result === nums[i]) {
                
            }
        }
        if(i === nums.length - 1 && nums[i] < 1) {
            return 1
        }
    }
    return nums
};

console.log(firstMissingPositive(test2));
