let user = {
    firstName: "John",
    sayHi() {
      console.log(`Hello, ${this.firstName}!`);
    }
  };
  
  setTimeout(user.sayHi, 1000); // Hello, undefined!




  let user = {
    firstName: "John",
    sayHi() {
      console.log(`Hello, ${this.firstName}!`);
    }
  };
  
  setTimeout(function() {
    user.sayHi(); // Hello, John!
  }, 1000);
  




let user = {
    firstName: "John"
  };
  
  function func() {
    console.log(this.firstName);
  }
  
  let funcUser = func.bind(user);
  funcUser(); // John


  let user = {
    firstName: "John",
    sayHi() {
      console.log(`Hello, ${this.firstName}!`);
    }
  };
  
  let sayHi = user.sayHi.bind(user); // (*)
  
  // can run it without an object
  sayHi(); // Hello, John!
  
  setTimeout(sayHi, 1000); // Hello, John!
  
  // even if the value of user changes within 1 second
  // sayHi uses the pre-bound value which is reference to the old user object
  user = {
    sayHi() { console.log("Another user in setTimeout!"); }
  };


  function mul(a, b) {
    return a * b;
  }
  
  let double = mul.bind(null, 2);
  
  console.log( double(3) ); // = mul(2, 3) = 6
  console.log( double(4) ); // = mul(2, 4) = 8
  console.log( double(5) ); // = mul(2, 5) = 10


  function mul(a, b) {
    return a * b;
  }
  
  let triple = mul.bind(null, 3);
  
  console.log( triple(3) ); // = mul(3, 3) = 9
  console.log( triple(4) ); // = mul(3, 4) = 12
  console.log( triple(5) ); // = mul(3, 5) = 15


  function partial(func, ...argsBound) {
    return function(...args) { // (*)
      return func.call(this, ...argsBound, ...args);
    }
  }
  
  // Usage:
  let user = {
    firstName: "John",
    say(time, phrase) {
      console.log(`[${time}] ${this.firstName}: ${phrase}!`);
    }
  };
  
  // add a partial method with fixed time
  user.sayNow = partial(user.say, new Date().getHours() + ':' + new Date().getMinutes());
  
  user.sayNow("Hello");
  // Something like:
  // [10:00] John: Hello!