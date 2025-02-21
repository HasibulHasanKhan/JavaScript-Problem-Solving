const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200],
]);

let text = "";
fruits.forEach((value, key) => {
  text += `[${key}] = ${value}\n`; // Add brackets around key
});

console.log(text);
