let user = {
    name: "John"
  };
  
  let descriptor = Object.getOwnPropertyDescriptor(user, 'name');
  
  console.log( JSON.stringify(descriptor, null, 2 ) );
  /* property descriptor:
  {
    "value": "John",
    "writable": true,
    "enumerable": true,
    "configurable": true
  }
  */



user = {};

Object.defineProperty(user, "name", {
  value: "John"
});

descriptor = Object.getOwnPropertyDescriptor(user, 'name');

alert( JSON.stringify(descriptor, null, 2 ) );
/*
{
  "value": "John",
  "writable": false,
  "enumerable": false,
  "configurable": false
}
 */




user = {
    name: "John"
  };
  
  Object.defineProperty(user, "name", {
    writable: false
  });
  
  user.name = "Pete"; // Error: Cannot assign to read only property 'name'
  




user = {
    name: "John",
    toString() {
      return this.name;
    }
  };
  
  // By default, both our properties are listed:
  for (let key in user) alert(key); // name, toString





user = {
    name: "John",
    toString() {
      return this.name;
    }
  };
  
  Object.defineProperty(user, "toString", {
    enumerable: false
  });
  
  // Now our toString disappears:
  for (let key in user) alert(key); // name



  let user = {
    name: "John"
  };
  
  Object.defineProperty(user, "name", {
    writable: false,
    configurable: false
  });
  
  // won't be able to change user.name or its flags
  // all this won't work:
  user.name = "Pete";
  delete user.name;
  Object.defineProperty(user, "name", { value: "Pete" });





  Object.defineProperties(obj, {
    prop1: descriptor1,
    prop2: descriptor2
    // ...
  });



  Object.defineProperties(user, {
    name: { value: "John", writable: false },
    surname: { value: "Smith", writable: false },
    // ...
  });



// Sealing an object globally
// Property descriptors work at the level of individual properties.

// There are also methods that limit access to the whole object:

// Object.preventExtensions(obj)
// Forbids the addition of new properties to the object.
// Object.seal(obj)
// Forbids adding/removing of properties. Sets configurable: false for all existing properties.
// Object.freeze(obj)
// Forbids adding/removing/changing of properties. Sets configurable: false, writable: false for all existing properties.
// And also there are tests for them:

// Object.isExtensible(obj)
// Returns false if adding properties is forbidden, otherwise true.
// Object.isSealed(obj)
// Returns true if adding/removing properties is forbidden, and all existing properties have configurable: false.
// Object.isFrozen(obj)
// Returns true if adding/removing/changing properties is forbidden, and all current properties are configurable: false, writable: false.