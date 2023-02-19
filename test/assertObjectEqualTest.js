const assertObjectsEqual = require('../assertObjectsEqual');

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