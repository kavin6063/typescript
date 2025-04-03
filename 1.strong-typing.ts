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

class Person {
    firstName: string;
    lastName: string;
    age: number;
    
    constructor(firstName: string, lastName: string, age: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    greet() {
        return `Hello ${this.firstName} ${this.lastName}, you are ${this.age} years old.`;
    }

    getAge() {
        return this.age;
    }
}

// Admin extends Person
class Admin extends Person {
    role: string;

    constructor(firstName: string, lastName: string, age: number, role: string) {
        super(firstName, lastName, age); // Call the parent constructor
        this.role = role;
    }

    greet() {
        return `Hello ${this.firstName} ${this.lastName}, you are ${this.age} years old and your role is ${this.role}.`;
    }

    manageUsers() {
        console.log(`Managing users as ${this.role}`);
    }
}

// Instances
let user1 = new Person('John', 'Doe', 30);
let admin1 = new Admin('Alex', 'Mia', 30, 'Admin');

console.log(user1.greet());  // Works fine
console.log(user1.getAge()); // Works fine

console.log(admin1.getAge()); // Works fine
admin1.manageUsers();        // Logs message without undefined issue

console.log(admin1.greet());  // Works fine
