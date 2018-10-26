const assert = require('assert')

const quickSort = require('../src/quickSort.js')

describe('sort', () => {
  describe('quickSort', () => {

    it('quickSort() should return [1,2,3,4,5,6]', () => {
      assert.deepEqual(quickSort([5,3,2,6,1,4]), [1,2,3,4,5,6])
    })

    it('quickSort() should return [1, 2, 2, 3, 3, 4, 5, 6, 12, 12, 12, 13, 123, 123, 123, 312]', () => {
      assert.deepEqual(
        quickSort([5, 3, 12, 312, 12, 3, 123, 123, 123, 12, 13, 2, 2, 6, 1, 4]),
        [1, 2, 2, 3, 3, 4, 5, 6, 12, 12, 12, 13, 123, 123, 123, 312])
    })

    it('quickSort() should return [1,1,1,1,1,1]', () => {
      assert.deepEqual(quickSort([1,1,1,1,1,1]), [1,1,1,1,1,1])
    })

    it('quickSort() should return []', () => {
      assert.deepEqual(quickSort([]), [])
    })

    it('quickSort() should return [1]', () => {
      assert.deepEqual(quickSort([1]), [1])
    })

    it('quickSort() should return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]', () => {
      assert.deepEqual(quickSort([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    })

  })
})