/* JavaScript Functions */

// ===== BASIC FUNCTION =====

// Function declaration
function greet() {
    console.log("Hello, World!");
}

greet(); // Call function

// Function with parameter
function greetPerson(name) {
    console.log("Hello, " + name);
}

greetPerson("Rajvir");
greetPerson("John");

// Function with multiple parameters
function add(a, b) {
    console.log(a + b);
}

add(5, 3); // 8

// ===== RETURN VALUES =====

// Function that returns value
function multiply(a, b) {
    return a * b;
}

let result = multiply(4, 5);
console.log(result); // 20

// Function with return
function getFullName(firstName, lastName) {
    return firstName + " " + lastName;
}

let fullName = getFullName("Rajvir", "Sinh");
console.log(fullName);

// ===== ARROW FUNCTIONS =====

// Arrow function (modern syntax)
const greetArrow = () => {
    console.log("Hello from arrow function");
};

greetArrow();

// Arrow function with parameter
const square = (num) => {
    return num * num;
};

console.log(square(5)); // 25

// Arrow function shorthand (one line)
const cube = (num) => num * num * num;
console.log(cube(3)); // 27

// Arrow function with multiple parameters
const addNumbers = (a, b) => a + b;
console.log(addNumbers(10, 20)); // 30

// ===== DEFAULT PARAMETERS =====

function sayHello(name = "Guest") {
    console.log("Hello, " + name);
}

sayHello();           // Hello, Guest
sayHello("Rajvir");   // Hello, Rajvir

// Arrow function with default
const calculatePrice = (price, tax = 0.1) => {
    return price + (price * tax);
};

console.log(calculatePrice(100));      // 110
console.log(calculatePrice(100, 0.2)); // 120

// ===== FUNCTION EXPRESSION =====

// Assign function to variable
let subtract = function(a, b) {
    return a - b;
};

console.log(subtract(10, 3)); // 7

// ===== PRACTICE EXAMPLES =====

// Example 1: Simple function
function printMessage(message) {
    console.log(message);
}

printMessage("Learning JavaScript");

// Example 2: Function with calculation
function calculateArea(length, width) {
    return length * width;
}

let area = calculateArea(5, 4);
console.log("Area: " + area); // 20

// Example 3: Multiple operations
function processNumber(num) {
    let doubled = num * 2;
    let squared = num * num;
    console.log("Number: " + num);
    console.log("Doubled: " + doubled);
    console.log("Squared: " + squared);
}

processNumber(5);

// Example 4: Temperature converter
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

console.log(celsiusToFahrenheit(0));   // 32
console.log(celsiusToFahrenheit(100)); // 212

// Example 5: Grading system
function getGrade(score) {
    if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else if (score >= 60) {
        return "D";
    } else {
        return "F";
    }
}

console.log(getGrade(85)); // B
console.log(getGrade(92)); // A
console.log(getGrade(65)); // D

// Example 6: Check even or odd
const isEven = (num) => {
    return num % 2 === 0;
};

console.log(isEven(4));  // true
console.log(isEven(7));  // false

// Example 7: Sum of multiple numbers
function sumNumbers(...numbers) {
    let total = 0;
    for (let num of numbers) {
        total += num;
    }
    return total;
}

console.log(sumNumbers(1, 2, 3));       // 6
console.log(sumNumbers(5, 10, 15, 20)); // 50