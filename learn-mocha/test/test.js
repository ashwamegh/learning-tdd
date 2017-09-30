const assert = require('assert');
const C = require('../cash.js');

describe('Cash Register', () => {
  describe('Module C', () => {
    it('should have a getChange Method', () => {
      assert.equal(typeof C, 'object');
      assert.equal(typeof C.getChange, 'function');
    });

    it('getChange(210,300) should return [50,20,20]', () => {
      assert.deepEqual(C.getChange(210, 300), [50, 20, 20]);
    });

    it('getChange(90,200) should return [50,50,10]', () => {
      assert.deepEqual(C.getChange(90, 200), [100, 10]);
    });

    it('getChange(1487,10000) should equal [5000, 2000, 1000, 500, 10, 2, 1 ]', () => {
      assert.deepEqual(C.getChange(1487, 10000), [5000, 2000, 1000, 500, 10, 2, 1]);
    });
  });
});
