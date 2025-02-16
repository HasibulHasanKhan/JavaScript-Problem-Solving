function powerArray(arr, power) {
  return arr.map((num) => Math.pow(num, power));
}
console.log(powerArray([-1, -2, -3], 2));

// Method 2: Using forEach() (Alternative) :

function powerArray(arr, power) {
  let result = [];

  arr.forEach((num) => result.push(Math.pow(num, power)));

  return result;
}

console.log(powerArray([1, 23, 3, 4, 4], 2));

// Using reduce() :

function powerArray(arr, power) {
  return arr.reduce((acc, num) => [...acc, Math.pow(num, power)], []);
}

console.log(powerArray([2, 3, 4], 3));
