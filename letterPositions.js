 const letterPositions = function(sentence) {
  //object needs to show the letter and the letter location (zero-index)
  const results = {};
  // for loop or for of loop to loop through the string
  for (let i = 0; i < sentence.length; i++) {
        
    let letter = sentence[i];
    if (results[letter]) {
      //if the array already exists add the location to the existing array
      results[letter].push(i);
    } else {
      //create an array for every letter and mark its location
      results[letter] = [i];
    }
  }
    
  return results;
};

module.exports = letterPositions;