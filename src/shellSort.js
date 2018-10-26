const insertionSort = require('./insertionSort.js')

module.exports = function shellSort(arr) {
  if (arr.length < 2) return arr
  var len = arr.length
  var count = 0

  while(len > 1) {
    len = Math.ceil(len / 2)
    var childrenArr = []
    for (var j = 0; j < len; j++) {
      childrenArr.push([])
    }
    for (var k = 0; k < arr.length; k++) {
      childrenArr[k%len].push(arr[k])
    }
    for (var i = 0; i < childrenArr.length; i++) {
      childrenArr[i] = insertionSort(childrenArr[i])
    }
    for (var i = 0; i < childrenArr.length; i++) {
      for (var j = 0; j < childrenArr[i].length; j++) {
        arr[i + j * len] = childrenArr[i][j]
      }
    }
  }
  return arr
}