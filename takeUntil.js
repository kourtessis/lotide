// The function will return a "slice of the array with elements taken from the beginning." It should keep going until the callback/predicate returns a truthy value.

// input:

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];


const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];


// process 
const takeUntil = function(array, callback) {
  // ...
  let result = [];
  for(let x of array){
    if(callback(x)){
      return result
    } else {
      result.push(x);
    }
  }
  return result
} 


// output

// [ 1, 2, 5, 7, 2 ]
// --
// [ 'I\'ve', 'been', 'to', 'Hollywood' ]


const results1 = takeUntil(data1, x => x < 0);
console.log(results1);
console.log('---');
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);
