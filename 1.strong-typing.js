// // arrays
// var arr: number[] = [1, 2, 3];
// arr = [1, 2 , ];
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
// class PersonClass {
//     firstName: string;
//     lastName: string;
//     age: number;
//     constructor(firstName: string, lastName: string, age: number) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//     }
//     greet() {
//         return `Hello ${this.firstName} ${this.lastName}, you are ${this.age} years old.`;
//     }
//     getAge() {
//         return this.age;
//     }
// }
// // Admin extends Person
// class AdminClass extends Person {
//     role: string;
//     constructor(firstName: string, lastName: string, age: number, role: string) {
//         super(firstName, lastName, age); // Call the parent constructor
//         this.role = role;
//     }
//     greet() {
//         return `Hello ${this.firstName} ${this.lastName}, you are ${this.age} years old and your role is ${this.role}.`;
//     }
//     manageUsers() {
//         console.log(`Managing users as ${this.role}`);
//     }
//     getAge() {
//         return this.age;
//     }
// }
// // Instances
// let user = new PersonClass('John', 'Doe', 30);
// let admin = new AdminClass('Alex', 'Mia', 30, 'Admin');
// console.log(user.greet());  
// console.log(user.getAge()); 
// console.log(admin.getAge()); 
// admin.manageUsers();       
// console.log(admin1.greet()); 
// Closures
// function createCounter (){
//     let count = 0;
//     return{
//         increment: () => count++,
//         decrement: () => count--,
//         getvalue: () => count
//     }
// }
// const counter1 = createCounter();
// const counter2 = createCounter();
// counter2.increment();
// counter2.increment();
// counter1.increment();
// console.log(counter1.getvalue());
// console.log(counter2.getvalue());
// //encapuslation is achieved by using private and public keywords closure
// Class Modifiers
var UserClass = /** @class */ (function () {
    // Constructor parameter properties (shorter and cleaner)
    function UserClass(name, age) {
        this.name = name;
        this.age = age;
    }
    // Getter Methods
    UserClass.prototype.getName = function () {
        return this.name;
    };
    UserClass.prototype.getAge = function () {
        return this.age;
    };
    // Setter Methods
    UserClass.prototype.setName = function (name) {
        this.name = name;
    };
    UserClass.prototype.setAge = function (age) {
        this.age = age;
    };
    return UserClass;
}());
// Create a user instance
var user = new UserClass('John', 30);
console.log(user.getName()); // Output: John
console.log(user.getAge()); // Output: 30
// Instead of reassigning, update properties using setter methods
user.setName('Jane');
user.setAge(28);
console.log(user.getName()); // Output: Jane
console.log(user.getAge()); // Output: 28
