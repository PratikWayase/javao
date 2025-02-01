
{/* PROPERTIES */}

// improved version if vat + ES6
// has block scope : cant accesible outside code block
// It can be updated but cannot be re-declared in the same scope.
// It can be declared without initialization.
//  cannot be accessed without initialization otherwise it will give ‘referenceError’.
// These variables are hoisted but stay in the temporal dead zone untill the initialization.
// Use let when you know a variable’s value might change later in your code.


let a = 45
function f() {
    let b = 7 
    console.log(b)
    console.log(a)
}
f() // output : 7,45

// outer varible excute after block scope

// ==================== //

{/* assgin same varible in blcok scope */ }

let v = 56
function f() {
    if (true) {
        let n = 57
        console.log(n)
    }
    console.log(n)
}
f()

console.log(v)
// output : 57, ReferenceError: n is not defined

// ==================== //}

{/* redelare varible with same name */ }

let x = 45
// It is not allowed
let x = 10
// It is allowed
x = 10 
//Uncaught SyntaxError: Identifier 'a' has already been declared

// ==================== //}

{/* hoisting with let */ }

console.log(f)
let f = 45

// output : Uncaught ReferenceError: Cannot access 'f' before initialization