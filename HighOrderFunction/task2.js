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
