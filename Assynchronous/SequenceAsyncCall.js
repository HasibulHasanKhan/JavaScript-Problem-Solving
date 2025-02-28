async function fetchDataSequentially(url1, url2) {
  try {
    let response1 = await fetch(url1);
    let data1 = await response1.json();

    console.log("First API Response:", data1);

    let response2 = await fetch(url2);
    let data2 = await response2.json();
    console.log("Second API Response:", data2);

    return { data1, data2 };
  } catch (err) {
    console.error("Error fetching data:", err);
  }
}

fetchDataSequentially(
  "https://jsonplaceholder.typicode.com/todos/1",
  "https://jsonplaceholder.typicode.com/todos/2"
);
