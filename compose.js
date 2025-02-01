
// // compose

// Create a single function that combines multiple functions into one.
// This function should take a series of functions as input and return a new function.
// When executed, it should run the original functions from right to left (i.e., compose them).
// The output of each function should be passed as the input to the next function on the left.
// This technique is commonly used in middleware processing (e.g., Redux).

{/* ======================= */}

// Scenario:
// Suppose we have three functions that process text:

// trimText → Removes leading & trailing spaces.
// capitalizeText → Capitalizes the first letter.
// addExclamation → Adds an exclamation mark at the end.
// We use function composition to combine these into a single function.

// Function Composition Utility (Right to Left)
const compose = (...functions) => (input) =>
    functions.reduceRight((acc, fn) => fn(acc), input);

// Individual Functions
const trimText = (text) => text.trim();
const capitalizeText = (text) => text.charAt(0).toUpperCase() + text.slice(1);
const addExclamation = (text) => text + "!";

// Compose functions into a single function
const processText = compose(addExclamation, capitalizeText, trimText);

// Usage Example
const inputText = "  hello world  ";
const result = processText(inputText);
console.log(result);  // Output: "Hello world!"
