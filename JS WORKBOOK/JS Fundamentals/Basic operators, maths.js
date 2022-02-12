x = 1;

x = -x;
console.log( x ); // -1, unary negation was applied

x = 1, y = 3;
console.log( y - x ); // 2, binary minus subtracts values


// Maths
// The following math operations are supported:

// Addition +,
// Subtraction -,
// Multiplication *,
// Division /,
// Remainder %,
// Exponentiation **.



alert( 4 ** (1/2) ); // 2 (power of 1/2 is the same as a square root)
alert( 8 ** (1/3) ); // 2 (power of 1/3 is the same as a cubic root)

let s = "my" + "string";
alert(s); // mystring

alert( '1' + 2 ); // "12"
alert( 2 + '1' ); // "21"

alert( 6 - '2' ); // 4, converts '2' to a number
alert( '6' / '2' ); // 3, converts both operands to numbers

// No effect on numbers
let x = 1;
console.log( +x ); // 1

let y = -2;
console.log( +y ); // -2

// Converts non-numbers
console.log( +true ); // 1
console.log( +"" );   // 0



apples = "2";
oranges = "3";

alert( apples + oranges ); // "23", the binary plus concatenates strings


//If we want to treat them as numbers, we need to convert and then sum them:

let apples = "2";
let oranges = "3";

// both values converted to numbers before the binary plus
console.log( +apples + +oranges ); // 5

// the longer variant
// alert( Number(apples) + Number(oranges) ); // 5

/*
Precedence	    Name	        Sign
…	            …	…
15	            unary plus	    +
15	            unary negation	-
14	            exponentiation	**
13	            multiplication	*
13	            division	    /
12	            addition	    +
12	            subtraction	    -
…	            …	            …
2	            assignment	    =
…	            …	            …
*/

a = 1;
b = 2;

c = 3 - (a = b + 1);

console.log( a ); // 3
console.log( c ); // 0



a = b = c = 2 + 2;

console.log( a ); // 4
console.log( b ); // 4
console.log( c ); // 4


let a = (1 + 2, 3 + 4);

console.log( a ); // 7 (the result of 3 + 4)

// three operations in one line
for (a = 1, b = 3, c = a * b; a < 10; a++) {
 //...
}