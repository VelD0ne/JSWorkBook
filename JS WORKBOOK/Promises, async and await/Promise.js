let promise = new Promise(function(resolve, reject) {
    // executor (the producing code, "singer")
  });



  promise = new Promise(function(resolve, reject) {
    // the function is executed automatically when the promise is constructed
  
    // after 1 second signal that the job is done with the result "done"
    setTimeout(() => resolve("done"), 1000);

  });
  
promise.then(
  result=>console.log(result),
  error=>console.log(error.message)
);


promise.then(console.log);


// new Promise((resolve, reject) => {
//   /* do something that takes time, and then call resolve/reject */
// })
//   // runs when the promise is settled, doesn't matter successfully or not
//   .finally(() => stop loading indicator)
//   // so the loading indicator is always stopped before we process the result/error
//   .then(result => show result, err => show erro



function loadScript(src) {
  return new Promise(function(resolve, reject) {
    let script = document.createElement('script');
    script.src = src;

    script.onload = () => resolve(script);
    script.onerror = () => reject(new Error(`Script load error for ${src}`));

    document.head.append(script);
  });
}


promise = loadScript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js");

promise.then(
  script => console.log(`${script.src} is loaded!`),
  error => console.log(`Error: ${error.message}`)
);

promise.then(script => console.log('Another handler...'));
