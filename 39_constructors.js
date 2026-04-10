// constructor = special method for defining the properties and methods of objects

function Car(make, model, year, color) {
    this.make = make
    this.model = model
    this.year = year
    this.color = color
    this.move = function(){ console.log("Moving") }
}

const car_1 = new Car("Ford", "Mustang", 2013, "Red")
console.log(car_1)
console.log(car_1.make)
car_1.move()