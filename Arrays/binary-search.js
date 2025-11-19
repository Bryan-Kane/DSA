/**
 * Binary Search
 * Difficulty: Easy
 *
 * Given a sorted array of integers nums and a target value, return the index of target in nums.
 * If target is not found, return -1.
 *
 * Example:
 * Input: nums = [-1,0,3,5,9,12], target = 9
 * Output: 4
 *
 * Constraints:
 * - 1 <= nums.length <= 10^4
 * - -10^4 < nums[i], target < 10^4
 * - All integers in nums are unique
 * - nums is sorted in ascending order
 *
 * Target Complexity:
 * Time: O(log n) eeach search we cut down the array by half
 * Space: O(1) we arent storing anything
 */

function binarySearch(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while(left <= right){
    let mid = Math.floor((right + left) / 2);
    if(nums[mid] === target){
      return mid;
    }
    else if(nums[mid] > target){
      right = mid - 1;
    } else{
      left = mid + 1;
    }
  }
  return -1;
}

//Time: O(log n) recursion still cuts it half everytime
//Space: O(log n) each recursive call adds a frame to the call stack, proportional to the Time

function binarySearchRecursion(nums, target, left = 0, right = nums.length - 1){
  if(left > right){
    return -1;
  }
  let mid = Math.floor((right + left) / 2);
  if(nums[mid] === target){
    return mid;
  } else if(nums[mid] > target){
    right = mid - 1;
  } else if(nums[mid] < target) {
    left = mid + 1;
  } 
  return binarySearchRecursion(nums, target, left, right);
}

// Tests
console.log(binarySearch([-1,0,3,5,9,12], 9));     // 4
console.log(binarySearch([-1,0,3,5,9,12], 2));     // -1
console.log(binarySearch([5], 5));                 // 0
console.log(binarySearch([5], -5));                // -1
console.log(binarySearch([1,2,3,4,5,6,7], 1));     // 0
console.log(binarySearch([1,2,3,4,5,6,7], 7));     // 6
console.log(binarySearch([1,2,3,4,5,6,7], 4));     // 3

console.log("\n=== Recursive Approach ===");
console.log(binarySearchRecursion([-1,0,3,5,9,12], 9));     // 4
console.log(binarySearchRecursion([-1,0,3,5,9,12], 2));     // -1
console.log(binarySearchRecursion([5], 5));                 // 0
console.log(binarySearchRecursion([5], -5));                // -1
console.log(binarySearchRecursion([1,2,3,4,5,6,7], 1));     // 0
console.log(binarySearchRecursion([1,2,3,4,5,6,7], 7));     // 6
console.log(binarySearchRecursion([1,2,3,4,5,6,7], 4));     // 3
