function User(name) {
    this.name = name;
    this.isAdmin = false;
}

let user = new User("Jack");

console.log(user.name); // Jack
console.log(user.isAdmin); // false

function User(name) {
    // this = {};  (implicitly)

    // add properties to this
    this.name = name;
    this.isAdmin = false;

    // return this;  (implicitly)
}

User();

function User() {
    console.log(new.target);
}

// without "new":
User(); // undefined

// with "new":
new User(); // function User { ... }

function User(name) {
    this.name = name;

    this.sayHi = function() {
        console.log("My name is: " + this.name);
    };
}

let john = new User("John");

john.sayHi(); // My name is: John

/*
john = {
   name: "John",
   sayHi: function() { ... }
}
*/