//map function will take 2 arguments: array to map and callback function
// map function will return a new array based on results of callback function
const eqArrays = function(arr1, arr2){
  if(arr1.length !== arr2.length){
    return false
  } 
  for (i = 0; i < arr1.length; i++){
    // console.log(arr1[i], arr2[i]);
    if (arr1[i] !== arr2[i]){
      return false
    } 
  }
  return true;
}

const assertArraysEqual = function (arr1, arr2){
  if(eqArrays(arr1,arr2)){
    console.log(`assertion passed:${arr1} === ${arr2}`)
    return
    } else {
      console.log(`assertion failed:${arr1} !== ${arr2}`)
      return
    }
  
}

// const words = ["ground", "control", "to", "major", "tom"];
// const words = ["never", "gonna", "give", "you", "up"];
const words = ["I", "can", "do", "this"];

const map = function (array, callback) {
 
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}
const results1 = map(words, word => word[0]);
assertArraysEqual(results1,["g","c","t","m","t"] );
assertArraysEqual(map(words, word => word[0]), ["n", "g", "g", "y", "u"]);
assertArraysEqual(map(words, word => word[0]), ["I", "c", "d", "t"])