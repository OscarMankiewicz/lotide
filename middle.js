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

let assertArraysEqual = function(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      console.log(`🛑🛑🛑 ${arr1} is not equal to ${arr2}`)
      return false;
    }
  }
  console.log(`✅✅✅ ${arr1} is equal to ${arr2}`)
  return true;
}

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

middle([1,2,3,4,5])
middle([1,2,3,4])
middle([1,2])