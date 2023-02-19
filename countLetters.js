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

module.exports = countLetters;