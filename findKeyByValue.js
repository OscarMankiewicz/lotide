const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`✅✅✅ ${actual} === ${expected}`);
    } else {
      console.log(`🛑🛑🛑 ${actual} !== ${expected}`);
    }
  };

  //function needs to take a object and value ✓
  const findKeyByValue = function (obj, value) {
    //scan through the object ✓
    //for of loop? X || for in loop? ✓
    for (const key in obj) {
        //return the key which contains the defined value ✓
        if (obj[key] === value) {
            return key;
        }
    }
    return undefined;
  }
  const bestTVShowsByGenre = { 
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire"
  };

  const bestMoviesByGenre = {
    sci_fi: "Intersteller",
    action: "The Dark Knight",
    comedy: "The Hangover"
  }
  
  assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

  assertEqual(findKeyByValue(bestMoviesByGenre, "Intersteller"), "sci_fi");
  assertEqual(findKeyByValue(bestMoviesByGenre, "Terminator 2"), undefined);