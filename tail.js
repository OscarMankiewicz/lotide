const assertEqual = require('./assertEqual');

const tail = function(array) {
  let newarr = [].concat(array[1]);
  console.log(JSON.stringify(newarr));
  return newarr;
};

module.exports = tail;