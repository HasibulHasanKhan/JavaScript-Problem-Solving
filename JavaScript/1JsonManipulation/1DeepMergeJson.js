function deepMerge(obj1, obj2) {
  // Create a new object to hold the merged result
  const result = { ...obj1 };

  // Iterate over keys in obj2
  for (const key in obj2) {
    if (obj2.hasOwnProperty(key)) {
      // If both obj1 and obj2 have the same key and the value is an object, recursively merge
      if (
        obj1[key] &&
        typeof obj1[key] === "object" &&
        typeof obj2[key] === "object"
      ) {
        result[key] = deepMerge(obj1[key], obj2[key]);
      } else {
        // Otherwise, directly assign the value from obj2
        result[key] = obj2[key];
      }
    }
  }

  return result;
}

// Example usage:
const obj1 = {
  name: "John",
  address: {
    street: "123 Main St",
    city: "New York",
  },
  age: 30,
};

const obj2 = {
  name: "Jane",
  address: {
    city: "Los Angeles",
    state: "CA",
  },
  email: "jane@example.com",
};

const mergedObj = deepMerge(obj1, obj2);
console.log(mergedObj);

// Output:
// {
//   name: 'Jane',
//   address: { street: '123 Main St', city: 'Los Angeles', state: 'CA' },
//   age: 30,
//   email: 'jane@example.com'
// }
