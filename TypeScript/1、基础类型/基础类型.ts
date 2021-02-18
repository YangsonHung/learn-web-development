// 1、Boolean
let isDone: boolean = false;


// 2、Number
let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
let binaryLiteral: number = 0b1010;
let octalLiteral: number = 0o744;
// let bigLiteral: bigint = 100n;


// 3、String
let name1: string = "bob";
name1 = "smith";

let name2: string = `Gene`;
let age: number = 37;
let sentence: string = `Hello, my name is ${ name2 }.
I'll be ${ age + 1 } years old next month.`;

// 相同的定义方式
let sentence2: string = "Hello, my name is " + name2 + ".\n\n" +
    "I'll be " + (age + 1) + " years old next month.";


// 4、Array
let list: number[] = [1, 2, 3];
// 使用数组泛型定义
let list2: Array<number> = [1, 2, 3];


// 5、Tuple
let x: [string, number];
// 正确
x = ['hello', 10];
// 错误
// x = [10, 'hello'];


// 6、Enum
enum Color {Red, Green, Blue}
let c: Color = Color.Green;
// 手动指定成员的数值
enum Color1 {Red = 1, Green, Blue}
let c1: Color = Color.Green;
// 全部手动赋值
enum Color2 {Red = 1, Green = 2, Blue = 4}
let c2: Color = Color.Green;
console.log(c2); // 2

let colorName: string = Color[2];
console.log(colorName); // "Green"


// 7、Unknown
let notSure: unknown = 4;
notSure = "maybe a string instead";
notSure = false;


// 8、Any
let notSure1: any = 4;
notSure1 = "maybe a string instead";
notSure1 = false; // okay, definitely a boolean

let notSure2: any = 4;
notSure2.ifItExists(); // okay, ifItExists might exist at runtime
notSure2.toFixed(); // okay, toFixed exists (but the compiler doesn't check)

let prettySure: Object = 4;
// Error: Property 'toFixed' doesn't exist on type 'Object'.
// prettySure.toFixed();

let list3: any[] = [1, true, "free"];
list3[1] = 100;


// 9、Void
function warnUser(): void {
    console.log("This is my warning message");
}
// 只能赋予null
let unusable: void = undefined;

// 10、Null和Undefined
// Not much else we can assign to these variables!
let u: undefined = undefined;
let n: null = null;
// 默认情况下null和undefined是所有类型的子类型。 就是说你可以把null和undefined赋值给number类型的变量
// 当指定了--strictNullChecks标记，null和undefined只能赋值给any和它们各自的类型（有一个例外是undefined还可以赋值给void类型）。 这能避免_很多_常见的问题。 也许在某处你想传入一个string或null或undefined，你可以使用联合类型string | null | undefined。

// 10、Never
// never类型表示的是那些永不存在的值的类型。
// 例如，never类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型； 变量也可能是never类型，当它们被永不为真的类型保护所约束时。
// never类型是任何类型的子类型，也可以赋值给任何类型；然而，_没有_类型是never的子类型或可以赋值给never类型（除了never本身之外）。 即使any也不可以赋值给never
// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
    throw new Error(message);
}

// 推断的返回值类型为never
function fail() {
    return error("Something failed");
}

// 返回never的函数必须存在无法达到的终点
function infiniteLoop(): never {
    while (true) {
    }
}


// 11、Object
// object表示非原始类型，也就是除number，string，boolean，bigint，symbol，null或undefined之外的类型
declare function create(o: object | null): void;

create({ prop: 0 }); // OK
create(null); // OK

// create(42); // Error
// create("string"); // Error
// create(false); // Error
// create(undefined); // Error


// 12、类型断言
// 尖括号写法
let someValue: any = "this is a string";
// let strLength: number = (<string>someValue).length;

// as写法
let someValue1: any = "this is a string";
let strLength: number = (someValue1 as string).length;