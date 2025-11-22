// Partition Equal Subset Sum
// Given an array, return subarrays with equal sum
// Examples:
// [1,2,3] => [1,2], [3] (both sum to 3)
// [1,2,2,3] => [1,3], [2,2] (both sum to 4)
// [1,1,1,1] => [1], [1], [1], [1] (all sum to 1)
// [1,2,3,4] => NA (sum is 10, can't partition equally)

function partitionEqualSum(arr) {
  // Step 1: Calculate target
  let total = arr.reduce((a, b) => a + b, 0);
  if (total % 2 !== 0) return null; // Odd sum can't be split equally
  let target = total / 2;

  // Step 2: Initialize DP array
  let dp = new Array(target + 1).fill(false);
  dp[0] = true; // Base case: can always make sum 0

  // Step 3: For each number in array
  for (let num of arr) {
    // Go backwards through possible sums
    for (let sum = target; sum >= num; sum--) {
      if (dp[sum - num]) {
        dp[sum] = true;
      }
    }
  }

  // Step 4: Check if we can make target
  if (!dp[target]) return null;

  // Step 5: Backtrack to find which elements sum to target
  let subset1 = [];
  let currentSum = target;

  for (let i = arr.length - 1; i >= 0; i--) {
    // Check if this element was used to make currentSum
    if (currentSum >= arr[i] && dp[currentSum - arr[i]]) {
      subset1.push(arr[i]);
      currentSum -= arr[i];
      if (currentSum === 0) break;
    }
  }

  // Step 6: Build subset2 from remaining elements
  let subset2 = [];
  let used = new Set(subset1);
  let usedIndices = new Set();

  for (let i = arr.length - 1; i >= 0; i--) {
    if (used.has(arr[i]) && !usedIndices.has(i)) {
      usedIndices.add(i);
      used.delete(arr[i]);
    } else {
      subset2.push(arr[i]);
    }
  }

  return [subset1, subset2];
}

// Test cases
console.log(partitionEqualSum([1, 2, 3])); // Expected: [[1,2], [3]] or similar
console.log(partitionEqualSum([1, 2, 2, 3])); // Expected: [[1,3], [2,2]] or similar
console.log(partitionEqualSum([1, 1, 1, 1])); // Expected: [[1], [1], [1], [1]] or similar
console.log(partitionEqualSum([1, 2, 5])); // Expected: null (sum=8, target=4, impossible)
console.log(partitionEqualSum([1, 5, 11, 5])); // Expected: [[1,5,5], [11]] (both sum to 11)
console.log(partitionEqualSum([1, 2, 3, 4, 5, 6, 7])); // Expected: [[1,2,4,7], [3,5,6]] (both sum to 14)
