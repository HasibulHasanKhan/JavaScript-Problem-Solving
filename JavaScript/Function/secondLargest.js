function secondLargest(arr) {
  let uniqueArr = [...new Set(arr)];

  if (uniqueArr.length < 2) return null;

  uniqueArr.sort((a, b) => b - a);
  return uniqueArr[1];
}

console.log(secondLargest([10, 20, 30, 40]));
