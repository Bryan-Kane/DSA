/**
 * Valid Anagram
 * Difficulty: Easy
 *
 * Given two strings str1 and str2, return true if str2 is an anagram of str1, and false otherwise.
 *
 * Example:
 * Input: str1 = "anagram", str2 = "nagaram"
 * Output: true
 *
 * Constraints:
 * - 1 <= str1.length, str2.length <= 5 * 10^4
 * - str1 and str2 consist of lowercase English letters
 *
 * Target Complexity:
 * Time: O(?)
 * Space: O(?)
 */

function isAnagram(str1, str2) {
  if(str1.length !== str2.length){
    return false;
  }
  let str1Array = [...str1].sort();
  let str2Array = [...str2].sort();
  for(let i =0;i<str1Array.length;i++){
    if(str1Array[i] !== str2Array[i]){
      return false;
    }
  }
  return true;
}

//space O(N) map scales to the size of the string
//time O(N) loop through string once
function isAnagramMap(str1, str2){
  if(str1.length !== str2.length){
    return false;
  }
  let map = new Map();
  for(let i=0;i<str1.length;i++){
    map.set(str1[i],map.has(str1[i]) ? map.get(str1[i]) + 1 : 1);
    if(map.get(str1[i]) === 0){
      map.delete(str1[i]);
    }
    map.set(str2[i], map.has(str2[i]) ? map.get(str2[i]) - 1 : -1);
    if(map.get(str2[i]) === 0){
      map.delete(str2[i]);
    }
  }
  if(map.size === 0){
    return true;
  }
  return false;
}

// Tests
console.log(isAnagram("anagram", "nagaram")); // true
console.log(isAnagram("rat", "car"));         // false
console.log(isAnagram("listen", "silent"));   // true
console.log(isAnagram("hello", "world"));     // false
console.log(isAnagram("a", "a"));             // true
console.log(isAnagram("ab", "ba"));           // true
console.log(isAnagram("aacc", "ccac"));       // false

console.log("\n=== Map Approach ===");
console.log(isAnagramMap("anagram", "nagaram")); // true
console.log(isAnagramMap("rat", "car"));         // false
console.log(isAnagramMap("listen", "silent"));   // true
console.log(isAnagramMap("hello", "world"));     // false
console.log(isAnagramMap("a", "a"));             // true
console.log(isAnagramMap("ab", "ba"));           // true
console.log(isAnagramMap("aacc", "ccac"));       // false
