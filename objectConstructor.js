
//create multiple objects with the same properties and methods.
// Instead of defining each object manually, we use a constructor function to generate objects dynamically.

{/* ========== bae ========== */ }

function ConstructorName(parameters) {
    this.property1 = value1;
    this.property2 = value2;
    // Methods can also be added
}

{/* ======= person constrcut */ }

// Object Constructor Function
function Person(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;

    // Method inside constructor
    this.getDetails = function () {
        return `${this.name} is ${this.age} years old and works as a ${this.job}.`;
    };
}

// Creating objects using the constructor
let person1 = new Person("Alice", 30, "Engineer");
let person2 = new Person("Bob", 25, "Designer");

// Using the method
console.log(person1.getDetails());  // Output: "Alice is 30 years old and works as an Engineer."
console.log(person2.getDetails());  // Output: "Bob is 25 years old and works as a Designer."

{/* ===== prototpye ===== */ }

// use prototype to share methods among all instances

// Object Constructor Function
function Car(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
}

// Adding a method to the prototype (shared by all instances)
Car.prototype.getCarInfo = function () {
    return `${this.brand} ${this.model} (${this.year})`;
};

// Creating objects
let car1 = new Car("Toyota", "Corolla", 2022);
let car2 = new Car("Honda", "Civic", 2023);

// Using the prototype method
console.log(car1.getCarInfo());  // Output: "Toyota Corolla (2022)"
console.log(car2.getCarInfo());  // Output: "Honda Civic (2023)"
