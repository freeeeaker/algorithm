// 计数排序
// 思路: 判断 某一个数 也有多少个数 是小于它的 得到他 位于数组的索引

module.exports = function countingSort (arr) {
  var array = []
  for (var i = 0; i < arr.length; i++) {
    var num = 0
    var equal = 0
    for (var j = 0; j < arr.length; j++) {
      if (i === j) continue
      if (arr[j] < arr[i]) {
        num++
      } else if (arr[j] === arr[i]) {
        equal++
      }
    }
    for (var k = num; k <= num + equal; k++) {
      array[k] = arr[i]
    }
  }
  return array
}