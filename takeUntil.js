const takeUntil = function(array, callback) {
  //array where elements are placed
  const result = [];
  //return a slice of the array with elements taken from the beginning
  for (let e of array) {
    result.push(e);
    if (callback(e)) {
      result.pop(e);
      break;
    }
  }
  //stop when the callback returns a truthy value
  return result;
};

module.exports = takeUntil;