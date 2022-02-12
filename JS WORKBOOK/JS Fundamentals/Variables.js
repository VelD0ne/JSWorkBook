//let message;
let message = 'Hello!'; // define the variable and assign the value

message = 'Hello'; // store the string 'Hello' in the variable named
message = 'World!'; // value changed
console.log(message);// shows the variable content


// Examples of incorrect variable names:
let userName;
let test123;
let $ = 1; // declared a variable with the name "$"
let _ = 2; // and now a variable with the name "_"



// Примеры неправильных имён переменных:

// let 1a; // cannot start with a digit

// let my-name; // hyphens '-' aren't allowed in the name



const myBirthday = '18.04.1982';
myBirthday = '01.01.2001'; // error, can't reassign the constant!

const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";

// ...when we need to pick a color
let color = COLOR_ORANGE;
console.log(color); // #FF7F00