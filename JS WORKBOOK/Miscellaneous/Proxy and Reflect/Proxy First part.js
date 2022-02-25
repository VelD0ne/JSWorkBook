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

//numbers.push("test"); // TypeError ('set' on proxy returned false)

console.log("This line is never reached (error in the line above)");

let user = {
  name: "John",
  age: 30,
  _password: "***",
};

user = new Proxy(user, {
  ownKeys(target) {
    return Object.keys(target).filter((key) => !key.startsWith("_"));
  },
});

// "ownKeys" filters out _password
for (let key in user) console.log(key); // name, then: age

// same effect on these methods:
console.log(Object.keys(user)); // name,age
console.log(Object.values(user)); // John,30

user = {};

user = new Proxy(user, {
  ownKeys(target) {
    return ["a", "b", "c"];
  },
});

console.log(Object.keys(user)); // <empty>

user = {};

user = new Proxy(user, {
  ownKeys(target) {
    // called once to get a list of properties
    return ["a", "b", "c"];
  },

  getOwnPropertyDescriptor(target, prop) {
    // called for every property
    return {
      enumerable: true,
      configurable: true,
      /* ...other flags, probable "value:..." */
    };
  },
});

console.log(Object.keys(user)); // a, b, c

user = {
  name: "John",
  _password: "***",
  checkPassword(value) {
    // object method must be able to read _password
    return value === this._password;
  },
};

user = new Proxy(user, {
  get(target, prop) {
    if (prop.startsWith("_")) {
      throw new Error("Access denied");
    }
    let value = target[prop];
    return typeof value === "function" ? value.bind(target) : value; // (*)
  },
  set(target, prop, val) {
    // to intercept property writing
    if (prop.startsWith("_")) {
      throw new Error("Access denied");
    } else {
      target[prop] = val;
      return true;
    }
  },
  deleteProperty(target, prop) {
    // to intercept property deletion
    if (prop.startsWith("_")) {
      throw new Error("Access denied");
    } else {
      delete target[prop];
      return true;
    }
  },
  ownKeys(target) {
    // to intercept property list
    return Object.keys(target).filter((key) => !key.startsWith("_"));
  },
});

// "get" doesn't allow to read _password
try {
  console.log(user._password); // Error: Access denied
} catch (e) {
  console.log(e.message);
}

// "set" doesn't allow to write _password
try {
  user._password = "test"; // Error: Access denied
} catch (e) {
  console.log(e.message);
}

// "deleteProperty" doesn't allow to delete _password
try {
  delete user._password; // Error: Access denied
} catch (e) {
  console.log(e.message);
}

// "ownKeys" filters out _password
for (let key in user) console.log(key); // name
