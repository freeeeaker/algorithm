// 基数排序
// 思路: 从 地位到高位排序 !不支持 负数

module.exports = function radixSort (arr) {
  if (arr.length < 2) return arr
  var max = arr[0]
  var min = arr[0]
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i]
    if (arr[i] < min) min = arr[i]
  }
  var bucketArr = []
  var maxDigit = max.toString().length
  var n = 1
  var mod = 10
  console.log(maxDigit)
  for (var i = 0; i < maxDigit; i++) {
    for (var j = 0; j < arr.length; j++) {
      var dig = Math.floor(arr[j] % mod / n)
      if (!bucketArr[dig]) {
        bucketArr[dig] = [arr[j]]
      } else {
        bucketArr[dig].push(arr[j])
      }
    }
    var pos = 0
    for (var j = 0; j < bucketArr.length; j++) {
      while (bucketArr[j] && bucketArr[j].length) {
        arr[pos++] = bucketArr[j].shift()
      }
    }
    mod *= 10
    n *= 10
  }
  return arr
}