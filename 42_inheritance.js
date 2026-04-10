/*
inheritance:
allows a new class to inherit properties and methods
from a existing class (parent->child)
helps with code reusability
*/

class Animal{
    alive = true

    eat(){ console.log(`This ${this.name} is eating`) }
}

class Cat extends Animal{ name = "cat" }

cat_1 = new Cat
console.log(cat_1.name)
cat_1.eat()