// class MyClass {
//     // class methods
//     constructor() { ... }
//     method1() { ... }
//     method2() { ... }
//     method3() { ... }
//     ...
//   }


class User {

    constructor(name) {
        this.name = name;
    }

    sayHi() {
        console.log(this.name);
    }

}

// Usage:
let user = new User("John");
user.sayHi();

// proof: User is a function
console.log(typeof User); // function


console.log(typeof User); // function

// ...or, more precisely, the constructor method
console.log(User === User.prototype.constructor); // true

// The methods are in User.prototype, e.g:
console.log(User.prototype.sayHi); // the code of the sayHi method

// there are exactly two methods in the prototype
console.log(Object.getOwnPropertyNames(User.prototype)); // constructor, sayHi

console.log(User); // class User { ... }

console.log(typeof User); // function
User(); // Error: Class constructor User cannot be invoked without 'new'



// First, a function created by class is labelled by a special internal property [[IsClassConstructor]]: true. So it’s not entirely the same as creating it manually.

// The language checks for that property in a variety of places. For example, unlike a regular function, it must be called with new:

// Class methods are non-enumerable. A class definition sets enumerable flag to false for all methods in the "prototype".

// That’s good, because if we for..in over an object, we usually don’t want its class methods.

// Classes always use strict. All code inside the class construct is automatically in strict mode.



// class Expression

let User = class {
    sayHi() {
        console.log("Hello");
    }
};


// "Named Class Expression"
// (no such term in the spec, but that's similar to Named Function Expression)
let User = class MyClass {
    sayHi() {
        console.log(MyClass); // MyClass name is visible only inside the class
    }
};

new User().sayHi(); // works, shows MyClass definition

console.log(MyClass); // error, MyClass name isn't visible outside of the class


function makeClass(phrase) {
    // declare a class and return it
    return class {
        sayHi() {
            console.log(phrase);
        }
    };
}

// Create a new class
let User = makeClass("Hello");

new User().sayHi(); // Hello


// properties

class User {

    constructor(name) {
        // invokes the setter
        this.name = name;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        if (value.length < 4) {
            console.log("Name is too short.");
            return;
        }
        this._name = value;
    }

}

user = new User("John");
console.log(user.name); // John

user = new User(""); // Name is too short.

class User {

    ['say' + 'Hi']() {
        console.log("Hello");
    }

}

new User().sayHi();


//Class fields

class User {
    name = "John";

    sayHi() {
        console.log(`Hello, ${this.name}!`);
    }
}

new User().sayHi(); // Hello, John!


class User {
    name = "John";
}

user = new User();
console.log(user.name); // John
console.log(User.prototype.name); // undefined



class Button {
    constructor(value) {
        this.value = value;
    }

    click() {
        console.log(this.value);
    }
}

let button = new Button("hello");

setTimeout(button.click, 1000); // undefined



class Button {
    constructor(value) {
        this.value = value;
    }
    click = () => {
        console.log(this.value);
    }
}

button = new Button("hello");

setTimeout(button.click, 1000); // hello