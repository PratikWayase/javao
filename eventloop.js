
//What does it mean when we say JavaScript is single-threaded?

//it means that JavaScript executes code one line at a time, in a sequence.
// The main thread, where all JavaScript code runs, can only do one task at a time,
//  and there is no way to run multiple pieces of code in parallel on this thread.
// but JavaScript’s design is well-suited for handling many tasks efficiently with event loop.


// ============================ //

{/* how it works */ }

// 1) call stack
// F track of the currently executing function

// 2 ) Callback Queue:
// When these operations are complete, corresponding functions (callbacks) are placed in the callback queue.

// 3) Event Loop :
// continuously checks the call stack and the callback queue. If the call stack is empty, it takes the first function
//  from the callback queue and pushes it onto the call stack for execution.

// 4) callback Execution:
//When an asynchronous operation is complete, its callback is placed in the callback queue.

// ====================================== //

{/* Memory allocation in JavaScript */ }

//1 ) Heap memory
// stores objects and data that are dynamically allocated.

// 2) Stack memory
// used to keep track of function calls.
 //It works in a last -in, first - out(LIFO) manner, 
 // meaning the last function that gets pushed onto the stack is the first one to be popped off when it’s done.