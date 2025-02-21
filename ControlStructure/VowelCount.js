function countVowels(str) {
  let count = 0;
  let vowels = "aeiouAEIOU";

  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}

console.log(countVowels("Hello World")); // Output: 3
// console.log(countVowels("JavaScript")); // Output: 3
// console.log(countVowels("OpenAI GPT")); // Output: 4
// console.log(countVowels("BCDFG")); // Output: 0

// Method 3: Using reduce() (Functional Approach)

function count(str) {
  let vowels = "aeiouAEIOU";

  return [...str].reduce(
    (count, char) => (vowels.includes(char) ? count + 1 : count),
    0
  );
}
console.log(count("Functional JS"));
