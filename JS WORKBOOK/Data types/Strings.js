let single = 'single-quoted';
let double = "double-quoted";

let backticks = `backticks`;


function sum(a, b) {
    return a + b;
}

console.log(`1 + 2 = ${sum(1, 2)}.`); // 1 + 2 = 3.

let guestList = `Guests:
 * John
 * Pete
 * Mary
`;

console.log(guestList); // a list of guests, multiple lines

let guestList = "Guests:\n * John\n * Pete\n * Mary";

console.log(guestList); // a multiline list of guests

let str1 = "Hello\nWorld"; // two lines using a "newline symbol"

// two lines using a normal newline and backticks
let str2 = `Hello
World`;

console.log(str1 == str2); // true

console.log("\u00A9"); // ©
console.log("\u{20331}"); // 佫, a rare Chinese hieroglyph (long Unicode)
console.log("\u{1F60D}"); // 😍, a smiling face symbol (another long Unicode)

console.log('I\'m the Walrus!'); // I'm the Walrus!

console.log(`The backslash: \\`); // The backslash: \

console.log(`My\n`.length); // 3

let str = `Hello`;

// the first character
console.log(str[0]); // H
console.log(str.charAt(0)); // H

// the last character
console.log(str[str.length - 1]); // o


str = 'Hi';

//str[0] = 'h'; // error
//console.log(str[0]); // doesn't work

console.log('Interface'.toUpperCase()); // INTERFACE
console.log('Interface'.toLowerCase()); // interface
console.log('Interface' [0].toLowerCase()); // 'i'

str = 'Widget with id';

console.log(str.indexOf('Widget')); // 0, because 'Widget' is found at the beginning
console.log(str.indexOf('widget')); // -1, not found, the search is case-sensitive

console.log(str.indexOf("id")); // 1, "id" is found at the position 1 (..idget with id)

str = 'As sly as a fox, as strong as an ox';

let target = 'as'; // let's look for it

let pos = 0;
while (true) {
    let foundPos = str.indexOf(target, pos);
    if (foundPos == -1) break;

    console.log(`Found at ${foundPos}`);
    pos = foundPos + 1; // continue the search from the next position
}

str = "Widget";

if (~str.indexOf("Widget")) {
    console.log('Found it!'); // works
}


console.log(~2); // -3, the same as -(2+1)
console.log(~1); // -2, the same as -(1+1)
console.log(~0); // -1, the same as -(0+1)
console.log(~-1); // 0, the same as -(-1+1)

console.log("Widget with id".includes("Widget")); // true

console.log("Hello".includes("Bye")); // false


console.log("Widget".includes("id")); // true
console.log("Widget".includes("id", 3)); // false, from position 3 there is no "id"

console.log("Widget".startsWith("Wid")); // true, "Widget" starts with "Wid"
console.log("Widget".endsWith("get")); // true, "Widget" ends with "get"

str = "stringify";
console.log(str.slice(0, 5)); // 'strin', the substring from 0 to 5 (not including 5)
console.log(str.slice(0, 1)); // 's', from 0 to 1, but not including 1, so only character at 0


str = "stringify";

// start at the 4th position from the right, end at the 1st from the right
console.log(str.slice(-4, -1)); // 'gif'


str = "stringify";

// these are same for substring
console.log(str.substring(2, 6)); // "ring"
console.log(str.substring(6, 2)); // "ring"

// ...but not for slice:
console.log(str.slice(2, 6)); // "ring" (the same)
console.log(str.slice(6, 2)); // "" (an empty string)


str = "stringify";
console.log(str.substr(-4, 2)); // 'gi', from the 4th position get 2 characters

console.log('a' > 'Z'); // true

// different case letters have different codes
console.log("z".codePointAt(0)); // 122
console.log("Z".codePointAt(0)); // 90

console.log(String.fromCodePoint(90)); // Z

str = '';

for (let i = 65; i <= 220; i++) {
    str += String.fromCodePoint(i);
}
console.log(str);
// ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}~
// ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜ