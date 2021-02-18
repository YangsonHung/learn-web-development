// 1、接口初探
function printLabel(labeledObj: { label: string }) {
    console.log(labeledObj.label);
}

let myObj = { size: 10, label: 'Size 10 Object' };
printLabel(myObj);

// 2、使用接口重写
interface LabeledValue {
    label: string;
}

function printLabel2(labeledObj: LabeledValue) {
    console.log(labeledObj.label);
}

let myObj2 = { size: 10, label: 'Size 10 Object' };
printLabel2(myObj2);
// LabeledValue接口就好比一个名字，用来描述上面例子里的要求。 它代表了有一个label属性且类型为string的对象。
// 需要注意的是，我们在这里并不能像在其它语言里一样，说传给printLabel的对象实现了这个接口。我们只会去关注值的外形。 只要传入的对象满足上面提到的必要条件，那么它就是被允许的。
// 还有一点值得提的是，类型检查器不会去检查属性的顺序，只要相应的属性存在并且类型也是对的就可以。

// 3、可选属性
// 带有可选属性的接口与普通的接口定义差不多，只是在可选属性名字定义的后面加一个?符号。
interface SquareConfig {
    color?: string;
    width?: number;
}
// 可选属性的好处之一是可以对可能存在的属性进行预定义，好处之二是可以捕获引用了不存在的属性时的错误。 比如，我们故意将createSquare里的color属性名拼错，就会得到一个错误提示

function createSquare(config: SquareConfig): { color: string; area: number } {
    let newSquare = { color: 'white', area: 100 };
    if (config.color) {
        // Error: Property 'clor' does not exist on type 'SquareConfig'
        // newSquare.color = config.clor;
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}

let mySquare = createSquare({ color: 'black' });

// 4、只读属性
// 一些对象属性只能在对象刚刚创建的时候修改其值。 你可以在属性名前用readonly来指定只读属性
interface Point {
    readonly x: number;
    readonly y: number;
}
// 你可以通过赋值一个对象字面量来构造一个Point。 赋值后，x和y再也不能被改变了
let p1: Point = { x: 10, y: 20 };
// p1.x = 5; // error!

// TypeScript 具有ReadonlyArray<T>类型，它与Array<T>相似，只是把所有可变方法去掉了，因此可以确保数组创建后再也不能被修改
let a: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = a;
// ro[0] = 12; // error!
// ro.push(5); // error!
// ro.length = 100; // error!
// a = ro; // error!

// 把整个ReadonlyArray赋值到一个普通数组也是不可以的。 但是你可以用类型断言重写
a = ro as number[];

// 5、额外的属性检查
interface SquareConfig {
    color?: string;
    width?: number;
}

function createSquare2(config: SquareConfig) {
    // ...
}
// 对象字面量会被特殊对待而且会经过_额外属性检查_，当将它们赋值给变量或作为参数传递的时候。 如果一个对象字面量存在任何“目标类型”不包含的属性时，你会得到一个错误
// let mySquare2 = createSquare2({ colour: 'red', width: 100 });
// 绕开这些检查非常简单。 最简便的方法是使用类型断言
let mySquare2 = createSquare2({ width: 100, opacity: 0.5 } as SquareConfig);

// 最佳方式添加字符串索引签名
// SquareConfig可以有任意数量的属性，并且只要它们不是color和width，那么就无所谓它们的类型是什么。
interface SquareConfig {
    color?: string;
    width?: number;
    [propName: string]: any;
}

// 跳过检查的另一种方式，将对象赋值给另一个变量
// 只在squareOptions和SquareConfig之间有共同的属性时才好用。 在这个例子中，这个属性为width。如果变量间不存在共同的对象属性将会报错
let squareOptions = { colour: 'red', width: 100 };
let mySquare3 = createSquare2(squareOptions);

// error
// let squareOptions = { colour: "red" };
// let mySquare = createSquare(squareOptions);

// 6、函数类型
// 给接口定义调用签名
interface SearchFunc {
    (source: string, subString: string): boolean;
}
let mySearch: SearchFunc;
mySearch = function (source: string, subString: string) {
    let result = source.search(subString);
    return result > -1;
};

// 对于函数类型的类型检查来说，函数的参数名不需要与接口里定义的名字相匹配
mySearch = function (src: string, sub: string): boolean {
    let result = src.search(sub);
    return result > -1;
};

// 没有指定类型时，会推断出类型，返回值类型也是推断出来的
mySearch = function (src, sub) {
    let result = src.search(sub);
    return result > -1;
};

// 返回值类型不匹配
// mySearch = function(src, sub) {
//     let result = src.search(sub);
//     return "string";
// };

// 7、可索引的类型
// 这个索引签名表示了当用number去索引StringArray时会得到string类型的返回值
interface StringArray {
    [index: number]: string;
}

let myArray: StringArray;
myArray = ['Bob', 'Fred'];

let myStr: string = myArray[0];

interface NumberDictionary {
    [index: string]: number;
    length: number; // 可以，length是number类型
    // name: string; // 错误，`name`的类型与索引类型返回值的类型不匹配
}

// 但如果索引签名是包含属性类型的联合类型，那么使用不同类型的属性就是允许的
interface NumberOrStringDictionary {
    [index: string]: number | string;
    length: number; // ok, length is a number
    name: string; // ok, name is a string
}

// 将索引签名设置为只读，这样就防止了给索引赋值
interface ReadonlyStringArray {
    readonly [index: number]: string;
}
let myArray2: ReadonlyStringArray = ['Alice', 'Bob'];
// myArray2[2] = "Mallory"; // error!

// 8、类类型
// 实现接口
interface ClockInterface {
    currentTime: Date;
}

class Clock implements ClockInterface {
    currentTime: Date = new Date();
    constructor(h: number, m: number) {}
}

// 在接口里描述一个方法，在类里实现它
interface ClockInterface2 {
    currentTime: Date;
    setTime(d: Date): void;
}

class Clock2 implements ClockInterface2 {
    currentTime: Date = new Date();
    setTime(d: Date) {
        this.currentTime = d;
    }
    constructor(h: number, m: number) {}
}

// 9、继承接口
interface Shape {
    color: string;
}

interface Square extends Shape {
    sideLength: number;
}

let square1 = {} as Square;
square1.color = 'blue';
square1.sideLength = 10;

// 一个接口可以继承多个接口，创建出多个接口的合成接口
interface Shape {
    color: string;
}

interface PenStroke {
    penWidth: number;
}

interface Square extends Shape, PenStroke {
    sideLength: number;
}

let square = {} as Square;
square.color = 'blue';
square.sideLength = 10;
square.penWidth = 5.0;

// 10、混合类型
interface Counter {
    (start: number): string;
    interval: number;
    reset(): void;
}

function getCounter(): Counter {
    let counter = function (start: number) {} as Counter;
    counter.interval = 123;
    counter.reset = function () {};
    return counter;
}

let ccc = getCounter();
ccc(10);
ccc.reset();
ccc.interval = 5.0;

// 11、接口继承类
/*
当接口继承了一个类类型时，它会继承类的成员但不包括其实现。
就好像接口声明了所有类中存在的成员，但并没有提供具体实现一样。
接口同样会继承到类的 private 和 protected 成员。
这意味着当你创建了一个接口继承了一个拥有私有或受保护的成员的类时，这个接口类型只能被这个类或其子类所实现（implement）。
*/
class Control {
    private state: any;
}

interface SelectableControl extends Control {
    select(): void;
}

class Button extends Control implements SelectableControl {
    select() {}
}

class TextBox extends Control {
    select() {}
}

// class ImageControl implements SelectableControl {
    // Error: Class 'ImageControl' incorrectly implements interface 'SelectableControl'.
    //  Types have separate declarations of a private property 'state'.
    // private state: any;
    // select() {}
// }
