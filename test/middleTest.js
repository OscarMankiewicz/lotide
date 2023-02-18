const assert = require('chai').assert;
const middle = require('../middle')

describe("middle", () => {
    it("returns [3] for [1, 2, 3, 4, 5]", () => {
        assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
    });

    it("returns [2,3] for [1, 2, 3, 4]", () => {
        assert.deepEqual(middle([1, 2, 3, 4]), [2,3]);
    });

    it("returns [1,2] for [1, 2]", () => {
        assert.deepEqual(middle([1, 2]), [1,2]);
    });
});


/*
describe("#head", () => {
    it("returns 1 for [1, 2, 3]", () => {
        assert.strictEqual(head([1, 2, 3]), 1);
    });

    it("returns 5 for ['5']", () => {
        assert.strictEqual(head(['5']), '5');
    });
});
*/
//middle([1,2,3,4,5])
//middle([1,2,3,4])
//middle([1,2])