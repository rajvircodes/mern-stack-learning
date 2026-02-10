/* JavaScript Classes */

// Basic class
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        return "Hello, I am " + this.name;
    }

    describe() {
        return this.name + " is " + this.age + " years old";
    }
}

const person1 = new Person("Rajvir", 20);
console.log(person1.greet());
console.log(person1.describe());

// Multiple instances
const person2 = new Person("John", 25);
const person3 = new Person("Sarah", 22);
console.log(person2.greet());
console.log(person3.greet());

// Static methods
class Calculator {
    static add(a, b) {
        return a + b;
    }

    static subtract(a, b) {
        return a - b;
    }

    static multiply(a, b) {
        return a * b;
    }
}

console.log(Calculator.add(5, 3)); // 8
console.log(Calculator.multiply(4, 5)); // 20

// Inheritance
class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        return this.name + " makes a sound";
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }

    speak() {
        return this.name + " barks";
    }
}

const dog = new Dog("Buddy", "Golden Retriever");
console.log(dog.speak());
console.log(dog.breed);

// Getters and setters
class Student {
    constructor(name) {
        this._name = name;
        this._grades = [];
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get average() {
        if (this._grades.length === 0) return 0;
        const sum = this._grades.reduce((a, b) => a + b, 0);
        return sum / this._grades.length;
    }

    addGrade(grade) {
        this._grades.push(grade);
    }
}

const student = new Student("Rajvir");
student.addGrade(85);
student.addGrade(90);
student.addGrade(88);
console.log(student.name);
console.log(student.average); // 87.67

// Private fields (# prefix)
class BankAccount {
    #balance = 0;

    constructor(accountHolder) {
        this.accountHolder = accountHolder;
    }

    deposit(amount) {
        this.#balance += amount;
        return "Deposited: " + amount;
    }

    withdraw(amount) {
        if (this.#balance >= amount) {
            this.#balance -= amount;
            return "Withdrew: " + amount;
        }
        return "Insufficient balance";
    }

    getBalance() {
        return "Balance: " + this.#balance;
    }
}

const account = new BankAccount("Rajvir");
console.log(account.deposit(1000));
console.log(account.withdraw(300));
console.log(account.getBalance());

// instanceof
console.log(dog instanceof Dog); // true
console.log(dog instanceof Animal); // true
console.log(person1 instanceof Dog); // false

// Method overriding
class Vehicle {
    drive() {
        return "Vehicle is driving";
    }
}

class Car extends Vehicle {
    drive() {
        return "Car is driving on road";
    }
}

const car = new Car();
console.log(car.drive());

// Constructor function (old way)
function Product(name, price) {
    this.name = name;
    this.price = price;
    this.getInfo = function() {
        return this.name + ": $" + this.price;
    };
}

const product = new Product("Laptop", 1000);
console.log(product.getInfo());