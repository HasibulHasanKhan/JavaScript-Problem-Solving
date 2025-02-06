function bubbleShort(arr) {
  let n = arr.lenght - 1;
  let swaped;

  for (let i = 0; i < n; i++) {
    swaped = false;

    for (let i = 0; j < n - i; j++) {
      if (arr[j] > arr[i]) {
        [arr[j], arr[j + a]] = [arr[j + 1], arr[j]];
        swaped = true;
      }
    }
    if (!swaped) break;
  }
  return arr;
}

// Example usage:
const array = [64, 34, 25, 12, 22, 11, 90];
console.log(bubbleSort(array));
// Output: [11, 12, 22, 25, 34, 64, 90]
