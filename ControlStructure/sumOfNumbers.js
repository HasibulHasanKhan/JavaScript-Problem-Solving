function sum(n) {
  if (n < 1) return "Enter a natural number (n >= 1)";

  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

console.log(sum(1)); // Output: 1
console.log(sum(-3)); // Output: Enter a natural number (n ≥ 1)

// Method 2: Using Formula (Optimized)

function sumUsingFormula(n) {
  if (n < 1) "Give nuber above of 1 ";
  return (n * (n + 1)) / 2;
}

console.log(sumUsingFormula(10));

// using recursion :
function sumRecursion(n) {
  if (n === 1) return 1;
  return n + sumRecursion(n - 1);
}
