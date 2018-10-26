// 归并排序
// 思路: 二分之后 排序

function merge (arr1, arr2) {
  var arr = []
  var left = [].slice.call(arr1)
  var right = [].slice.call(arr2)
  while(left.length && right.length) {
    arr.push(left[0] > right[0] ? right.shift() : left.shift())
  }
  return [...arr, ...left, ...right]
}

module.exports = function mergeSort (arr) {
  var array = [].slice.call(arr)
  if (array.length < 2) return array
  var middle = Math.floor(array.length / 2)
  var left = array.slice(0, middle)
  var right = array.slice(middle)
  return merge(mergeSort(left), mergeSort(right))
}