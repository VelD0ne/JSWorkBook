let obj = {
    get propName() {
        // getter, the code executed on getting obj.propName
    },

    set propName(value) {
        // setter, the code executed on setting obj.propName = value
    }
};


user = {
    name: "John",
    surname: "Smith",

    get fullName() {
        return `${this.name} ${this.surname}`;
    }
};

console.log(user.fullName); // John Smith



let user = {
    name: "John",
    surname: "Smith",

    get fullName() {
        return `${this.name} ${this.surname}`;
    },

    set fullName(value) {
        [this.name, this.surname] = value.split(" ");
    }
};

// set fullName is executed with the given value.
user.fullName = "Alice Cooper";

console.log(user.name); // Alice
console.log(user.surname); // Cooper


let user = {
    name: "John",
    surname: "Smith"
};

Object.defineProperty(user, 'fullName', {
    get() {
        return `${this.name} ${this.surname}`;
    },

    set(value) {
        [this.name, this.surname] = value.split(" ");
    }
});

console.log(user.fullName); // John Smith

for (let key in user) console.log(key); // name, surname


let user = {
    get name() {
        return this._name;
    },

    set name(value) {
        if (value.length < 4) {
            console.log("Name is too short, need at least 4 characters");
            return;
        }
        this._name = value;
    }
};

user.name = "Pete";
console.log(user.name); // Pete

user.name = ""; // Name is too short...



function User(name, birthday) {
    this.name = name;
    this.birthday = birthday;

    // age is calculated from the current date and birthday
    Object.defineProperty(this, "age", {
        get() {
            let todayYear = new Date().getFullYear();
            return todayYear - this.birthday.getFullYear();
        }
    });
}

let john = new User("John", new Date(1992, 6, 1));

console.log(john.birthday); // birthday is available
console.log(john.age); // ...as well as the age