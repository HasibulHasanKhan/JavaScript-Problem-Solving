function sumOdd(arr) {
  const sumValue = arr
    .filter((num) => num % 2 !== 0)
    .reduce((sum, num) => sum + num, 0);

  return sumValue;
}

console.log(sumOdd([1, 2, 3, 4, 5]));
