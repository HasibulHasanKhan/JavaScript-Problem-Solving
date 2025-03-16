// async function fetchText(url) {
//   let response = await fetch(url);
//   let textData = await response.text(); // Read response as text
//   console.log("Text Response:", textData);
// }

// fetchText("https://jsonplaceholder.typicode.com/todos/1");

// .blob() - read as binary data (image, pdfs,otc)
// async function fetchImage(url) {
//   let response = await fetch(url);
//   let blobData = await response.blob(); // Read response as binary blob
//   let imgURL = URL.createObjectURL(blobData); // Create URL for the blob
//   console.log("Image Blob URL:", imgURL);
// }

// fetchImage("https://via.placeholder.com/150");

//arrayBuffer() - Read as Raw Binary Data

async function fetchBinary(url) {
  let response = await fetch(url);
  let bufferData = await response.arrayBuffer(); // Read as raw binary
  console.log("ArrayBuffer Length:", bufferData.byteLength);
}

fetchBinary("https://via.placeholder.com/150");
