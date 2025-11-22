// Min Stack
// Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.
//
// Implement the MinStack class:
// - push(val): Pushes the element val onto the stack
// - pop(): Removes the element on the top of the stack
// - top(): Gets the top element of the stack
// - getMin(): Retrieves the minimum element in the stack
//
// All operations must run in O(1) time complexity

class MinStack {
  constructor() {
    this.stack = [];
    this.minStack = [];
  }

  push(val) {
    if(this.stack.length === 0){
      this.minStack.push(val);
    } else{
      this.minStack.push(Math.min(this.minStack[this.minStack.length - 1],val));
    }
    this.stack.push(val);
  }

  pop() {
    this.minStack.pop();
    return this.stack.pop();
  }

  top() {
    return this.stack[this.stack.length - 1];
  }

  getMin() {
    return this.minStack[this.minStack.length - 1];
  }
}

// Test cases
const minStack = new MinStack();

// Test 1: Basic operations
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log(minStack.getMin());   // Expected: -3
minStack.pop();
console.log(minStack.top());      // Expected: 0
console.log(minStack.getMin());   // Expected: -2

// Test 2: Multiple operations
const minStack2 = new MinStack();
minStack2.push(5);
minStack2.push(2);
minStack2.push(8);
minStack2.push(1);
console.log(minStack2.getMin());  // Expected: 1
minStack2.pop();
console.log(minStack2.getMin());  // Expected: 2
minStack2.pop();
console.log(minStack2.getMin());  // Expected: 2
minStack2.pop();
console.log(minStack2.getMin());  // Expected: 5
