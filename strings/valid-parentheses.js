/**
 * Valid Parentheses
 * Difficulty: Easy
 *
 * Given a string str containing just the characters '(', ')', '{', '}', '[' and ']',
 * determine if the input string is valid.
 *
 * An input string is valid if:
 * 1. Open brackets must be closed by the same type of brackets.
 * 2. Open brackets must be closed in the correct order.
 * 3. Every close bracket has a corresponding open bracket of the same type.
 *
 * Example:
 * Input: str = "()"
 * Output: true
 *
 * Constraints:
 * - 1 <= str.length <= 10^4
 * - str consists of parentheses only '()[]{}'
 *
 * Target Complexity:
 * Time: O(N) loops through once
 * Space: O(N) store a temp array of values up to the size of N
 */

function isValid(str) {
  let temp = [];
  const push = ["(","[","{"];//using these so i dont have to write it out on line 30
  const pop = [")","]","}"];//not going to count it in the Space, just a shortcut
  
  for(let i =0;i<str.length;i++){
    if(push.includes(str[i])){
      temp.push(str[i]);
    } else if(pop.includes(str[i])){
      if(temp.length == 0){
        return false;
      }
      let item = temp.pop();
      if(item == "(" && str[i] !== ")"){
        return false;
      } else if (item == "[" && str[i] !== "]"){
        return false;
      } else if(item == "{" && str[i] !== "}"){
        return false;
      }
    }
  }
  if(temp.length > 0){
    return false;
  }

  return true;
  // Your code here
}

//Time: O(N) loop through every character once
//Space: O(N) store a temp array of values up to the size of N

function isValidOptimized(str) {
  let stack = [];
  const pairs = {
    '(': ')',
    '[': ']',
    '{': '}'
  };

  for(let i = 0; i < str.length; i++) {
    const char = str[i];

    // If it's an opening bracket, push to stack
    if(pairs[char]) {
      stack.push(char);
    }
    // If it's a closing bracket
    else {
      if(stack.length === 0) {
        return false;
      }
      const last = stack.pop();
      if(pairs[last] !== char) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

// Tests
console.log(isValid("()"));        // true
console.log(isValid("()[]{}"));    // true
console.log(isValid("(]"));        // false
console.log(isValid("([)]"));      // false
console.log(isValid("{[]}"));      // true
console.log(isValid("(("));        // false
console.log(isValid("}}"));        // false

console.log("\n=== Optimized Approach ===");
console.log(isValidOptimized("()"));        // true
console.log(isValidOptimized("()[]{}"));    // true
console.log(isValidOptimized("(]"));        // false
console.log(isValidOptimized("([)]"));      // false
console.log(isValidOptimized("{[]}"));      // true
console.log(isValidOptimized("(("));        // false
console.log(isValidOptimized("}}"));        // false
