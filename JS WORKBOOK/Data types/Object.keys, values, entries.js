// They are supported for:

// Map
// Set
// Array

let user = {
    name: "John",
    age: 30
  };
  
  // loop over values
  for (let value of Object.values(user)) {
    console.log(value); // John, then 30
  }


  let prices = {
    banana: 1,
    orange: 2,
    meat: 4,
  };
  
  let doublePrices = Object.fromEntries(
    // convert prices to array, map each key/value pair into another pair
    // and then fromEntries gives back the object
    Object.entries(prices).map(entry => [entry[0], entry[1] * 2])
  );
  
  console.log(doublePrices.meat); // 8
  