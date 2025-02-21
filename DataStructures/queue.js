class Queue {
  constructor() {
    this.queue = [];
  }

  enqueue(value) {
    this.queue.push(value);
  }

  dequeue() {
    return this.isEmpty() ? "Queue is empty " : this.queue.shift();
  }
  peek() {
    return this.isEmpty() ? "Queue is empty" : this.queue[0];
  }
  isEmpty() {
    return this.queue.length === 0;
  }

  // Get the size of the queue
  size() {
    return this.queue.length;
  }

  // Print the queue
  print() {
    console.log(this.queue.join(" <- ")); // Front element is on the left
  }
}
// Example usage:
const myQueue = new Queue();
myQueue.enqueue(10);
myQueue.enqueue(20);
myQueue.enqueue(30);
myQueue.print(); // Output: 10 <- 20 <- 30

console.log(myQueue.dequeue()); // Output: 10
console.log(myQueue.peek()); // Output: 20
console.log(myQueue.isEmpty()); // Output: false
console.log(myQueue.size()); // Output: 2
