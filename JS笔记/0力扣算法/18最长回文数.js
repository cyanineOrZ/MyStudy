/**
 * 给定一个包含大写字母和小写字母的字符串 s ，返回 通过这些字母构造成的 最长的回文串 。
 * 在构造过程中，请注意 区分大小写 。比如 "Aa" 不能当做一个回文字符串。
 * 
 */

const test = "accbbaadd"

function longestPalindrome(string) {
    // 初始化列表
    const set = new Set()

    let count = 0

    for(let i = 0; i < string.length; i++) {

        // 判断该元素是否在哈希表中，如果不在，则添加到哈希表中，如果在，则删除该元素，并且对计数器进行计数
        if(!set.has(string[i])) {
            // 
            set.add(string[i])
        }
        else {
            set.delete(string[i])

            // +2是因为每出现一个重复字母，回文数长度+2
            count = count + 2
        }
        
    }

    return set.size === 0? count : count + 1
}

console.log(longestPalindrome(test));

