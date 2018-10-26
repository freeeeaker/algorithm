// 堆排序
// 思路， 构建一个堆。 然后将 最顶层数据 与 最后一个数据 替换，收集，排序堆。 每次排序得到最顶层数据集合 即为所要数据

function buildHeap (arr) {
  for (var i = Math.floor(arr.length/2); i >= 0; i--) {
    heapify(arr, i)
  }
}

function heapify (arr, i) {
  var left = 2 * i + 1
  var right = 2 * i + 2
  var min = i
  if (left < arr.length && arr[left] < arr[min]) {
    min = left
  }
  if (right < arr.length && arr[right] < arr[min]) {
    min = right
  }
  if (min !== i) {
    swap(arr, i, min)
    heapify(arr, min)
  }
}

function swap(arr, i, j) {
  var temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

module.exports = function heapSort (arr) {
  buildHeap(arr)
  var array = []
  while(arr.length) {
    swap(arr, 0, arr.length - 1)
    array.push(arr.pop())
    heapify(arr, 0)
  }
  return array
}