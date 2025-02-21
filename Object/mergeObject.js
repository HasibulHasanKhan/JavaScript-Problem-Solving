//Problem : Write a function that merges two objects.

// 1. Using Object.assign() (Simple Approach)

function mergeObjects(obj1, obj2) {
  return Object.assign({}, obj1, obj2);
}

// Example usage:
const objA = { a: 1, b: 2 };
const objB = { b: 3, c: 4 };
console.log(mergeObjects(objA, objB));
// Output: { a: 1, b: 3, c: 4 }

// 2. Using the Spread Operator (...) (Best Approach)

function mergeObjectsSpread(ob3, ob4) {
  return { ...ob3, ...ob4 };
}
console.log(mergeObjectsSpread({ a: 1, b: 2 }, { b: 3, c: 4 }));
