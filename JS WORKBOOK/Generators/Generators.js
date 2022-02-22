function* generateSequence() {
    yield 1;
    yield 2;
    return 3;
  }
  
  // "generator function" creates "generator object"
  let generator = generateSequence();
  console.log(generator); // [object Generator]




  function* generateSequence() {
    yield 1;
    yield 2;
    return 3;
  }
  
  generator = generateSequence();
  
  let one = generator.next();
  
  console.log(JSON.stringify(one)); // {value: 1, done: false}

  let two = generator.next();

console.log(JSON.stringify(two)); // {value: 2, done: false}

let three = generator.next();

console.log(JSON.stringify(three)); // {value: 3, done: true}


function* generateSequence() {
    yield 1;
    yield 2;
    return 3;
  }
  
  generator = generateSequence();
  
  for(let value of generator) {
    console.log(value); // 1, then 2
  }



  function* generateSequence() {
    yield 1;
    yield 2;
    yield 3;
  }
  
  let sequence = [0, ...generateSequence()];
  
  console.log(sequence); // 0, 1, 2, 3



  let range = {
    from: 1,
    to: 5,
  
    // for..of range calls this method once in the very beginning
    [Symbol.iterator]() {
      // ...it returns the iterator object:
      // onward, for..of works only with that object, asking it for next values
      return {
        current: this.from,
        last: this.to,
  
        // next() is called on each iteration by the for..of loop
        next() {
          // it should return the value as an object {done:.., value :...}
          if (this.current <= this.last) {
            return { done: false, value: this.current++ };
          } else {
            return { done: true };
          }
        }
      };
    }
  };
  
  // iteration over range returns numbers from range.from to range.to
  console.log([...range]); // 1,2,3,4,5



  range = {
    from: 1,
    to: 5,
  
    *[Symbol.iterator]() { // a shorthand for [Symbol.iterator]: function*()
      for(let value = this.from; value <= this.to; value++) {
        yield value;
      }
    }
  };
  
  console.log( [...range] ); // 1,2,3,4,5



  function* generateSequence(start, end) {
    for (let i = start; i <= end; i++) yield i;
  }


  console.log(...generateSequence(10,10000));



  function* generatePasswordCodes() {

    // 0..9
    yield* generateSequence(48, 57);
    //for (let i = 48; i <= 57; i++) yield i;

    // A..Z
    yield* generateSequence(65, 90);
    //for (let i = 65; i <= 90; i++) yield i;

    // a..z
    yield* generateSequence(97, 122);
    //for (let i = 97; i <= 122; i++) yield i;
  
  }
  
  let str = '';
  
  for(let code of generatePasswordCodes()) {
    console.log(code)
    str += String.fromCharCode(code);
  }
  
  console.log(str); // 0..9A..Za..z


  function* gen() {
    // Pass a question to the outer code and wait for an answer
    let result = yield "2 + 2 = ?"; // (*)
  
    console.log(result);
  }
  
  generator = gen();
  
  let question = generator.next().value; // <-- yield returns the value
  
  generator.next(4); // --> pass the result into the generator



  function* gen() {
    let ask1 = yield "2 + 2 = ?";
  
    console.log(ask1); //4 
  
    let ask2 = yield "3 * 3 = ?"
  
    console.log(ask2); // 9
  }
  
  generator = gen();
  
  console.log( generator.next().value ); // "2 + 2 = ?"
  
  console.log( generator.next(4).value ); // "3 * 3 = ?"
  
  console.log( generator.next(9).done ); // true




  function* gen() {
    try {
      let result = yield "2 + 2 = ?"; // (1)
  
      console.log("The execution does not reach here, because the exception is thrown above");
    } catch(e) {
      console.log(e); // shows the error
    }
  }
  
  generator = gen();
  
  question = generator.next().value;
  
  generator.throw(new Error("The answer is not found in my database")); // (2)




  function* generate() {
    let result = yield "2 + 2 = ?"; // Error in this line
  }
  
  generator = generate();
  
  question = generator.next().value;
  
  try {
    generator.throw(new Error("The answer is not found in my database"));
  } catch(e) {
    console.log(e); // shows the error
  }



  function* gen() {
    yield 1;
    yield 2;
    yield 3;
  }
  
  const g = gen();
  
  g.next();        // { value: 1, done: false }
  g.return('foo'); // { value: "foo", done: true }
  g.next();        // { value: undefined, done: true }