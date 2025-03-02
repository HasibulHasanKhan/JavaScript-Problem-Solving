//A Function Taking Another Function as an Argument:

function greet(name, callback) {
  console.log(`Hi #{name}`);
  callback();
}

function sayGoodbye() {
  console.log("Goodbye");
}

greet("Hasib", sayGoodbye);

// A function returning another function :

function multiply(factor) {
  return function (number) {
    return function (number2) {
      return number * number2 * factor;
    };
  };
}

const return1 = multiply(2);
const return2 = return1(3);
console.log(return2(4));

const result = multiply(2)(3)(5);
console.log(result);

// forEach() -Iterating Over Arrays :

const numbers = [2, 3, 4, 5, 6];
// numbers.forEach((num) => {
//   let results = num * num;
//   console.log(results);
// });

//map() return a transforming arrays :

const squareNumbers = numbers.map((num) => num ** 2);
console.log(squareNumbers);

// fileter- return array after filtering arrays :

const evenNum = numbers.filter((num) => num % 2 === 0);
console.log(evenNum);

// reduce - Returning an array to a single value.
const sum = numbers.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum);

//find - return the first match of an array :

const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];

const user = users.find((u) => u.id === 2);
const user2 = numbers.find((u) => u === 2);
console.log(user);

// some - check if any element matches : ture | false

const hasEven = numbers.some((num) => num % 2 === 0);
console.log(hasEven);

// every - checking if all elements match : true | false.
const allEven = numbers.every((num) => num % 2 === 0);
console.log(allEven);

//function composition :

function add(x) {
  return x + 1;
}

function multiplys(x) {
  return x * 2;
}

function compose(multiplys, add) {
  return function (x) {
    return multiplys(add(x));
  };
}

const addThenMultiply = compose(multiplys, add);
console.log(addThenMultiply(2));

// arrow function way :
// const add = x => x + 1;
// const multiply = x => x * 2;

// const compose = (f, g) => x => f(g(x));

// const addThenMultiply = compose(multiply, add);
// console.log(addThenMultiply(5)); // (5 + 1) * 2 = 12

// Currying transforms a function that takes multiple arguments into a series of functions.

function curriedAdd(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

console.log(curriedAdd(1)(2)(3));

// Partial a variation of currying where some arguments are preset :

const multiply2 = (a, b) => a * b;
const double = multiply2.bind(null, 2); // bind return the function .
console.log(double(3));

// Custom forEach() implementation :

function customForEach(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i, arr);
  }
}

const number = [1, 2, 3];

customForEach(number, (num, index) => {
  console.log(`Index: ${index}, Value: ${num}`);
});

// custom map() implementation :

function customMap(arr, cb) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(cb(arr[i], i, arr));
  }
  return result;
}
const number2 = [1, 2, 3];
const res = customMap(number2, (num) => num * 3);
console.log(res);
