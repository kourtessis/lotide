// const {middle, assertArraysEqual} = require('../middle');


// console.log(assertArraysEqual(middle(["tom", "dick", "harry", "james", "susan"]), ["harry"]));
// console.log(assertArraysEqual(middle([1, 2, 3, 4]), [2,3]));


// console.log(middle([1, 2, 3]))
// console.log (middle([1]))
// console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4])

// middle([1]) // => []
// middle([1, 2]) // => []
// middle([1, 2, 3]) // => [2]
// middle([1, 2, 3, 4, 5]) // => [3]
// middle([1, 2, 3, 4]) // => [2, 3]
// middle([1, 2, 3, 4, 5, 6]) // => [3, 4]

const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it("returns Lighthouse for [Hello, Lighthouse, Labs]", () => {
    assert.deepEqual(middle(["Hello", "Lighthouse", "Labs"]), ["Lighthouse"]);
  });

  it("returns harry for [tom, dick, harry, james, susan]", () => {
  assert.deepEqual(middle(["tom", "dick", "harry", "james", "susan"]), ["harry"]);
});

});