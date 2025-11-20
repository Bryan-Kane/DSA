/**
 * Minimum Depth of Binary Tree
 * Difficulty: Easy
 *
 * Given a binary tree, find its minimum depth.
 * The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.
 * Note: A leaf is a node with no children.
 *
 * Example:
 * Input: root = [3,9,20,null,null,15,7]
 * Output: 2
 *
 * Constraints:
 * - The number of nodes in the tree is in the range [0, 10^5]
 * - -1000 <= Node.val <= 1000
 *
 * Target Complexity:
 * Time: O(N): visits every node once
 * Space: O(W): Stack is as big as the widest level
 */

class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

// BFS approach - uses queue
function minDepth(root) {
  if(root == null){
    return 0;
  }
  let level = 1;
  let queue = [root];
  while(queue.length > 0){
    let length = queue.length;
    for(let i =0;i<length;i++){
      let top = queue.shift();
      if(top.left ===null && top.right === null){
        return level;
      }
      if(top.left !== null){
        queue.push(top.left);
      }
      if(top.right !== null){
        queue.push(top.right);
      }
    }
    level++;
  }
  return level;
  // Your code here
}

// DFS approach - uses recursion
function minDepthRecursive(root) {
  if(root === null) return 0;
  
  // Leaf node
  if(root.left === null && root.right === null) return 1;
  
  // Only right child exists
  if(root.left === null) return 1 + minDepthRecursive(root.right);
  
  // Only left child exists
  if(root.right === null) return 1 + minDepthRecursive(root.left);
  
  // Both children exist
  return 1 + Math.min(minDepthRecursive(root.left), minDepthRecursive(root.right));
}

// Tests - BFS
console.log("=== BFS Approach ===");
let tree1 = new TreeNode(3,
  new TreeNode(9),
  new TreeNode(20, new TreeNode(15), new TreeNode(7))
);
console.log(minDepth(tree1)); // 2

let tree2 = new TreeNode(2, null, new TreeNode(3, null, new TreeNode(4, null, new TreeNode(5, null, new TreeNode(6)))));
console.log(minDepth(tree2)); // 5

// Tests - DFS Recursive
console.log("\n=== DFS Recursive Approach ===");
let tree3 = new TreeNode(3,
  new TreeNode(9),
  new TreeNode(20, new TreeNode(15), new TreeNode(7))
);
console.log(minDepthRecursive(tree3)); // 2

let tree4 = new TreeNode(2, null, new TreeNode(3, null, new TreeNode(4, null, new TreeNode(5, null, new TreeNode(6)))));
console.log(minDepthRecursive(tree4)); // 5
