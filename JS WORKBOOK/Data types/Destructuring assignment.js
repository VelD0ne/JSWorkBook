// we have an array with the name and surname
let arr = ["John", "Smith"]

// destructuring assignment
// sets firstName = arr[0]
// and surname = arr[1]
let [firstName, surname] = arr;

console.log(firstName); // John
console.log(surname); // Smith


[firstName, surname] = "John Smith".split(' ');
console.log(firstName); // John
console.log(surname); // Smith


// second element is not needed
[firstName, , title] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

console.log(title); // Consul


let [a, b, c] = "abc"; // ["a", "b", "c"]
let [one, two, three] = new Set([1, 2, 3]);


user = {};
[user.name, user.surname] = "John Smith".split(' ');

console.log(user.name); // John
console.log(user.surname); // Smith


let user = {
    name: "John",
    age: 30
};

// loop over keys-and-values
for (let [key, value] of Object.entries(user)) {
    console.log(`${key}:${value}`); // name:John, then age:30
}



let guest = "Jane";
let admin = "Pete";

// Let's swap the values: make guest=Pete, admin=Jane
[guest, admin] = [admin, guest];

console.log(`${guest} ${admin}`); // Pete Jane (successfully swapped!)


[name1, name2, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

// rest is array of items, starting from the 3rd one
console.log(rest[0]); // Consul
console.log(rest[1]); // of the Roman Republic
console.log(rest.length); // 2



//Object destructuring

options = {
    title: "Menu",
    width: 100,
    height: 200
};

var { title, width, height } = options;

console.log(title); // Menu
console.log(width); // 100
console.log(height); // 200


options = {
    title: "Menu",
    width: 100,
    height: 200
};

// { sourceProperty: targetVariable }
var { width: w, height: h, title } = options;

// width -> w
// height -> h
// title -> title

console.log(title); // Menu
console.log(w); // 100
console.log(h); // 200

options = {
    title: "Menu"
};

var { width = 100, height = 200, title } = options;

console.log(title); // Menu
console.log(width); // 100
console.log(height); // 200


options = {
    title: "Menu",
    height: 200,
    width: 100
};

// title = property named title
// rest = object with the rest of properties
var { title, ...rest } = options;

// now title="Menu", rest={height: 200, width: 100}
console.log(rest.height); // 200
console.log(rest.width); // 100


var options = {
    size: {
        width: 100,
        height: 200
    },
    items: ["Cake", "Donut"],
    extra: true
};

// destructuring assignment split in multiple lines for clarity
var {
    size: { // put size here
        width,
        height
    },
    items: [item1, item2], // assign items here
    title = "Menu" // not present in the object (default value is used)
} = options;

console.log(title); // Menu
console.log(width); // 100
console.log(height); // 200
console.log(item1); // Cake
console.log(item2); // Donut



options = {
    title: "My menu",
    items: ["Item1", "Item2"]
};

function showMenu({
    title = "Untitled",
    width: w = 100, // width goes to w
    height: h = 200, // height goes to h
    items: [item1, item2] // items first element goes to item1, second to item2
}) {
    console.log(`${title} ${w} ${h}`); // My Menu 100 200
    console.log(item1); // Item1
    console.log(item2); // Item2
}

showMenu(options);