// Using Built-in Methods (split(), reverse(), join())

// function Reverse(str) {

// }
function reverseString(str) {
  return str.split("").reverse().join("");
}

// Example usage:
console.log(reverseString("hello")); // Output: "olleh"
console.log(reverseString("JavaScript")); // Output: "tpircSavaJ"

// Using a for Loop (Manual Reversal)

function reverseStringLoop(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}
console.log(reverseStringLoop("hello"));

// Using Recursion : arr.slice(1) return 1 to next element.
function sumArrayRecursive(arr) {
  if (arr.length === 0) {
    return 0;
  } else {
    return arr[0] + sumArrayRecursive(arr.slice(1));
  }
}
const arr = [1, 2, 3, 4, 5];
const result = sumArrayRecursive(arr);
console.log(result);
