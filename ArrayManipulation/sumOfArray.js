// Problem :Write a function that returns the sum of all elements in an array.

// Using the reduce() Method (Best Approach)

function sumArr(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}

console.log(sumArr([1, 2, 3, 4, 5])); // Output: 15
console.log(sumArr([-1, 10, -3, 8])); // Output: 14
console.log(sumArr([]));

// Using a for Loop (Manual Summation)

function sumArray(arrs) {
  let sum = 0;
  for (let i = 0; i < arrs.length; i++) {
    sum += arrs[i];
  }

  return sum;
}
console.log(sumArray([1, 2, 3, 4, 5]));
