function replacePattern(txt, pattern, replacment) {
  const regex = new RegExp(pattern, "g");

  return txt.replace(regex, replacment);
}

// Example usage:
console.log(
  replacePattern("The rain in Spain stays mainly in the plain.", "ain", "XYZ")
);
// Output: "The rXYZ in SpXYZ stays mXYZly in the plXYZ."

console.log(replacePattern("Hello World! Hello Again!", "Hello", "Hi"));
// Output: "Hi World! Hi Again!"

console.log(
  replacePattern(
    "Call me at 123-456-7890 or 987-654-3210",
    "\\d{3}-\\d{3}-\\d{4}",
    "[REDACTED]"
  )
);
// Output: "Call me at [REDACTED] or [REDACTED]"

console.log(replacePattern("banana banana banana", "\\bbanana\\b", "apple"));
// Output: "apple apple apple"
