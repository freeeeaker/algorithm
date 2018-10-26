module.exports = function quickSort (arr) {
  if (arr.length <= 1) return [...arr]
  var privo = arr[0]
  var prev = []
  var last = []
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] < privo) {
      prev.push(arr[i])
    } else {
      last.push(arr[i])
    }
  }
  return [ ...quickSort(prev), privo, ...quickSort(last) ]
}