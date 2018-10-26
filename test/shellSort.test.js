const assert = require('assert')

const shellSort = require('../src/shellSort.js')

describe('sort', () => {
  describe('shellSort', () => {

    it('shellSort() should return [1,2,3,4,5,6,7,8,9,10]', () => {
      assert.deepEqual(shellSort([5,3,2,6,1,4,8,7,10,9]), [1,2,3,4,5,6,7,8,9,10])
    })

    it('shellSort() should return [1,2,3,4,5,6,7,8,9,10,11]', () => {
      assert.deepEqual(
        shellSort([11,5,3,2,6,1,4,8,7,10,9]),[1,2,3,4,5,6,7,8,9,10,11])
    })

    it('shellSort() should return [1,1,1,1,1,1]', () => {
      assert.deepEqual(shellSort([1,1,1,1,1,1]), [1,1,1,1,1,1])
    })

    it('shellSort() should return []', () => {
      assert.deepEqual(shellSort([]), [])
    })

    it('shellSort() should return [1]', () => {
      assert.deepEqual(shellSort([1]), [1])
    })

    it('shellSort() should return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]', () => {
      assert.deepEqual(shellSort([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    })

  })
})