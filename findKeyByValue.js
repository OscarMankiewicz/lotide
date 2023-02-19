//function needs to take a object and value ✓
const findKeyByValue = function(obj, value) {
  //scan through the object ✓
  //for of loop? X || for in loop? ✓
  for (const key in obj) {
    //return the key which contains the defined value ✓
    if (obj[key] === value) {
      return key;
    }
  }
  return undefined;
};

module.exports = findKeyByValue;