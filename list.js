// array in js
let fruits = ["apple", "banana", "orange"];
console.log(fruits); // Output: ["apple", "banana", "orange"]

// accessing array elements
console.log(fruits[0]); // Output: "apple"
console.log(fruits[1]); // Output: "banana"
console.log(fruits[2]); // Output: "orange"

// adding elements to an array
fruits.push("grape");
console.log(fruits); // Output: ["apple", "banana", "orange", "grape"]

// removing the last element from an array
fruits.pop();
console.log(fruits); // Output: ["apple", "banana", "orange"]

// finding the length of an array
console.log(fruits.length); // Output: 3

// iterating over an array
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
// Output:
// apple
// banana
// orange

// using forEach to iterate over an array
fruits.forEach(function(fruit) {
    console.log(fruit);
});
// Output:
// apple
// banana
// orange

// using map to create a new array
let upperCaseFruits = fruits.map(function(fruit) {
    return fruit.toUpperCase();
});
console.log(upperCaseFruits); // Output: ["APPLE", "BANANA", "ORANGE"]

// using filter to create a new array with elements that meet a condition
let longFruits = fruits.filter(function(fruit) {
    return fruit.length > 5;
});
console.log(longFruits); // Output: ["banana", "orange"]

// using find to get the first element that meets a condition
let foundFruit = fruits.find(function(fruit) {
    return fruit.startsWith("b");
});
console.log(foundFruit); // Output: "banana"

// using includes to check if an array contains a specific element
let hasApple = fruits.includes("apple");
console.log(hasApple); // Output: true

let hasGrape = fruits.includes("grape");
console.log(hasGrape); // Output: false


//methods array
let numbers = [1, 2, 3, 4, 5];

// using reduce to sum all elements in an array
let sum = numbers.reduce(function(total, num) {
    return total + num;
}, 0);
console.log(sum); // Output: 15

// using sort to sort an array
let sortedNumbers = numbers.sort(function(a, b) {
    return b - a; // Sort in descending order
});
console.log(sortedNumbers); // Output: [5, 4, 3, 2, 1]

// using reverse to reverse the order of an array
let reversedNumbers = numbers.reverse();
console.log(reversedNumbers); // Output: [1, 2, 3, 4, 5]    