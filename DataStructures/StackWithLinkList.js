// i didn't consume.
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.length = 0;
  }

  // Push an element onto the stack
  push(value) {
    const newNode = new Node(value);
    newNode.next = this.top;
    this.top = newNode;
    this.length++;
  }

  // Pop the top element from the stack
  pop() {
    if (this.isEmpty()) return "Stack is empty";
    let poppedValue = this.top.value;
    this.top = this.top.next;
    this.length--;
    return poppedValue;
  }

  // Peek (get top element without removing it)
  peek() {
    return this.isEmpty() ? "Stack is empty" : this.top.value;
  }

  // Check if the stack is empty
  isEmpty() {
    return this.length === 0;
  }

  // Get size of the stack
  size() {
    return this.length;
  }

  // Print stack contents
  print() {
    let current = this.top;
    let result = [];
    while (current) {
      result.push(current.value);
      current = current.next;
    }
    console.log(result.join(" <- ")); // Top element is on the right
  }
}

// Example usage:
const myStackLL = new Stack();
myStackLL.push(10);
myStackLL.push(20);
myStackLL.push(30);
myStackLL.print(); // Output: 30 <- 20 <- 10

console.log(myStackLL.pop()); // Output: 30
console.log(myStackLL.peek()); // Output: 20
console.log(myStackLL.isEmpty()); // Output: false
console.log(myStackLL.size()); // Output: 2
