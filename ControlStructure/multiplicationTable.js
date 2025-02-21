function multiplication(num) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${num} * ${i} = ${num * i}`);
  }
}
multiplication(10);

// Using Recursion :

function multiplicationTable(num, i = 1) {
  if (i > 10) return;

  console.log(`${num} * ${i} = ${num * i}`);

  multiplicationTable(num, i + 1);
}

multiplicationTable(7);
