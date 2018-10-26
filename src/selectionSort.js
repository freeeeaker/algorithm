// 选择排序
// 思路: 每次排序找出 极限元素

module.exports = function selectionSort (arr) {
  if (arr.length < 2) return [...arr]
  var array = [].slice.call(arr)
  for (var i = 0; i < array.length; i++) {
    for (var j = i+1; j < array.length; j++) {
      if (array[j] < array[i]) {
        var tmp = array[i]
        array[i] = array[j]
        array[j] = tmp
      }
    }
  }
  return array
}