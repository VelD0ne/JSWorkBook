// 📁 main.js
import {sayHi, sayBye} from './Export and import(sayHi).js';

sayHi('John'); // Hello, John!
sayBye('John'); // Bye, John!


// 📁 main.js alternative way to import
import * as say from './Export and import(sayHi).js';

say.sayHi('John');
say.sayBye('John');



// 📁 main.js
import {sayHi as hi, sayBye as bye} from './Export and import(sayHi).js';

hi('John'); // Hello, John!
bye('John'); // Bye, John!



// 📁 main.js
import User from './Export and import(sayHi).js'; // not {User}, just User

new User('John');


// 📁 main.js
import {default as User, sayHi} from './Export and import(sayHi).js';

new User('John');

// 📁 main.js
import * as user from './user.js';

let User = user.default; // the default export
new User('John');
