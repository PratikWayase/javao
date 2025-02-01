
// var let const = to delcare variable
// These variables are hoisted.
// variable is functional or global scope.
// It can be updated and re-declared in the same scope.
// It can be accessed without initialization as its default value is “undefined”.
// var can be tricky because its scope is either global or within a function, which can lead to bugs. 

{/* ======== var ========= */ }

// global or function socpe
// that means create a varaible outside function  we can use it anywhere
// same with creae varible inside a function

{/* declare outside  function */ }

var a = 10 
function f() {
    var  b = 20
    console.log(a,b)
}

f() 
console.log(a)

{/* declare inside a function */ }

function f() {
    var a = 10;
    console.log(a)
}

f()
// A cannot be accessible
// outside of function
console.log(a) // output : ReferenceError: a is not defined

{/* redelcre same name  &scope */ }

var a = 23
var a = 32
var a = 8
console.log(a) // output : 8

{/* hoisting with var */ }

console.log(a)
var a = 10; // put : undefined