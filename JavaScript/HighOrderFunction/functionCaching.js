function memoize(fn) {
  const cache = new Map();

  return function (...args) {
    const key = JSON.stringify(args);

    if (cache.has(key)) {
      console.log("Fetching from cache:", key);
      return cache.get(key);
    }

    console.log("Calculating result:", key);
    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
}

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

// Note - Why return function(...args) : Here cachedFactorial() function return the function(...args) and i put the value 5, 5,6,7 as an arguments.Without returning return function i can not put any value as argument like cachedFactorial(5).

const cachedFactorial = memoize(factorial);
console.log(cachedFactorial(5)); // Calculates and stores result
console.log(cachedFactorial(5)); // Fetches from cache (improved performance)
console.log(cachedFactorial(6)); //
// Calculates new value
cachedFactorial(7);
