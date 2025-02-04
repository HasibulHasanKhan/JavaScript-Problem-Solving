function chunkArray(arr, size) {
  let result = [];
  if (size <= 0) {
    return [];
  }

  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }

  return result;
}

// Example usage:
// console.log(chunkArray([1, 2, 3, 4, 5, 6, 7], 2));
// // Output: [[1, 2], [3, 4], [5, 6], [7]]

// console.log(chunkArray([1, 2, 3, 4, 5], 3));
// // Output: [[1, 2, 3], [4, 5]]

// Using reduce() (Functional Approach)

function chunkArrayReduce(arr, size) {
  if (size <= 0) return [];

  return arr.reduce((acc, _, i) => {
    if (i % size === 0) {
      acc.push(arr.slice(i, i + size));
    }

    return acc;
  }, []);
}

console.log(chunkArrayReduce([1, 2, 3, 4, 5, 6, 7], 2));

// Using a while Loop (Alternative Approach)

function chunkArrayWhile(arr, size) {
  if (size <= 0) return [];

  let results = [];
  while (arr.length > 0) {
    results.push(arr.splice(0, size));
  }

  return results;
}

console.log(chunkArrayWhile([1, 2, 3, 4, 5, 6, 7], 2));
