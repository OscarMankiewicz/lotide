let eqArrays = function(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      console.log(`🛑🛑🛑 ${arr1} is not equal to ${arr2}`)
      return false;
    }
  }
  console.log(`✅✅✅ ${arr1} is equal to ${arr2}`)
  return true;
}

let flatten = function(arr) {
  let flattened = []
  for (let i = 0; i < arr.length; i++) {
    if(Array.isArray(arr[i])) {
      flattened = flattened.concat(flatten(arr[i]));
    } else {
      flattened.push(arr[i]);
    }
  }
  return flattened;
}

console.log(flatten([1, 2, [3, 4], 5, [6]]))
