/**
 * Word Break
 *
 * Given a string s and a dictionary of words, determine if s can be segmented
 * into a space-separated sequence of one or more dictionary words.
 *
 * Example 1:
 * Input: s = "leetcode", wordDict = ["leet", "code"]
 * Output: true
 * Explanation: "leetcode" can be segmented as "leet code"
 *
 * Example 2:
 * Input: s = "applepenapple", wordDict = ["apple", "pen"]
 * Output: true
 * Explanation: "applepenapple" can be segmented as "apple pen apple"
 *
 * Example 3:
 * Input: s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
 * Output: false
 *
 * Constraints:
 * - 1 <= s.length <= 300
 * - 1 <= wordDict.length <= 1000
 * - All strings consist of lowercase English letters
 *
 * Key Insight:
 * Use DP where dp[i] = true if s[0...i-1] can be segmented.
 * For each position i, check all possible words that could END at position i.
 * If dp[j] is true and s[j...i] is a valid word, then dp[i] = true.
 *
 * Target Complexity:
 * Time: O(n² * m) where n = string length, m = avg word length for comparison
 * Space: O(n) for dp array
 */

function wordBreak(s, wordDict) {
    let wordSet = new Set(wordDict);

    // dp[i] = true if s[0...i-1] can be segmented into dictionary words
    let dp = new Array(s.length + 1).fill(false);
    dp[0] = true; // empty string is always valid

    for (let i = 1; i <= s.length; i++) {
        // Check all possible starting positions j for a word ending at i
        for (let j = 0; j < i; j++) {
            // If s[0...j-1] is valid AND s[j...i-1] is a word in dictionary
            if (dp[j] && wordSet.has(s.substring(j, i))) {
                dp[i] = true;
                break; // Found one valid split, no need to check more
            }
        }
    }

    return dp[s.length];
}

// Tests
console.log(wordBreak("leetcode", ["leet", "code"]));                    // true
console.log(wordBreak("applepenapple", ["apple", "pen"]));               // true
console.log(wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"])); // false
console.log(wordBreak("a", ["a"]));                                      // true
console.log(wordBreak("ab", ["a", "b"]));                                // true
console.log(wordBreak("cars", ["car", "ca", "rs"]));                     // true
