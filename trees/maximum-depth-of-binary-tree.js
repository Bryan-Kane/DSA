/**
 * Maximum Depth of Binary Tree
 * Difficulty: Easy
 *
 * Given the root of a binary tree, return its maximum depth.
 *
 * A binary tree's maximum depth is the number of nodes along the longest path
 * from the root node down to the farthest leaf node.
 *
 * Example 1:
 * Input: root = [3,9,20,null,null,15,7]
 *      3
 *    /   \
 *   9    20
 *       /  \
 *      15   7
 * Output: 3
 *
 * Example 2:
 * Input: root = [1,null,2]
 * Output: 2
 *
 * Example 3:
 * Input: root = []
 * Output: 0
 *
 * Example 4:
 * Input: root = [0]
 * Output: 1
 *
 * Constraints:
 * - The number of nodes in the tree is in the range [0, 10^4]
 * - -100 <= Node.val <= 100
 *
 * Target Complexity:
 * Time: O(N): every node visited once
 * Space: O(W): where W is the max level size
 */

// Definition for a binary tree node
class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function maxDepth(root) {
  if(root === null){
    return 0;
  }
  let processing = [root];
  let depth = 0;
  while(processing.length > 0){
    let children = [];
    processing.forEach((item) =>{
      if(item.left !== null){
        children.push(item.left);
      }
      if(item.right !== null){
        children.push(item.right);
      }
    });
    depth++;
    processing = [...children];
  }
  return depth;
}

/**
 * Maximum Depth of Binary Tree (Recursive Approach)
 *
 * Target Complexity:
 * Time: O(N) visiting each node once still
 * Space: O(H) where H is the height
 */
function maxDepthRecursion(root) {
  // Your code here
  if(root === null){
    return 0;
  }
  let max = Math.max(maxDepthRecursion(root.left),maxDepthRecursion(root.right));
  return 1 + max;
}

// Helper function to create tree from array (level-order)
function createTree(arr) {
  if (!arr || arr.length === 0) return null;

  const root = new TreeNode(arr[0]);
  const queue = [root];
  let i = 1;

  while (queue.length > 0 && i < arr.length) {
    const node = queue.shift();

    if (i < arr.length && arr[i] !== null) {
      node.left = new TreeNode(arr[i]);
      queue.push(node.left);
    }
    i++;

    if (i < arr.length && arr[i] !== null) {
      node.right = new TreeNode(arr[i]);
      queue.push(node.right);
    }
    i++;
  }

  return root;
}

// Tests
console.log(maxDepth(createTree([3, 9, 20, null, null, 15, 7]))); // 3
console.log(maxDepth(createTree([1, null, 2]))); // 2
console.log(maxDepth(createTree([]))); // 0
console.log(maxDepth(createTree([0]))); // 1

console.log("\nRecursive approach:");
console.log(maxDepthRecursion(createTree([3, 9, 20, null, null, 15, 7]))); // 3
console.log(maxDepthRecursion(createTree([1, null, 2]))); // 2
console.log(maxDepthRecursion(createTree([]))); // 0
console.log(maxDepthRecursion(createTree([0]))); // 1
