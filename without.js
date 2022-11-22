// const eqArrays = function(arr1, arr2){
//   if(arr1.length !== arr2.length){
//     return false
//   } 
//   for (i = 0; i < arr1.length; i++){
//     // console.log(arr1[i], arr2[i]);
//     if (arr1[i] !== arr2[i]){
//       return false
//     } 
//   }
//   return true;
// }

// const assertArraysEqual = function(arr1, arr2){
//   if(eqArrays(arr1,arr2)){
//     console.log(`assertion passed:${arr1} === ${arr2}`)
//       return
//     } else {
//       console.log(`assertion failed:${arr1} !== ${arr2}`)
//       return
//     }
// }
// assertArraysEqual([1,2,3],[1,2,3]);


// const without = function(source, itemsToRemove){
//  let newArray = [];
//  for(let i = 0; i < source.length; i++){
//   for(let n =0; n < itemsToRemove.length; n++){
//     if(source[i] === itemsToRemove[n]) break
//     newArray.push(source[i])
//   }
//  } 
//  return newArray
// }

const without = function(source, itemsToRemove) {
  let newArray = [];
  for (let i = 0; i < source.length; i++) {
    if (itemsToRemove.includes(source[i])) continue;
    newArray.push(source[i]);
  }
  return newArray;
};


// console.log(without([1, 2, 3], [1])) // => [2, 3]
// console.log(without(["1", "2", "3"], [1, 2,"3"])) // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);

module.exports = without;