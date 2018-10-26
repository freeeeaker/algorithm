const assert = require('assert')

const radixSort = require('../src/radixSort.js')

describe('sort', () => {
  describe('radixSort', () => {

    it('radixSort() should return [1,2,3,4,5,6,7,8,9,10,111,222,1309]', () => {
      assert.deepEqual(radixSort([5,3,2,6,1,4,8,7,10,9,222,111,1309]), [1,2,3,4,5,6,7,8,9,10,111,222,1309])
    })

    it('radixSort() should return [-2, -1, 1,2,3,4,5,6,7,8,9,10,11]', () => {
      assert.deepEqual(
        radixSort([-1, -2,11,5,3,2,6,1,4,8,7,10,9]),[-2, -1, 1,2,3,4,5,6,7,8,9,10,11])
    })

    it('radixSort() should return [1,1,1,1,1,1]', () => {
      assert.deepEqual(radixSort([1,1,1,1,1,1]), [1,1,1,1,1,1])
    })

    it('radixSort() should return []', () => {
      assert.deepEqual(radixSort([]), [])
    })

    it('radixSort() should return [1]', () => {
      assert.deepEqual(radixSort([1]), [1])
    })

    it('radixSort() should return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]', () => {
      assert.deepEqual(radixSort([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    })

  })
})