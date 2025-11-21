/**
 * Group Anagrams
 * Difficulty: Medium
 *
 * Given an array of strings strs, group the anagrams together. You can return the answer in any order.
 * An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
 * typically using all the original letters exactly once.
 *
 * Example:
 * Input: strs = ["eat","tea","tan","ate","nat","bat"]
 * Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
 *
 * Constraints:
 * - 1 <= strs.length <= 10^4
 * - 0 <= strs[i].length <= 100
 * - strs[i] consists of lowercase English letters
 *
 * Target Complexity:
 * Time: O(N * K log K) where N = number of strings, K = max length of a string
 *        - Loop through N strings: O(N)
 *        - For each string, split/sort/join takes O(K log K) due to sorting
 *        - Total: O(N * K log K)
 * Space: O(N * K)
 *        - Map stores all N strings, each up to K characters long
 *        - Sorted keys also take up space (N keys, each K chars)
 *        - Total: O(N * K)
 */

function groupAnagrams(strs) {
  let result = [];
  let map = new Map();
  for(let i =0;i<strs.length;i++){
    let item = strs[i].split('').sort().join('');
    if(map.has(item)){
      let pos = map.get(item);
      result[pos].push(strs[i]);
    } else{
      map.set(item,result.length);
      result.push([strs[i]])
    }
  }
  return result;
}

// Tests
console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));
// [["bat"],["nat","tan"],["ate","eat","tea"]] (order may vary)

console.log(groupAnagrams([""]));
// [[""]]

console.log(groupAnagrams(["a"]));
// [["a"]]
