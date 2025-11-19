/**
 * Is String B a Substring of String A
 * Difficulty: Easy
 *
 * Given two strings A and B, determine if B is a substring of A.
 * Return true if B appears as a contiguous sequence of characters in A, false otherwise.
 *
 * Example 1:
 * Input: A = "hello world", B = "world"
 * Output: true
 * Explanation: "world" appears in "hello world" starting at index 6
 *
 * Example 2:
 * Input: A = "hello world", B = "planet"
 * Output: false
 * Explanation: "planet" does not appear in "hello world"
 *
 * Example 3:
 * Input: A = "abcdef", B = "cde"
 * Output: true
 * Explanation: "cde" appears in "abcdef" starting at index 2
 *
 * Example 4:
 * Input: A = "abcdef", B = ""
 * Output: true
 * Explanation: Empty string is a substring of any string
 *
 * Example 5:
 * Input: A = "test", B = "testing"
 * Output: false
 * Explanation: B is longer than A, cannot be a substring
 *
 * Constraints:
 * - 0 <= A.length, B.length <= 10^4
 * - A and B consist of lowercase English letters
 *
 * Target Complexity:
 * Time: O(?)
 * Space: O(?)
 */

/**
 * Approach 1: Using built-in method (simplest)
 * This is the most straightforward solution using JavaScript's includes method
 *
 * Target Complexity:
 * Time: O(N*M) worst case checks ever letter N vs every letter M 
 * Space: O(1)
 */
function isSubstringBuiltIn(A, B) {
  if(A.includes(B)){
    return true;
  } 
  return false;
}

/**
 * Approach 2: Manual implementation (naive/brute force)
 * Check every possible starting position in A to see if B matches
 *
 * Target Complexity:
 * Time: O(N * M)
 * Space: O(1)
 */
function isSubstringManual(A, B) {
  let length = A.length - B.length;
  for(let i =0;i<=length;i++){
    let found = true;
    for(let j =0;j<B.length;j++){
      if(B[j] !=A[i + j]){
        found = false;
      }
    }
    if(found){
      return true;
    }
  }
  return false;
}

/**
 * Approach 3: Using indexOf (another built-in approach)
 * Returns true if B is found in A (indexOf returns -1 if not found)
 *
 * Target Complexity:
 * Time: O(N * M)
 * Space: O(1)
 */
function isSubstringIndexOf(A, B) {
  let ans = A.indexOf(B);
  if(ans === -1){
    return false;
  }
  return true;
}

// Tests
console.log("=== Approach 1: Built-in includes ===");
console.log(isSubstringBuiltIn("hello world", "world"));  // true
console.log(isSubstringBuiltIn("hello world", "planet")); // false
console.log(isSubstringBuiltIn("abcdef", "cde"));         // true
console.log(isSubstringBuiltIn("abcdef", ""));            // true
console.log(isSubstringBuiltIn("test", "testing"));       // false

console.log("\n=== Approach 2: Manual Implementation ===");
console.log(isSubstringManual("hello world", "world"));   // true
console.log(isSubstringManual("hello world", "planet"));  // false
console.log(isSubstringManual("abcdef", "cde"));          // true
console.log(isSubstringManual("abcdef", ""));             // true
console.log(isSubstringManual("test", "testing"));        // false

console.log("\n=== Approach 3: indexOf ===");
console.log(isSubstringIndexOf("hello world", "world"));  // true
console.log(isSubstringIndexOf("hello world", "planet")); // false
console.log(isSubstringIndexOf("abcdef", "cde"));         // true
console.log(isSubstringIndexOf("abcdef", ""));            // true
console.log(isSubstringIndexOf("test", "testing"));       // false
