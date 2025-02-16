function findMinMax(arr) {
  if (arr.length === 0) {
    return null;
  } else {
    return {
      min: Math.min(...arr),
      max: Math.max(...arr),
    };
  }
}

console.log(findMinMax([3, 1, 9, 7, 2])); // Output: { min: 1, max: 9 }
console.log(findMinMax([-5, 10, 0, 23, -8])); // Output: { min: -8, max: 23 }
console.log(findMinMax([])); // Output: null

// Using a Loop (Manually Finding Min & Max)

function findMinMaxLoop(arr) {
  if (arr.length === 0) return null;

  let min = arr[0];
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) min = arr[i];

    if (arr[i] > max) max = arr[i];
  }
  return { min, max };
}
console.log(findMinMaxLoop([3, 11, 91, 7, 21]));

// Using reduce() (Functional Approach)
function findMinMaxReduce(arr) {
  if (arr.length === 0) return null;

  return arr.reduce(
    (acc, num) => ({
      min: Math.min(acc.min, num),
      max: Math.max(acc.max, num),
    }),
    { min: arr[0], max: arr[0] }
  );
}

// Example usage:
console.log(findMinMaxReduce([3, 1, 9, 7, 2])); // Output: { min: 1, max: 9 }
