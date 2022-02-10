let id1 = Symbol("id");
let id2 = Symbol("id");

console.log(id1 == id2); // false


let id = Symbol("id");
console.log(id); // TypeError: Cannot convert a Symbol value to a string
console.log(id.toString()); // Symbol(id), now it works


let user = { // belongs to another code
    name: "John"
};

id = Symbol("id");

user[id] = 1;

console.log(user[id]); // we can access the data using the symbol as the key


id = Symbol("id");

user = {
    name: "John",
    [id]: 123 // not "id": 123
};

id = Symbol("id");
user = {
    name: "John",
    age: 30,
    [id]: 123
};

for (let key in user) console.log(key); // name, age (no symbols)

// the direct access by the symbol works
console.log("Direct: " + user[id]);


id = Symbol("id");
user = {
    [id]: 123
};

let clone = Object.assign({}, user);

console.log(clone[id]); // 123



// get symbol by name
let sym = Symbol.for("name");
let sym2 = Symbol.for("id");

// get name by symbol
console.log(Symbol.keyFor(sym)); // name
console.log(Symbol.keyFor(sym2)); // id