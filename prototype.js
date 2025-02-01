
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