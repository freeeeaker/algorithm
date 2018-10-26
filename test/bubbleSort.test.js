const assert = require('assert')

const bsort = require('../src/bubbleSort.js')

describe('sort', () => {
  describe('bsort', () => {

    it('bsort() should return [1,2,3,4,5,6]', () => {
      assert.deepEqual(bsort([5,3,2,6,1,4]), [1,2,3,4,5,6])
    })

    it('bsort() should return [1, 2, 2, 3, 3, 4, 5, 6, 12, 12, 12, 13, 123, 123, 123, 312]', () => {
      assert.deepEqual(
        bsort([5, 3, 12, 312, 12, 3, 123, 123, 123, 12, 13, 2, 2, 6, 1, 4]),
        [1, 2, 2, 3, 3, 4, 5, 6, 12, 12, 12, 13, 123, 123, 123, 312])
    })

    it('bsort() should return [1,1,1,1,1,1]', () => {
      assert.deepEqual(bsort([1,1,1,1,1,1]), [1,1,1,1,1,1])
    })

    it('bsort() should return []', () => {
      assert.deepEqual(bsort([]), [])
    })

    it('bsort() should return [1]', () => {
      assert.deepEqual(bsort([1]), [1])
    })

    it('bsort() should return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]', () => {
      assert.deepEqual(bsort([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    })

  })
})