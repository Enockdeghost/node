//conversion & coersion
//conversion is when we explicitly convert from one type to another
//coersion is when js implicitly converts from one type to another

//explicit conversion
let num = 5;
let str = String(num); //converts number to string
console.log(str); // "5"
console.log(typeof str); // "string"

//implicit conversion (coersion)
let result = 'The number is ' + num; //js converts num to string
console.log(result); // "The number is 5"
console.log(typeof result); // "string"

let sum = '5' - 2; //js converts '5' to number
console.log(sum); // 3
console.log(typeof sum); // "number"

let boolValue = Boolean(0); //converts 0 to false
console.log(boolValue); // false
console.log(typeof boolValue); // "boolean"

let numValue = Number('123'); //converts string to number
console.log(numValue); // 123
console.log(typeof numValue); // "number"

let invalidNum = Number('abc'); //converts non-numeric string to NaN
console.log(invalidNum); // NaN
console.log(typeof invalidNum); // "number" (NaN is of type number)

let boolFromString = Boolean('hello'); //non-empty string converts to true
console.log(boolFromString); // true
console.log(typeof boolFromString); // "boolean"

let emptyStringBool = Boolean(''); //empty string converts to false
console.log(emptyStringBool); // false
console.log(typeof emptyStringBool); // "boolean"

let zeroBool = Boolean(0); //0 converts to false
console.log(zeroBool); // false
console.log(typeof zeroBool); // "boolean"

let nonZeroBool = Boolean(42); //non-zero number converts to true
console.log(nonZeroBool); // true
console.log(typeof nonZeroBool); // "boolean"

let nullBool = Boolean(null); //null converts to false
console.log(nullBool); // false
console.log(typeof nullBool); // "boolean"

let undefinedBool = Boolean(undefined); //undefined converts to false
console.log(undefinedBool); // false
console.log(typeof undefinedBool); // "boolean"

let arrayBool = Boolean([]); //empty array converts to true
console.log(arrayBool); // true
console.log(typeof arrayBool); // "boolean"

let objectBool = Boolean({}); //empty object converts to true
console.log(objectBool); // true
console.log(typeof objectBool); // "boolean"

let zeroStringBool = Boolean('0'); //non-empty string converts to true
console.log(zeroStringBool); // true
console.log(typeof zeroStringBool); // "boolean"

let falseStringBool = Boolean('false'); //non-empty string converts to true
console.log(falseStringBool); // true
console.log(typeof falseStringBool); // "boolean"

let trueStringBool = Boolean('true');   