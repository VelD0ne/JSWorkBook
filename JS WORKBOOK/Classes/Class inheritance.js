class Animal {
    constructor(name) {
        this.speed = 0;
        this.name = name;
    }
    run(speed) {
        this.speed = speed;
        console.log(`${this.name} runs with speed ${this.speed}.`);
    }
    stop() {
        this.speed = 0;
        console.log(`${this.name} stands still.`);
    }
}

let animal = new Animal("My animal");



class Rabbit extends Animal {
    hide() {
        console.log(`${this.name} hides!`);
    }
}

let rabbit = new Rabbit("White Rabbit");

rabbit.run(5); // White Rabbit runs with speed 5.
rabbit.hide(); // White Rabbit hides!


function f(phrase) {
    return class {
        sayHi() { console.log(phrase); }
    };
}

class User extends f("Hello") {}

new User().sayHi(); // Hello



class Animal {

    constructor(name) {
        this.speed = 0;
        this.name = name;
    }

    run(speed) {
        this.speed = speed;
        console.log(`${this.name} runs with speed ${this.speed}.`);
    }

    stop() {
        this.speed = 0;
        console.log(`${this.name} stands still.`);
    }

}

class Rabbit extends Animal {
    hide() {
        console.log(`${this.name} hides!`);
    }

    stop() {
        super.stop(); // call parent stop
        this.hide(); // and then hide
    }
}

rabbit = new Rabbit("White Rabbit");

rabbit.run(5); // White Rabbit runs with speed 5.
rabbit.stop(); // White Rabbit stands still. White Rabbit hides!




//arrow function has no super 


    class Rabbit extends Animal {
        stop() {
            setTimeout(() => super.stop(), 1000); // call parent stop after 1sec
        }
    }

    // Unexpected super
    setTimeout(function() { super.stop() }, 1000);



// constructor

    class Animal {

        constructor(name) {
          this.speed = 0;
          this.name = name;
        }
      
        // ...
      }
      
      class Rabbit extends Animal {
      
        constructor(name, earLength) {
          super(name);
          this.earLength = earLength;
        }
      
        // ...
      }
      
      // now fine
      rabbit = new Rabbit("White Rabbit", 10);
      console.log(rabbit.name); // White Rabbit
      console.log(rabbit.earLength); // 10





      // Overriding class fields 

      class Animal {
        name = 'animal';
      
        constructor() {
          console.log(this.name); // (*)
        }
      }
      
      class Rabbit extends Animal {
        name = 'rabbit';
      }
      
      new Animal(); // animal
      new Rabbit(); // animal



      class Animal {
        showName() {  // instead of this.name = 'animal'
          console.log('animal');
        }
      
        constructor() {
          this.showName(); // instead of console.log(this.name);
        }
      }
      
      class Rabbit extends Animal {
        showName() {
          console.log('rabbit');
        }
      }
      
      new Animal(); // animal
      new Rabbit(); // rabbit





      
      animal = {
        name: "Animal",
        eat() {         // animal.eat.[[HomeObject]] == animal
          console.log(`${this.name} eats.`);
        }
      };
      
      rabbit = {
        __proto__: animal,
        name: "Rabbit",
        eat() {         // rabbit.eat.[[HomeObject]] == rabbit
          super.eat();
        }
      };
      
      let longEar = {
        __proto__: rabbit,
        name: "Long Ear",
        eat() {         // longEar.eat.[[HomeObject]] == longEar
          super.eat();
        }
      };
      
      // works correctly
      longEar.eat();  // Long Ear eats.







      animal = {
        sayHi() {
          console.log(`I'm an animal`);
        }
      };
      
      // rabbit inherits from animal
      rabbit = {
        __proto__: animal,
        sayHi() {
          super.sayHi();
        }
      };
      
      let plant = {
        sayHi() {
          console.log("I'm a plant");
        }
      };
      
      // tree inherits from plant
      let tree = {
        __proto__: plant,
        sayHi: rabbit.sayHi // (*)
      };
      
      tree.sayHi();  // I'm an animal (?!?)






      animal = {
        eat: function() { // intentionally writing like this instead of eat() {...
          // ...
        }
      };
      
      rabbit = {
        __proto__: animal,
        eat: function() {
          super.eat();
        }
      };
      
      rabbit.eat();  // Error calling super (because there's no [[HomeObject]])
      