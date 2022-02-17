try {

    console.log('Start of try runs');  // (1) <--
  
    lalala; // error, variable is not defined!
  
    console.log('End of try (never reached)');  // (2)
  
  } catch (err) {
  
    console.log(`Error has occurred!`); // (3) <--
  
  }






  try {
    lalala; // error, variable is not defined!
  } catch (err) {
    console.log(err.name); // ReferenceError
    console.log(err.message); // lalala is not defined
    console.log(err.stack); // ReferenceError: lalala is not defined at (...call stack)
  
    // Can also show an error as a whole
    // The error is converted to string as "name: message"
    console.log(err); // ReferenceError: lalala is not defined
  }






  let json = '{ "age": 30 }'; // incomplete data

try {

  let user = JSON.parse(json); // <-- no errors

  if (!user.name) {
    throw new SyntaxError("Incomplete data: no name"); // (*)
  }

  console.log( user.name );

} catch (err) {
  console.log( "JSON Error: " + err.message ); // JSON Error: Incomplete data: no name
}





function readData() {
  let json = '{ "age": 30 }';

  try {
    // ...
    blabla(); // error!
  } catch (err) {
    // ...
    if (!(err instanceof SyntaxError)) {
      throw err; // rethrow (don't know how to deal with it)
    }
  }
}

try {
  readData();
} catch (err) {
  console.log( "External catch got: " + err ); // caught it!
}




let num = +prompt("Enter a positive integer number?", 35)

let diff, result;

function fib(n) {
  if (n < 0 || Math.trunc(n) != n) {
    throw new Error("Must not be negative, and also an integer.");
  }
  return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}

let start = Date.now();

try {
  result = fib(num);
} catch (err) {
  result = 0;
} finally {
  diff = Date.now() - start;
}

console.log(result || "error occurred");

console.log( `execution took ${diff}ms` );