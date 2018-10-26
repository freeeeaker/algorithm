const assert = require('assert')

const bucketSort = require('../src/bucketSort.js')

describe('sort', () => {
  describe('bucketSort', () => {

    it('bucketSort() should return [1,2,3,4,5,6,7,8,9,10]', () => {
      assert.deepEqual(bucketSort([5,3,2,6,1,4,8,7,10,9]), [1,2,3,4,5,6,7,8,9,10])
    })

    it('bucketSort() should return [1,2,3,4,5,6,7,8,9,10,11]', () => {
      assert.deepEqual(
        bucketSort([11,5,3,2,6,1,4,8,7,10,9]),[1,2,3,4,5,6,7,8,9,10,11])
    })

    it('bucketSort() should return [1,1,1,1,1,1]', () => {
      assert.deepEqual(bucketSort([1,1,1,1,1,1]), [1,1,1,1,1,1])
    })

    it('bucketSort() should return []', () => {
      assert.deepEqual(bucketSort([]), [])
    })

    it('bucketSort() should return [1]', () => {
      assert.deepEqual(bucketSort([1]), [1])
    })

    it('bucketSort() should return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]', () => {
      assert.deepEqual(bucketSort([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    })

  })
})