const assert = require('assert')

const heapSort = require('../src/heapSort.js')

describe('sort', () => {
  describe('heapSort', () => {

    it('heapSort() should return [1,2,3,4,5,6,7,8,9,10]', () => {
      assert.deepEqual(heapSort([5,3,2,6,1,4,8,7,10,9]), [1,2,3,4,5,6,7,8,9,10])
    })

    it('heapSort() should return [1,2,3,4,5,6,7,8,9,10,11]', () => {
      assert.deepEqual(
        heapSort([11,5,3,2,6,1,4,8,7,10,9]),[1,2,3,4,5,6,7,8,9,10,11])
    })

    it('heapSort() should return [1,1,1,1,1,1]', () => {
      assert.deepEqual(heapSort([1,1,1,1,1,1]), [1,1,1,1,1,1])
    })

    it('heapSort() should return []', () => {
      assert.deepEqual(heapSort([]), [])
    })

    it('heapSort() should return [1]', () => {
      assert.deepEqual(heapSort([1]), [1])
    })

    it('heapSort() should return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]', () => {
      assert.deepEqual(heapSort([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    })

  })
})