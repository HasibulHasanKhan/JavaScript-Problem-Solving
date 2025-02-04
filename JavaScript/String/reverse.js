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
