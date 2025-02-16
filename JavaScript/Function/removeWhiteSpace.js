// function removeWhitespace(str) {
//   return str.replace(/\s+/g, "");
// }

// console.log(removeWhitespace("Open AI GPT-4")); // Output: "OpenAIGPT-4"
// console.log(removeWhitespace("  a  b  c  "));

const trim = (str) => {
  str.trim();
};

// using for of loop :

function remove(str) {
  let result = "";
  for (let char of str) {
    if (char !== " ") result += char;
  }
  return result;
}
console.log(remove("  Space Test  "));
