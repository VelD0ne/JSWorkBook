let user = {}; // a user without "address" property

//console.log(user.address.street); // Error!

user = {}; // user has no address

console.log(user?.address?.street); // undefined (no error)

let key = "firstName";

let user1 = {
    firstName: "John"
};

let user2 = null;

console.log(user1?.[key]); // John
console.log(user2?.[key]); // undefined

let userAdmin = {
    admin() {
        console.log("I am admin");
    }
};

let userGuest = {};

userAdmin.admin?.(); // I am admin

userGuest.admin?.(); // nothing (no such method)