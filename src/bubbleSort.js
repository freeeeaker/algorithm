// 冒泡排序
// 思路: 相邻元素交换

module.exports = function bubbleSort (arr) {
  var array = [].slice.call(arr)
  for (var j = 0; j < array.length; j++) {
    for (var i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i+1]) {
        var tmp = array[i]
        array[i] = array[i+1]
        array[i+1] = tmp
      }
    }
  }
  return array
} 