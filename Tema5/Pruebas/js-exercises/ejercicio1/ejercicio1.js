class Shape {
    constructor(name, sides, sideLength) {
        this.name = name;
        this.sides = sides;
        this.sideLength = sideLength;
    }

    calcPerimeter() {
        const perimeter = this.sides * this.sideLength;
        console.log(`Perimeter of ${this.name}: ${perimeter} cm`);
    }

    toString() {
        return `Shape: ${this.name}, Sides: ${this.sides}, Side Length: ${this.sideLength} cm`;
    }
}

class Square extends Shape {
    constructor(sideLength) {
        super('Square', 4, sideLength);
    }

    calcArea() {
        return this.sideLength ** 2;
    }
}

// Create an instance of Shape
const squareShape = new Shape('Square', 4, 5);
squareShape.calcPerimeter();
console.log(squareShape.toString());

// Create an instance of Square
const square = new Square(5);
square.calcPerimeter();
console.log(`Area of ${square.name}: ${square.calcArea()} cm²`);