// // arrays
// var arr: number[] = [1, 2, 3];
// arr = [1, 2 , ];
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// //Enums
// enum Color {
//     Red ,
//     Green,
//     Blue 
// }
// function paint (color) {
//     console.log(`The color is ${Color[color]}`);
// }
// paint(Color.Red);
// // functions 
// function add(num1: number, num2: number): number {
//     return num1 + num2;
// }
// console.log(add(1, 2)); 
// // optional parameters
// var concatStrings = function (str1: string, str2?: string , str3?: string) {
//    return str1 + str2 + str3;
// }
// // default parameters
// var concatStrings2 = function (str1: string, str2: string = '', str3: string = 'k') {
//     return str1 + str2 + str3;
// }
// console.log(concatStrings2('a', 'b' , 'c'));
// // interfaces
// function greet (user : {firstName: string, lastName: string}) {
//     console.log(`Hello ${user.firstName} ${user.lastName}`);
// }
// greet({firstName: 'John', lastName: 'Doe'});
// // inheritance
// Inheritance
var Person = /** @class */ (function () {
    function Person(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    Person.prototype.greet = function () {
        return "Hello ".concat(this.firstName, " ").concat(this.lastName, ", you are ").concat(this.age, " years old.");
    };
    Person.prototype.getAge = function () {
        return this.age;
    };
    return Person;
}());
// Admin extends Person
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin(firstName, lastName, age, role) {
        var _this = _super.call(this, firstName, lastName, age) || this; // Call the parent constructor
        _this.role = role;
        return _this;
    }
    Admin.prototype.greet = function () {
        return "Hello ".concat(this.firstName, " ").concat(this.lastName, ", you are ").concat(this.age, " years old and your role is ").concat(this.role, ".");
    };
    Admin.prototype.manageUsers = function () {
        console.log("Managing users as ".concat(this.role));
    };
    return Admin;
}(Person));
// Instances
var user1 = new Person('John', 'Doe', 30);
var admin1 = new Admin('Alex', 'Mia', 30, 'Admin');
console.log(user1.greet()); // Works fine
console.log(user1.getAge()); // Works fine
console.log(admin1.getAge()); // Works fine
admin1.manageUsers(); // Logs message without undefined issue
console.log(admin1.greet()); // Works fine
