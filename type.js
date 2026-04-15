// data type in javascript is a type of value that can be stored and manipulated in a program.
// there are 7 data types in javascript:
// 1. string
// 2. number
// 3. boolean
// 4. null
// 5. undefined
// 6. symbol
// 7. object

// string data type is a sequence of characters enclosed in single or double quotes.
let name = "John Doe";      

// number data type is a numeric value that can be an integer or a floating-point number.
let age = 30;   

// boolean data type is a logical value that can be either true or false.
let isStudent = true;

// null data type is a special value that represents the absence of any value.
let address = null;

// undefined data type is a special value that represents the absence of a value or an uninitialized variable.
let phoneNumber;

// symbol data type is a unique and immutable value that can be used as a key for object properties.
let id = Symbol('id');

// object data type is a collection of properties and methods that can be used to store and manipulate data.
let person = {
  name: "John Doe",
  age: 30,
  isStudent: true
};   


//object manipulation
console.log(person.name); // John Doe
console.log(person.age); // 30
console.log(person.isStudent); // true  

//nested object
let student = {
  name: "Jane Doe",
  age: 25,
  isStudent: true,
  address: {
    street: "123 Main St",
    city: "Anytown",
    state: "CA"
  }
};

console.log(student.address.street); // 123 Main St
console.log(student.address.city); // Anytown
console.log(student.address.state); // CA