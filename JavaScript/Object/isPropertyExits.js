// Problem : Write a function that checks if a property exists in an object.

// 1. Using hasOwnProperty() (Best Approach)

function hasProperty(obj, prop) {
  return obj.hasOwnProperty(prop);
}

const person = { name: "Hasib", age: 22 };
console.log(hasProperty(person, "name"));
console.log(hasProperty(person, "age"));

// 2. Using in Operator (Checks Prototype Chain)

function hasPropertyIn(obj) {
  return prop in obj;
}

console.log(hasProperty(person, "name"));

// 3. Using Object.hasOwn() (Modern & Reliable)
function hasPropertyModern(obj, prop) {
  return Object.hasOwn(obj, prop);
}

// Example usage:
console.log(hasPropertyModern(person, "name")); // Output: true
console.log(hasPropertyModern(person, "city")); // Output: false

/*
Best Approach?
Method	Checks Own Properties?	Checks Inherited Properties?	Best For
hasOwnProperty()	✅ Yes	❌ No	Most cases
in operator	✅ Yes	✅ Yes	Checking full prototype chain
Object.hasOwn()	✅ Yes	❌ No	Modern approach


*/
