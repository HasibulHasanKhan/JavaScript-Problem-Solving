function objectJson(obj) {
  return JSON.stringify(obj);
}

const person = {
  name: "John Doe",
  age: 30,
  isEmployed: true,
  address: {
    street: "Chunarughat street",
    city: "Chunarughat",
  },
};

const jsonString = objectJson(person);
console.log(jsonString);
