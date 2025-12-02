/**
 * Reverse String Keep Spaces
 *
 * Given a string, reverse only the characters (ignoring spaces),
 * but keep spaces in their original positions.
 *
 * Example 1:
 * Input:  "a b c"
 * Output: "c b a"
 *
 * Example 2:
 * Input:  "ab cd ef"
 * Output: "fe dc ba"
 *
 * Example 3:
 * Input:  "  hello world  "
 * Output: "  dlrow olleh  "
 *
 * Example 4:
 * Input:  "abc"
 * Output: "cba"
 *
 * Approach:
 * 1. Extract all non-space characters into an array
 * 2. Reverse that array
 * 3. Build result: if original has space, put space; otherwise take from reversed chars
 *
 * Target Complexity:
 * Time: O(n)
 * Space: O(n)
 */

function reverseKeepSpaces(s) {
    let arr = s.split('').filter(c=>c !== ' ');
    arr.reverse();
    let result = '';
    let charIndex = 0;
    while(result.length < s.length){
        while(s[result.length] === ' '){
            result += ' ';
        }
        if(charIndex < arr.length){
            result += arr[charIndex];
            charIndex++;
        }
    }
    return result;

}

// Tests
console.log(reverseKeepSpaces("a b c"));           // "c b a"
console.log(reverseKeepSpaces("ab cd ef"));        // "fe dc ba"
console.log(reverseKeepSpaces("  hello world  ")); // "  dlrow olleh  "
console.log(reverseKeepSpaces("abc"));             // "cba"
console.log(reverseKeepSpaces("   "));             // "   "
console.log(reverseKeepSpaces("a"));               // "a"
