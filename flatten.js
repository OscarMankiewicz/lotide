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

module.exports = flatten;