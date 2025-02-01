
{/* PROPERTIES */ }

// The scope of a const variable is block scope.
// It can neither be updated or re-declared in any scope.
//It cannot be declared without initialization.
// It cannot be accessed without initialization
// These variables are hoisted but stays in the temporal dead zone until the initialization.

const b = 10;
function f() {
    b = 9
    console.log(b)
}
f();

// output : TypeError: Assignment to constant variable.

const a = {
    prop1: 10,
    prop2: 9
}

// It is allowed
a.prop1 = 3

// It is not allowed
a = {
    b: 10,
    prop2: 9
}

// Uncaught SyntaxError: Unexpected identifier