const bigintConst = 1234567890123456789012345678901234567890n;

const sameBigintConst = BigInt("1234567890123456789012345678901234567890");

const bigintFromNumberConst = BigInt(10); // same as 10ng


console.log(1n + 2n); // 3

console.log(5n / 2n); // 2

//console.log(1n + 2); // Error: Cannot mix BigInt and other types


bigint = 1n;
let number = 2;

// number to bigint
console.log(bigint + BigInt(number)); // 3

// bigint to number
console.log(Number(bigint) + number); // 3



bigint = 1n;

//console.log( +bigint ); // error


console.log( 2n > 1n ); // true

console.log( 2n > 1 ); // true



console.log( 1 == 1n ); // true

console.log( 1 === 1n ); // false


if (0n) {
    // never executes
  }


  console.log( 1n || 2 ); // 1 (1n is considered truthy)

console.log( 0n || 2 ); // 2 (0n is considered falsy)