/**
 * Payment Transaction Timing Verification
 * Difficulty: Easy
 *
 * Given an array of transaction timestamps (in milliseconds) and a time limit,
 * determine if each transaction occurs within the specified time limit of the previous transaction.
 * Return true if ALL consecutive transactions are within the time limit, false otherwise.
 *
 * Example 1:
 * Input: timestamps = [1000, 2000, 3000], timeLimit = 1500
 * Output: true
 *
 * Example 2:
 * Input: timestamps = [1000, 3000, 4000], timeLimit = 1500
 * Output: false
 *
 * Example 3:
 * Input: timestamps = [5000, 5500, 6000], timeLimit = 600
 * Output: true
 *
 * Constraints:
 * - Timestamps are in milliseconds
 * - Timestamps are in ascending order
 * - timeLimit is a positive integer
 * - Array length >= 1
 *
 * Target Complexity:
 * Time: O(N) where N is number of transactions
 * Space: O(1)
 */

function verifyTransactionTiming(timestamps, timeLimit) {
  // Your code here
  if(timestamps.length <= 1){
    return true;
  }
  for(let i =1;i<timestamps.length;i++){
    if(timestamps[i] - timestamps[i-1] > timeLimit){
      return false;
    }
  }
  return true;
}


console.log(verifyTransactionTiming([1000,2000,3000],1000));
//true
console.log(verifyTransactionTiming([1000,3000,5000],1000));
//false

/**
 * Time Complexity: O(N) where N is the number of transactions
 * - Single pass through the array starting from index 1
 * - Each comparison is O(1)
 * - Early exit on first violation (best case: O(1), worst case: O(N))
 *
 * Space Complexity: O(1)
 * - Only using loop counter variable (i)
 * - No additional data structures
 *
 * Pattern: Consecutive Element Comparison / Early Exit
 *
 * Key Insight: Since timestamps are already sorted, we only need to check
 * if each consecutive pair is within the time limit. Return false immediately
 * on first violation (early exit optimization).
 */