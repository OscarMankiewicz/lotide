let eqArrays = function(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        console.log(false)
        return false;
      }
    }
    console.log(true)
    return true;
}


const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`✅✅✅ ${actual} === ${expected}`);
    } else {
      console.log(`🛑🛑🛑 ${actual} !== ${expected}`);
    }
};


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





const multiColorShirtObject = { 
    colors: ["red", "blue"], 
    size: "medium" 
};

const anotherMultiColorShirtObject = { 
    size: "medium", 
    colors: ["red", "blue"] 
};

assertEqual(eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject), true); // => true

const longSleeveMultiColorShirtObject = { 
    size: "medium", 
    colors: ["red", "blue"], 
    sleeveLength: "long" 
};

assertEqual(eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject), false); // => false