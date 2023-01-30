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
