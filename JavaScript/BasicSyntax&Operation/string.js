// Implement a function that returns the length of a given string without using the .length property.

function getStringLength(str) {
  let count = 0;
  for (let char of str) {
    count++;
  }

  return count;
}
console.log(getStringLength("Hello   ")); // Output: 5
console.log(getStringLength("JavaScript")); // Output: 10
console.log(getStringLength("")); // Output: 0

// Method 3: Using while Loop and charAt() :

function getStringLengthWhile(str) {
  let count = 0;
  while (str.charAt(count) !== "") {
    count++;
  }
  return count;
}
console.log(getStringLengthWhile("Loop Method")); // Output: 11

// Method 2: Using Recursion :

function getStringLength2(str, count = 0) {
  if (str === "") return count;
  return getStringLength2(str.slice(1), count + 1);
}
console.log(getStringLength2("Hello")); // Output: 5
console.log(getStringLength2("Recursion")); // Output: 9
