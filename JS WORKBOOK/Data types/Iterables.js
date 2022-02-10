let range = {
    from: 1,
    to: 5
  };
  
  // 1. call to for..of initially calls this
  range[Symbol.iterator] = function() {
  
    // ...it returns the iterator object:
    // 2. Onward, for..of works only with the iterator object below, asking it for next values
    return {
      current: this.from,
      last: this.to,
  
      // 3. next() is called on each iteration by the for..of loop
      next() {
        // 4. it should return the value as an object {done:.., value :...}
        if (this.current <= this.last) {
          return { done: false, value: this.current++ };
        } else {
          return { done: true };
        }
      }
    };
  };


  for (let num of range) {
    console.log(num); // 1, then 2, 3, 4, 5
  }



  let range = {
    from: 1,
    to: 5,
  
    [Symbol.iterator]() {
      this.current = this.from;
      return this;
    },
  
    next() {
      if (this.current <= this.to) {
        return { done: false, value: this.current++ };
      } else {
        return { done: true };
      }
    }
  };
  
  for (let num of range) {
    console.log(num); // 1, then 2, 3, 4, 5
  }



  for (let char of "test") {
    // triggers 4 times: once for each character
    console.log( char ); // t, then e, then s, then t
  }



  let str = "Hello";

// does the same as
// for (let char of str) console.log(char);

let iterator = str[Symbol.iterator]();

while (true) {
  let result = iterator.next();
  if (result.done) break;
  console.log(result.value); // outputs characters one by one
}


let arrayLike = { // has indexes and length => array-like
    0: "Hello",
    1: "World",
    length: 2
  };
  
  // Error (no Symbol.iterator)
  for (let item of arrayLike) {}


  let arrayLike = {
    0: "Hello",
    1: "World",
    length: 2
  };
  
  let arr = Array.from(arrayLike); // (*)
  alert(arr.pop()); // World (method works)


  // assuming that range is taken from the example above

// square each number
let arr = Array.from(range, num => num * num);

alert(arr); // 1,4,9,16,25