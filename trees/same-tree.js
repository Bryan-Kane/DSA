/**
 * Same Tree
 * Difficulty: Easy
 *
 * Given the roots of two binary trees p and q, write a function to check if they are the same or not.
 * Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.
 *
 * Example:
 * Input: p = [1,2,3], q = [1,2,3]
 * Output: true
 *
 * Constraints:
 * - The number of nodes in both trees is in the range [0, 100]
 * - -10^4 <= Node.val <= 10^4
 *
 * Target Complexity:
 * Time: O(?)
 * Space: O(?)
 */

class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

//Time: O(N) hits every node once
//Space: O(W) stack is as big as the widest level of the tree
// BFS approach - uses queue
function isSameTree(p, q) {
  let queueLeft = [];
  let queueRight = [];
  queueLeft.push(p);
  queueRight.push(q);
  while(queueLeft.length > 0){

    let left = queueLeft.shift();
    let right = queueRight.shift();
    if(left === null && right === null){
      continue;
    }
    if(left === null || right === null){
      return false;
    }
    if(left.val !== right.val){
      return false;
    }
    queueLeft.push(left.left,left.right);
    queueRight.push(right.left,right.right);
  }
  return true;

}

// DFS approach - uses recursion
//Time: O(N) hits every node once potentially
//Space: O(H) stack is as big as the height of the tree
function isSameTreeRecursive(p, q) {
  if(p === null && q === null){
    return true;
  }
  if(p === null || q === null){
    return false;
  }
  if(p.val !== q.val){
    return false;
  }
  return isSameTreeRecursive(p.left, q.left) && isSameTreeRecursive(p.right, q.right);
}

// Tests - BFS
console.log("=== BFS Approach ===");
let p1 = new TreeNode(1, new TreeNode(2), new TreeNode(3));
let q1 = new TreeNode(1, new TreeNode(2), new TreeNode(3));
console.log(isSameTree(p1, q1)); // true

let p2 = new TreeNode(1, new TreeNode(2));
let q2 = new TreeNode(1, null, new TreeNode(2));
console.log(isSameTree(p2, q2)); // false

let p3 = new TreeNode(1, new TreeNode(2), new TreeNode(1));
let q3 = new TreeNode(1, new TreeNode(1), new TreeNode(2));
console.log(isSameTree(p3, q3)); // false

// Tests - DFS Recursive
console.log("\n=== DFS Recursive Approach ===");
let p4 = new TreeNode(1, new TreeNode(2), new TreeNode(3));
let q4 = new TreeNode(1, new TreeNode(2), new TreeNode(3));
console.log(isSameTreeRecursive(p4, q4)); // true

let p5 = new TreeNode(1, new TreeNode(2));
let q5 = new TreeNode(1, null, new TreeNode(2));
console.log(isSameTreeRecursive(p5, q5)); // false

let p6 = new TreeNode(1, new TreeNode(2), new TreeNode(1));
let q6 = new TreeNode(1, new TreeNode(1), new TreeNode(2));
console.log(isSameTreeRecursive(p6, q6)); // false
