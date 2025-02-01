
// automatically adds a prototype property to functions upon creation.
// This prototype object allows attaching methods and properties, facilitating inheritance
// for all objects created from the function.

// Function constructor
function Person(name, job, title, birthYear) {
    this.name = name;
    this.job = job;
    this.title = title;
    this.birthYear = birthYear; // Store birth year
}

// Add calculateAge method to prototype property
Person.prototype.calculateAge = function () {
    let currentYear = new Date().getFullYear();
    console.log("Current age is:", currentYear - this.birthYear);
};

console.log(Person.prototype);

// Create person1 object
let person1 = new Person("Jenni", "Clerk", "Himani", 1990);
console.log(person1);

person1.calculateAge(); // Now works correctly










// prototype inheritance

// dog inherit from animal

function Animal (name){
    this.name = name
}
Animal.prototype.speak = function () {
    console.log(`${this.name} make a noise`)
}

function Dog(name) {
    Animal.call(this,name)
}

Dog.prototype = Object.create(Animal.prototype)
Dog.prototype.constructor = Dog;

Dog.prototype.speak = function () {
    console.log(`${this.name} bbarks`)
}

const dog = new Dog("jooly")
dog.speak()