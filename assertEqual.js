//function implementation

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🛑🛑🛑 ${actual} === ${expected}`);
  } else {
    console.log(`✅✅✅ ${actual} !== ${expected}`);
  }
};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1,1);
assertEqual(246,1);
assertEqual(1,"Lighthouse");
assertEqual("Lighthouse","Lighthouse");