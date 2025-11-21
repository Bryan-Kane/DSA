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
  let length = 0;
  let left = 0;
  for(let i = 0;i<str.length;i++){
    while(set.has(str[i])){
      set.delete(str[left]);
      left++;
    }
    set.add(str[i]);
    length = Math.max(length,i - left + 1);
  }
  return length;
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
