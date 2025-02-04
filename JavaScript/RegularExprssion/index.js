// Replacing All Occurrences Using Regular Expression (/g flag)

let str = "Hasibul Hasan";

let newStr = str.replace("Hasibul", "Emon");

console.log(newStr);

// Removing Special Characters Using Regex

let str2 = "A man, a plan, a canal: Panama!";

let cleanedStr = str2.replace(/[^a-z0-9]/gi, "");

console.log(cleanedStr);

// Using a Function as a Replacement
let price = "The price is $100.";

let newPrice = price.replace(/\d+/g, (match) => "$" + parseInt(match) * 2);

console.log(newPrice);
