//equal
let user = new Object();
user = {};

name = 5;
user = { // an object
    "+1": "Gaz",
    name: "John", // by key "name" store value "John"
    age: 30, // by key "age" store value 30
    "likes birds": true, // multiword property name must be quoted
    "+0": "Maz",
};
console.log(user.name);
// user = {};

// // set
// user["likes birds"] = true;

// get
console.log(user["likes birds"]); // true

// delete
delete user["likes birds"];

let fruit = 'apple';
let bag = {
    [fruit + 'Computers']: 5 // bag.appleComputers = 5
};

console.log(bag.appleComputers);

function makeUser(name, age) {
    return {
        name, // same as name: name
        age, // same as age: age
        // ...
    };
}

console.log("name" in user);

console.log(user["name"]);

for (let key in user) {
    // keys
    console.log(+key + ":"); // name, age, isAdmin
    // values for the keys
    console.log(user[key]); // John, 30, true
}