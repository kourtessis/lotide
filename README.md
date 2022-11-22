# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @kristak/lotide`

**Require it:**

`const _ = require('@kristak/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`
`const results = _.head([1, 2, 3]) // => 1


`
## Documentation

The following functions are currently implemented:

* `head([array])`: passes through an array and returns index 0, [0]. 

* `tail([array])`: passes through an array and returns everything after index 0. 

* `middle([array])`: takes in an array and returns one value if it's odd number of values. Returns two values if it's an even value of array and returns empty string arrays is empty or has two indexes [0,1]

* `countLetters("string")`: takes in a string or sentence and returns the letters encountered as well as the number of occurances of each letter. 

* `countOnly(allItems, itemsToCount)`:takes in two arguments; the first argument is is an array of strings we need to look through. Second argument, an object specifying what to count. (eg: a list of names and checking if that "name" occurs more than once; and returns in that specific name and how many times.)

* `eqArrays([array1],[array2])`: takes in two arrays and checks to see if array1 equals array2; returning true or false. 

* `eqObjects({object1},{object2})`: confirms if two object arguments (object1, object2) are indentical, will return true or false value.

* `findKey({object}, action)`: scans through objects keys and reutns the first true value. returns key for given value through function (action) parameter.

* `findKeyByValue({object}, value)`: scans through an object key-value pair searching for the matching "value" and returns the key. 

* `letterPositions("string" )`: takes in a string/sentences and outputs the index of the letters and outputs the index of the letter occurances. 
(eg: the L in "hello" outputs [2, 3])

* `map([array], callback)`: takes in an array and callback function and returns a new modified array based on action taken. (eg: [1, 2] * 2 will  return [2, 4]

* `takeUntil([array], callback)`: function takes in an array and function callback arguement, that will reutnr each item in an array until function returns falses condition. 
Function: takeUntil([ 1, 2, 5, 7, 2, -1, 2, 4, 5 ], x => x < 0)
Return: [ 1, 2, 5, 7, 2 ]

* `without(source, remove)`: function takes array arguement (source) and removed all items listed in second array argument (remove) and returns a new array with request indexs removed.
----Example----
Function: without([ 'pig','moose', 'cow', 'dog' ], [ 'moose', 'pig' ])
Return: [ 'cow', 'dog' ]
