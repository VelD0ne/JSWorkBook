//let proxy = new Proxy(target, handler);

let target = {};
proxy = new Proxy(target, {}); // empty handler

proxy.test = 5; // writing to proxy (1)
console.log(target.test); // 5, the property appeared in target!

console.log(proxy.test); // 5, we can read it from proxy too (2)

for (let key in proxy) console.log(key + " " + target[key]); // test, iteration works (3)

let numbers = [0, 1, 2, 123, 99];

numbers = new Proxy(numbers, {
  get(target, prop) {
    if (prop in target) {
      return target[prop];
    } else {
      return 0; // default value
    }
  },
});
console.log(numbers[1]); // 1
console.log(numbers[4]); // 0 (no such item)

let dictionary = {
  Hello: "Hola",
  Bye: "Adiós",
};

dictionary = new Proxy(dictionary, {
  get(target, phrase) {
    // intercept reading a property from dictionary
    if (phrase in target) {
      // if we have it in the dictionary
      return target[phrase]; // return the translation
    } else {
      // otherwise, return the non-translated phrase
      return phrase;
    }
  },
});

// Look up arbitrary phrases in the dictionary!
// At worst, they're not translated.
console.log(dictionary["Hello"]); // Hola
console.log(dictionary["Welcome to Proxy"]); // Welcome to Proxy (no translation)

numbers = [];

numbers = new Proxy(numbers, {
  // (*)
  set(target, prop, val) {
    // to intercept property writing
    if (typeof val == "number") {
      target[prop] = val;
      return true;
    } else {
      return false;
    }
  },
});

numbers.push(1); // added successfully
numbers.push(2); // added successfully
console.log("Length is: " + numbers.length); // 2

numbers.push("test"); // TypeError ('set' on proxy returned false)

console.log("This line is never reached (error in the line above)");
