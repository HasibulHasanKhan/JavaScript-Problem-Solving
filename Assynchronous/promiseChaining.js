// Write a function that demonstrates promise chaining.

// 1. Basic Example of Promise Chaining

// function asyncTask(value) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log(`Processing value: ${value}`);
//       resolve(value * 2);
//     }, 1000);
//   });
// }

// // Using promise chaining
// asyncTask()
//   .then((result) => {
//     console.log(`First result: ${result}`);
//     return asyncTask(result); // Next promise
//   })
//   .then((result) => {
//     console.log(`Second result: ${result}`);
//     return asyncTask(result); // Next promise
//   })
//   .then((result) => {
//     console.log(`Final result: ${result}`);
//   })
//   .catch((error) => {
//     console.error(`Error occurred: ${error}`);
//   });

//   2. Example with Multiple Asynchronous Calls

function fetchData(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id > 0) {
        resolve({ id, data: `Data for ID ${id}` });
      } else {
        reject("Invalid ID");
      }
    }, 1000);
  });
}

// Chaining multiple async tasks
fetchData(1)
  .then((response) => {
    console.log(response);
    return fetchData(2);
  })
  .then((response) => {
    console.log(response);
    return fetchData(3);
  })
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.error(`Error: ${error}`);
  });
