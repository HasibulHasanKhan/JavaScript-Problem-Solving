// Problem : Write a function that checks if a property exists in an object.

// 1. Using hasOwnProperty() (Best Approach)

function hasProperty(obj, prop) {
  return obj.hasOwnProperty(prop);
}

const person = { name: "Hasib", age: 22 };
console.log(hasProperty(person, "name"));
console.log(hasProperty(person, "age"));

// 2. Using in Operator (Checks Prototype Chain)
