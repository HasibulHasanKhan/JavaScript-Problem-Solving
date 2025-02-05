// Problem : Create a function that converts an object to an array of key-value pairs.

// 1. Using Object.entries() (Best Approach)

// Object.entries() returns key/value of an object as an array.

function objectToArray(obj) {
  return Object.entries(obj);
}

const person = { name: "Alice", age: 25, city: "New York" };
console.log(objectToArray(person));
