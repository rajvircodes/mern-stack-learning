/* JavaScript Event Handling */

// ===== CLICK EVENTS =====

// Select button
let button = document.querySelector("#myButton");

// Add click event listener
button.addEventListener("click", function() {
    console.log("Button clicked!");
});

// Click with arrow function
let clickButton = document.querySelector(".click-btn");
clickButton.addEventListener("click", () => {
    console.log("Arrow function - button clicked");
});

// ===== MOUSE EVENTS =====

let box = document.querySelector(".box");

// Mouse over (enter element)
box.addEventListener("mouseover", function() {
    console.log("Mouse entered");
    this.style.backgroundColor = "yellow";
});

// Mouse out (leave element)
box.addEventListener("mouseout", function() {
    console.log("Mouse left");
    this.style.backgroundColor = "white";
});

// Mouse click
box.addEventListener("click", function() {
    console.log("Box clicked");
});

// Double click
box.addEventListener("dblclick", function() {
    console.log("Double clicked");
});

// ===== INPUT EVENTS =====

// Text input change
let input = document.querySelector("input");

input.addEventListener("input", function() {
    console.log("Value: " + this.value);
});

// Focus (click on input)
input.addEventListener("focus", function() {
    console.log("Input focused");
    this.style.borderColor = "blue";
});

// Blur (click away from input)
input.addEventListener("blur", function() {
    console.log("Input blur");
    this.style.borderColor = "gray";
});

// Change (when input loses focus)
input.addEventListener("change", function() {
    console.log("Input changed: " + this.value);
});

// ===== KEYBOARD EVENTS =====

let textArea = document.querySelector("textarea");

// Key down (any key pressed)
textArea.addEventListener("keydown", function(event) {
    console.log("Key pressed: " + event.key);
});

// Key up (key released)
textArea.addEventListener("keyup", function(event) {
    console.log("Key released: " + event.key);
});

// Enter key pressed
textArea.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        console.log("Enter pressed");
    }
});

// ===== FORM EVENTS =====

let form = document.querySelector("form");

// Form submit
form.addEventListener("submit", function(event) {
    event.preventDefault(); // Stop default behavior
    console.log("Form submitted");
    // Get form data
    let name = document.querySelector("#name").value;
    console.log("Name: " + name);
});

// Form reset
form.addEventListener("reset", function() {
    console.log("Form reset");
});

// ===== EVENT OBJECT =====

let element = document.querySelector("p");

element.addEventListener("click", function(event) {
    console.log("Event type: " + event.type);
    console.log("Target element: " + event.target);
    console.log("X position: " + event.clientX);
    console.log("Y position: " + event.clientY);
});

// ===== MULTIPLE LISTENERS =====

let btn = document.querySelector(".multi-btn");

btn.addEventListener("click", function() {
    console.log("First listener");
});

btn.addEventListener("click", function() {
    console.log("Second listener");
});

// Both will execute

// ===== REMOVE EVENT LISTENER =====

function handleClick() {
    console.log("Button clicked");
}

let removeButton = document.querySelector(".remove-btn");
removeButton.addEventListener("click", handleClick);

// Later, remove listener
// removeButton.removeEventListener("click", handleClick);

// ===== EVENT DELEGATION =====

// Instead of adding listener to each item
let listContainer = document.querySelector(".list");

listContainer.addEventListener("click", function(event) {
    if (event.target.classList.contains("list-item")) {
        console.log("List item clicked: " + event.target.textContent);
    }
});

// ===== PRACTICE EXAMPLES =====

// Example 1: Button click
let submitBtn = document.querySelector("#submitBtn");
if (submitBtn) {
    submitBtn.addEventListener("click", function() {
        alert("Form submitted!");
        console.log("Submit button clicked");
    });
}

// Example 2: Input change
let emailInput = document.querySelector("#email");
if (emailInput) {
    emailInput.addEventListener("change", function() {
        console.log("Email: " + this.value);
    });
}

// Example 3: Key press
let passwordInput = document.querySelector("#password");
if (passwordInput) {
    passwordInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            console.log("Enter pressed in password field");
        }
    });
}

// Example 4: Mouse over/out
let hoverBox = document.querySelector(".hover-box");
if (hoverBox) {
    hoverBox.addEventListener("mouseover", function() {
        this.style.backgroundColor = "lightblue";
    });

    hoverBox.addEventListener("mouseout", function() {
        this.style.backgroundColor = "white";
    });
}

// Example 5: Toggle visibility
let toggleBtn = document.querySelector(".toggle-btn");
let toggleContent = document.querySelector(".toggle-content");

if (toggleBtn && toggleContent) {
    toggleBtn.addEventListener("click", function() {
        if (toggleContent.style.display === "none") {
            toggleContent.style.display = "block";
        } else {
            toggleContent.style.display = "none";
        }
    });
}

// Example 6: Form validation
let validateForm = document.querySelector("#validateForm");
if (validateForm) {
    validateForm.addEventListener("submit", function(event) {
        event.preventDefault();
        let nameField = document.querySelector("#fullName");
        
        if (nameField.value === "") {
            alert("Name is required!");
        } else {
            alert("Form is valid!");
        }
    });
}

// Example 7: Count clicks
let countBtn = document.querySelector(".count-btn");
let count = 0;

if (countBtn) {
    countBtn.addEventListener("click", function() {
        count++;
        console.log("Clicked " + count + " times");
    });
}

// Example 8: Text change on input
let nameField = document.querySelector("#nameField");
let nameDisplay = document.querySelector("#nameDisplay");

if (nameField && nameDisplay) {
    nameField.addEventListener("input", function() {
        nameDisplay.textContent = this.value || "Your name here";
    });
}

// Example 9: Double click delete
let deleteBtn = document.querySelector(".delete-btn");
if (deleteBtn) {
    deleteBtn.addEventListener("dblclick", function() {
        console.log("Double clicked - item deleted");
        this.remove();
    });
}

// Example 10: Event delegation for dynamic elements
let itemsList = document.querySelector(".items-list");
if (itemsList) {
    itemsList.addEventListener("click", function(event) {
        if (event.target.classList.contains("item")) {
            console.log("Item clicked: " + event.target.textContent);
            event.target.classList.toggle("selected");
        }
    });
}