//let result = eval(code);

let code = 'console.log("Hello")';
eval(code); // Hello

let value = eval("1+1");
console.log(value); // 2

value = eval("let i = 0; ++i");
console.log(value); // 1

let a = 1;

function f() {
  let a = 2;

  eval("console.log(a)"); // 2
}

f();

let x = 5;
eval("x = 10");
console.log(x); // 10, value modified

// reminder: 'use strict' is enabled in runnable examples by default

eval("let g = 5; function f() {}");

console.log(typeof g); // undefined (no such variable)
// function f is also not visible

let c = new Function("a", "console.log(a)");

c(5); // 5
