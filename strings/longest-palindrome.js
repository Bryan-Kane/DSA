/**
 * Longest Palindromic Substring
 *
 * Given a string, find the length of the longest palindromic substring.
 *
 * Example 1:
 * Input: "babad"
 * Output: 3 ("bab" or "aba")
 *
 * Example 2:
 * Input: "cbbd"
 * Output: 2 ("bb")
 *
 * Example 3:
 * Input: "a"
 * Output: 1
 *
 * Example 4:
 * Input: "racecar"
 * Output: 7
 *
 * Approach: Expand Around Center
 * - For each position, treat it as the center and expand outward
 * - Check both odd-length (single center) and even-length (double center) palindromes
 * - Track the maximum length found
 *
 * Target Complexity:
 * Time: O(n²)
 * Space: O(1)
 */

function longestPalindrome(s) {
    if(s.length === 0){
        return 0;
    }
    let maxLength = 1;
    function expand(left, right){
        while(left >= 0 && right < s.length && s[left] === s[right]){
            left--;
            right++;
        }
        return right - left - 1;
    }

    for(let i =0;i<s.length;i++){
        let odd = expand(i,i);
        let even = expand(i, i +1);

        maxLength = Math.max(maxLength,odd,even);
    }

    return maxLength;
}

// Tests
console.log(longestPalindrome("babad"));    // 3
console.log(longestPalindrome("cbbd"));     // 2
console.log(longestPalindrome("a"));        // 1
console.log(longestPalindrome("racecar"));  // 7
console.log(longestPalindrome("abba"));     // 4
console.log(longestPalindrome("abc"));      // 1
