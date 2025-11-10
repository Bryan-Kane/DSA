/**
 * Product of Array Except Self
 * Difficulty: Medium
 *
 * Given an integer array nums, return an array answer such that answer[i] is equal to
 * the product of all the elements of nums except nums[i].
 *
 * The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
 *
 * You must write an algorithm that runs in O(n) time and without using the division operation.
 *
 * Example 1:
 * Input: nums = [1,2,3,4]
 * Output: [24,12,8,6]
 *
 * Example 2:
 * Input: nums = [-1,1,0,-3,3]
 * Output: [0,0,9,0,0]
 *
 * Constraints:
 * - 2 <= nums.length <= 10^5
 * - -30 <= nums[i] <= 30
 * - The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer
 *
 * Follow up: Can you solve the problem in O(1) extra space complexity?
 * (The output array does not count as extra space for space complexity analysis.)
 *
 * Target Complexity:
 * Time: O(?)
 * Space: O(?)
 */

function productExceptSelf(nums) {
  // Your solution here
  if(nums.length <= 0){
    return [];
  }

  let left = [];
  left.push(1);
  let leftVal = nums[0];
  for(let i =1;i<nums.length;i++){
      left.push(leftVal);
      leftVal *= nums[i];
  }

  let reversed = [...nums].reverse();
  let right = [];
  right.push(1);
  let rightVal = reversed[0];
  for(let i = 1;i< reversed.length;i++){
      right.push(rightVal);
      rightVal *= reversed[i];
  }
  right.reverse();

  let result = [];
  for(let i =0;i<nums.length;i++){
    result.push(left[i] * right[i])
  }

  return result;

  
}

//Space: O(N) we create 3 arrays that scale to the size of the arrary so O(3N) which reduces to O(N)
//Time: O(N) we loop through 3 times the size of the array which reduces to O(N)

// Tests
console.log(JSON.stringify(productExceptSelf([1,2,3,4]))); // [24,12,8,6]
console.log(JSON.stringify(productExceptSelf([-1,1,0,-3,3]))); // [0,0,9,0,0]
console.log(JSON.stringify(productExceptSelf([2,3,4,5]))); // [60,40,30,24]
console.log(JSON.stringify(productExceptSelf([1,1]))); // [1,1]

function productExceptSelf01(nums) {
  if(nums.length <= 0){return [];}
  let result = [];
  let temp = 1;
  for(let i = 0; i<nums.length;i++){
    result.push(temp);
    temp *= nums[i];
  }
  temp = 1;
  for(let i = nums.length - 1;i>=0;i--){
    result[i] *= temp;
    temp *= nums[i];
  }

  return result;
}

//Space: O(1) (ignore the result)
//Time: O(N)

// Tests for O(1) space solution
console.log(JSON.stringify(productExceptSelf01([1,2,3,4]))); // [24,12,8,6]
console.log(JSON.stringify(productExceptSelf01([-1,1,0,-3,3]))); // [0,0,9,0,0]
console.log(JSON.stringify(productExceptSelf01([2,3,4,5]))); // [60,40,30,24]
console.log(JSON.stringify(productExceptSelf01([1,1]))); // [1,1]

