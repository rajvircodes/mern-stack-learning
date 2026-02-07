/* JavaScript Promises */

// Creating a promise
const myPromise = new Promise((resolve, reject) => {
    let success = true;
    
    if (success) {
        resolve("Operation successful!");
    } else {
        reject("Operation failed!");
    }
});

myPromise
    .then(result => console.log(result))
    .catch(error => console.log(error));

// Promise with delay
const delayPromise = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Done after 2 seconds");
    }, 2000);
});

delayPromise.then(msg => console.log(msg));

// Promise chaining
function fetchUser() {
    return new Promise((resolve) => {
        setTimeout(() => resolve({ id: 1, name: "Rajvir" }), 1000);
    });
}

function fetchPosts(userId) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(["Post 1", "Post 2"]), 1000);
    });
}

fetchUser()
    .then(user => {
        console.log("User:", user);
        return fetchPosts(user.id);
    })
    .then(posts => console.log("Posts:", posts))
    .catch(error => console.log("Error:", error));

// Promise.all - wait for all promises
const promise1 = Promise.resolve(3);
const promise2 = new Promise((resolve) => setTimeout(() => resolve("foo"), 100));
const promise3 = fetch("https://jsonplaceholder.typicode.com/posts/1");

Promise.all([promise1, promise2, promise3])
    .then(values => console.log(values))
    .catch(error => console.log("Error:", error));

// Promise.race - first to complete
Promise.race([promise1, promise2])
    .then(value => console.log("Race winner:", value));

// Error handling
const errorPromise = new Promise((resolve, reject) => {
    reject(new Error("Something went wrong!"));
});

errorPromise
    .catch(error => console.log("Caught:", error.message));

// Finally - runs regardless of success/failure
myPromise
    .then(result => console.log(result))
    .catch(error => console.log(error))
    .finally(() => console.log("Promise settled"));