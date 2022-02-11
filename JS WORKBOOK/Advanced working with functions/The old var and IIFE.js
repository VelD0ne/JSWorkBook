if (true) {
    var test = true; // use "var" instead of "let"
  }
  
  console.log(test); // true, the variable lives after if


  for (var i = 0; i < 10; i++) {
    var one = 1;
    // ...
  }
  
  console.log(i);   // 10, "i" is visible after loop, it's a global variable
  console.log(one); // 1, "one" is visible after loop, it's a global variable



  function sayHi() {
    if (true) {
      var phrase = "Hello";
    }
  
    console.log(phrase); // works
  }
  
  sayHi();
  console.log(phrase); // ReferenceError: phrase is not defined



  function sayHi() {
    phrase = "Hello";
  
    console.log(phrase);
  
    var phrase;
  }
  sayHi();



  (function() {

    var message = "Hello";
  
    console.log(message); // Hello
  
  })();





  // Ways to create IIFE

(function() {
  console.log("Parentheses around the function");
})();

(function() {
  console.log("Parentheses around the whole thing");
}());

!function() {
  console.log("Bitwise NOT operator starts the expression");
}();

+function() {
  console.log("Unary plus starts the expression");
}();