function countWordsUsingMatch(str) {
  let words = str.match(/\b\w+\b/g);

  return words ? words.length : 0;
}

console.log(countWordsUsingMatch("Hello world! This is a test."));

// using reduce
function count(str) {
  return str
    .trim()
    .split(/\s+/)
    .reduce((count, word) => (word ? count + 1 : count), 0);
}
console.log(count("Hello world! This is a test."));
