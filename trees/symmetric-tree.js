/**
 * Symmetric Tree
 * Difficulty: Easy
 *
 * Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).
 *
 * Example:
 * Input: root = [1,2,2,3,4,4,3]
 * Output: true
 *
 * Constraints:
 * - The number of nodes in the tree is in the range [1, 1000]
 * - -100 <= Node.val <= 100
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

//space O(W): Stack grows to the widest part of hte tree
//time O(N): Hit every node once
// BFS approach - uses queue
function isSymmetric(root) {
  let queue = [];
  queue.push(root.left,root.right);
  while(queue.length > 0){
    let left = queue.shift();
    let right = queue.shift();
    if(left === null && right === null){
      continue;
    }
    if(left === null || right === null){
      return false;
    }
    if(left.val !== right.val){
      return false;
    }
    queue.push(left.left, right.right, left.right, right.left);
  }
  return true;
}

//space O(H): Stack grows to the size of the height of the tree
//time O(N): Visit every node once
// DFS approach - uses recursion
function isSymmetricRecursive(root) {
  if(root === null){
    return true;
  }
  return recursion(root.left, root.right);
  function recursion(left, right){
    if(left === null && right === null){
      return true;
    }
    if(left === null || right === null){
      return false;
    }
    if(left.val !== right.val){
      return false;
    }
    return recursion(left.left, right.right) && recursion(left.right, right.left);
  }

}

// Tests - BFS
console.log("=== BFS Approach ===");
let tree1 = new TreeNode(1,
  new TreeNode(2, new TreeNode(3), new TreeNode(4)),
  new TreeNode(2, new TreeNode(4), new TreeNode(3))
);
console.log(isSymmetric(tree1)); // true

let tree2 = new TreeNode(1,
  new TreeNode(2, null, new TreeNode(3)),
  new TreeNode(2, null, new TreeNode(3))
);
console.log(isSymmetric(tree2)); // false

// Tests - DFS Recursive
console.log("\n=== DFS Recursive Approach ===");
let tree3 = new TreeNode(1,
  new TreeNode(2, new TreeNode(3), new TreeNode(4)),
  new TreeNode(2, new TreeNode(4), new TreeNode(3))
);
console.log(isSymmetricRecursive(tree3)); // true

let tree4 = new TreeNode(1,
  new TreeNode(2, null, new TreeNode(3)),
  new TreeNode(2, null, new TreeNode(3))
);
console.log(isSymmetricRecursive(tree4)); // false
