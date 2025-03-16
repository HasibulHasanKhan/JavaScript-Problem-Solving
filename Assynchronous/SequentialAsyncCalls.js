//Sequential Async Calls: Write a function that makes two asynchronous calls in sequence.

async function fetchSequentially(url1, url2) {
  try {
    // First asynchronous call
    let response1 = await fetch(url1);
    // let data1 = response1;
    // let data1 = await response1.json();
    let data1 = await response1.text();

    console.log("First API Response:", JSON.parse(data1));
    // Second asynchronous call
    let response2 = await fetch(url2);
    let data2 = await response2.json();
    console.log("Second API Response:", data2);
  } catch (err) {
    console.log(err.message);
  }
}

fetchSequentially(
  "https://jsonplaceholder.typicode.com/todos/1",
  "https://jsonplaceholder.typicode.com/todos/2"
);
