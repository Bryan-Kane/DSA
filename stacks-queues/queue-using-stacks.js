// Implement Queue using Stacks
// Implement a FIFO (First In First Out) queue using only two stacks
//
// Queue operations:
// - enqueue(x): Add element to the back of the queue
// - dequeue(): Remove and return the front element
// - peek(): Return the front element without removing it
// - isEmpty(): Check if queue is empty
//
// Stack operations you can use:
// - push(x): Add element to top of stack
// - pop(): Remove and return top element
// - peek(): Return top element without removing
// - isEmpty(): Check if stack is empty

class MyQueue {
  constructor() {
    this.stack1 = [];
    this.stack2 = [];
  }

  enqueue(x) {
    this.stack1.push(x);
  }

  dequeue() {
    // Only transfer if stack2 is empty
    if (this.stack2.length === 0) {
      while (this.stack1.length > 0) {
        this.stack2.push(this.stack1.pop());
      }
    }
    return this.stack2.pop();
  }

  peek() {
    // Only transfer if stack2 is empty
    if (this.stack2.length === 0) {
      while (this.stack1.length > 0) {
        this.stack2.push(this.stack1.pop());
      }
    }
    return this.stack2[this.stack2.length - 1];
  }

  isEmpty() {
    return this.stack1.length === 0 && this.stack2.length === 0;
  }
}

// Test cases
const queue = new MyQueue();

// Test 1: Basic enqueue and dequeue
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.peek());    // Expected: 1 (front element)
console.log(queue.dequeue()); // Expected: 1
console.log(queue.peek());    // Expected: 2
console.log(queue.dequeue()); // Expected: 2

// Test 2: Mix of operations
queue.enqueue(4);
console.log(queue.dequeue()); // Expected: 3
console.log(queue.dequeue()); // Expected: 4
console.log(queue.isEmpty()); // Expected: true

// Test 3: Enqueue after dequeue
queue.enqueue(5);
queue.enqueue(6);
console.log(queue.peek());    // Expected: 5
console.log(queue.dequeue()); // Expected: 5
console.log(queue.isEmpty()); // Expected: false
