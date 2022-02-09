let billion = 1000000000;
let billion = 1 _000_000_000;

let billion = 1e9; // 1 billion, literally: 1 and 9 zeroes

alert(7.3e9); // 7.3 billions (same as 7300000000 or 7_300_000_000)


1e3 === 1 * 1000; // e3 means *1000
1.23e6 === 1.23 * 1000000; // e6 means *1000000



let mсs = 0.000001;
let mcs = 1e-6; // six zeroes to the left from 1

// -3 divides by 1 with 3 zeroes
1e-3 === 1 / 1000; // 0.001

// -6 divides by 1 with 6 zeroes
1.23e-6 === 1.23 / 1000000; // 0.00000123

let num = 255;

alert(num.toString(16)); // ff
alert(num.toString(2)); // 11111111
alert(123456..toString(36)); // 2n9c


Math.floor() //To down
Math.ceil() //To up
Math.round() //By rules of math
Math.trunc() //deleting fraction