 arr = new Array();
arr = [];
 fruits = ["Apple", "Orange", "Plum"];
console.log( fruits ); // Apple,Orange,Plum
fruits[2] = 'Pear'; // now ["Apple", "Orange", "Pear"]

fruits[3] = 'Lemon'; // now ["Apple", "Orange", "Pear", "Lemon"]
console.log(fruits[0]); // Apple
console.log(fruits[1]); // Orange
console.log(fruits[2]); // Plum
console.log( fruits.length ); // 3


console.log( fruits.pop() ); // remove "Pear" and console.log it

console.log( fruits ); // Apple, Orange

fruits.push("Pear");

console.log( fruits ); // Apple, Orange, Pear

fruits = ["Apple", "Orange", "Pear"];

console.log( fruits.shift() ); // remove Apple and console.log it

console.log( fruits ); // Orange, Pear

ruits = ["Orange", "Pear"];

fruits.unshift('Apple');

console.log( fruits ); // Apple, Orange, Pear


fruits = ["Apple"];

fruits.push("Orange", "Peach");
fruits.unshift("Pineapple", "Lemon");

// ["Pineapple", "Lemon", "Apple", "Orange", "Peach"]
console.log( fruits );


fruits = ["Apple", "Orange", "Plum"];

// iterates over array elements
for ( fruit of fruits) {
  console.log( fruit );
}


 arr = ["Apple", "Orange", "Pear"];

for ( key in arr) {
  console.log( arr[key] ); // Apple, Orange, Pear
}



 arr = [1, 2, 3, 4, 5];

arr.length = 2; // truncate to 2 elements
console.log( arr ); // [1, 2]

arr.length = 5; // return length back
console.log( arr[3] ); // undefined: the values do not return


 arr = new Array("Apple", "Pear", "etc");

 matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  console.log( matrix[1][1] ); // 5, the central element


   arr = [1, 2, 3];

console.log( arr ); // 1,2,3
console.log( String(arr) === '1,2,3' ); // true