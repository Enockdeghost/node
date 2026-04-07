// declaration --> means creating a variable and assigning it a value. In JavaScript, you can declare variables using the var, let, or const keywords.

// var is the oldest way to declare a variable and has function scope. It can be re-declared and updated.
// let is a newer way to declare a variable and has block scope. It can be updated but not re-declared.
// const is used to declare a constant variable that cannot be updated or re-declared. It also has block scope.
// Example of variable declaration
var name = "John"; // using var
let age = 30; // using let
const PI = 3.14; // using const

// var can be re-declared and updated
var name = "Jane"; // re-declaring name
name = "Doe"; // updating name

// let can be updated but not re-declared
age = 31; // updating age
// let age = 32; // this will throw an error because age cannot be re-declared

// const cannot be updated or re-declared
// PI = 3.14159; // this will throw an error because PI cannot be updated
// const PI = 3.14159; // this will throw an error because PI cannot be re-declared

// In summary, use var for older code or when you need function scope, use let for block scope and when you need to update the variable, and use const for variables that should not be updated or re-declared.

//constants are useful for values that should not change throughout the program, such as mathematical constants or configuration settings. Using const can help prevent accidental changes to important values and can make your code more readable and maintainable.


//const variable is a variable that cannot be reassigned after it has been declared. It is used to declare constants, which are values that should not change throughout the program. When you declare a variable with const, you must assign it a value at the time of declaration, and that value cannot be changed later in the code.

// Example of const variable
const P2 = 3.14; // declaring a constant variable
console.log(P2); // output: 3.14

// Attempting to reassign a const variable will result in an error
// P2 = 3.14159; // this will throw an error because P2 cannot be reassigned

// However, if the const variable is an object or an array, you can still modify the properties or elements of that object or array, but you cannot reassign the variable itself to a new object or array.


//let variable is a variable that can be reassigned after it has been declared. It is used to declare variables that may change throughout the program. When you declare a variable with let, you can assign it a value at the time of declaration or later in the code, and that value can be changed as needed.

// Example of let variable
let name = "John"; // declaring a variable with let
console.log(name); // output: John

// Reassigning a let variable
name = "Jane"; // reassigning the variable
console.log(name); // output: Jane