/* JavaScript Array Methods */

// Array basics
const numbers = [1, 2, 3, 4, 5];
const fruits = ["apple", "banana", "orange"];

// forEach - loop through array
numbers.forEach(num => {
    console.log(num);
});

// map - transform each element
const doubled = numbers.map(num => num * 2);
console.log("Doubled:", doubled); // [2, 4, 6, 8, 10]

const lengths = fruits.map(fruit => fruit.length);
console.log("Lengths:", lengths); // [5, 6, 6]

// filter - get elements matching condition
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("Even:", evenNumbers); // [2, 4]

const longFruits = fruits.filter(fruit => fruit.length > 5);
console.log("Long fruits:", longFruits); // ["banana", "orange"]

// find - get first matching element
const firstEven = numbers.find(num => num % 2 === 0);
console.log("First even:", firstEven); // 2

const fruit = fruits.find(f => f.startsWith("b"));
console.log("Found:", fruit); // "banana"

// findIndex - get index of first match
const index = numbers.findIndex(num => num > 3);
console.log("Index:", index); // 3

// reduce - combine all elements to single value
const sum = numbers.reduce((total, num) => total + num, 0);
console.log("Sum:", sum); // 15

const product = numbers.reduce((total, num) => total * num, 1);
console.log("Product:", product); // 120

// includes - check if array has element
const hasThree = numbers.includes(3);
console.log("Has 3:", hasThree); // true

const hasGrape = fruits.includes("grape");
console.log("Has grape:", hasGrape); // false

// indexOf - get index of element
const indexOfBanana = fruits.indexOf("banana");
console.log("Index of banana:", indexOfBanana); // 1

// slice - get part of array
const sliced = numbers.slice(1, 4);
console.log("Sliced:", sliced); // [2, 3, 4]

const lastTwo = numbers.slice(-2);
console.log("Last two:", lastTwo); // [4, 5]

// splice - modify array
const arr = [1, 2, 3, 4, 5];
arr.splice(2, 1, "x");
console.log("After splice:", arr); // [1, 2, "x", 4, 5]

// concat - combine arrays
const arr1 = [1, 2];
const arr2 = [3, 4];
const combined = arr1.concat(arr2);
console.log("Combined:", combined); // [1, 2, 3, 4]

// join - convert array to string
const text = fruits.join(", ");
console.log("Joined:", text); // "apple, banana, orange"

// split - convert string to array
const words = "hello world test".split(" ");
console.log("Split:", words); // ["hello", "world", "test"]

// sort - sort array
const sorted = [...numbers].sort((a, b) => a - b);
console.log("Sorted:", sorted);

const sortedFruits = [...fruits].sort();
console.log("Sorted fruits:", sortedFruits);

// reverse - reverse array
const reversed = [...numbers].reverse();
console.log("Reversed:", reversed);

// some - check if any element matches
const hasEven = numbers.some(num => num % 2 === 0);
console.log("Has even:", hasEven); // true

// every - check if all elements match
const allPositive = numbers.every(num => num > 0);
console.log("All positive:", allPositive); // true

// flat - flatten nested array
const nested = [1, [2, 3], [4, [5, 6]]];
const flat = nested.flat(2);
console.log("Flattened:", flat); // [1, 2, 3, 4, 5, 6]

// flatMap - map then flatten
const mapped = [1, 2, 3].flatMap(n => [n, n * 2]);
console.log("FlatMapped:", mapped); // [1, 2, 2, 4, 3, 6]