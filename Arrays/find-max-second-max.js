/**
 * Find Max and Second Max
 *
 * Given an array of integers, find the maximum and second maximum elements.
 * Must be done in a single pass with O(1) extra space.
 *
 * Example 1:
 * Input: [12, 35, 1, 10, 34, 1]
 * Output: [35, 34]
 *
 * Example 2:
 * Input: [10, 5, 10]
 * Output: [10, 10] (duplicates allowed)
 *
 * Example 3:
 * Input: [5, 5, 5]
 * Output: [5, 5]
 *
 * Example 4:
 * Input: [1, 2]
 * Output: [2, 1]
 *
 * Constraints:
 * - Array has at least 2 elements
 * - Single pass through array (O(n) time)
 * - O(1) extra space
 *
 * Key Insight:
 * Track two variables: max and secondMax.
 * When you find a new max, the old max becomes secondMax.
 * When you find something bigger than secondMax but not max, update secondMax.
 *
 * Target Complexity:
 * Time: O(n)
 * Space: O(1)
 */

function findMaxAndSecondMax(arr) {
    let max = Math.max(arr[1],arr[0]);
    let second = Math.min(arr[1],arr[0]);
    for(let i = 2;i<arr.length;i++){
        if(arr[i] > max){
            second = max;
            max = arr[i];
        } else if (arr[i] > second){
            second = arr[i];
        }

    }
    return [max, second];

}

// Tests
console.log(findMaxAndSecondMax([12, 35, 1, 10, 34, 1])); // [35, 34]
console.log(findMaxAndSecondMax([10, 5, 10]));            // [10, 10]
console.log(findMaxAndSecondMax([5, 5, 5]));              // [5, 5]
console.log(findMaxAndSecondMax([1, 2]));                 // [2, 1]
console.log(findMaxAndSecondMax([2, 1]));                 // [2, 1]
console.log(findMaxAndSecondMax([1, 2, 3, 4, 5]));        // [5, 4]
console.log(findMaxAndSecondMax([5, 4, 3, 2, 1]));        // [5, 4]
