

// handling asynchronous operations like API calls, file loading, or time delays easier.

// three states

// Pending: The task is in the initial state.
// Fulfilled: The task was completed successfully, and the result is available.
// Rejected: The task failed, and an error is provided.

{/* === callabcks into prmise ====== */ }

function loadData(callback) {
    setTimeout(() => 
        callback("Data loaded"), 1000);
}
function promisifiedLoadData() {
    return new Promise((resolve) => {
        loadData((result) => 
            resolve(result));
    });
}
promisifiedLoadData().then((data) => 
    console.log(data));


{/* ============================================= */ }
 
{/*===combine prmises with paraller excuation=====*/ }

Promise.all([
    new Promise((resolve) =>
        setTimeout(() =>
            resolve("Task A done"), 1000)),
    new Promise((resolve) =>
        setTimeout(() =>
            resolve("Task B done"), 500))
])
    .then(([resultA, resultB]) => {
        console.log(resultA, resultB);
        return new Promise((resolve) =>
            setTimeout(() => resolve("Final Task done"), 700));
    })
    .then((finalResult) =>
        console.log(finalResult));

     {/* ============================================= */}


{/* ===== Handling Multiple Failures with Promise.allSettled() Method ============= */ }

Promise.allSettled([
    Promise.resolve("Task 1 done"),
    Promise.reject("Task 2 failed"),
    Promise.resolve("Task 3 done")
])
    .then((results) => console.log(results));

     {/* ============================================= */}

{/* == Timeout Handling with Promise.race() Method ==*/ }

let fetchData = new Promise((resolve) =>
    setTimeout(() =>
        resolve("Data loaded"), 3000));
let timeout = new Promise((_, reject) =>
    setTimeout(() =>
        reject("Timeout!"), 2000));
Promise.race([fetchData, timeout])
    .then((result) =>
        console.log(result))
    .catch((error) =>
        console.error(error));

     {/* ============================================= */}

{/* == Sequential Execution with Array.prototype.reduce()== */ }

let tasks = [1, 2, 3];
tasks.reduce((prevPromise, current) => {
    return prevPromise.then(() => {
        return new Promise((resolve) => {
            console.log(`Processing task ${current}`);
            setTimeout(resolve, 500); // Simulate async task
        });
    });
}, Promise.resolve());

 {/* ============================================= */}

{/* ==  Chaining with Promise.prototype.then() Method == */ }

Promise.resolve(5)
    .then((value) => value * 2) // Multiplies by 2
    .then((value) => value + 3) // Adds 3
    .then((finalValue) => console.log(finalValue)); // Logs: 13

     {/* ============================================= */}

{/* == Promise.finally() Method runs a cleanup or final code block regardless of the promise’s result (fulfilled or rejected). == */ }

Promise.resolve("Task completed")
    .then((result) => console.log(result))
    .catch((error) => console.error(error))
    .finally(() => console.log("Cleanup completed"));

 {/* ============================================= */}

{/* Promise.reject() Method returns a promise that immediately rejects with a given reason.  */ }

Promise.reject("Immediate failure")
    .catch((error) => console.error(error));

     {/* ============================================= */}

{/* = Promise.resolve() Method returns a promise that resolves with the given value. = */ }

Promise.resolve("Immediate success")
    .then((value) => console.log(value));

     {/* ============================================= */}

{/* = Promise.any() Method resolves with the first fulfilled promise. If all are rejected, it rejects with an AggregateError. = */ }

Promise.any([
    Promise.reject("Task 1 failed"),
    Promise.resolve("Task 2 completed"),
    Promise.resolve("Task 3 completed")
])
    .then((result) => console.log(result))
    .catch((error) => console.error(error));

     {/* ============================================= */}


{/* = Promise.race() Method resolves or rejects as soon as the first promise settles. = */ }

Promise.race([
    new Promise((resolve) =>
        setTimeout(() =>
            resolve("Task 1 finished"), 1000)),
    new Promise((resolve) =>
        setTimeout(() =>
            resolve("Task 2 finished"), 500)),
]).then((result) =>
    console.log(result));

    {/* ============================================= */}

{/* = Waits for all promises to settle (fulfilled or rejected) 
    Method and returns an array of their outcomes. = */ }

Promise.allSettled([
    Promise.resolve("Task 1 completed"),
    Promise.reject("Task 2 failed"),
    Promise.resolve("Task 3 completed")
])
    .then((results) => console.log(results));

     {/* ============================================= */}

{/* = Promise.all() Method
Waits for all promises to resolve and returns their results as an array.
 If any promise is rejected, it immediately rejects. = */}

Promise.all([
    Promise.resolve("Task 1 completed"),
    Promise.resolve("Task 2 completed"),
    Promise.reject("Task 3 failed")
])
    .then((results) => console.log(results))
    .catch((error) => console.error(error));

     {/* ============================================= */}


{/*  example */ }
    

let checkEven = new Promise((resolve, reject) => {
    let number = 4;
    if (number % 2 === 0) resolve("The number is even!");
    else reject("The number is odd!");
});
checkEven
    .then((message) => console.log(message)) // On success
    .catch((error) => console.error(error)); // On failure