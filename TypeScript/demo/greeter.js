// 类
var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = new Student("Jane", "M.", "User");
console.log(user);
document.body.innerHTML = greeter(user);
var x;
x = ["100", 100];
console.log(x[0].substring(1));
// x[2] = "word";
// 枚举
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
var c = Color.Blue;
var colorName = Color[2];
console.log(colorName, typeof colorName); // 显示'Green'因为上面代码里它的值是2
var notSure = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean
