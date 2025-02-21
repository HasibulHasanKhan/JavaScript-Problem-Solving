function isLeapYear(year) {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      return year % 400 === 0 ? true : false;
    }
    return true;
  }
  return false;
}
console.log(isLeapYear(2024)); // Output: true
console.log(isLeapYear(1900)); // Output: false

// Optimized Version (Single Condition)

console.log("\n");

function leap(year) {
  return year % 4 === 0 || year % 100 === 0 || year % 400 === 0;
}
console.log(leap(2024)); // true
console.log(leap(1901)); // false
