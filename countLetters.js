const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`✅✅✅ ${actual} === ${expected}`);
    } else {
      console.log(`🛑🛑🛑 ${actual} !== ${expected}`);
    }
  };

const countLetters = function(sentence) {
    let letters = {}
    for (part of sentence) {
        if(isNaN(part) && part !== ' ') {
            if(letters[part]) {
                letters[part] += 1;
            } else {
                letters[part] = 1;
            }
        }
    }
    console.log(letters)
    return letters;
}

countLetters("lighthouse in the house")