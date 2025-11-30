/**
 * Print All Subsequences of a String
 * Difficulty: Medium
 *
 * Given a string, generate all possible subsequences of the string.
 * A subsequence is a sequence that can be derived from another sequence by deleting
 * some or no elements without changing the order of the remaining elements.
 *
 * Example 1:
 * Input: s = "abc"
 * Output: ["", "a", "b", "c", "ab", "ac", "bc", "abc"]
 * Explanation: All possible subsequences including empty string
 *
 * Example 2:
 * Input: s = "ab"
 * Output: ["", "a", "b", "ab"]
 *
 * Example 3:
 * Input: s = "a"
 * Output: ["", "a"]
 *
 * Example 4:
 * Input: s = ""
 * Output: [""]
 *
 * Constraints:
 * - 0 <= s.length <= 10
 * - s consists of lowercase English letters
 *
 * Hint: For each character, you have 2 choices: include it or exclude it
 * Think recursively: at each position, branch into two paths
 *
 * Target Complexity:
 * Time: O(2^N) - 2 choices for each of N characters
 * Space: O(N) - recursion depth
 */

function printSubsequences(s) {
  const result = [];
  function backtrack(index, current){
    if(s.length === index){
      result.push(current);
      return;
    }

    backtrack(index + 1, current);
    backtrack(index + 1, current + s[index]);
  }

  backtrack(0,"");
  return result;
}

// Tests
console.log(printSubsequences("abc")); // ["", "a", "b", "ab", "c", "ac", "bc", "abc"]
console.log(printSubsequences("ab")); // ["", "a", "b", "ab"]
console.log(printSubsequences("a")); // ["", "a"]
console.log(printSubsequences("")); // [""]
console.log(printSubsequences("xyz")); // 8 subsequences
