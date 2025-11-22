/**
 * Climbing Stairs
 * Difficulty: Easy
 *
 * You are climbing a staircase. It takes n steps to reach the top.
 * Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
 *
 * Example 1:
 * Input: n = 2
 * Output: 2
 * Explanation: There are two ways to climb to the top:
 * 1. 1 step + 1 step
 * 2. 2 steps
 *
 * Example 2:
 * Input: n = 3
 * Output: 3
 * Explanation: There are three ways to climb to the top:
 * 1. 1 step + 1 step + 1 step
 * 2. 1 step + 2 steps
 * 3. 2 steps + 1 step
 *
 * Constraints:
 * - 1 <= n <= 45
 *
 * Target Complexity:
 * Time: O(?)
 * Space: O(?)
 */

// Approach 1: Recursion
function climbStairs(n) {
  if(n<3){
    return n;
  }
  return climbStairs(n-1) + climbStairs(n - 2);
}

// Approach 2: Memoization (Top-down DP)
function climbStairsMemo(n, map = new Map()) {
  if(n < 3){
    return n;
  }
  if(map.has(n)){
    return map.get(n);
  }
  map.set(n,climbStairsMemo(n-1)+climbStairsMemo(n-2));

  return map.get(n);
}

// Approach 3: Iteration (Bottom-up DP)
function climbStairsIterative(n) {
  if(n < 3){
    return n;
  }
  let result = [0,1,2];
  for(let i =3;i<=n;i++){
    result[i]=result[i-1]+result[i-2];
  }
  return result[n];
  // Your code here
}

// Approach 4: Optimized (O(1) space)
function climbStairsOptimized(n) {
  if(n<3){
    return n;
  }
  let first = 1;
  let second = 2;
  for(let i = 3;i<=n;i++){
    let temp = second;
    second = second + first;
    first = temp;
  }
  return second;
  // Your code here
}

// Tests - Recursion
console.log("=== Recursion ===");
console.log(climbStairs(2));  // 2
console.log(climbStairs(3));  // 3
console.log(climbStairs(4));  // 5
console.log(climbStairs(5));  // 8

// Tests - Memoization
console.log("\n=== Memoization ===");
console.log(climbStairsMemo(2));  // 2
console.log(climbStairsMemo(3));  // 3
console.log(climbStairsMemo(4));  // 5
console.log(climbStairsMemo(5));  // 8

// Tests - Iteration
console.log("\n=== Iteration ===");
console.log(climbStairsIterative(2));  // 2
console.log(climbStairsIterative(3));  // 3
console.log(climbStairsIterative(4));  // 5
console.log(climbStairsIterative(5));  // 8

// Tests - Optimized
console.log("\n=== Optimized ===");
console.log(climbStairsOptimized(2));  // 2
console.log(climbStairsOptimized(3));  // 3
console.log(climbStairsOptimized(4));  // 5
console.log(climbStairsOptimized(5));  // 8
