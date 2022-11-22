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

// const assertArraysEqual = function (arr1, arr2){
//   if(eqArrays(arr1,arr2)){
//     console.log(`✅✅✅ assertion passed:${arr1} === ${arr2}`)
//     return
//     } else {
//       console.log(`🛑🛑🛑 assertion failed:${arr1} !== ${arr2}`)
//       return
//     }
  
// }
// assertArraysEqual([1,2,3],[1,2,3]);

// middle function w one or 2 elements = empty array
//middle function w  odd numbers = single element return in array
//middle function w even numbers = two elements in middle return in the array 

// ACTUAL FUNCTION
// const middle = function(array) {
//   let middleValue = [];
//   for (let i = 0; i < array.length; i++){
//     if(i % 2 !== 0) {
//       middleValue.push(array[a]);
//     }
//   }
//   console.log(middleValue);
//}

const middle = function(array) {
  let middleValues = []
  if (array.length < 3 ){
    return middleValues;
  } 
  let middleIndex = Math.round((array.length - 1) / 2)// 2
  if (array.length % 2 === 0){   //is even
    middleValues.push(array[middleIndex -1]);
    middleValues.push(array[middleIndex]);
  }
  if (array.length % 2 !== 0){ //is odd
    middleValues.push(array[middleIndex])
} 
return middleValues;
}



// before mocha/chai
// module.exports = {
  //   middle, assertArraysEqual
  //refactored lotide week2
  
  
  // console.log(middle([1, 2, 3]))
  // console.log (middle([1]))
  // console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4])
  
  // middle([1]) // => []
  // middle([1, 2]) // => []
  // middle([1, 2, 3]) // => [2]
  // middle([1, 2, 3, 4, 5]) // => [3]
  // middle([1, 2, 3, 4]) // => [2, 3]
  // middle([1, 2, 3, 4, 5, 6]) // => [3, 4]

  
  module.exports = middle