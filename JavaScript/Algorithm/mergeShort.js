// Create a function that performs merge sort on an array

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr; // Base case: already sorted
  }

  // Split array into left and right halves
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  // Merge the sorted halves
  return merge(left, right);
}

function merge(left, right) {
  let sortedArray = [];
  let i = 0,
    j = 0;

  // Merge elements from both halves in sorted order
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      sortedArray.push(left[i]);
      i++;
    } else {
      sortedArray.push(right[j]);
      j++;
    }
  }

  // Add any remaining elements
  return sortedArray.concat(left.slice(i)).concat(right.slice(j));
}

// Example usage:
const array = [64, 34, 25, 12, 22, 11, 90];
console.log(mergeSort(array));
// Output: [11, 12, 22, 25, 34, 64, 90]
