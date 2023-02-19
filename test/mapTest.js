const map = require('../map')

const words = ["thorn", "hawkmoon","icebreaker","cloudstrike","riskrunner"]
const results1 = map(words, word => word[0]);
console.log(results1);
