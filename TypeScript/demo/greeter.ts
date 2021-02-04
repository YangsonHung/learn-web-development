// 类
class Student {
  fullName: string;
  constructor(public firstName, public middleInitial, public lastName) {
    this.fullName = firstName + " " + middleInitial + " " + lastName;
  }
}

// 接口
interface Person {
  firstName: string;
  lastName: string;
}

function greeter(person: Person) {
  return "Hello, " + person.firstName + " " + person.lastName;
}

let user = new Student("Jane", "M.", "User");

console.log(user);

document.body.innerHTML = greeter(user);

let x: [string, number];
x = ["100", 100];
console.log(x[0].substring(1));
// x[2] = "word";

// 枚举
enum Color {Red = 1, Green, Blue}
let c:Color = Color.Blue;
let colorName: string = Color[2];

console.log(colorName, typeof colorName);  // 显示'Green'因为上面代码里它的值是2

let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean

let list: any[] = [1, true, "free"];

list[1] = 100;

let u:null = null;
let uu: null;

let unusable: void = undefined;

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


