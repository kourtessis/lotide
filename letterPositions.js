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
//     console.log(`assertion passed:${arr1} === ${arr2}`)
//     return
//     } else {
//       console.log(`assertion failed:${arr1} !== ${arr2}`)
//       return
//     }
  
// }



const letterPositions = function(sentence) {

  const results = {};
  // logic to update results here
   for (let letter of sentence){
    if(letter !== ''){
      if(!results[letter]){
        results[letter] = [sentence.indexOf(letter)]
      } else {
        let count = results[letter].length - 1
        results[letter].push(sentence.indexOf(letter,results[letter][count] + 1 ))
      }
    }
   }
  return results;
};
// assertArraysEqual(letterPositions("hello").e, [1]);

module.exports = letterPositions;