/**
 * House Robber
 * Difficulty: Medium
 *
 * You are a professional robber planning to rob houses along a street.
 * Each house has a certain amount of money stashed. The only constraint
 * stopping you from robbing each of them is that adjacent houses have
 * security systems connected - if two adjacent houses are robbed on the
 * same night, it will automatically contact the police.
 *
 * Given an integer array nums representing the amount of money of each house,
 * return the maximum amount of money you can rob tonight without alerting the police.
 *
 * Example 1:
 * Input: nums = [1,2,3,1]
 * Output: 4
 * Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
 * Total amount you can rob = 1 + 3 = 4.
 *
 * Example 2:
 * Input: nums = [2,7,9,3,1]
 * Output: 12
 * Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
 * Total amount you can rob = 2 + 9 + 1 = 12.
 *
 * Constraints:
 * - 1 <= nums.length <= 100
 * - 0 <= nums[i] <= 400
 *
 * Key Insight:
 * At each house i, you have two choices:
 * 1. Rob this house: You get nums[i] + max profit from house i-2 (can't rob i-1)
 * 2. Skip this house: You get max profit from house i-1
 *
 * Recurrence relation: dp[i] = max(nums[i] + dp[i-2], dp[i-1])
 *
 * This is similar to Climbing Stairs but instead of COUNTING ways,
 * we're finding the MAXIMUM value.
 *
 * Target Complexity:
 * Time: O(n)
 * Space: O(1) for optimized solution
 */

// Approach 1: Recursion (Brute Force)
// Time: O(2^n) - exponential, each house has 2 choices
// Space: O(n) - recursion stack depth
function robRecursive(nums, i = nums.length - 1) {
  // Base cases
  if (i < 0) return 0;
  if (i === 0) return nums[0];

  // Choice: rob house i (skip i-1) OR skip house i
  return Math.max(
    nums[i] + robRecursive(nums, i - 2),  // rob this house
    robRecursive(nums, i - 1)              // skip this house
  );
}

// Approach 2: Memoization (Top-down DP)
// Time: O(n) - each subproblem solved once
// Space: O(n) - memo storage + recursion stack
function robMemo(nums, i = nums.length - 1, memo = new Map()) {
  // Base cases
  if (i < 0) return 0;
  if (i === 0) return nums[0];

  // Check memo
  if (memo.has(i)) return memo.get(i);

  // Choice: rob house i (skip i-1) OR skip house i
  const result = Math.max(
    nums[i] + robMemo(nums, i - 2, memo),  // rob this house
    robMemo(nums, i - 1, memo)              // skip this house
  );

  memo.set(i, result);
  return result;
}

// Approach 3: Iteration (Bottom-up DP)
// Time: O(n)
// Space: O(n) - dp array
function robIterative(nums) {
  if(nums.length === 1) return nums[0];
  if(nums.length === 2) return Math.max(nums[1],nums[0]);
  let dp = [nums[0],Math.max(nums[0],nums[1])]
  for(let i = 2;i<nums.length;i++){
    dp[i] = Math.max(nums[i] + dp[i-2], dp[i -1]);
  }
  return dp[nums.length -1];
}

// Approach 4: Optimized (O(1) space)
// Time: O(n)
// Space: O(1) - only track two previous values
function rob(nums) {
  if(nums.length === 1) return nums[0];
  if(nums.length === 2) return Math.max(nums[1],nums[0]);
  let first = nums[0];
  let second = Math.max(nums[0],nums[1]);
  for(let i = 2;i<nums.length;i++){
    let temp = second;
    second = Math.max(nums[i] + first, second);
    first = temp;

  }
  return second;
}

// Tests
console.log("=== Recursion ===");
console.log(robRecursive([1,2,3,1]));      // 4
console.log(robRecursive([2,7,9,3,1]));    // 12
console.log(robRecursive([2,1,1,2]));      // 4

console.log("\n=== Memoization ===");
console.log(robMemo([1,2,3,1]));           // 4
console.log(robMemo([2,7,9,3,1]));         // 12
console.log(robMemo([2,1,1,2]));           // 4

console.log("\n=== Iteration ===");
console.log(robIterative([1,2,3,1]));      // 4
console.log(robIterative([2,7,9,3,1]));    // 12
console.log(robIterative([2,1,1,2]));      // 4

console.log("\n=== Optimized ===");
console.log(rob([1,2,3,1]));               // 4
console.log(rob([2,7,9,3,1]));             // 12
console.log(rob([2,1,1,2]));               // 4
