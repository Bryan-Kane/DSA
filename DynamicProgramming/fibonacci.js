/**
 * Fibonacci Number
 * Difficulty: Easy
 *
 * The Fibonacci numbers form a sequence, called the Fibonacci sequence,
 * such that each number is the sum of the two preceding ones, starting from 0 and 1.
 *
 * F(0) = 0, F(1) = 1
 * F(n) = F(n - 1) + F(n - 2), for n > 1
 *
 * Given n, calculate F(n).
 *
 * Example:
 * Input: n = 4
 * Output: 3
 * Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3
 *
 * Sequence: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...
 *
 * Constraints:
 * - 0 <= n <= 30
 *
 * Target Complexity:
 * Time: O(?)
 * Space: O(?)
 */

// Approach 1: Naive Recursion
function fibRecursive(n) {
  if(n < 2){
    return n;
  }
  return fibRecursive(n - 2) + fibRecursive(n - 1)
}

// Approach 2: Memoization (Top-down DP)
function fibMemo(n, map = new Map()) {
  if(n < 2) return n;
  if(map.has(n)){
    return map.get(n);
  }
  map.set(n, fibMemo(n - 1, map) + fibMemo(n - 2, map));
  return map.get(n);
}

// Approach 3: Iteration (Bottom-up DP)
function fibIterative(n) {
  if(n < 2){
    return n;
  }
  let result = [0,1];
  for(let i = 2;i<=n;i++){
    result.push(result[i - 1] + result[i-2]);
  }
  return result[n];

}

// Approach 4: Optimized Iteration (O(1) space)
function fibOptimized(n) {
  if(n<2){
    return n;
  }
  let first = 0;
  let second = 1;
  for(let i =2;i<=n;i++){
    let temp = second;
    second = second + first;
    first = temp;
  }
  return second;
  // Your code here
}

// Tests - Naive Recursion
console.log("=== Naive Recursion ===");
console.log(fibRecursive(0));  // 0
console.log(fibRecursive(1));  // 1
console.log(fibRecursive(2));  // 1
console.log(fibRecursive(4));  // 3
console.log(fibRecursive(10)); // 55

// Tests - Memoization
console.log("\n=== Memoization ===");
console.log(fibMemo(0));  // 0
console.log(fibMemo(1));  // 1
console.log(fibMemo(2));  // 1
console.log(fibMemo(4));  // 3
console.log(fibMemo(10)); // 55

// Tests - Iterative
console.log("\n=== Iterative ===");
console.log(fibIterative(0));  // 0
console.log(fibIterative(1));  // 1
console.log(fibIterative(2));  // 1
console.log(fibIterative(4));  // 3
console.log(fibIterative(10)); // 55

// Tests - Optimized
console.log("\n=== Optimized ===");
console.log(fibOptimized(0));  // 0
console.log(fibOptimized(1));  // 1
console.log(fibOptimized(2));  // 1
console.log(fibOptimized(4));  // 3
console.log(fibOptimized(10)); // 55