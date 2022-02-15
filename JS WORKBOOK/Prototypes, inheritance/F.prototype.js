let animal = {
    eats: true
};

function Rabbit(name) {
    this.name = name;
}

Rabbit.prototype = animal;

let rabbit = new Rabbit("White Rabbit"); //  rabbit.__proto__ == animal

console.log(rabbit.eats); // true

function Rabbit() {}
// by default:
// Rabbit.prototype = { constructor: Rabbit }

console.log(Rabbit.prototype.constructor == Rabbit); // true


function Rabbit() {}
// by default:
// Rabbit.prototype = { constructor: Rabbit }

rabbit = new Rabbit(); // inherits from {constructor: Rabbit}

console.log(rabbit.constructor == Rabbit); // true (from prototype)



function Rabbit(name) {
    this.name = name;
    console.log(name);
}

rabbit = new Rabbit("White Rabbit");

rabbit2 = new rabbit.constructor("Black Rabbit");



function Rabbit() {}
Rabbit.prototype = {
    jumps: true
};

rabbit = new Rabbit();
console.log(rabbit.constructor === Rabbit); // false




function Rabbit() {}

// Not overwrite Rabbit.prototype totally
// just add to it
Rabbit.prototype.jumps = true
    // the default Rabbit.prototype.constructor is preserved


Rabbit.prototype = {
    jumps: true,
    constructor: Rabbit
};

// now constructor is also correct, because we added it