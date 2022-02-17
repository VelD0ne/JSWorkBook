class Rabbit {}
let rabbit = new Rabbit();

// is it an object of Rabbit class?
console.log( rabbit instanceof Rabbit ); // true



let arr = [1, 2, 3];
console.log( arr instanceof Array ); // true
console.log( arr instanceof Object ); // true


// setup instanceOf check that assumes that
// anything with canEat property is an animal
class Animal {
    static [Symbol.hasInstance](obj) {
      if (obj.canEat) return true;
    }
  }
  
  let obj = { canEat: true };
  
  console.log(obj instanceof Animal); // true: Animal[Symbol.hasInstance](obj) is called\


  class Animal {}
class Rabbit extends Animal {}

rabbit = new Rabbit();
console.log(rabbit instanceof Animal); // true

// rabbit.__proto__ === Animal.prototype (no match)
// rabbit.__proto__.__proto__ === Animal.prototype (match!)




obj = {};

console.log(obj); // [object Object]
console.log(obj.toString()); // the same


let s = Object.prototype.toString;

console.log( s.call(123) ); // [object Number]
console.log( s.call(null) ); // [object Null]
console.log( s.call(console.log) ); // [object Function]



let user = {
    [Symbol.toStringTag]: "User"
  };
  
  console.log( {}.toString.call(user) ); // [object User]




  // toStringTag for the environment-specific object and class:
console.log( window[Symbol.toStringTag]); // Window
console.log( XMLHttpRequest.prototype[Symbol.toStringTag] ); // XMLHttpRequest

console.log( {}.toString.call(window) ); // [object Window]
console.log( {}.toString.call(new XMLHttpRequest()) ); // [object XMLHttpRequest]