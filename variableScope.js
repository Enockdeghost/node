// variable scope in JavaScript
// In JavaScript, variable scope refers to the accessibility of variables in different parts of the code. There are three types of variable scope: global scope, function scope, and block scope.

// Global scope: Variables declared outside of any function or block have global scope. They can be accessed from anywhere in the code.
var globalVariable = "I am a global variable";

function exampleFunction() {
  console.log(globalVariable); // Output: I am a global variable
}

// Function scope: Variables declared inside a function have function scope. They can only be accessed within that function.
function anotherFunction() {
  var functionVariable = "I am a function variable";
  console.log(functionVariable); // Output: I am a function variable
}

// console.log(functionVariable); // This will throw an error because functionVariable is not accessible outside the function

// Block scope: Variables declared inside a block (e.g., inside an if statement or a loop) have block scope. They can only be accessed within that block.
if (true) {
  let blockVariable = "I am a block variable";
  console.log(blockVariable); }// Output: I am a block variable