// 目前已经被官方规定为永远不要使用

// eval函数是一个JavaScript代码块， 他会将传入的字符串当成JavaScript代码执行

console.log(eval(console.log(1)));
console.log(eval("2+2"));

// eval在代码块执行时，或者是在sc脚本中执行时，如果定义了一个变量， 则会为这个代码块新增一个变量
{
    function test() {
        let b = eval("let a = 10")
        console.log(b);
    }
    test()
}