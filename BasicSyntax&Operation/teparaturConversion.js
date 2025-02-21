function convertTemperature(value, unit) {
  if (unit.toLowerCase() === "c") {
    return (value * 9) / 5 + 32 + "F";
  } else if (unit.toLowerCase() === "f") {
    return ((value - 32) * 5) / 9 + "C";
  } else {
    return "Invalid unit ! Use 'C' for celsius or 'F' for fahrenheit. ";
  }
}

console.log(convertTemperature(0, "C")); // Output: 32 °F
console.log(convertTemperature(100, "C")); // Output: 212 °F
console.log(convertTemperature(32, "F")); // Output: 0 °C
console.log(convertTemperature(212, "F")); // Output: 100 °C
console.log(convertTemperature(50, "X")); // Output: Invalid unit!
