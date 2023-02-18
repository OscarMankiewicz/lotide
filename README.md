# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @oscar_mank/lotide`

**Require it:**

`const _ = require('@oscar_mank/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

- `assertArraysEqual`: asserts any 2 arrays to make sure they are equal.
- `assertEqual`: asserts any 2 values (strings, boolans, numbers) to make sure they are equal.
- `assertObjectEqual`: asserts any 2 objects to make sure they are equal.
- `countLetters`: counts the letters of a string and returns the amount.
- `countOnly`: counts a specified string from an array and returns the amount.
- `eqArrays`: loops through 2 arrays to make sure they are the same.
- `eqObjects`: loops through 2 objects to make sure they are the same.
- `findKey`: finds a specified key in a object.
- `findKeyByValue`: finds a key by a specified value.
- `flattten`: takes arrays of arrays and returns them as one array.
- `head`: returns the first value of an array.
- `letterPosition`: returns the letter positions of a specified letter in a string.
- `map`: returns the first index of every value in an array.
- `middle`: returns the middle value/values of an array.
- `tail`: returns the last value of an array.
- `takeUntil`: moves values from one array to another until a specified value stops it.
- `without`: removes specified values from an array and returns the array without that value.
