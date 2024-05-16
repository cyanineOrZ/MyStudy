/**
给你两个二进制字符串 a 和 b ，以二进制字符串的形式返回它们的和。

示例 1：

输入:a = "11", b = "1"
输出："100"
示例 2：

输入：a = "1010", b = "1011"
输出："10101"


1 <= a.length, b.length <= 10**4
a 和 b 仅由字符 '0' 或 '1' 组成
*/

/**
 * 思路1、先将数变为常规数，再相加，再转为二进制, 毙
 * 坑1：超大数
 * 坑2：
 * 
 * 思路2，根据长度短的字符串来进行计算，但是无法进位，毙
 * 
 * 思路3
 */


// 思路1
var addBinary1 = function(a, b) {
    const list = [...arguments]
    let sum = 0
    list.forEach(element => {
        [...element].forEach((item, indexIn) => {
            number = Number.parseInt(item)
            sum = sum + number * (2 ** ([...element].length - indexIn - 1)) 
        })
    })
    return sum.toString(2)
};

//思路2
var addBinary2 = function(a, b) {
    const result = a.length >= b.length? t(a, b) : t(b, a)
    return result.join("")
};

const t = function(strL, strS) {
    let count = 0;
    let tip = 0;
    tempListL = [...strL].reverse();
    tempListS = [...strS];
    resultList = tempListL.slice(0)
    

    for(let i = 0; i < tempListS.length; i++) {
        if(tempListS[i] === "0") {
            //如果短的===0， 长的也等于0， 那么直接等于0， 如果短的===0，长的不等于0， 那就===1
            resultList[i] = tempListL[i] === tempListS[i]? "0" : "1"

            if(resultList[i] === "1") {
                //检查count是否为0， 如果是0， 如果0，则长不变， 如果1， 则变长为0， 
                resultList[i] = count === 0? resultList[i] : "0"
                //如果进位了，清空进位， 没进，继续为1
                count = resultList[i] === "0"? 0 : count
            }
        }

        else {
            //如果短的===1， 长的等于0， 则长的变为1， 如果长也等于1， 那就变为0，并且进位
            resultList[i] = tempListS[i] === tempListL[i]? "0" : "1"

            if(resultList[i] === "1") {
                //查看是否会进位
                resultList[i] = count === 0? resultList[i] : "0"

                //如果进位，恢复进位
                count = resultList[i] === "0"? 0 : count
            }

            //记录进位
            count = resultList[i] === "0"? 1 : 0
        }

        //最后有一位短的如果有进位，就直接在长字符串中进行添加1
        if(i === tempListS.length - 1 && count === 1) {
            resultList.splice(i, 0, "1")
        }
    }
    return resultList.reverse()
}



//思路3，使用长的来，并且记录进位
const addBinary = function(a, b) {
    const result = a.length >= b.length? test(a, b) : test(b, a)
    return result.join("")
}
const test = function(strL, strS) {
    let count = 0;
    tempListL = [...strL].reverse()
    tempListS = [...strS].reverse()
    resultList = tempListL.slice(0)
    
    for(let i = 0; i < tempListL.length; i++) {
        if(i < tempListS.length) {
            //如果二者相同，则一定为0， 如果二者不同，则一定为1
            resultList[i] = tempListL[i] === tempListS[i]? "0" : "1"

            if(tempListL[i] === "0") {
                //如果要进位
                if(count !== 0) {
                    // 要进位，如果为1， 则变为0， 如果为0，则变为1
                    resultList[i] = resultList[i] === "1"? "0" : "1"
                    count = 0
                }
            }
            else {
                //是否需要进位
                if(count !== 0) {
                    //如果为1，则变为0， 如果为0，则变为1
                    resultList[i] = resultList[i] === "1"? "0" : "1"
                    count = tempListL[i] === "1"? 1 : 0
                }
                else {
                    //如果变为0， 则表示继续进位， 如果为1， 则表示不再进位
                    count = resultList[i] === "0"? 1 : 0
                }
            }
        }
        else {
            console.log(count);
            //超出短的部分 当等于0时， 查看是否进位， 如果进位 ，变为1， 并让count变为 0 不进位不变
            if(resultList[i] === "0") {
                resultList[i] = count === 1? "1" : "0"
                return resultList.reverse()
            }
            //超出部分等于1时
            else {
                resultList[i] = count === 1? "0" : "1"
                count = resultList[i] === "1"? 0 : 1
                if(i === resultList.length - 1 && count === 1) {
                    resultList.splice(resultList.length, 0, "1")
                }
            }
        }
    }
    return resultList.reverse()
}

console.log(addBinary("1010", "111"));