// problem : Implement binary search on a sorted array.

// Implementation of Binary Search (Iterative) :
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}

const sortedArray = [1, 3, 5, 7, 9, 11, 15, 18, 21];
console.log(binarySearch(sortedArray, 7));
console.log(binarySearch(sortedArray, 10));

// Recursive Implementation of Binary Search :

function binarySearchRecursive(arr, target, left = 0, right = arr.length - 1) {
  if (left > right) {
    return -1;
  }

  let mid = Math.floor((left + right) / 2);

  if (arr[mid] === target) {
    return mid;
  } else if (arr[mid] < target) {
    return binarySearchRecursive(arr, target, mid + 1, right);
  } else {
    return binarySearchRecursive(arr, target, left, mid - 1);
  }
}

console.log(binarySearchRecursive(sortedArray, 7)); // Output: 3
console.log(binarySearchRecursive(sortedArray, 10)); // Output: -1 (Not found)
