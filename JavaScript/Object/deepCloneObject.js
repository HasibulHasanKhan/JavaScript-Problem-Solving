function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

const original = {
  name: "Alice",
  age: 25,
  details: { city: "New York", country: "USA" },
};

const clone = deepClone(original);

clone.details.city = "Chunarughat";

console.log(original.details.city); // Output: "New York" (original remains unchanged)
console.log(clone.details.city); //
