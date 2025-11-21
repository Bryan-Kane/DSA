/**
 * Binary Tree Level Order Traversal
 * Difficulty: Medium
 *
 * Given the root of a binary tree, return the level order traversal of its nodes' values.
 * (i.e., from left to right, level by level).
 *
 * Example:
 * Input: root = [3,9,20,null,null,15,7]
 * Output: [[3],[9,20],[15,7]]
 *
 * Constraints:
 * - The number of nodes in the tree is in the range [0, 2000]
 * - -1000 <= Node.val <= 1000
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
//Space: O(W) stack gets as large as the width
//Time: O(N) Every node gets hit once?

// BFS approach - uses queue
function levelOrder(root) {
  if(root === null){
    return [];
  }
  let result = [];
  let queue = [root];
  while(queue.length > 0){
    let length = queue.length;
    let level = [];
    for(let i = 0;i<length;i++){
      let item = queue.shift();
      level.push(item.val);
      if(item.left !== null){
        queue.push(item.left);
      }
      if(item.right !== null){
        queue.push(item.right);
      }
    }
    result.push(level);
  }
  return result;
  
  // Your code here
}
//Space: O(H): Stack gets as large as the height of the tree
//Time: O(N): Every node gets hit once
// DFS approach - uses recursion
function levelOrderRecursive(root) {
  let result = [];
  let level = 0;
  function dfs(node, level){
    if(node === null){
      return;
    }
    if(result.length === level){
      result[level] = [];
    }
    result[level].push(node.val);
    dfs(node.left, level + 1);
    dfs(node.right, level + 1);
  }
  dfs(root, level);
  return result;
}

// Tests - BFS
console.log("=== BFS Approach ===");
let tree1 = new TreeNode(3,
  new TreeNode(9),
  new TreeNode(20, new TreeNode(15), new TreeNode(7))
);
console.log(JSON.stringify(levelOrder(tree1))); // [[3],[9,20],[15,7]]

let tree2 = new TreeNode(1);
console.log(JSON.stringify(levelOrder(tree2))); // [[1]]

console.log(JSON.stringify(levelOrder(null))); // []

// Tests - DFS Recursive
console.log("\n=== DFS Recursive Approach ===");
let tree3 = new TreeNode(3,
  new TreeNode(9),
  new TreeNode(20, new TreeNode(15), new TreeNode(7))
);
console.log(JSON.stringify(levelOrderRecursive(tree3))); // [[3],[9,20],[15,7]]

let tree4 = new TreeNode(1);
console.log(JSON.stringify(levelOrderRecursive(tree4))); // [[1]]

console.log(JSON.stringify(levelOrderRecursive(null))); // []
