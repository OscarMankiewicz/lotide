const eqArrays = require('./eqArrays')

const eqObjects = function(obj1, obj2) {
    //check the number of keys are equal
    if (Object.keys(obj1).length !== Object.keys(obj2).length) {
        return false;
    }
    //'for of loop' to loop through obj1
    for (const key of Object.keys(obj1)) {
        //check if both values are arrays and compare them using 'eqArrays'
        if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])) {
            if (!eqArrays(obj1[key], obj2[key])) {
                return false;
            }
        // check if both values are not arrays and compare them
        } else if (obj1[key] !== obj2[key]) {
            return false;
        } 
    }
    return true;
};

module.exports = eqObjects;