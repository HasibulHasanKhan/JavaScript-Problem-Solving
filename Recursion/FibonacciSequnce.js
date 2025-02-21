// Create a recursive function to generate the Fibonacci sequence.

function fibonacci(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;

  return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacci(5)); // Output: 5
console.log(fibonacci(7)); // Output: 13
console.log(fibonacci(10)); // Output: 55
//-----------------------------------
// Optimized Approach (Using Memoization)
function fibonacciMemo(n, memo = {}) {
  if (n in memo) return memo[n];
  if (n === 0) return 0;
  if (n === 1) return 1;

  memo[n] = fibonacciMemo(n - 1, memo) + fibonacciMemo(n - 2, memo);
  return memo[n];
}
console.log(fibonacciMemo(50));
