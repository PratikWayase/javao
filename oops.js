
// create claas with inheritance

class Shape {
    constructor(name) {
        this.name = name
    }
    getName() {
        return this.name
    }
}

class Circle extends Shape{
    constructor(radius) {
        super('Circle');
        this.radius = radius;
    }

    area() {
        return Math.PI * this.radius **2
    }
}

const Circle = new Circle(4)
console.log(Circle.getName())
console.log(Circle.area())