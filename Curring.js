

// **Currying** is a technique where a function with multiple arguments is transformed into a series of functions, each taking a single argument.

// Instead of accepting all arguments at once, a curried function takes the first argument and returns a new function that takes the next argument. This process continues until all arguments are provided, at which point the final function returns the result.

// ### Example:


// // Regular function with multiple arguments
// function simpleFunction(param1, param2, param3) {
//     return param1 + param2 + param3;
// }

// // Curried version of the function
// function curriedFunction(param1) {
//     return function (param2) {
//         return function (param3) {
//             return param1 + param2 + param3;
//         };
//     };
// }

// // Usage
// console.log(curriedFunction(1)(2)(3)); // Output: 6


function createLogger(logLevel) {
    return function (moduleName) {
        return function (message) {
            console.log(`[${logLevel.toUpperCase()}] [${moduleName}]: ${message}`);
        };
    };
}

// Creating specific loggers
const infoLogger = createLogger("info")("AuthModule");
const errorLogger = createLogger("error")("PaymentService");

// Using the loggers
infoLogger("User logged in successfully.");
errorLogger("Payment gateway timeout error.");

/*
Output:
[INFO] [AuthModule]: User logged in successfully.
[ERROR] [PaymentService]: Payment gateway timeout error.
*/


// How It Works:
// createLogger(logLevel) returns a function that takes moduleName.
// The returned function takes message and logs the formatted output.
// Since each function remembers its arguments (logLevel, moduleName) due to closures, it makes logging more structured and reusable.