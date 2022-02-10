// arr.push(...items) – adds items to the end,
// arr.pop() – extracts an item from the end,
// arr.shift() – extracts an item from the beginning,
// arr.unshift(...items) – adds items to the beginning.

 let arr = ["I", "study", "JavaScript"];

arr.splice(1, 1); // from index 1 remove 1 element

console.log( arr ); // ["I", "JavaScript"]


 arr = ["I", "study", "JavaScript", "right", "now"];

// remove 3 first elements and replace them with another
arr.splice(0, 3, "'s", "dance");

console.log( arr ) // now ["'s", "dance", "right", "now"]

 arr = ["I", "study", "JavaScript", "right", "now"];

// remove 2 first elements
 removed = arr.splice(0, 2);

console.log( removed ); // "I", "study" <-- array of removed elements


 arr = [1, 2, 5];

// from index -1 (one step from the end)
// dee 0 elements,
// then insert 3 and 4
arr.splice(-1, 0, 3, 4);

console.log( arr ); // 1,2,3,4,5





 arr = ["t", "e", "s", "t"];

console.log( arr.slice(1, 3) ); // e,s (copy from 1 to 3)

console.log( arr.slice(-2) ); // s,t (copy from -2 till the end)


 arr = [1, 2];

// create an array from: arr and [3,4]
console.log( arr.concat([3, 4]) ); // 1,2,3,4

// create an array from: arr and [3,4] and [5,6]
console.log( arr.concat([3, 4], [5, 6]) ); // 1,2,3,4,5,6

// create an array from: arr and [3,4], then add values 5 and 6
console.log( arr.concat([3, 4], 5, 6) ); // 1,2,3,4,5,6


 arr = [1, 2];

 arrayLike = {
  0: "something",
  1: "else",
  [Symbol.isConcatSpreadable]: true,
  length: 2
};

console.log( arr.concat(arrayLike) ); // 1,2,something,else




["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
    console.log(`${item} is at index ${index} in ${array}`);
  });


// arr.indexOf(item, from) – looks for item starting from index from, and returns the index where it was found, otherwise -1.
// arr.lastIndexOf(item, from) – same, but looks for from right to left.
// arr.includes(item, from) – looks for item starting from index from, returns true if found.


const arr = [NaN];
console.log( arr.indexOf(NaN) ); // -1 (should be 0, but === equality doesn't work for NaN)
console.log( arr.includes(NaN) );// true (correct)



 result = arr.find(function(item, index, array) {
    // if true is returned, item is returned and iteration is stopped
    // for falsy scenario returns undefined
  });


   users = [
    {id: 1, name: "John"},
    {id: 2, name: "Pete"},
    {id: 3, name: "Mary"}
  ];
  
   user = users.find(item => item.id == 1);
  
  console.log(user.name); // John



   results = arr.filter(function(item, index, array) {
    // if true item is pushed to results and the iteration continues
    // returns empty array if nothing found
  });



   users = [
    {id: 1, name: "John"},
    {id: 2, name: "Pete"},
    {id: 3, name: "Mary"}
  ];
  
  // returns array of the first two users
   someUsers = users.filter(item => item.id < 3);
  
  console.log(someUsers.length); // 2



   result = arr.map(function(item, index, array) {
    // returns the new value instead of item
  });


   lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
console.log(lengths); // 5,7,6



function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
  }
  
   arr = [ 1, 2, 15 ];
  
  arr.sort(compareNumeric);
  
  console.log(arr);  // 1, 2, 15


  [1, -2, 15, 2, 0, 8].sort(function(a, b) {
    console.log( a + " <> " + b );
    return a - b;
  });


   arr = [ 1, 2, 15 ];

arr.sort(function(a, b) { return a - b; });

console.log(arr);  // 1, 2, 15

arr.sort( (a, b) => a - b );


 countries = ['Österreich', 'Andorra', 'Vietnam'];

console.log( countries.sort( (a, b) => a > b ? 1 : -1) ); // Andorra, Vietnam, Österreich (wrong)

console.log( countries.sort( (a, b) => a.localeCompare(b) ) ); // Andorra,Österreich,Vietnam (correct!)



 arr = [1, 2, 3, 4, 5];
arr.reverse();

console.log( arr ); // 5,4,3,2,1




 names = 'Bilbo, Gandalf, Nazgul';

 arr = names.split(', ');

for ( name of arr) {
  console.log( `A message to ${name}.` ); // A message to Bilbo  (and other names)
}



 str = "test";

console.log( str.split('') ); // t,e,s,t






 value = arr.reduce(function(accumulator, item, index, array) {
    // ...
  }, [initial]);

// accumulator – is the result of the previous function call, equals initial the first time (if initial is provided).
// item – is the current array item.
// index – is its position.
// array – is the array.


 arr = [1, 2, 3, 4, 5];

 result = arr.reduce((sum, current) => sum + current, 0);

console.log(result); // 15



console.log(typeof {}); // object
console.log(typeof []); // same


console.log(Array.isArray({})); // false

console.log(Array.isArray([])); // true