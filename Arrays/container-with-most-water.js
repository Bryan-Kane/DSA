/**
 * Container With Most Water
 * Difficulty: Medium
 *
 * You are given an integer array height of length n. There are n vertical lines drawn
 * such that the two endpoints of the i-th line are (i, 0) and (i, height[i]).
 *
 * Find two lines that together with the x-axis form a container, such that the
 * container contains the most water.
 *
 * Return the maximum amount of water a container can store.
 
 * Notice that you may not slant the container.
 *
 * Example 1:
 * Input: height = [1,8,6,2,5,4,8,3,7]
 * Output: 49
 * Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7].
 * In this case, the max area of water (blue section) the container can contain is 49.
 * The lines are at indices 1 and 8 with heights 8 and 7.
 * Area = min(8,7) * (8-1) = 7 * 7 = 49
 *
 * Example 2:
 * Input: height = [1,1]
 * Output: 1
 *
 * Constraints:
 * - n == height.length
 * - 2 <= n <= 10^5
 * - 0 <= height[i] <= 10^4
 *
 * Target Complexity:
 * Time: O(n) we loop through every combination
 * Space: O(1) we store 5 temp variables
 */

function maxArea(height) {
  function calculate(leftPos, rightPos, height){
    return (rightPos - leftPos) * height;
  }
  if(height.length < 2){
    return 0;
  }
  let leftPos = 0;
  let left = height[leftPos];
  let rightPos = height.length - 1;
  let right = height[rightPos];
  let area = 0;
  while(leftPos < rightPos){
    area = Math.max(area, calculate(leftPos, rightPos, Math.min(left, right)));
    if(left < right){
      leftPos++;
      left = height[leftPos];
    } else{
      rightPos--;
      right = height[rightPos];
    }
  }
  return area;
}

// Tests
console.log(maxArea([1,8,6,2,5,4,8,3,7])); // 49
console.log(maxArea([1,1])); // 1
console.log(maxArea([4,3,2,1,4])); // 16
console.log(maxArea([1,2,1])); // 2