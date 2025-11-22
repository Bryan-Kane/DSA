/**
 * Min Cost Climbing Stairs
 * Difficulty: Easy
 *
 * You are given an integer array cost where cost[i] is the cost of ith step on a staircase.
 * Once you pay the cost, you can either climb one or two steps.
 * You can either start from the step with index 0, or the step with index 1.
 * Return the minimum cost to reach the top of the floor.
 *
 * Example 1:
 * Input: cost = [10,15,20]
 * Output: 15
 * Explanation: You will start at index 1.
 * - Pay 15 and climb two steps to reach the top.
 * The total cost is 15.
 *
 * Example 2:
 * Input: cost = [1,100,1,1,1,100,1,1,100,1]
 * Output: 6
 * Explanation: You will start at index 0.
 * - Pay 1 and climb two steps to reach index 2.
 * - Pay 1 and climb two steps to reach index 4.
 * - Pay 1 and climb two steps to reach index 6.
 * - Pay 1 and climb one step to reach index 7.
 * - Pay 1 and climb two steps to reach index 9.
 * - Pay 1 and climb one step to reach the top.
 * The total cost is 6.
 *
 * Constraints:
 * - 2 <= cost.length <= 1000
 * - 0 <= cost[i] <= 999
 *
 * Target Complexity:
 * Time: O(?)
 * Space: O(?)
 */

// Approach 1: Recursion
function minCost(cost) {
  function helper(i){
    if(i<= 1){
      return 0;
    }
    return Math.min(
      helper(i-1) + cost[i-1],
      helper(i-2) + cost[i-2]);
  }
  return helper(cost.length);
}

// Approach 2: Memoization (Top-down DP)
function minCostMemo(cost) {
  // Your code here
  let map = new Map();
  function helper(i, map){
    if(i<=1){
      return 0;
    }
    if(map.has(i)){
      return map.get(i);
    }
    map.set(i,Math.min(helper(i-1, map) + cost[i-1],
      helper(i-2, map) + cost[i-2]));
    return map.get(i);
  }
  return helper(cost.length, map);
}

// Approach 3: Iteration (Bottom-up DP)
function minCostIterative(cost) {
  // Your code here

  let dp = [0,0];
  for(let i = 2;i<=cost.length;i++){
    dp[i]=Math.min(dp[i-1] +cost[i-1],dp[i-2] + cost[i-2]);
  }
  return dp[cost.length];
}

// Approach 4: Optimized (O(1) space)
function minCostOptimized(cost) {
  // Your code here
}

// Tests - Recursion
console.log("=== Recursion ===");
console.log(minCost([10,15,20]));  // 15
console.log(minCost([1,100,1,1,1,100,1,1,100,1]));  // 6

// Tests - Memoization
console.log("\n=== Memoization ===");
console.log(minCostMemo([10,15,20]));  // 15
console.log(minCostMemo([1,100,1,1,1,100,1,1,100,1]));  // 6

// Tests - Iteration
console.log("\n=== Iteration ===");
console.log(minCostIterative([10,15,20]));  // 15
console.log(minCostIterative([1,100,1,1,1,100,1,1,100,1]));  // 6

// Tests - Optimized
console.log("\n=== Optimized ===");
console.log(minCostOptimized([10,15,20]));  // 15
console.log(minCostOptimized([1,100,1,1,1,100,1,1,100,1]));  // 6
