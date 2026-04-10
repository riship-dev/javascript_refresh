const print = console.log
const fruits = [
    {name: "apple", color: "red", calories: 95},
    {name: "orange", color: "orange", calories: 45},
    {name: "banana", color: "yellow", calories: 105},
    {name: "coconut", color: "white", calories: 159},
    {name: "pineapple", color: "yellow", calories: 37}
];

print(fruits)

// fruits.splice(1, 2)
// print(fruits)

// forEach()
fruits.forEach(fruit => print(fruit.name))

// .map()
const fruit_names = fruits.map(fruit => fruit.name)
print(fruit_names)

// .filter()
const yellow_fruits = fruits.filter(fruit => fruit.color === "yellow")
print(yellow_fruits)

// .reduce()
const max_fruit = fruits.reduce((max, fruit) => fruit.calories > max.calories ? fruit : max);
print(max_fruit)