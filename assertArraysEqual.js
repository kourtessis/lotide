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
    console.log(`✅✅✅ assertion passed:${arr1} === ${arr2}`)
    return
    } else {
      console.log(`🛑🛑🛑 assertion failed:${arr1} !== ${arr2}`)
      return
    }
  
}

module.exports = assertArraysEqual;

// assertArraysEqual([1,2,3],[1,2,3]);