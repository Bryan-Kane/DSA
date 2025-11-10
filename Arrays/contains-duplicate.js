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
 * Time: O(?)
 * Space: O(?)
 */

function containsDuplicate(nums) {
  // Your solution here
  if(nums.length <= 0){
    return false;
  }
  let set = new Set();
  for(let i =0;i<nums.length;i++){
    if(set.has(nums[i])){
      return true;
    }
    set.add(nums[i]);
  }
  return false;
}
//Time: O(N) loops through the array once at its worst
//Space: O(N) set can increase in size to the size of the array at worst

// Tests
console.log(containsDuplicate([1,2,3,1])); // true
console.log(containsDuplicate([1,2,3,4])); // false
console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2])); // true
console.log(containsDuplicate([1])); // false
