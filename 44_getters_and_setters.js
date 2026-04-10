/*
getter: special method that makes a property readable
setter: special method that makes a property writable

validate and modify a value when reading/writing property
*/

class Rectangle{
    constructor(width, height){
        this.width = width
        this.height = height
    }
    
    set width(new_width){ this._width = new_width } // _ denotes private, let devs know know to touch it
    set height(new_height){ this._height = new_height }

    get width() {return this._width}
    get height() {return this._height}
}

rectangle_1 = new Rectangle(4, 3)
console.log(rectangle_1.width)

rectangle_1.width = 1
rectangle_1.height = 2
console.log(rectangle_1.width)
console.log(rectangle_1.height)