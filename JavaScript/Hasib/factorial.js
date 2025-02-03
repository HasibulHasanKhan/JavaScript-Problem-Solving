function factorial(n) {
  if (n < 0) {
    return "Negative not allowed.";
  } else if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
console.log(factorial(5));
