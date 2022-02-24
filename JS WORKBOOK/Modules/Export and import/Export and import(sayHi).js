
export let months = ['Jan', 'Feb', 'Mar','Apr', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// export a constant
export const MODULES_BECAME_STANDARD_YEAR = 2015;

// export a class
export class User {
  constructor(name) {
    this.name = name;
  }
}


export function sayHi(user) {
    alert(`Hello, ${user}!`);
  }  // no ; at the end


  // 📁 say.js
function sayHi(user) {
    alert(`Hello, ${user}!`);
  }
  
  function sayBye(user) {
    alert(`Bye, ${user}!`);
  }
  
  export {sayHi, sayBye}; // a list of exported variables


  export {sayHi as hi, sayBye as bye};


  export default class User { // just add "default"
    constructor(name) {
      this.name = name;
    }
  }

  // export default class { // no class name
  //   constructor() { }
  // }
  // export default function(user) { // no function name
  //   alert(`Hello, ${user}!`);
  // }
  // export a single value, without making a variable
  //export default ['Jan', 'Feb', 'Mar','Apr', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  function sayHi(user) {
    alert(`Hello, ${user}!`);
  }
  
  // same as if we added "export default" before the function
  export {sayHi as default};



  export {sayHi} from './say.js'; // re-export sayHi

export {default as User} from './user.js'; // re-export default



export {login, logout} from './helpers.js';

import {login, logout} from './helpers.js';
export {login, logout};

//export * from './user.js'; // to re-export named exports
//export {default} from './user.js'; // to re-export the default export
