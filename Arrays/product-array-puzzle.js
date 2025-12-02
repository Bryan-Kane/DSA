/**
 * Product Array Puzzle (Product of Array Except Self)
 *
 * Given an array nums of n integers, return an array output such that output[i]
 * is equal to the product of all the elements of nums except nums[i].
 *
 * Must be done WITHOUT using division and in O(n) time.
 *
 * Example 1:
 * Input: [1, 2, 3, 4]
 * Output: [24, 12, 8, 6]
 * Explanation:
 *   output[0] = 2*3*4 = 24
 *   output[1] = 1*3*4 = 12
 *   output[2] = 1*2*4 = 8
 *   output[3] = 1*2*3 = 6
 *
 * Example 2:
 * Input: [2, 3, 4, 5]
 * Output: [60, 40, 30, 24]
 *
 * Example 3:
 * Input: [-1, 1, 0, -3, 3]
 * Output: [0, 0, 9, 0, 0]
 *
 * Constraints:
 * - 2 <= nums.length <= 10^5
 * - -30 <= nums[i] <= 30
 * - The product of any prefix or suffix is guaranteed to fit in a 32-bit integer
 *
 * Key Insight:
 * For each index i, the answer is: (product of all elements to the left) * (product of all elements to the right)
 *
 * Approach:
 * 1. First pass (left to right): Build prefix products
 * 2. Second pass (right to left): Multiply by suffix products
 *
 * Target Complexity:
 * Time: O(n)
 * Space: O(1) excluding output array
 */

function productExceptSelf(nums) {

    let prefix = new Array(nums.length);
    let suffix = new Array(nums.length);
    prefix[0] = 1;
    suffix[suffix.length - 1] = 1;
    for(let i = 1;i<nums.length;i++){
        prefix[i] = nums[i-1] * prefix[i-1];
    }
    for(let i = suffix.length - 2;i>=0;i--){
        suffix[i] = nums[i+1] * suffix[i+1];
    }
    let result = [];
    for(let i =0;i<nums.length;i++){
        result[i] = suffix[i] * prefix[i];
    }

    return result;

}

// Tests
console.log(productExceptSelf([1, 2, 3, 4]));        // [24, 12, 8, 6]
console.log(productExceptSelf([2, 3, 4, 5]));        // [60, 40, 30, 24]
console.log(productExceptSelf([-1, 1, 0, -3, 3]));   // [0, 0, 9, 0, 0]
console.log(productExceptSelf([1, 2]));              // [2, 1]
console.log(productExceptSelf([0, 0]));              // [0, 0]
