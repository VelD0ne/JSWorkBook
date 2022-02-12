//String Conversion

let value=true;
console.log(typeof value);

value=String(value);
console.log(typeof value);


//Numeric Conversion

console.log( "6" / "2" ); // 3, strings are converted to numbers

str = "123";
console.log(typeof str); // string

let num = Number(str); // becomes a number 123

console.log(typeof num); // number

age = Number("Любая строка вместо числа");

console.log(age); // NaN, conversion failed

console.log( Number("   123   ") ); // 123
console.log( Number("123z") );      // NaN (error reading a number at "z"))
console.log( Number(true) );        // 1
console.log( Number(false) );       // 0



// Value:	        Becomes:
// undefined	    NaN
// null	            0
// true and false	1 and 0
// string	        Whitespaces from the start and end are removed. If the remaining string is empty, the result is 0. Otherwise, the number is “read” from the string. An error gives NaN.


//Boolean Conversion

console.log( Boolean(1) ); // true
console.log( Boolean(0) ); // false

console.log( Boolean("Hello!") ); // true
console.log( Boolean("") ); // false


console.log(a=3+4);