//constructor

const arr1 = Array(5, 4, 3, 2, 1);
const arr2 = [1, 2, 3, 4, 5];
const arr3 = Array(5);
const arr4 = [1, 2, 3, [8, 3, 3, [4, 5]]];
console.log(arr1, arr2, arr3);

//console.log(arr1.at()); returns element of array at following index

//concat retrurn a new array joined with array(s) value(s)
console.log(arr1.concat(arr2));

//copyWithin copy part of array and replace elements in array by copied elements and returns it
console.log(arr1.copyWithin(0, 3));

//enries return an array iterator that contains key/value
for (const [key, value] of arr4.entries()) {
  console.log(key + "=" + value);
}
// every return true if every element satisfies the testing function
console.log(arr1.every((elem) => elem >= 1));

//fill  changes all elements in an array to a static
//value, from a start index (default 0) to an end index (default array.length). It returns the modified array.
console.log(arr1.fill(0, 2, 4));

//filter returns new filtered array
console.log(arr2.filter((elem) => elem > 3));

//find return first found elem which satisfies testing function or indefiend if not found
console.log(arr2.find((elem) => elem === 3));

//findIndex return first found elem which satisfies testing function or -1 if not found
console.log(arr2.findIndex((elem) => elem === 3));

//flat return an array with decrease amount of inner arrays by defpth value and delete empty holes in array
console.log(arr4.flat());

//splice edit the array an returns deleted elements
console.log(arr2.splice(1, 2, 2, 3));
console.log(arr2);

//map and reduce
console.log(
  Array(100)
    .fill(1)
    .map((element, index) => index + 1)
    .reduce((acc, item) => (item % 2 === 0 ? [...acc, item] : acc), [])
);
