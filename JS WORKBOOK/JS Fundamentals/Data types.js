// Number
// integer or floating-point, integers are limited by ±(2^53-1).
let n = 123;
n = 12.345;

// Infinity represents the mathematical Infinity ∞. It is a special value that’s greater than any number.
// NaN represents a computational error. It is a result of an incorrect or an undefined mathematical operation, for instance:

// BigInt type was recently added to the language to represent integers of arbitrary length.
// A BigInt value is created by appending n to the end of an integer:

const bigInt = 1234567890123456789012345678901234567890n;




// String

// A string in JavaScript must be surrounded by quotes.

let str = "Привет";
let str2 = 'Одинарные кавычки тоже подойдут';
let phrase = `Обратные кавычки позволяют встраивать переменные ${str}`; //Здесь можно встраивать переменные при помощи ${/*Переменная*/}




//Boolean

// The boolean type has only two values: true and false.
// This type is commonly used to store yes/no values: true means “yes, correct”, and false means “no, incorrect”.



// For instance:

let nameFieldChecked = true; // yes, name field is checked
let ageFieldChecked = false; // no, age field is not checked




// The “null” value

// The special null value does not belong to any of the types described above.
// It forms a separate type of its own which contains only the null value:



let age = null;



// The “undefined” value
// The special value undefined also stands apart. It makes a type of its own, just like null.
// The meaning of undefined is “value is not assigned”.


// The object type is special.
// All other types are called “primitive” because their values can contain only a single thing (be it a string or a number or whatever). 
// In contrast, objects are used to store collections of data and more complex entities.

// The symbol type is used to create unique identifiers for objects. We have to mention it here for the sake of completeness, but also postpone the details till we know objects.




// The typeof operator returns the type of the argument. 
//It’s useful when we want to process values of different types differently or just want to do a quick check.

typeof undefined // "undefined"

typeof 0 // "number"

typeof 10n // "bigint"

typeof true // "boolean"

typeof "foo" // "string"

typeof Symbol("id") // "symbol"

typeof Math // "object"  (1)

typeof null // "object"  (2)

typeof console.log // "function"  (3)