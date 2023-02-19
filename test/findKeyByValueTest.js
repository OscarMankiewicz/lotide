const assertEqual = require('../assertEqual');
const findKeyByValue = require('../findKeyByValue');

const bestTVShowsByGenre = {
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire"
  };
  
  const bestMoviesByGenre = {
    sci_fi: "Intersteller",
    action: "The Dark Knight",
    comedy: "The Hangover"
  };
    
  assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
  
  assertEqual(findKeyByValue(bestMoviesByGenre, "Intersteller"), "sci_fi");
  assertEqual(findKeyByValue(bestMoviesByGenre, "Terminator 2"), undefined);