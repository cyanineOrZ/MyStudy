const test = {
    name: "deepCopy",
    son: {
        name: "son",
        grandSon: {
            name: "grandson"
        }
    }
}

const testarr = {
    name: "deepCopyArray",
    testarr: [1, 2, [1, 2, 3, [1, 2, 3, 4]]]
}

// 1、利用递归(只有对象嵌套)

const deepCopy = function(srcObject) {
    if(srcObject !== null) {
        const temp = {}
        for(let k in srcObject) {
            if((srcObject[k] instanceof Object) && !(srcObject[k] instanceof Array)) {
                temp[k] = deepCopy(srcObject[k])
            }
            else {
                temp[k] = srcObject[k]
            }
        }
        return temp   
    }
    else {
        return null
    }
}
const t =  deepCopy(test)
t.son.name = 132
t.son.grandSon.name = 324
// console.log(test);
// console.log(t);

// 2、利用递归（只有嵌套数组）
const deepCopyArray = function(srcObject) {
    if(srcObject !== null) {
        temp = {}
        tempList = []
        for(let i in srcObject) {
            if(srcObject[i] instanceof Object) {

            }
            else if (srcObject[i] instanceof Array) {
               
            }
            else {
                temp[i] = srcObject[i]
            }
        }
    }
    return temp

}


tempList = []
const te = function(list) {
    copyList = []
    if(list instanceof Array) {
        list.forEach((element, index) => {
            if(element instanceof Array) {
                tempList[index] = te(element)
            }
            else {
                tempList[index] = element
            }
        });
    }
    return tempList
}

te(testarr.testarr)

const ss = function() {
    return {
        toB : () => {
            console.log("woc");
        },
        toC : () => {
            console.log("AZ");
        }
    }
}

ss().toB()
// [1, 2, [1, 2, 3, [1, 2, 3, 4]]]

