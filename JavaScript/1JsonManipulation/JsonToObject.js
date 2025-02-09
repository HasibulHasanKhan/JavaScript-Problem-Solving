function jsonToObject(str) {
  try {
    return JSON.parse(str);
  } catch (err) {
    return `Invalid JSON string: ${err.messsage}`;
  }
}

const jsonString =
  '{"name":"John Doe","age":30,"isEmployed":true,"address":{"street":"123 Main St","city":"New York"}}';
const parsedObject = jsonToObject(jsonString);
console.log(parsedObject);
