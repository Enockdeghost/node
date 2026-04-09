// Converting strings to numbers
let num1 = parseInt("123"); // 123
let num2 = parseFloat("45.67"); // 45.67    


// Converting numbers to strings
let str1 = String(123); // "123"
let str2 = (45.67).toString(); // "45.67"

// Converting strings to booleans
let bool1 = Boolean("true"); // true
let bool2 = Boolean(""); // false

// Converting booleans to strings
let str3 = String(true); // "true"
let str4 = String(false); // "false"

// Converting numbers to booleans
let bool3 = Boolean(0); // false
let bool4 = Boolean(1); // true

// Converting booleans to numbers
let num3 = Number(true); // 1
let num4 = Number(false); // 0

// Converting strings to dates
let date1 = new Date("2024-01-01"); // January 1, 2024
let date2 = new Date("2024-06-30"); // June 30, 2024

// Converting dates to strings
let str5 = date1.toDateString(); // "Mon Jan 01 2024"
let str6 = date2.toISOString(); // "2024-06-30T00:00:00.000Z"

// Converting strings to arrays
let arr1 = "Hello, World!".split(", "); // ["Hello", "World!"]

// Converting arrays to strings
let str7 = arr1.join(", "); // "Hello, World!"

// Converting strings to objects
let obj1 = JSON.parse('{"name": "John", "age": 30}'); // { name: "John", age: 30 }

// Converting objects to strings
let str8 = JSON.stringify(obj1); // '{"name":"John","age":30}'

// In summary, JavaScript provides various methods and functions to convert between different data types, such as strings, numbers, booleans, dates, arrays, and objects. Understanding how to perform these conversions is essential for working with data in JavaScript effectively.