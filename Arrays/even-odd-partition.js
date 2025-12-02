/**
 * Even-Odd Partition
 *
 * Convert an array such that all even numbers occur before all the odd numbers.
 * Must be done in a single pass with O(1) extra space.
 *
 * Example 1:
 * Input: [3, 2, 4, 7, 8, 1, 5, 6]
 * Output: [6, 2, 4, 8, 7, 1, 5, 3] (any valid arrangement where evens come first)
 *
 * Example 2:
 * Input: [1, 2, 3, 4]
 * Output: [4, 2, 3, 1] (evens before odds)
 *
 * Example 3:
 * Input: [2, 4, 6]
 * Output: [2, 4, 6] (already valid)
 *
 * Constraints:
 * - Single pass through array (O(n) time)
 * - O(1) extra space (in-place)
 * - Order within evens/odds doesn't matter
 *
 * Key Insight:
 * Use two pointers - one from start looking for odds, one from end looking for evens.
 * Swap when both find elements in wrong position.
 * Similar to Dutch National Flag / Quick Sort partition.
 *
 * Target Complexity:
 * Time: O(n)
 * Space: O(1)
 */

function evenOddPartition(arr) {
  if(arr.length <= 1){
    return true;
  }
  let left = 0;
  let right = arr.length - 1;
  while(left < right){
    if(arr[left] % 2 !== 0 && arr[right] % 2 === 0){
      let temp = arr[left];
      arr[left] = arr[right];
      arr[right] = temp;
      left++;
      right--;
    }
    while(left < right && arr[left] % 2 === 0){
      left++;
    }
    while(left < right && arr[right] % 2 !== 0){
      right--;
    }
  }
  return arr;

}

// Tests
function isValid(arr) {
  let seenOdd = false;
  for (let num of arr) {
    if (num % 2 === 0) {
      if (seenOdd) return false; // even after odd = invalid
    } else {
      seenOdd = true;
    }
  }
  return true;
}

let arr1 = [3, 2, 4, 7, 8, 1, 5, 6];
evenOddPartition(arr1);
console.log(arr1, isValid(arr1)); // should be true

let arr2 = [1, 2, 3, 4];
evenOddPartition(arr2);
console.log(arr2, isValid(arr2)); // should be true

let arr3 = [2, 4, 6];
evenOddPartition(arr3);
console.log(arr3, isValid(arr3)); // should be true

let arr4 = [1, 3, 5];
evenOddPartition(arr4);
console.log(arr4, isValid(arr4)); // should be true

let arr5 = [];
evenOddPartition(arr5);
console.log(arr5, isValid(arr5)); // should be true

let arr6 = [1];
evenOddPartition(arr6);
console.log(arr6, isValid(arr6)); // should be true
