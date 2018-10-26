// 插入排序
// 思路: 把数组 分为 有序 和 无序 两列，将无序 数组的 元素 插入到 有序数组

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