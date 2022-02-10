// make current user information global, to let all scripts access it
global.currentUser = {
    name: "John"
  };
  
  // somewhere else in code
  console.log(currentUser.name);  // John
  
  // or, if we have a local variable with the name "currentUser"
  // get it from window explicitly (safe!)
  console.log(global.currentUser.name); // John



  if (!global.Promise) {
    console.log("Your browser is really old!");
  }