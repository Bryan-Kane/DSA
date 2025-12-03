/**
 * Contains Duplicate
 *
 * Given an integer array nums, return true if any value appears at least twice
 * in the array, and return false if every element is distinct.
 *
 * Example 1:
 * Input: nums = [1,2,3,1]
 * Output: true
 *
 * Example 2:
 * Input: nums = [1,2,3,4]
 * Output: false
 *
 * Example 3:
 * Input: nums = [1,1,1,3,3,4,3,2,4,2]
 * Output: true
 *
 * Constraints:
 * - 1 <= nums.length <= 10^5
 * - -10^9 <= nums[i] <= 10^9
 *
 * Target Complexity:
 * Time: O(N): loop through the array of size n once
 * Space: O(N): set grows proprotionaly with n until a duplicate is found
 */

function containsDuplicate(nums) {
  let set = new Set();
  let results = [];
  for(let i =0;i<nums.length;i++){
    if(set.has(nums[i])){
      results.push(nums[i]);
    } else{
      set.add(nums[i]);
    }
  }
  return results;

}

// Tests
console.log(containsDuplicate([1,2,3,1])); // [1]
console.log(containsDuplicate([1,2,3,4])); // []
console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2])); // [1,3,4,2]
console.log(containsDuplicate([1])); // []
