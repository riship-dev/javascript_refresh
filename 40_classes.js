/*
classes:
(ES6 feature) provide a more structured and cleaner way to work with objects compared to traditional constructor functions
ex. static keyword, encapsulation, inheritance
*/

class Product{
    constructor(name, price) {
        this.name = name
        this.price = price
    }
    display(){
        console.log(this.name)
        console.log(this.price)
    }
}

const product_1 = new Product("Shirt", 900)

console.log(product_1.name)
product_1.display()