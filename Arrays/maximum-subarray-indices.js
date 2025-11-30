/**
 * Maximum Subarray with Indices (Kadane's Variation)
 * Difficulty: Medium
 *
 * Given an integer array nums, find the subarray with the largest sum,
 * and return the start and end indices of that subarray.
 *
 * A subarray is a contiguous non-empty sequence of elements within an array.
 *
 * Example 1:
 * Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
 * Output: [3, 6]
 * Explanation: The subarray [4,-1,2,1] has the largest sum 6, starting at index 3 and ending at index 6.
 *
 * Example 2:
 * Input: nums = [1]
 * Output: [0, 0]
 * Explanation: The subarray [1] has the largest sum 1.
 *
 * Example 3:
 * Input: nums = [5,4,-1,7,8]
 * Output: [0, 4]
 * Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.
 *
 * Example 4:
 * Input: nums = [-2,-3,-1,-4]
 * Output: [2, 2]
 * Explanation: The subarray [-1] has the largest sum -1.
 *
 * Constraints:
 * - 1 <= nums.length <= 10^5
 * - -10^4 <= nums[i] <= 10^4
 *
 * Target Complexity:
 * Time: O(N) we loop through everything once
 * Space: O(1) we have 5 variables that we track
 */

function maxSubArrayIndices(nums) {
  // Edge cases
  if (nums.length === 0) {
    return [];
  }
  if (nums.length === 1) {
    return [0, 0];
  }

  // Initialize tracking variables
  let current = nums[0];  // Current subarray sum
  let max = nums[0];      // Maximum sum found so far
  let start = 0;          // Start index of max subarray
  let end = 0;            // End index of max subarray
  let tempStart = 0;      // Temporary start index for current subarray

  for (let i = 1; i < nums.length; i++) {
    // Decide: extend current subarray or start fresh
    if (current + nums[i] > nums[i]) {
      current = current + nums[i];  // Extend current subarray
    } else {
      current = nums[i];            // Start fresh from current element
      tempStart = i;                // Mark new potential start
    }

    // If we found a new maximum, update our result indices
    if(current > max){
      max = current;
      start = tempStart;  // Lock in the start of this subarray
      end = i;            // Lock in the end at current position
    }
  }
  return [start, end];
}

// Tests
console.log(maxSubArrayIndices([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // [3, 6]
console.log(maxSubArrayIndices([1])); // [0, 0]
console.log(maxSubArrayIndices([5, 4, -1, 7, 8])); // [0, 4]
console.log(maxSubArrayIndices([-2, -3, -1, -4])); // [2, 2]
console.log(maxSubArrayIndices([-1])); // [0, 0]
