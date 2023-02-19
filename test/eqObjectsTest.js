const assertEqual = require('../assertEqual');
const eqObjects = require('../eqObjects');

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