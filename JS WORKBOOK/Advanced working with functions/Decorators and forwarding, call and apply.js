function slow(x) {
    // there can be a heavy CPU-intensive job here
    console.log(`Called with ${x}`);
    return x;
  }
  
  function cachingDecorator(func) {
    let cache = new Map();
  
    return function(x) {
      if (cache.has(x)) {    // if there's such key in cache
        return cache.get(x); // read the result from it
      }
  
      let result = func(x);  // otherwise call func
  
      cache.set(x, result);  // and cache (remember) the result
      return result;
    };
  }
  
  slow = cachingDecorator(slow);
  
  console.log( slow(1) ); // slow(1) is cached and the result returned
  console.log( "Again: " + slow(1) ); // slow(1) result returned from cache
  
  console.log( slow(2) ); // slow(2) is cached and the result returned
  console.log( "Again: " + slow(2) ); // slow(2) result returned from cache
  


// we'll make worker.slow caching
let worker = {
    someMethod() {
      return 1;
    },
  
    slow(x) {
      // scary CPU-heavy task here
      console.log("Called with " + x);
      return x * this.someMethod(); // (*)
    }
  };
  
  // same code as before
  function cachingDecorator(func) {
    let cache = new Map();
    return function(x) {
      if (cache.has(x)) {
        return cache.get(x);
      }
      let result = func(x); // (**)
      cache.set(x, result);
      return result;
    };
  }
  
  console.log( worker.slow(1) ); // the original method works
  
  worker.slow = cachingDecorator(worker.slow); // now make it caching
  
  console.log( worker.slow(2) ); // Whoops! Error: Cannot read property 'someMethod'



  

  function sayHi() {
    console.log(this.name);
  }
  
  let user = { name: "John" };
  let admin = { name: "Admin" };
  
  // use call to pass different objects as "this"
  sayHi.call( user ); // John
  sayHi.call( admin ); // Admin



  let worker = {
    someMethod() {
      return 1;
    },
  
    slow(x) {
      console.log("Called with " + x);
      return x * this.someMethod(); // (*)
    }
  };
  
  function cachingDecorator(func) {
    let cache = new Map();
    return function(x) {
      if (cache.has(x)) {
        return cache.get(x);
      }
      let result = func.call(this, x); // "this" is passed correctly now
      cache.set(x, result);
      return result;
    };
  }
  
  worker.slow = cachingDecorator(worker.slow); // now make it caching
  
  console.log( worker.slow(2) ); // works
  console.log( worker.slow(2) ); // works, doesn't call the original (cached)





  let worker = {
    slow(min, max) {
      console.log(`Called with ${min},${max}`);
      return min + max;
    }
  };
  
  function cachingDecorator(func, hash) {
    let cache = new Map();
    return function() {
      let key = hash(arguments); // (*)
      if (cache.has(key)) {
        return cache.get(key);
      }
  
      let result = func.call(this, ...arguments); // (**)
  
      cache.set(key, result);
      return result;
    };
  }
  
  function hash(args) {
    return args[0] + ',' + args[1];
  }
  
  worker.slow = cachingDecorator(worker.slow, hash);
  
  console.log( worker.slow(3, 5) ); // works
  console.log( "Again " + worker.slow(3, 5) ); // same (cached)




  //EQUAL
func.call(context, ...args);
func.apply(context, args);




function hash() {
    console.log( arguments.join() ); // Error: arguments.join is not a function
  }
  
  hash(1, 2);


  function hash() {
    console.log( [].join.call(arguments) ); // 1,2
  }
  
  hash(1, 2);