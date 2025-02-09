// Write a recursive function to calculate the factorial of a number.

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

console.log(factorial(5)); // 5 * 4 * 3 * 2 * 1 = 120
console.log(factorial(7)); // 5040
console.log(factorial(0)); // 1
