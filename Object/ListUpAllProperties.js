// Problem : Implement a function that lists all the properties of an object.

function listProperties(obj) {
  return Object.keys(obj);
}

const person = { name: "Alice", age: 24, city: "New York" };

console.log(listProperties(person));

// Using Object.getOwnPropertyNames() (Includes Non-Enumerable Properties)
function Properties(obj) {
  return Object.getOwnPrototyNames(obj);
}
console.log(listProperties(person));

// Using for...in (Includes Inherited Properties)

function listAllPropertiesIncludingPrototype(obj) {
  let properties = [];
  for (let key in obj) {
    properties.push(key);
  }
  return properties;
}

// Example usage:
console.log(listAllPropertiesIncludingPrototype(person));
