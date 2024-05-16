// Vue3中，将计算属性移入了setup， 并且需要自己额外引入

function setup() {
    let ComputedTest = computed(() => {
        // get() {

        // },
        // setup(value) {

        // }
    })

    return {
        ComputedTest
    }
}

// 当然也可使用组合式API
function setup1() {
    let person = {
        x: 1,
        y: 2
    }

    person.testComputed = computed(() => {
        // get(){}
        // set(value){}
    })

    return {
        // 只需要返回一个person即可将所有的都提交出去
        person
    }
}