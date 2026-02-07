/* JavaScript Variables and Scope */

// ===== VARIABLES =====

// var (old way - avoid using)
var name = "Rajvir";
console.log(name);

// let (modern, block scope)
let age = 20;
console.log(age);

// const (constant, cannot change)
const city = "Delhi";
console.log(city);

// ===== DATA TYPES =====

// String
let firstName = "John";
console.log(firstName);
console.log(typeof firstName); // "string"

// Number
let count = 42;
let price = 19.99;
console.log(count);
console.log(price);
console.log(typeof count); // "number"

// Boolean
let isActive = true;
let isDeleted = false;
console.log(isActive);
console.log(typeof isActive); // "boolean"

// Null
let emptyValue = null;
console.log(emptyValue);

// Undefined
let undefinedValue;
console.log(undefinedValue); // undefined

// Object
let person = {
    name: "Rajvir",
    age: 20,
    city: "Delhi"
};
console.log(person);
console.log(typeof person); // "object"

// Array
let colors = ["red", "green", "blue"];
console.log(colors);
console.log(typeof colors); // "object" (arrays are objects)

// ===== SCOPE =====

// Global scope
let globalVariable = "I am global";

function testScope() {
    // Function scope
    let functionVariable = "I am in function";
    console.log(globalVariable);      // Can access global
    console.log(functionVariable);    // Can access local
}

testScope();
console.log(globalVariable);      // Can access
// console.log(functionVariable);  // ERROR - not accessible

// Block scope (if, for, while)
if (true) {
    let blockVariable = "I am in block";
    console.log(blockVariable);  // Can access
}
// console.log(blockVariable);    // ERROR - not accessible

for (let i = 0; i < 3; i++) {
    console.log(i); // 0, 1, 2
}
// console.log(i); // ERROR - not accessible outside loop

// ===== VAR vs LET vs CONST =====

// var - function scope (old, avoid)
if (true) {
    var varVariable = "var";
}
console.log(varVariable); // Accessible (hoisted)

// let - block scope (modern)
if (true) {
    let letVariable = "let";
}
// console.log(letVariable); // ERROR - not accessible

// const - block scope, cannot change
const constVariable = "const";
// constVariable = "new value"; // ERROR - cannot reassign
console.log(constVariable);

// ===== VARIABLE NAMING =====

let myVariable = "camelCase";
let my_variable = "snake_case";
let MyVariable = "PascalCase";
let CONSTANT = "SCREAMING_SNAKE";

console.log(myVariable);

// ===== PRACTICE EXAMPLES =====

// Example 1: Variable declaration
let studentName = "Rajvir";
let studentAge = 20;
let studentCity = "Delhi";

console.log("Student Name: " + studentName);
console.log("Student Age: " + studentAge);
console.log("Student City: " + studentCity);

// Example 2: Different data types
let text = "Hello";
let number = 123;
let decimal = 45.67;
let flag = true;
let empty = null;

console.log(text);
console.log(number);
console.log(decimal);
console.log(flag);
console.log(empty);

// Example 3: Scope practice
function myFunction() {
    let insideFunction = "Inside";
    console.log(insideFunction);
}

myFunction();

// Example 4: Block scope
{
    let blockScope = "In block";
    console.log(blockScope);
}
// console.log(blockScope); // Not accessible

// Example 5: Const with objects
const user = {
    name: "Rajvir",
    age: 20
};
user.age = 21; // Can modify properties
console.log(user);
// user = {}; // ERROR - cannot reassign const