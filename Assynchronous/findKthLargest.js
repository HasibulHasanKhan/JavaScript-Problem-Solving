function findKthLargest(arr, k) {
  arr.sort((a, b) => b - a);
  return arr[k - 1];
}

console.log(findKthLargest([1, 3, 4, 5, 67, 77, 87, 4], 2));

//
// function klargest(arr, k) {
//   arr.sort((a, b) => b - a);
//   return arr[k - 1];
// }
