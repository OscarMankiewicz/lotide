const assertEqual = require('./assertEqual');

const head = function(array) {
  let array2 = array.slice(0);
  let value = array2[0];
  console.log(value)
  return value;
};

module.exports = head;