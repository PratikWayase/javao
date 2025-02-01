

// Throttling is a technique used to limit the number of times a function can be executed in a
//  given time frame. useful when dealing with performance - heavy operations,
// such as resizing the window or scrolling events, where repeated triggers can lead to performance issues


// HOw it works

// A function is triggered multiple times due to an event (e.g., scroll, resize).
// Throttling ensures that the function executes only once within the defined interval.
// Any additional triggers during the interval are ignored until the next cycle starts.
// Once the interval is over, the function can execute again if triggered.

// 2 methods used to implement throottling

// 1) settimeout ("execution is delayed and only runs after the specified time interval has passed.")
// 2) Using Date.now() ( " track of the last execution time and determine when the function should be called again.")

// throttling

// - Ensures function runs at most once per interval
 
//     - use cases: Ensures function runs at most once per interval

//     - freqency of excution : Runs at regular intervals


// debouncing

// - Delays function execution until event stops
//     -  use cases:  Search input, auto-save, form validation
//     - freqency of excution :  Runs only once after a delay


// Scenario: Handling Scroll Events Efficiently
// In an e-commerce website, when a user scrolls down, the "Back to Top" button should appear. However, firing the scroll event continuously can overload the browser. Throttling limits how often the scroll handler runs, improving performance.


// with setTimeout 

// function throttle(func, delay) {
//     let throttled = false;
    
//     return function (...args) {
//         if (!throttled) {
//             func.apply(this, args);
//             throttled = true;
//             setTimeout(() => {
//                 throttled = false;
//             }, delay);
//         }
//     };
// }

// // Example: Show "Back to Top" Button on Scroll
// function showBackToTop() {
//     console.log("Back to Top button should be shown.");
// }

// // Attach throttling to scroll event
// window.addEventListener("scroll", throttle(showBackToTop, 2000));

// How It Works:
// The function executes immediately on the first event.
// It then disables further execution for 2 seconds (2000ms).
// Once the timeout completes, the function becomes available again.
// This prevents unnecessary executions while scrolling continuously.



// 2) with Date.now()

// function throttle(func, limit) {
//     let lastCall = 0;
    
//     return function (...args) {
//         const now = Date.now();
        
//         if (now - lastCall >= limit) {
//             func.apply(this, args);
//             lastCall = now;
//         }
//     };
// }

// // Example: Logging Scroll Position Efficiently
// function logScrollPosition() {
//     console.log("User scrolled at:", window.scrollY);
// }

// // Attach throttling to scroll event
// window.addEventListener("scroll", throttle(logScrollPosition, 1000));

// How It Works:
// Date.now() checks the current timestamp.
// The function executes only if at least 1 second (1000ms) has passed since the last call.
// This method ensures more precise timing than setTimeout.

// Where Throttling is Used?
// ✅ Handling scroll events (e.g., showing/hiding elements, lazy loading)
// ✅ Handling window resize (e.g., recalculating layout)
// ✅ Button click handling (e.g., preventing multiple form submissions)
// ✅ Mouse movement tracking (e.g., analytics, drawing applications)