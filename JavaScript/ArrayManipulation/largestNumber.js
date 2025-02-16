function findLargestNumber(arr) {
  if (arr.length === 0) return null;
  return Math.max(...arr);
}

console.log(findLargestNumber([3, 1, 9, 7, 2])); // Output: 9
console.log(findLargestNumber([-5, 10, 0, 23, -8])); // Output: 23
console.log(findLargestNumber([])); // Output: null
