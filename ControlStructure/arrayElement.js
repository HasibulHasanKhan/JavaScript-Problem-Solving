function findCommonElement(arr1, arr2) {
  return arr1.filter((element) => arr2.includes(element));
}

console.log(findCommonElement([1, 2, 3, 4], [3, 4, 5, 6])); // Output: [3, 4]
console.log(
  findCommonElement(["apple", "banana", "cherry"], ["banana", "cherry", "date"])
); // Output: ["banana", "cherry"]
console.log(findCommonElement([10, 20, 30], [40, 50, 60])); // Output: []

// Method 2: Using Set for Better Performance (Optimized for Large Arrays)

function findCommonElement2(arr1, arr2) {
  let set1 = new Set(arr1);
  return arr2.filter((element) => set1.has(element));
}
console.log(findCommonElement2([1, 2, 3, 4], [3, 4, 5, 6]));
