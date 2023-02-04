let eqArrays = function(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      console.log(false);
      return false;
    }
  }
  console.log(true);
  return true;
};
  
const eqObjects = function(obj1, obj2) {
  //check the number of keys are equal
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }
  //'for of loop' to loop through obj1
  for (const key of Object.keys(obj1)) {
    //check if both values are arrays and compare them using 'eqArrays'
    if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])) {
      if (!eqArrays(obj1[key], obj2[key])) {
        return false;
      }
      // check if both values are not arrays and compare them
    } else if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
    return;
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

const shirt = {
  color: "red",
  size: "medium",
};

const shirt2 = {
  size: "medium",
  color: "red",
};

const shirt3 = {
  size: "small",
  color: "blue",
  sleeve: "long"
};

assertObjectsEqual(shirt, shirt2);
assertObjectsEqual(shirt, shirt3);