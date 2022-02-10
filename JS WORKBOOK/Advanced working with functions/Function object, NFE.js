function sayHi() {
    console.log("Hi");
  }
  
  console.log(sayHi.name); // sayHi




  // function created inside array
let arr = [function() {}];

console.log( arr[0].name ); // <empty string>
// the engine has no way to set up the right name, so there is none



function f1(a) {}
function f2(a, b) {}
function many(a, b, ...more) {}

console.log(f1.length); // 1
console.log(f2.length); // 2
console.log(many.length); // 2


function ask(question, ...handlers) {
    let isYes = confirm(question);
  
    for(let handler of handlers) {
      if (handler.length == 0) {
        if (isYes) handler();
      } else {
        handler(isYes);
      }
    }
  
  }
  
  // for positive answer, both handlers are called
  // for negative answer, only the second one
  ask("Question?", () => console.log('You said yes'), result => console.log(result));





  function sayHi() {
    console.log("Hi");
  
    // let's count how many times we run
    sayHi.counter++;
  }
  sayHi.counter = 0; // initial value
  
  sayHi(); // Hi
  sayHi(); // Hi
  
  console.log( `Called ${sayHi.counter} times` ); // Called 2 times



  function makeCounter() {
    // instead of:
    // let count = 0
  
    function counter() {
      return counter.count++;
    };
  
    counter.count = 0;
  
    return counter;
  }
  
  let counter = makeCounter();
  console.log( counter() ); // 0
  console.log( counter() ); // 1



  let sayHi = function func(who) {
    if (who) {
      console.log(`Hello, ${who}`);
    } else {
      func("Guest"); // use func to re-call itself
    }
  };
  
  sayHi(); // Hello, Guest
  
  // But this won't work:
  func(); // Error, func is not defined (not visible outside of the function)
  