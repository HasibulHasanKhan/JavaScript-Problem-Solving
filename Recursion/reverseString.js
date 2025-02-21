// Write a recursive function that reverses a string.

function reverseString(str) {
  if (str === "") return "";

  return reverseString(str.slice(1)) + str[0];
}
console.log(reverseString("hello")); // Output: "olleh"
console.log(reverseString("JavaScript")); // Output: "tpircSavaJ"
console.log(reverseString("")); // Output: ""
