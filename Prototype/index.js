class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  play() {
    return `${this.name} can play football and his age is ${this.age}.`;
  }
}

const Hasib = new Person("Hasib", "22");
// const Hasib = Person("Hasib", "22");

console.log(Hasib.play());

// 2nd way for this : const Hasib = Person("Hasib", "22");

function Person2(name, age) {
  return {
    name: name,
    age: age,
    play: () => {
      return `${this.name} can play football and his age is ${this.age}.`;
    },
  };
}
const Hasib2 = Person2("Hasib", "22"); // Works fine without `new`
console.log(Hasib.play());

//
function Person3(name, age) {
  if (!(this instanceof Person3)) {
    return new Person3(name, age);
  }
  this.name = name;
  this.age = age;
}

const Hasib3 = Person3("Hasib", "33");
// const Hasib3 = Person3("Hasib", 33);
console.log(Hasib3.name);
console.log(Hasib3.age);
