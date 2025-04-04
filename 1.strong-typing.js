// // arrays
// var arr: number[] = [1, 2, 3];
// arr = [1, 2 , ];
var jsonData = '{"name": "John", "age": 30}';
var user = JSON.parse(jsonData);
console.log("Name: ".concat(user.name, ", Age: ").concat(user.age));
