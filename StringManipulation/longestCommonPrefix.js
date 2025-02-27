function longestCommonPrefix(arr) {
  if (!arr.length) return "";

  arr.sort();

  let first = arr[0],
    last = arr[arr.length - 1];

  let i = 0;
  while (i < first.length && first[i] === last[i]) {
    i++;
  }
  return first.substring(0, i);
}

console.log(longestCommonPrefix(["flower", "flow", "flight"])); // Output: "fl"
console.log(longestCommonPrefix(["dog", "racecar", "car"])); // Output: ""
