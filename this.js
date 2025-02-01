
// this keyword

// used to access properties and methods of an object, allowing for more flexible and reusable code.


{/* == arrow funciton bind */ }

const person = {
    name: "ram",
    age: 22,
    greet : () =>{
        return `Hello , you are ${this.age} years old`
    }
}
console.log(person.greet());

{/* implict bind */ }

const person2 = {
    name: "Ram",
    age: 22,
    greet: function () {
        return `Hello ${this.name}, you are ${this.age} years old`
    }
}
console.log(person2.greet());

// // When used within a method of an object, this points to that object.
// When used by itself, this points to the global object.
// Within a function, this typically points to the global object.
// In a function under strict mode, this becomes undefined.
// During an event, this points to the element that triggered the event.
// Methods such as call(), apply(), and bind() can reassign this to any desired object.
// The precedence order of this keyword
// JavaScript bind() Method
// JavaScript call() and apply() Method
// JavaScript Object Method
// JavaScript Global Scope