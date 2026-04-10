/*
super:
keyword is used in classes to call constructor or access the attributes and methods of parent class (superclass)
this = this object
super = the parent
*/

class Animal{
    constructor(name, age){
        this.name = name
        this.age = age
    }
}

class Cat extends Animal{
    constructor(name, age, color){
        super(name, age)
        this.color = color
    }
}

cat_1 = new Cat("Tom", 12, "White")
console.log(cat_1)