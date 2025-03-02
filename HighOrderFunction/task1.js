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
