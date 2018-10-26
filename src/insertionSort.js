module.exports = function insertionSort (arr) {
  var array = [].slice.call(arr)
  for (var i = 1; i < array.length; i++) {
    for (var j = 0; j < i; j++) {
      if (array[i] < array[j]) {
        const num = array[i]
        array.splice(i, 1)
        array.splice(j, 0, num)
      }
    }
  }
  return array
}