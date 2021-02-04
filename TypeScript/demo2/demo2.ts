let isDone: boolean = false;

let num: number = 12;

let test: string = 'bob';

test = "test"

let someValue: any = "this is a string";

// 类型断言
// 尖括号写法
let strLength: number = (<string>someValue).length;

console.log('strLength :>> ', strLength);


let someValue2: any = "this is a string";

// as 写法
let strLength2: number = (someValue2 as string).length;

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
        let x = 3;
        console.log('x :>> ', x);
    }
}
// t(1,2);

let input = [1, 2];
// let first = input[0];

let [first, second] = input;


// swap variables
[first, second] = [second, first];
console.log(first); // outputs 1
console.log(second); // outputs 2

// function f([first, second]: [number, number]) {
//     console.log(first);
//     console.log(second);
// }
// // 断言
// f((<[number, number]>input));


let [first1, ...rest] = [1, 2, 3, 4];
console.log(first1); // outputs 1
console.log(rest); // outputs [ 2, 3, 4 ]

// ({ a, b } = { a: "baz", b: 101 });
const o = {
    a: 11,
    b: 22
};

let { a: newName1, b: newName2 } = o;

// 指定类型
// let {a, b}: {a: number, b: number} = o;
// console.log('a :>> ', a);
// console.log('b :>> ', b);

console.log('newName1 :>> ', newName1);
console.log('newName2 :>> ', newName2);


function keepWholeObject(wholeObject: { a: string, b?: number }) {
    let { a, b = 1001 } = wholeObject;
}

type C = { a: string, b?: number }
function f({ a, b }: C): void {
    // ...
}