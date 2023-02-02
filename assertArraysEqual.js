const assertEqual = function(actual, expected) {
  if (Array.isArray(actual) && Array.isArray(expected)) {
    assertArraysEqual(actual, expected);
  } else {
    if (actual === expected) {
      console.log(`✅✅✅ ${actual} === ${expected}`);
    } else {
      console.log(`🛑🛑🛑 ${actual} !== ${expected}`);
    }
  }
};

const assertArraysEqual = function(arr1, arr2) {
  // Check if arrays have the same length
  if (arr1.length !== arr2.length) {
    console.log("Arrays are not of equal length.");
    return;
  }
  
  // Compare elements of both arrays
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      console.log("Arrays are not equal.");
      return;
    }
  }
  
  // If all checks passed, arrays are equal
  console.log("Arrays are equal.");
};

assertEqual([1,2,3,4,5],[1,2,3,4,5]);