// 桶排序
// 思路: 将数据分成 几组顺序的 子数组， 子数组在排序。 然后合并
// 时间复杂度 O(n + k)
const insertionSort = require('./insertionSort.js')

module.exports = function bucketSort (arr, bucketNum) {
  if (arr.length < 2) return arr
  var max = arr[0]
  var min = arr[0]
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i]
    }
    if (arr[i] > max) {
      max = arr[i]
    }
  }

  bucketNum = bucketNum || 5
  var averge = Math.floor((max - min) / bucketNum) + 1  // importat +1是为了防止出现 averge 为 0 的情况
  var bucketArray = []
  for (var i = 0; i < arr.length; i++) {
    var index = Math.floor((arr[i] - min) / averge)
    if (bucketArray[index]) {
      bucketArray[index].push(arr[i])
    } else {
      bucketArray[index] = [arr[i]]
    }
  }
  var array = []
  for (var i = 0; i < bucketArray.length; i++) {
    if (bucketArray[i]) {
      bucketArray[i] = insertionSort(bucketArray[i])
      array.push(...bucketArray[i])
    }
  }
  return array
}