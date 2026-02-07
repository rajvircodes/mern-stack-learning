/* JavaScript DOM Selectors */

// ===== SELECTING ELEMENTS =====

// Select by ID
let heading = document.getElementById("myHeading");
console.log(heading);

// Select by class
// let items = document.getElementsByClassName("item");
console.log(items);

// Select by tag name
let paragraphs = document.getElementsByTagName("p");
console.log(paragraphs);

// ===== MODERN SELECTORS (querySelector) =====

// Select first element by any CSS selector
let firstButton = document.querySelector("button");
console.log(firstButton);

let firstClass = document.querySelector(".container");
console.log(firstClass);

let firstId = document.querySelector("#main");
console.log(firstId);

// Select all elements matching selector
let allButtons = document.querySelectorAll("button");
console.log(allButtons);

let allItems = document.querySelectorAll(".item");
console.log(allItems);

// Complex selectors
let activeItems = document.querySelectorAll(".item.active");
console.log(activeItems);

// ===== ACCESSING ELEMENTS =====

// Access element properties
let element = document.getElementById("title");
console.log(element.textContent); // Text inside
console.log(element.innerHTML);   // HTML inside
console.log(element.innerText);   // Visible text

// Access attributes
let link = document.querySelector("a");
console.log(link.href);
console.log(link.title);

// Access classes
let box = document.querySelector(".box");
console.log(box.className);        // All classes as string
console.log(box.classList);        // Classes as list

// ===== MODIFYING ELEMENTS =====

// Change text content
let para = document.querySelector("p");
para.textContent = "New text";

// Change HTML
let div = document.querySelector("div");
div.innerHTML = "<h1>Hello</h1>";

// Change attributes
let image = document.querySelector("img");
image.src = "new-image.jpg";
image.alt = "New description";

// Change style
let button = document.querySelector("button");
button.style.backgroundColor = "blue";
button.style.color = "white";
button.style.padding = "10px";

// ===== CLASS MANIPULATION =====

let element1 = document.querySelector(".box");

// Add class
element1.classList.add("active");

// Remove class
element1.classList.remove("active");

// Toggle class (add if not present, remove if present)
element1.classList.toggle("active");

// Check if has class
if (element1.classList.contains("active")) {
    console.log("Has active class");
}

// ===== NAVIGATING DOM =====

let elem = document.querySelector(".item");

// Parent element
console.log(elem.parentElement);

// Child elements
console.log(elem.children);
console.log(elem.firstChild);
console.log(elem.lastChild);

// Sibling elements
console.log(elem.nextElementSibling);
console.log(elem.previousElementSibling);

// ===== PRACTICE EXAMPLES =====

// Example 1: Get element by ID
let title = document.getElementById("pageTitle");
if (title) {
    console.log("Title found: " + title.textContent);
}

// Example 2: Get all elements with class
let cards = document.querySelectorAll(".card");
console.log("Number of cards: " + cards.length);

// Example 3: Loop through elements
let buttons = document.querySelectorAll("button");
for (let i = 0; i < buttons.length; i++) {
    console.log("Button " + i + ": " + buttons[i].textContent);
}

// Example 4: Change element content
let messageBox = document.querySelector(".message");
if (messageBox) {
    messageBox.textContent = "Welcome!";
}

// Example 5: Change styles
let highlight = document.querySelector(".highlight");
if (highlight) {
    highlight.style.backgroundColor = "yellow";
    highlight.style.padding = "10px";
}

// Example 6: Add/remove classes
let menu = document.querySelector(".menu");
if (menu) {
    menu.classList.add("visible");
}

// Example 7: Get parent element
let childElement = document.querySelector(".child");
if (childElement) {
    let parent = childElement.parentElement;
    console.log("Parent: " + parent.className);
}

// Example 8: Get multiple elements and modify
let items = document.querySelectorAll(".list-item");
items.forEach(function(item) {
    item.style.color = "blue";
    item.style.fontSize = "18px";
});

// Example 9: Check and modify attributes
let inputField = document.querySelector("input");
if (inputField) {
    console.log("Input type: " + inputField.type);
    console.log("Input value: " + inputField.value);
}

// Example 10: Navigate DOM tree
let element2 = document.querySelector(".container");
if (element2) {
    console.log("First child: " + element2.firstChild);
    console.log("Last child: " + element2.lastChild);
    console.log("Children count: " + element2.children.length);
}