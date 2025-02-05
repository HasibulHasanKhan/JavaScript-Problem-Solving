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

// Using structuredClone() (Best for Modern Browsers)

function deepCloneStructured(obj) {
  return structuredClone(obj);
}

// Example usage:
const original2 = {
  name: "Alice",
  birthdate: new Date(),
  items: new Set([1, 2, 3]),
};
const clone2 = deepCloneStructured(original2);

console.log(clone2);
