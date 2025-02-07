class Stack {
  constructor() {
    this.stack = [];
  }
  // Push element onto stack
  push(element) {
    this.stack.push(element);
  }
  // Pop element from stack (removes and returns top element)
  pop() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.stack.pop();
  }
  // Peek (returns top element without removing it)
  peek() {
    return this.isEmpty()
      ? "Stack is empty"
      : this.stack[this.stack.length - 1];
  }

  isEmpty() {
    return this.stack.length === 0;
  }
  size() {
    return this.stack.length;
  }

  print() {
    console.log(this.stack.join(" <- "));
  }
}

const myStack = new Stack();
myStack.push(10);
myStack.push(20);
myStack.push(30);
myStack.print(); // Output: 10 <- 20 <- 30

console.log(myStack.pop()); // Output: 30
console.log(myStack.peek()); // Output: 20
console.log(myStack.isEmpty()); // Output: false
console.log(myStack.size()); // Output: 2
