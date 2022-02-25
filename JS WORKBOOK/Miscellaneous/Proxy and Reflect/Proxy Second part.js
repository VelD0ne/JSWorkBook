//! “In range” with “has” trap
let range = {
  start: 1,
  end: 10,
};

range = new Proxy(range, {
  has(target, prop) {
    return prop >= target.start && prop <= target.end;
  },
});

console.log(5 in range); // true
console.log(50 in range); // false

//! Wrapping functions: "apply"

function delay(f, ms) {
  // return a wrapper that passes the call to f after the timeout
  return function () {
    // (*)
    setTimeout(() => f.apply(this, arguments), ms);
  };
}

function sayHi(user) {
  console.log(`Hello, ${user}!`);
}

// after this wrapping, calls to sayHi will be delayed for 3 seconds
sayHi = delay(sayHi, 3000);

sayHi("John"); // Hello, John! (after 3 seconds)

function delay(f, ms) {
  return new Proxy(f, {
    apply(target, thisArg, args) {
      setTimeout(() => target.apply(thisArg, args), ms);
    },
  });
}

sayHi = delay(sayHi, 3000);

console.log(sayHi.length); // 1 (*) proxy forwards "get length" operation to the target

sayHi("John"); // Hello, John! (after 3 seconds)
