// The __proto__ is considered outdated and somewhat deprecated (in browser-only part of the JavaScript standard).

// The modern methods are:

// Object.create(proto, [descriptors]) – creates an empty object with given proto as [[Prototype]] and optional property descriptors.
// Object.getPrototypeOf(obj) – returns the [[Prototype]] of obj.
// Object.setPrototypeOf(obj, proto) – sets the [[Prototype]] of obj to proto.


let animal = {
    eats: true
};

// create a new object with animal as a prototype
let rabbit = Object.create(animal);

console.log(rabbit.eats); // true

console.log(Object.getPrototypeOf(rabbit) === animal); // true

Object.setPrototypeOf(rabbit, {}); // change the prototype of rabbit to {}



animal = {
    eats: true
};

rabbit = Object.create(animal, {
    jumps: {
        value: true
    }
});

console.log(rabbit.jumps); // true


let clone = Object.create(Object.getPrototypeOf(obj), Object.getOwnPropertyDescriptors(obj));



let obj = {};

let key = prompt("What's the key?", "__proto__");
obj[key] = "some value";

console.log(obj[key]); // [object Object], not "some value"!


obj = Object.create(null);

key = prompt("What's the key?", "__proto__");
obj[key] = "some value";

console.log(obj[key]); // "some value"


let obj = Object.create(null);

console.log(obj); // Error (no toString)