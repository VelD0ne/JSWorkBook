// obj[Symbol.toPrimitive] = function(hint) {
//     // here goes the code to convert this object to a primitive
//     // it must return a primitive value
//     // hint = one of "string", "number", "default"
// };



let user = {
    name: "John",
    money: 1000,

    [Symbol.toPrimitive](hint) {
        console.log(`hint: ${hint}`);
        return hint == "string" ? `{name: "${this.name}"}` : this.money;
    }
};

// conversions demo:
console.log(user); // hint: string -> {name: "John"}
console.log(+user); // hint: number -> 1000
console.log(user + 500); // hint: default -> 1500


user = { name: "John" };

console.log(user); // [object Object]
console.log(user.valueOf() === user); // true



user = {
    name: "John",
    money: 1000,

    // for hint="string"
    toString() {
        return `{name: "${this.name}"}`;
    },

    // for hint="number" or "default"
    valueOf() {
        return this.money;
    }

};

console.log(user); // toString -> {name: "John"}
console.log(+user); // valueOf -> 1000
console.log(user + 500); // valueOf -> 1500