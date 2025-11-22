/**
 * Longest Substring Without Repeating Characters
 * Difficulty: Medium
 *
 * Given a string str, find the length of the longest substring without repeating characters.
 *
 * Example:
 * Input: str = "abcabcbb"
 * Output: 3
 *
 * Constraints:
 * - 0 <= str.length <= 5 * 10^4
 * - str consists of English letters, digits, symbols and spaces
 *
 * Target Complexity:
 * Time: O(N) loop through every character in the parameter
 * Space: O(N) set can potentially be as large as the str
 */

function lengthOfLongestSubstring(str) {
  let set = new Set();
  let left = 0;
  let longest = 0;
  for(let right = 0;right<str.length;right++){
    while(set.has(str[right])){
      set.delete(str[left]);
      left++;
    }
    set.add(str[right]);
    longest = Math.max(longest, right - left + 1);
  }
  return longest;
  // Your code here
}

// Tests
console.log(lengthOfLongestSubstring("abcabcbb"));    // 3
console.log(lengthOfLongestSubstring("bbbbb"));       // 1
console.log(lengthOfLongestSubstring("pwwkew"));      // 3
console.log(lengthOfLongestSubstring(""));            // 0
console.log(lengthOfLongestSubstring("dvdf"));        // 3
console.log(lengthOfLongestSubstring("abcdefg"));     // 7
console.log(lengthOfLongestSubstring("tmmzuxt"));     // 5
