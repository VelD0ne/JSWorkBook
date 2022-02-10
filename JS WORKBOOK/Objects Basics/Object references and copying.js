let user = { name: 'John' };

let admin = user;

admin.name = 'Pete'; // changed by the "admin" reference

console.log(user.name); // 'Pete', changes are seen from the "user" reference

let a = {};
let b = a; // copy the reference

console.log(a == b); // true, both variables reference the same object
console.log(a === b); // true

a = {};
b = {}; // two independent objects

console.log(a == b); // false

user = { name: "John" };

let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

// copies all properties from permissions1 and permissions2 into user
Object.assign(user, permissions1, permissions2);

// now user = { name: "John", canView: true, canEdit: true }

user = {
    name: "John",
    age: 30
};

let clone = {}; // the new empty object

// let's copy all user properties into it
for (let key in user) {
    clone[key] = user[key];
}

// now clone is a fully independent object with the same content
clone.name = "Pete"; // changed the data in it

console.log(user.name); // still John in the original object

//or
user = {
    name: "John",
    age: 30
};

clone = Object.assign({}, user);