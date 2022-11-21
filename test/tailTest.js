// const assertEqual = require('../assertEqual');
// const tail = require('../tail');


// const result = tail(["Hello", "Lighthouse", "Labs"]);


// console.log(assertEqual(result.length,2));
// console.log(assertEqual(result[0], "Lighthouse"));
// console.log(assertEqual(result[1], "Labs"));

const assert = require('chai').assert;
const tail   = require('../tail');

describe("#tail", () => {
  it("returns labs for [Hello, Lighthouse, Labs]", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse" , "Labs"]);
  });

  it("Confirm original array was not modified and contains 3 elements still.", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    tail(words);
    assert.lengthOf(words, 3)
  })

});