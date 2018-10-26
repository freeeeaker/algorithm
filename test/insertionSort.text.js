const assert = require('assert')

const insertionSort = require('../src/insertionSort.js')

describe('sort', () => {
  describe('insertionSort', () => {

    it('insertionSort() should return [1,2,3,4,5,6]', () => {
      assert.deepEqual(insertionSort([5,3,2,6,1,4]), [1,2,3,4,5,6])
    })

    it('insertionSort() should return [1, 2, 2, 3, 3, 4, 5, 6, 12, 12, 12, 13, 123, 123, 123, 312]', () => {
      assert.deepEqual(
        insertionSort([5, 3, 12, 312, 12, 3, 123, 123, 123, 12, 13, 2, 2, 6, 1, 4]),
        [1, 2, 2, 3, 3, 4, 5, 6, 12, 12, 12, 13, 123, 123, 123, 312])
    })

    it('insertionSort() should return [1,1,1,1,1,1]', () => {
      assert.deepEqual(insertionSort([1,1,1,1,1,1]), [1,1,1,1,1,1])
    })

    it('insertionSort() should return []', () => {
      assert.deepEqual(insertionSort([]), [])
    })

    it('insertionSort() should return [1]', () => {
      assert.deepEqual(insertionSort([1]), [1])
    })

    it('insertionSort() should return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]', () => {
      assert.deepEqual(insertionSort([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    })

  })
})