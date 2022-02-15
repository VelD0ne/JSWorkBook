// To see whether a string is greater than another, JavaScript uses the so-called “dictionary” or “lexicographical” order.

// In other words, strings are compared letter-by-letter.

// For example:

alert('Z' > 'A'); // true
alert('Glow' > 'Glee'); // true
alert('Bee' > 'Be'); // true

// Comparison of different types
// When comparing values of different types, JavaScript converts the values to numbers.

// For example:

alert('2' > 1); // true, string '2' becomes a number 2
alert('01' == 1); // true, string '01' becomes a number 1




// A strict equality operator === checks the equality without type conversion.

// Comparison with null and undefined
alert(null === undefined); // false
alert(null == undefined); // true
// For maths and other comparisons < > <= >=
// null/undefined are converted to numbers: null becomes 0, while undefined becomes NaN.

// An incomparable undefined
// The value undefined shouldn’t be compared to other values:

alert(undefined > 0); // false (1)
alert(undefined < 0); // false (2)
alert(undefined == 0); // false (3)