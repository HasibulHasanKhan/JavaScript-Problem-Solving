async function fetchText(url) {
  let response = await fetch(url);
  let textData = await response.text(); // Read response as text
  console.log("Text Response:", textData);
}

fetchText("https://jsonplaceholder.typicode.com/todos/1");
