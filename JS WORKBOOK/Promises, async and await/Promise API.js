Promise.all([
    new Promise(resolve => setTimeout(() => resolve(1), 3000)), // 1
    new Promise(resolve => setTimeout(() => resolve(2), 2000)), // 2
    new Promise(resolve => setTimeout(() => resolve(3), 1000))  // 3
  ]).then(console.log); // 1,2,3 when promises are ready: each promise contributes an array member




  Promise.all([
    new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
    new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops!")), 2000)),
    new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
  ]).catch(console.log); // Error: Whoops!




  let urls = [
    'https://api.github.com/users/iliakan',
    'https://api.github.com/users/remy',
    'https://no-such-url'
  ];
  

  // Return object {status: fullfield, value: } or {status: rejected, reason: }
  Promise.allSettled(urls.map(url => fetch(url)))
    .then(results => { // (*)
      results.forEach((result, num) => {
        if (result.status == "fulfilled") {
          console.log(`${urls[num]}: ${result.value.status}`);
        }
        if (result.status == "rejected") {
          console.log(`${urls[num]}: ${result.reason}`);
        }
      });
    });     


    // Polyfilling allSettled

    if (!Promise.allSettled) {
        const rejectHandler = reason => ({ status: 'rejected', reason });
      
        const resolveHandler = value => ({ status: 'fulfilled', value });
      
        Promise.allSettled = function (promises) {
          const convertedPromises = promises.map(p => Promise.resolve(p).then(resolveHandler, rejectHandler));
          return Promise.all(convertedPromises);
        };
      }


      // race returns first finished promise (no matter error or result)
      Promise.race([
        new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
        new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops!")), 2000)),
        new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
      ]).then(console.log); // 1




      //any returns first fullfield promise
      Promise.any([
        new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops!")), 1000)),
        new Promise((resolve, reject) => setTimeout(() => resolve(1), 2000)),
        new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
      ]).then(console.log); // 1



      //Promise.resolve

      let cache = new Map();

        function loadCached(url) {
        if (cache.has(url)) {
            return Promise.resolve(cache.get(url)); // (*)
        }

        return fetch(url)
            .then(response => response.text())
            .then(text => {
            cache.set(url,text);
            return text;
            });
        }

       //Promise.reject(error) creates a rejected promise with error.

