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

 let without = function(source, itemsToRemove) {
  return source.filter(function(item) {
    return !itemsToRemove.includes(item);
  });
}
console.log(without([1,2,3,4,5],[1]))