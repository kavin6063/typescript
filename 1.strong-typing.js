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
// class UserClass {
//     // Constructor parameter properties (shorter and cleaner)
//     constructor(private name: string, private age: number) {}
//     // Getter Methods
//     public getName(): string {
//         return this.name;
//     }
//     public getAge(): number {   
//         return this.age;
//     }
//     // Setter Methods
//     public setName(name: string): void {
//         this.name = name;
//     }
//     public setAge(age: number): void {
//         if (age > 0) {
//         this.age = age;
//         }
//     }
// }
// // Create a user instance
// let newUser = new UserClass('John', 30);
// console.log(newUser.getName()); // Output: John
// console.log(newUser.getAge());  // Output: 30
// // Instead of reassigning, update properties using setter methods
// newUser.setName('Jane');
// newUser.setAge(28);
// console.log(newUser.getName()); // Output: Jane
// console.log(newUser.getAge());  // Output: 28
// static functions
// class UserClass {
//     name: string;
//     age: number;
//     constructor(name: string, age: number) {
//         this.name = name;
//         this.age = age;
//     }
//    static isAdult(age: number) {
//         return age >= 18;
//     }
// }
// // const user = new UserClass('John', 30);
// // console.log(user.isAdult());
// console.log(UserClass.isAdult(20));
// Static - properties
// class UserClass {
//     name: string;
//     constructor(name: string) {
//         this.name = name;
//     }
//     getName() {
//         return this.name;
//     }
// }
// let totalUsers = 0;
// function createUser (name: string) {    
//     totalUsers++;
//     return new UserClass(name);
// }
// const user1 = createUser('John');
// const user2 = createUser('Jane');
// console.log(user1.getName());
// console.log(user2.getName());
// console.log(totalUsers); //type coupling
// 
// class UserClass {
//     name: string
//     statictotalUsers : number = 0
//     constructor(name: string) {
//         this.name = name;
//         UserClass.totalUsers++;
//     }
//     getName() {
//         return this.name;
//     }
// }
//GENERICS
// Generic Stack Class
// class Stack<T> {
//     private items: T[] = [];
//     push(item: T) {
//         this.items.push(item);
//     }
//     pop(): T | undefined {
//         return this.items.pop();
//     }
// }
// // Usage with numbers
// const numberStack = new Stack<number>();
// numberStack.push(1);
// numberStack.push(2);
// console.log(numberStack.pop()); 
// // Usage with strings
// const stringStack = new Stack<string>();
// stringStack.push("hello");
// stringStack.push("world");
// console.log(stringStack.pop()); 
// TYPE CASTING
// interface User {
//     name: string;
//     age: number;
// }
// const jsonData = '{"name": "John", "age": 30}';
// const user = JSON.parse(jsonData) as User;
// console.log(`Name: ${user.name}, Age: ${user.age}`);
// DECORATOR
//
// var a = 42;
// var u = 56;
// var str1 = a;
// console.log(str1);
// // let str2: string = u; 
// if (typeof u === "string") {
//     console.log(u.toUpperCase()); // ✅ Safe now
// }
// console.log(typeof u === "string");
