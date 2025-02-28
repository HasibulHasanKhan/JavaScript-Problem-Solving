function replaceAllOccurances(str, target, replacement) {
  return str.replaceAll(target, replacement);
}

console.log(
  replaceAllOccurances("Hello world! Hello everyone!", "Hello", "HI")
);

//----------------------------------------
function replaces(str, target, replacement) {
  return str.split(target).join(replacement);
}
console.log(replaces("Hello world! Hello everyone!", "Hello", "Hi"));
