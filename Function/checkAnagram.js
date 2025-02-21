function areAnagram(str1, str2) {
  let cleanedStr1 = str1.replace(/\s+/g, "").toLowerCase();
  let cleanedStr2 = str2.replace(/\s+/g, "").toLowerCase();

  if (cleanedStr1.length !== cleanedStr2.length) return false;

  return (
    cleanedStr1.split("").sort().join("") ===
    cleanedStr2.split("").sort().join("")
  );
}
console.log(areAnagram("Listen", "Silent")); // Output: true
console.log(areAnagram("Hello World", "dlroW olleH")); // Output: true
console.log(areAnagram("Apple", "Pineapple")); // Output: false
console.log(areAnagram("A gentleman", "Elegant man")); // Output: true
