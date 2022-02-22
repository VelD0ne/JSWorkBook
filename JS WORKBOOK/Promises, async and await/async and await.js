    async function f() {
        return 1;
    }

f().then(console.log)



async function f() {

    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve("done!"), 1000)
    });
  
    let result = await promise; // wait until the promise resolves (*)
  
    console.log(result); // "done!"
  }
  
  f();





//   class Thenable {
//     constructor(num) {
//       this.num = num;
//     }
//     then(resolve, reject) {
//       console.log(resolve);
//       // resolve with this.num*2 after 1000ms
//       setTimeout(() => resolve(this.num * 2), 1000); // (*)
//     }
//   }
  
//   async function f() {
//     // waits for 1 second, then result becomes 2
//     let result = await new Thenable(1);
//     console.log(result);
//   }
  
//   f();



  class Waiter {
    async wait() {
      return await Promise.resolve(1);
    }
  }
  
  new Waiter()
    .wait()
    .then(console.log); // 1 (this is the same as (result => console.log(result)))





    async function f() {

        try {
          let response = await fetch('/no-user-here');
          let user = await response.json();
        } catch(err) {
          // catches errors both in fetch and response.json
          console.log(err);
        }
      }
      
      f();



      async function f() {
        let response = await fetch('http://no-such-url');
      }
      
      // f() becomes a rejected promise
      f().catch(console.log); // TypeError: failed to fetch // (*)


      // wait for the array of results
let results = await Promise.all([
    fetch(url1),
    fetch(url2),
    //...
  ]);