// Closures allow functions to retain access to variables from their outer scope even after the outer function has finished executing.

// Global variables become private within functions, preventing them from being modified externally.
// Encapsulation: Private data is protected, and public methods are provided to interact with it.
// Retains variable references even after execution.
// Commonly used when a function returns another function


{/* =================================== */}


// simple closure

// function outer() {
//     let outerVar = "I'm happy"; // Private variable

//     function inner() {
//         console.log(outerVar); // Inner function retains access
//     }

//     return inner; // Returning the inner function
// }

// const closure = outer(); // outer() executes and returns inner function
// closure(); // Output: "I'm happy"



{/* =================================== */}


// Encapsulation Using Closures(Private Variables with Public Methods)


// function createCounter() {
//     let count = 0; // Private variable

//     return {
//         increment: function () {
//             count++;
//             console.log(`Count: ${count}`);
//         },
//         decrement: function () {
//             count--;
//             console.log(`Count: ${count}`);
//         },
//         getCount: function () {
//             return count; // Only way to access count
//         }
//     };
// }

// const counter = createCounter();
// counter.increment(); // Count: 1
// counter.increment(); // Count: 2
// console.log(counter.getCount()); // 2
// counter.decrement(); // Count: 1
// console.log(counter.count); // undefined (private variable)

// The createCounter function has a private count variable.
// It returns an object with methods (increment, decrement, getCount) that can access count but do not expose it directly.
// The count variable is not accessible outside (console.log(counter.count) returns undefined).


{/* =================================== */}


// lexical scope : function scope determined where function is defined not wher eexcuted
// - it allow inner functions to access variable rom other functions

// function Outer() {
//     const ovet = "yo yo"
//     function indi() {
//         console.log(ovet)
//     }
//     return indi
// }

// const newClosure = Outer()
// newClosure ()

{/* =================================== */}

// // Closure and setTimeout
// function createTimers() {
//     for (let i = 1; i <= 3; i++) {
//         setTimeout(function () {
//             console.log(`Timer ${i}`);
//         }, i * 1000);
//     }
// }
// createTimers();


{/* =================================== */}

// Closures with this keyword

function Person(name) {
    this.name = name;

    this.sayName = function () {
        console.log(this.name)
    }

    setTimeout(function () {
        console.log(this.name)
    }.bind(this),1000)
}
const G = new Person("dfgb")
G.sayName();