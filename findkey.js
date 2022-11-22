// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
//   }
// };
// Implement the function findKey which takes in an object and a callback. It should scan the object and return the first key for which the callback returns a truthy value. If no key is found, then it should return undefined.

// input


// process
const findKey = function(object, action)  {
  //It should scan the object and return the first key which contains the given value.
  for (const key in object) {
    if(action(object[key])){
      return key;
    }
    //  console.log(key);
    //  console.log(object[key]); 
    //  console.log(action(object[key]));
  }
};

// output


// console.log(findKey({
  //   "Blue Hill": { stars: 1 },
  //   "Akaleri":   { stars: 3 },
  //   "noma":      { stars: 2 },
  //   "elBulli":   { stars: 3 },
  //   "Ora":       { stars: 2 },
  //   "Akelarre":  { stars: 3 }
  // }, x => x.stars === 2)) // => "noma"
  
  module.exports = findKey;