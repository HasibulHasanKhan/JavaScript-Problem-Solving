function assignGrade(mark) {
  if (mark < 0 || mark > 100) {
    return "Invalid mark!";
  }

  if (mark >= 90) return "A";
  if (mark >= 80) return "B";
  return "F";
}

console.log(assignGrade(95)); // Output: A
console.log(assignGrade(85)); // Output: B
console.log(assignGrade(72)); // Output: C
console.log(assignGrade(65)); // Output: D
console.log(assignGrade(50)); // Output: F
console.log(assignGrade(-5)); // Output: Invalid score!
console.log(assignGrade(105)); // Output: Invalid score!
