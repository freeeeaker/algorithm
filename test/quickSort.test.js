const assert = require('assert')

const quickSort = require('../src/quickSort.js')

describe('sort', () => {
  describe('quickSort', () => {

    it('quickSort() should return [1,2,3,4,5,6,7,8,9,10]', () => {
      assert.deepEqual(quickSort([5,3,2,6,1,4,8,7,10,9]), [1,2,3,4,5,6,7,8,9,10])
    })

    it('quickSort() should return [1,2,3,4,5,6,7,8,9,10,11]', () => {
      assert.deepEqual(
        quickSort([11,5,3,2,6,1,4,8,7,10,9]),[1,2,3,4,5,6,7,8,9,10,11])
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