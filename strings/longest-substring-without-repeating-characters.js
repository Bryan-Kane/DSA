/**
 * Longest Substring Without Repeating Characters
 * Difficulty: Medium
 *
 * Given a string str, find the length of the longest substring without repeating characters.
 *
 * Example:
 * Input: str = "abcabcbb"
 * Output: 3
 * Explanation: The answer is "abc", with the length of 3.
 *
 * Constraints:
 * - 0 <= str.length <= 5 * 10^4
 * - str consists of English letters, digits, symbols and spaces
 *
 * Target Complexity:
 * Time: O(N) Loop through every character in the string
 * Space: O(min(N,M)) at most store the max substring
 */

function lengthOfLongestSubstring(str) {
  let maxLength = 0;
  let left = 0;
  let set = new Set();
  for(let right = 0;right<str.length;right++){
    while(set.has(str[right])){
      set.delete(str[left]);
      left++;
    }
    set.add(str[right]);
    maxLength = Math.max(maxLength, right-left + 1);
  }
  return maxLength;


}

// Time: O(N) - each character is visited at most twice (once by right, once by left)
// Space: O(min(N, M)) where M is the character set size (26 for lowercase, 128 for ASCII, etc.)

// Tests
console.log(lengthOfLongestSubstring("abcabcbb"));    // 3
console.log(lengthOfLongestSubstring("bbbbb"));       // 1
console.log(lengthOfLongestSubstring("pwwkew"));      // 3
console.log(lengthOfLongestSubstring(""));            // 0
console.log(lengthOfLongestSubstring("dvdf"));        // 3
console.log(lengthOfLongestSubstring("abcdefg"));     // 7
console.log(lengthOfLongestSubstring("tmmzuxt"));     // 5
