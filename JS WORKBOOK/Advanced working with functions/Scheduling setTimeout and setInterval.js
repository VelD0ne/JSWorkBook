//let timerId = setTimeout(func|code, [delay], [arg1], [arg2], ...)

function sayHi(phrase, who) {
    console.log( phrase + ', ' + who );
  }
  
  setTimeout(sayHi, 1000, "Hello", "John"); // Hello, John


  setTimeout("console.log('Hello')", 1000);
