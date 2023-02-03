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

let flatten = function(arr) {
  let flattened = []
  for (let i = 0; i < arr.length; i++) {
    if(Array.isArray(arr[i])) {
      flattened = flattened.concat(flatten(arr[i]));
    } else {
      flattened.push(arr[i]);
    }
  }
  console.log(flattened)
  return flattened;
}

flatten([1, 2, [3, 4], 5, [6]])
