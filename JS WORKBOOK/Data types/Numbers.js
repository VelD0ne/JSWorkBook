let billion = 1000000000;
billion = 1_000_000_000;

billion = 1e9; // 1 billion, literally: 1 and 9 zeroes

console.log(7.3e9); // 7.3 billions (same as 7300000000 or 7_300_000_000)


1e3 === 1 * 1000; // e3 means *1000
1.23e6 === 1.23 * 1000000; // e6 means *1000000



let mсs = 0.000001;
mcs = 1e-6; // six zeroes to the left from 1

// -3 divides by 1 with 3 zeroes
1e-3 === 1 / 1000; // 0.001

// -6 divides by 1 with 6 zeroes
1.23e-6 === 1.23 / 1000000; // 0.00000123

let num = 255;

console.log(num.toString(16)); // ff
console.log(num.toString(2)); // 11111111
console.log(123456..toString(36)); // 2n9c


Math.floor() //To down
Math.ceil() //To up
Math.round() //By rules of math
Math.trunc() //deleting fraction

num = 1.23456;

console.log(Math.round(num * 100) / 100); // 1.23456 -> 123.456 -> 123 -> 1.23

num = 12.34;
console.log(num.toFixed(1)); // "12.3"

num = 12.36;
console.log(num.toFixed(1)); // "12.4"

num = 12.34;
console.log(num.toFixed(5)); // "12.34000", added zeroes to make exactly 5 digits

console.log(0.1 + 0.2); // 0.30000000000000004

console.log(0.1.toFixed(20)); // 0.10000000000000000555


let sum = 0.1 + 0.2;
console.log(sum.toFixed(2)); // 0.30

sum = 0.1 + 0.2;
console.log(+sum.toFixed(2)); // 0.

console.log((0.1 * 10 + 0.2 * 10) / 10); // 0.3
console.log((0.28 * 100 + 0.14 * 100) / 100); // 0.4200000000000001


// Hello! I'm a self-increasing number!
console.log(9999999999999999); // shows 10000000000000000


console.log(isNaN(NaN)); // true
console.log(isNaN("str")); // true

console.log(NaN === NaN); // false

console.log(isFinite("15")); // true
console.log(isFinite("str")); // false, because a special value: NaN
console.log(isFinite(Infinity)); // false, because a special value: Infinity

console.log(parseInt('100px')); // 100
console.log(parseFloat('12.5em')); // 12.5

console.log(parseInt('12.3')); // 12, only the integer part is returned
console.log(parseFloat('12.3.4')); // 12.3, the second point stops the reading

console.log(parseInt('a123')); // NaN, the first symbol stops the process

console.log(parseInt('0xff', 16)); // 255
console.log(parseInt('ff', 16)); // 255, without 0x also works

console.log(parseInt('2n9c', 36)); // 123456

console.log(Math.random()); // 0.1234567894322
console.log(Math.random()); // 0.5435252343232
console.log(Math.random()); // ... (any random numbers)

console.log(Math.max(3, 5, -10, 0, 1)); // 5
console.log(Math.min(1, 2)); // 1