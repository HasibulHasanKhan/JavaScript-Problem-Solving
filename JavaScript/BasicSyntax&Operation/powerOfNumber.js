// Create a function that calculates the power of a number (base^exponent).

// Using Math.pow() :

function power(base, exponent) {
  return Math.pow(base, exponent);
}
console.log(power(2, 3));

// Method 2: Using Exponentiation Operator (**)
function power2(base, exponent) {
  return base ** exponent;
}
console.log(power2(2, 4));

// Method 3: Using Recursion :

function powerRecursion(base, exponent) {
  if (exponent === 0) return 1;

  return base * powerRecursion(base, exponent - 1);
}
console.log(powerRecursion(2, 5));

// Method 4: Using Iteration (Loop)

function powerIteration(base, exponent) {
  let result = 1;
  for (let i = 0; i < exponent; i++) {
    result *= base;
  }
  return result;
}

console.log(powerIteration(2, 3));
