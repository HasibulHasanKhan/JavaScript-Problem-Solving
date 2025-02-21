// problem : Write a function that finds the missing number in a given integer array containing numbers from 1 to n.

function findMissingNumber(arr) {
  let expectedNum = (n * (n + 1)) / 2;

  let actualSum = arr.reduce((sum, num) => sum + num, 0);

  return expectedNum - actualSum;
}

const arr = [1, 2, 4, 5, 6];
const n = 6;
console.log(findMissingNumber(arr, n));

// Alternative Approach: Using XOR (O(N))
