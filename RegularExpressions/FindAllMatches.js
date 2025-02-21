function findAllMatches(txt, pattern) {
  const regex = new RegExp(pattern, "g");

  const matches = txt.match(regex);
  return matches ? matches : [];
}

// Example usage:
console.log(
  findAllMatches("The rain in Spain stays mainly in the plain.", "ain")
);
// Output: [ 'ain', 'ain', 'ain', 'ain' ]

console.log(
  findAllMatches(
    "Email me at test@example.com or hello@test.io",
    "[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}"
  )
);
// Output: [ 'test@example.com', 'hello@test.io' ]

console.log(findAllMatches("No numbers here!", "\\d+"));
// Output: []

console.log(
  findAllMatches(
    "Call me at 123-456-7890 or 987-654-3210",
    "\\d{3}-\\d{3}-\\d{4}"
  )
);
// Output: [ '123-456-7890', '987-654-3210' ]
