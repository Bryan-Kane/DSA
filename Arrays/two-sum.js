/**
 * Two Sum
 * 
 * Given an array of integers nums and an integer target, return indices of the 
 * two numbers such that they add up to target.
 * 
 * You may assume that each input would have exactly one solution, and you may 
 * not use the same element twice.
 * 
 * You can return the answer in any order.
 * 
 * Example 1:
 * Input: nums = [2,7,11,15], target = 9
 * Output: [0,1]
 * Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
 * 
 * Example 2:
 * Input: nums = [3,2,4], target = 6
 * Output: [1,2]
 * 
 * Example 3:
 * Input: nums = [3,3], target = 6
 * Output: [0,1]
 * 
 * Constraints:
 * - 2 <= nums.length <= 10^4
 * - -10^9 <= nums[i] <= 10^9
 * - -10^9 <= target <= 10^9
 * - Only one valid answer exists
 * 
 * Target Complexity:
 * Time: O(?)
 * Space: O(?)
 */

function twoSum(nums, target) {
  // Your solution here
  let map = new Map();
  for(let i =0;i<nums.length;i++){
    let targ = target - nums[i];
    if(map.has(targ)){
        return [map.get(targ),i];
    } else{
        map.set(nums[i],i);
    }
  }
  return [];
}
//space is O(N) as maps can get as big as the array
//time is O(N) as it can look through the entire array

// Tests
console.log(JSON.stringify(twoSum([2,7,11,15], 9))); // [0,1]
console.log(JSON.stringify(twoSum([3,2,4], 6))); // [1,2]
console.log(JSON.stringify(twoSum([3,3], 6))); // [0,1]
console.log(JSON.stringify(twoSum([-1,-2,-3,-4,-5], -8))); // [2,4] or [4,2]