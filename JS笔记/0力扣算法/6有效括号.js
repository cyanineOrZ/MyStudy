/*

给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

有效字符串需满足：

左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。
每个右括号都有一个对应的相同类型的左括号。
 

示例 1：

输入：s = "()"
输出：true
示例 2：

输入：s = "()[]{}"
输出：true
示例 3：

输入：s = "(]"
输出：false

*/

/**计数法有bug 当输入为 )( }{ ][ 输出为true 但是不闭合 */
var isValid = function(s) {
    let left1 = 0;
    let left2 = 0;
    let left3 = 0;
    let right1 = 0;
    let right2 = 0;
    let right3 = 0;
    [...s].forEach(element => {
        switch(element) {
            case "(":
                left1++
                break
            case "{":
                left2++
                break
            case "[":
                left3++
                break
            case ")":
                right1++
                break
            case "}":
                right2++
                break
            case "]":
                right3++
                break
        }
    })
    return (left1 === right1 && left2 === right2 && left3 === right3)? true : false
};

console.log(isValid("()()()({}}{"));