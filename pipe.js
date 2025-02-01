
// Composition (compose) runs functions from right to left.
//     Piping(pipe) runs functions from left to right.

//     Scenario:
// We have three text-processing functions, applied in a left-to-right order:

// trimText → Removes spaces.
// toLowerCaseText → Converts text to lowercase.
// replaceSpaces → Replaces spaces with hyphens (-).


// Function Piping Utility (Left to Right)
const pipe = (...functions) => (input) =>
    functions.reduce((acc, fn) => fn(acc), input);

// Individual Functions
const trimText = (text) => text.trim();
const toLowerCaseText = (text) => text.toLowerCase();
const replaceSpaces = (text) => text.replace(/\s+/g, "-");

// Pipe functions into a single function
const processText = pipe(trimText, toLowerCaseText, replaceSpaces);

// Usage Example
const inputText = "  Hello World from JavaScript  ";
const result = processText(inputText);
console.log(result);  // Output: "hello-world-from-javascript"
