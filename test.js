function replaceAllOccurrencesSplitJoin(str, target, replacement) {
  return str.split(target).join(replacement);
}

console.log(
  replaceAllOccurrencesSplitJoin("Hello world! Hello everyone!", "Hello", "Hi")
);
