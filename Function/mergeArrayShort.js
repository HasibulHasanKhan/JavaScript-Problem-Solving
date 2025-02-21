function mergeSortedArrays(arr1, arr2) {
  return arr1.concat(arr2).sort((a, b) => a - b);
}

console.log(mergeSortedArrays([3, 1, 5], [4, 2, 6]));

// Method 1: Using Two Pointers (Optimal Approach - O(n))
