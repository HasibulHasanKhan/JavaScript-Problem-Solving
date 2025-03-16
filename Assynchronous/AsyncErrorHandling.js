// Create an example that demonstrates error handling in async/await.
async function fetchData(url) {
  try {
    let response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP Error! Statur: ${response.status}`);
    }

    let data = await response.json();
    console.log("Fetch Data:", data);
    return data;
  } catch (err) {
    console.error(err.message);
  }
}
