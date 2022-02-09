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