const assertArraysEqual = require('./assertArraysEqual')

let middle = function (arr1) {
  let result = []
  if (arr1 <= 2) {
    console.log(result);
    return result;
  }

  if (arr1.length % 2 === 1) {
    result.push(arr1[Math.floor(arr1.length / 2)]);
  } else {
    result.push(arr1[arr1.length / 2 - 1]);
    result.push(arr1[arr1.length / 2]);
  }
  console.log(result);
  return result;
}

module.exports = middle;