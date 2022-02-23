// To see whether a string is greater than another, JavaScript uses the so-called “dictionary” or “lexicographical” order.

// In other words, strings are compared letter-by-letter.

// For example:

console.log('Z' > 'A'); // true
console.log('Glow' > 'Glee'); // true
console.log('Bee' > 'Be'); // true

// Comparison of different types
// When comparing values of different types, JavaScript converts the values to numbers.

// For example:

console.log('2' > 1); // true, string '2' becomes a number 2
console.log('01' == 1); // true, string '01' becomes a number 1




// A strict equality operator === checks the equality without type conversion.

// Comparison with null and undefined
console.log(null === undefined); // false
console.log(null == undefined); // true
// For maths and other comparisons < > <= >=
// null/undefined are converted to numbers: null becomes 0, while undefined becomes NaN.

// An incomparable undefined
// The value undefined shouldn’t be compared to other values:

console.log(undefined > 0); // false (1)
console.log(undefined < 0); // false (2)
console.log(undefined == 0); // false (3)