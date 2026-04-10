/* 
static: 
keyword defines properties or methods that belong to a class itself rather than the objects created from that class
class owns anything static, not the objects
*/

class User{
    static user_count = 0 // static attribute

    constructor(username) {
        this.username = username
        User.user_count++
    }

    static get_user_count() { return User.user_count } // static method
}

const user_1 = new User("john_doe")

console.log(User.user_count) // accessing static attribute
console.log(User.get_user_count()) // accessing static method