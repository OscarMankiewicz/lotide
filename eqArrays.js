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

module.exports = eqArrays;