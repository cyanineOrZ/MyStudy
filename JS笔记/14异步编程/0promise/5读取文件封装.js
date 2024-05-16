let fs = require('fs')

function readFile(Path) {

    return new Promise((resolve, rejects) => {
        fs.readFile(Path, (err, data) => {
            if(err) {
                rejects(err)
            }
            else {
                resolve(data)
            }
        })
    })

    // 不一定需要直接就进行处理，可以自定义处理方式，但是读取是一样的
}