const regexp = /я ((лю)б(лю)) м(((я)с)о)/gi;
const str = "я люблю мясо";

const array = [...str.matchAll(regexp)];

console.log(array[0]);

const obj3 = {
  name: "Nikita",
};
const obj = {
  name: "Z",
  obj1: { age: 12 },
};

console.log(obj);
const arrob = [{ obj3 }];
const arr = [obj, 5, 3, 6];
console.log(arr);

const chorus = "Because I'm happy. ";

console.log(`Chorus lyrics for "Happy": ${chorus.repeat(27)}`);

console.log("\u0130");


console.log(Object.entries(obj))