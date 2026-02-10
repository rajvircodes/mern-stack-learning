/* JavaScript Objects */

// Object literal
const person = {
    name: "Rajvir",
    age: 20,
    city: "Delhi",
    greet: function() {
        console.log("Hello, I am " + this.name);
    }
};

console.log(person.name);
console.log(person["age"]);
person.greet();

// Adding properties
person.email = "rajvir@example.com";
console.log(person.email);

// Modifying properties
person.age = 21;
console.log(person.age);

// Deleting properties
delete person.email;
console.log(person.email); // undefined

// Object methods
const user = {
    name: "John",
    age: 25,
    greet: function() {
        return "Hi, " + this.name;
    },
    describe: function() {
        return this.name + " is " + this.age + " years old";
    }
};

console.log(user.greet());
console.log(user.describe());

// Object.keys - get all keys
console.log(Object.keys(person));

// Object.values - get all values
console.log(Object.values(person));

// Object.entries - get key-value pairs
console.log(Object.entries(person));

// Object.assign - copy object
const copy = Object.assign({}, person);
console.log(copy);

// Spread operator - copy object
const spread = { ...person };
console.log(spread);

// Nested objects
const student = {
    name: "Rajvir",
    grades: {
        math: 85,
        english: 90,
        science: 88
    },
    address: {
        city: "Delhi",
        country: "India"
    }
};

console.log(student.grades.math);
console.log(student.address.city);

// Object destructuring
const { name, age } = person;
console.log(name, age);

const { math, english } = student.grades;
console.log(math, english);

// for...in loop
for (let key in person) {
    console.log(key + ": " + person[key]);
}

// Check property exists
console.log("name" in person); // true
console.log(person.hasOwnProperty("name")); // true

// Property descriptor
Object.defineProperty(person, "phone", {
    value: "1234567890",
    writable: false,
    enumerable: true
});

console.log(person.phone);
// person.phone = "9876543210"; // Error - read only

// Getters and setters
const car = {
    brand: "Toyota",
    model: "Camry",
    _speed: 0,
    get speed() {
        return this._speed;
    },
    set speed(value) {
        if (value > 0) {
            this._speed = value;
        }
    }
};

car.speed = 100;
console.log(car.speed);

// Object.freeze - prevent modification
const frozen = Object.freeze({ name: "Test" });
// frozen.name = "Changed"; // Error
console.log(frozen);

// Object.seal - prevent adding/removing
const sealed = Object.seal({ name: "Test" });
sealed.name = "Changed"; // OK
// sealed.age = 20; // Error
console.log(sealed);