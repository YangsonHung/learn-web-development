var _a;
var isDone = false;
var num = 12;
var test = 'bob';
test = "test";
var someValue = "this is a string";
// 类型断言
// 尖括号写法
var strLength = someValue.length;
console.log('strLength :>> ', strLength);
var someValue2 = "this is a string";
// as 写法
var strLength2 = someValue2.length;
console.log('strLength2 :>> ', strLength2);
// 使用立即执行函数包裹要执行的超时器
// function f() {
//     for (var i = 0; i < 10; i++) {
//         (function (i) {
//             setTimeout(function () { console.log(i) }, 100*i)
//         })(i);
//     };
// }
// f();
function t(x, y) {
    console.log('x :>> ', x);
    if (y) {
        var x_1 = 3;
        console.log('x :>> ', x_1);
    }
}
// t(1,2);
var input = [1, 2];
// let first = input[0];
var first = input[0], second = input[1];
// swap variables
_a = [second, first], first = _a[0], second = _a[1];
console.log(first); // outputs 1
console.log(second); // outputs 2
function f(_a) {
    var first = _a[0], second = _a[1];
    console.log(first);
    console.log(second);
}
// 断言
f(input);
var _b = [1, 2, 3, 4], first1 = _b[0], rest = _b.slice(1);
console.log(first1); // outputs 1
console.log(rest); // outputs [ 2, 3, 4 ]
// ({ a, b } = { a: "baz", b: 101 });
var o = {
    a: 11,
    b: 22
};
// let { a: newName1, b: newName2 } = o;
// 指定类型
var a = o.a, b = o.b;
console.log('a :>> ', a);
console.log('b :>> ', b);
// console.log('newName1 :>> ', newName1);
// console.log('newName2 :>> ', newName2);
