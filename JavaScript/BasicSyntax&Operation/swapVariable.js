let a = 1;
let b = 2;

// [a, b] = [b, a];
// console.log(`${a} and ${b}`);

a = a + b;
b = a - 2;
a = a - b;
console.log(`${a} and ${b}`);
