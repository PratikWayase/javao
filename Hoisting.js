
// Initializations are not hoisted, they are only declarations.
// ‘var’ variables are hoisted with undefined,
// let’ and ‘const’ are hoisted but remain in the Temporal Dead Zone until initialized.
//  applies to variable and function declarations.

// ==================================== //

{/* temporal dead zone */ }

// period between the entering of a scope (such as a function or block) and the actual
// initialization of a variable declared with let or const.
//  During this time, any reference to the variable before its initialization will throw a ReferenceError.

{/* how tdz works */ }


// Variables declared with let and const are hoisted to the top of their scope,
// b ut they are not initialized until their declaration line is reached.
//Any attempt to access these variables before their declaration will result in an error.

// Calling the function before its declaration (Hoisting)
checkUserLogin("JohnDoe");

// Function declaration gets hoisted
function checkUserLogin(username) {
    if (!username) {
        console.log("User is not logged in.");
    } else {
        console.log(`Welcome back, ${username}!`);
    }
}

// ================================ //

{/* with var */ }

console.log(authToken); // Output: undefined (due to hoisting)

var authToken = "abc123"; // `var` is hoisted but not initialized

console.log(authToken); // Output: abc123



// ================================= //

{/* wirh const */ }

console.log(totalStock); // ❌ ReferenceError: Cannot access 'totalStock' before initialization

const totalStock = 100;
console.log(totalStock);

// ================================ //
