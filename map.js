let eqArrays = function(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        console.log(false)
        return false;
      }
    }
    console.log(true)
    return true;
  }

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log("Arrays are equal.");
    return;
  } else {
    console.log("Arrays are not equal.")
  }
};

const words = ["thorn", "hawkmoon","icebreaker","cloudstrike","riskrunner"]
const map = function(array, callback) {
    const results = [];
    for (let item of array) {
        results.push(callback(item));
    }
    return results;
}
const results1 = map(words, word => word[0]);
console.log(results1);
