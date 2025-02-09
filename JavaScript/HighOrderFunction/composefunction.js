// compose two function :

function compose(f, g) {
  return function (x) {
    return f(g(x));
  };
}
const add = (x) => x + 2;
const multiply = (x) => x * 2;

const addThenMultiplys = compose(multiply, add);

console.log(addThenMultiplys(4)); // (4 + 2) * 3 = 18
console.log(addThenMultiplys(10)); // (10 + 2)
// * 3 = 36
//---------------------------------------------
// without separate compose function :
const add2s = (x) => x + 2;
const multiplyBy3s = (x) => x * 3;

const addThenMultiply = (x) => multiplyBy3(add2(x));

console.log(addThenMultiply(4)); // (4 + 2) * 3 = 18
console.log(addThenMultiply(10)); // (10 + 2) * 3 = 36

//---------------------------------------
// compose more then two function :

function composeMultiple(...funcs) {
  return (x) => {
    return funcs.reduceRight((acc, fn) => {
      return fn(acc);
    }, x);
  };
}

// Example usage:
const subtract5 = (x) => x - 5;
const add2 = (x) => x + 2;
const multiplyBy3 = (x) => x * 3;

const complexFunction = composeMultiple(multiplyBy3, add2, subtract5);

console.log(complexFunction(10)); // Output: 21
