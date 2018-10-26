const assert = require('assert')

const countingSort = require('../src/countingSort.js')

describe('sort', () => {
  describe('countingSort', () => {

    it('countingSort() should return [1,2,3,4,5,6,7,8,9,10]', () => {
      assert.deepEqual(countingSort([5,3,2,6,1,4,8,7,10,9]), [1,2,3,4,5,6,7,8,9,10])
    })

    it('countingSort() should return [1,2,3,4,5,6,7,8,9,10,11]', () => {
      assert.deepEqual(
        countingSort([11,5,3,2,6,1,4,8,7,10,9]),[1,2,3,4,5,6,7,8,9,10,11])
    })

    it('countingSort() should return [1,1,1,1,1,1]', () => {
      assert.deepEqual(countingSort([1,1,1,1,1,1]), [1,1,1,1,1,1])
    })

    it('countingSort() should return []', () => {
      assert.deepEqual(countingSort([]), [])
    })

    it('countingSort() should return [1]', () => {
      assert.deepEqual(countingSort([1]), [1])
    })

    it('countingSort() should return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]', () => {
      assert.deepEqual(countingSort([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    })

  })
})