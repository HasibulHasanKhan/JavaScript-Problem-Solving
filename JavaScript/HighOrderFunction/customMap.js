// Regular map :

// const arr = [1, 2, 3, 4, 5];

// const doubled = arr.map((num) => num * 2);
// console.log(doubled);

// Custom map :

Array.prototype.customMap = function (callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this));
  }
  return result;
};

// usage :
const numbers = [1, 2, 3, 4, 5];

const squaredNumbers = numbers.customMap((num) => num ** 2);
console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]

const indexedNumbers = numbers.customMap((num, index) => `${index}: ${num}`);
console.log(indexedNumbers); // Output: ['0: 1', '1: 2', '2: 3', '3: 4', '4: 5']
