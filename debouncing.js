 

// Debouncing is a technique used to improve the performance of web applications by controlling the frequency of resource-intensive tasks. It ensures that a function is executed only after a specified delay, preventing excessive triggers that can degrade performance.

// Example Use Case:
// When a user rapidly clicks a button, it may lead to performance issues. Debouncing limits how frequently the function executes, preventing unnecessary operations.


// Key Concept:
// JavaScript is single-threaded, meaning it can handle only one operation at a time. Continuous scrolling or typing can overload the browser, causing sluggish performance.

// How It Works:
// The debounce function takes:
// The function to be executed (fetchSearchResults).
// A delay (300ms).
// Every time the user types, the timer resets.
// Only when the user stops typing for 300ms, the API call is made.
// This prevents unnecessary API requests, optimizing performance and reducing server load.

// Where Else is Debouncing Used?
// Form validation (e.g., checking username availability).
// Scroll event handling (e.g., infinite scrolling optimizations).
// Resize event handling (e.g., resizing charts or elements).
// Button click prevention (e.g., preventing accidental double clicks on "Submit").



// HTML

// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Debounce Search Example</title>
// </head>
// <body>
//     <input type="text" id="searchBox" placeholder="Search products..." />
    
//     <script src="script.js"></script>
// </body>
// </html>


function debounce(func, delay) {
    let debounceTimer;
    return function (...args) {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => func.apply(this, args), delay);
    };
}

// Example: Search API Call
function fetchSearchResults(query) {
    console.log(`Fetching results for: ${query}`);
    // Simulate an API call
}

// Attach debounce to the input field
document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("searchBox");
    if (searchInput) {
        searchInput.addEventListener("input", debounce((event) => {
            fetchSearchResults(event.target.value);
        }, 300));
    } else {
        console.error("Search box element not found!");
    }
});


