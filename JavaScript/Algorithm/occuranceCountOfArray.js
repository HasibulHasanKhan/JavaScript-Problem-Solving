// Problem : Implement a function that counts the occurrences of each element in an array.

function countOccurrences(arr) {
  let frequency = {};

  for (let num of arr) {
    frequency[num] = (frequency[num] || 0) + 1;
  }

  return frequency;
}

// Example usage:
const array = [1, 8, 8, 2, 1, 2, 7, 4, 4, 3, 3, 4, 4, 4, 4];
console.log(countOccurrences(array));

// Approach 2: Using Map (O(N))

function countOccurrencesMap(arr) {
  let frequencyMap = new Map();

  for (let num of arr) {
    frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
  }

  return Object.fromEntries(frequencyMap); // Convert Map to object for easy viewing
}

console.log(countOccurrencesMap(array));

// Approach 3: Using reduce() (Functional Programming)

function CountOccurrencesReduce(arr) {
  return arr.reduce((acc, num) => {
    acc[num] = (acc[num] || 0) + 1;
    return acc;
  }, {});
}
const arrays = [1, 8, 8, 2, 1, 2, 7, 4, 4, 3, 3, 4, 4, 4, 4];
console.log(CountOccurrencesReduce(arrays));
/*
Note : 

🔹 Example 2: Assigning Incremental Values
If you want the values to be sequential numbers, you can do this:


let numbers = [1, 5, 9, 15];
let obj = {};

numbers.forEach((num, index) => {
    obj[num] = index + 1; // Assigning index-based values
});

console.log(obj);
🔹 Output:


{ '1': 1, '5': 2, '9': 3, '15': 4 }
*/
