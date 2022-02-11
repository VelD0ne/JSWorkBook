let sayHi = new Function('console.log("Hello")');

sayHi(); // Hello



let str = "Some text";

let func = new Function(str);
func();




function getFunc() {
    let value = "test";
  
    let func = new Function('console.log(value)');
  
    return func;
  }
  
  getFunc()(); // error: value is not defined


  setTimeout(() => console.log('Hello'), 1000);



 //let timerId = setTimeout(...);
//clearTimeout(timerId);


let timerId = setTimeout(() => console.log("never happens"), 1000);
console.log(timerId); // timer identifier

clearTimeout(timerId);
console.log(timerId); // same identifier (doesn't become null after canceling)





//let timerId = setInterval(func|code, [delay], [arg1], [arg2], ...)
// repeat with the interval of 2 seconds
let timerId = setInterval(() => console.log('tick'), 2000);

// after 5 seconds stop
setTimeout(() => { clearInterval(timerId); console.log('stop'); }, 5000);


/** instead of:
let timerId = setInterval(() => console.log('tick'), 2000);
*/

let timerId = setTimeout(function tick() {
    console.log('tick');
    timerId = setTimeout(tick, 2000); // (*)
  }, 2000);


// let delay = 5000;

// let timerId = setTimeout(function request() {
//   ...send request...

//   if (request failed due to server overload) {
//     // increase the interval to the next run
//     delay *= 2;
//   }

//   timerId = setTimeout(request, delay);

// }, delay);



let i = 1;
setInterval(function() {
  func(i++);
}, 100);



let i = 1;
setTimeout(function run() {
  func(i++);
  setTimeout(run, 100);
}, 100);



setTimeout(() => console.log("World"));

console.log("Hello");




let start = Date.now();
let times = [];

setTimeout(function run() {
  times.push(Date.now() - start); // remember delay from the previous call

  if (start + 100 < Date.now()) alert(times); // show the delays after 100ms
  else setTimeout(run); // else re-schedule
});

// an example of the output:
// 1,1,1,1,9,15,20,24,30,35,40,45,50,55,59,64,70,75,80,85,90,95,100