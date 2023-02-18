const assert = require('chai').assert;
const tail = require('../tail')

describe("tail", () => {
    it("returns 'Lighouse' for ['Yo Yo', 'Lighthouse', 'Labs']", () => {
        assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), ["Lighthouse"]);
    });
});

//const words = ["Yo Yo", "Lighthouse", "Labs"];
//tail(words); 