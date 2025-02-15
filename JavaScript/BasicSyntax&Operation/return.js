// hasib(3)
// ​

// =3+hasib(2)
// =3+(2+hasib(1))
// =3+(2+(1+hasib(0)))
// =3+(2+(1+1))
// =3+(2+2)
// =3+4
// =7
// ​

function hasib(a) {
  if (a === 0) return 2;
  return a * hasib(a - 1);
}
console.log(hasib(3));
