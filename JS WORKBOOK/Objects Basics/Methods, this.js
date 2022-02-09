let user = {
    name: "John",
    age: 30
};

user.sayHi = function() {
    console.log("Hello!");
};

user.sayHi(); // Hello!


user = {
    sayHi: function() {
        console.log("Hello " + this.name && "me");
    }
};

// method shorthand looks better, right?
user = {

    sayHi() { // same as "sayHi: function(){...}"
        console.log("Hello " + this.name || "me"); //Question for an expert ??
    }
};

user.sayHi();



user = { name: "John" };
admin = { name: "Admin" };

function sayHi() {
    console.log(this.name);
}

// use the same function in two objects
user.f = sayHi;
admin.f = sayHi;

// these calls have different this
// "this" inside the function is the object "before the dot"
user.f(); // John  (this == user)
admin.f(); // Admin  (this == admin)


user = {
    name: "Vlad",
    sayHi: () => {
        console.log(this.name);
    }
}

user.sayHi();