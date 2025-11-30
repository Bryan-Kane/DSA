/**
 * Validate Binary Search Tree
 * Difficulty: Medium
 * LeetCode: 98
 *
 * Given the root of a binary tree, determine if it is a valid binary search tree (BST).
 *
 * A valid BST is defined as follows:
 * - The left subtree of a node contains only nodes with keys less than the node's key.
 * - The right subtree of a node contains only nodes with keys greater than the node's key.
 * - Both the left and right subtrees must also be binary search trees.
 *
 * Example 1:
 *     2
 *    / \
 *   1   3
 * Input: root = [2,1,3]
 * Output: true
 *
 * Example 2:
 *     5
 *    / \
 *   1   4
 *      / \
 *     3   6
 * Input: root = [5,1,4,null,null,3,6]
 * Output: false
 * Explanation: The root node's value is 5 but its right child's value is 4.
 *
 * Example 3:
 *     5
 *    / \
 *   4   6
 *      / \
 *     3   7
 * Input: root = [5,4,6,null,null,3,7]
 * Output: false
 * Explanation: The node with value 6 has a left child with value 3, which violates BST property.
 *
 * Constraints:
 * - The number of nodes in the tree is in the range [1, 10^4]
 * - -2^31 <= Node.val <= 2^31 - 1
 *
 * Hint: It's not enough to just check if left < node < right!
 * You need to track min and max bounds for each subtree.
 *
 * Target Complexity:
 * Time: O(N) hits every node once
 * Space: O(H) Stack grows proportionally to the tree height
 */

class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function isValidBST(root) {
  if(root === null){
    return true;
  }
  return dfs(root, -Infinity, Infinity);
}

function dfs(node, min, max){
  if(node === null){
    return true;
  }
  if(node.val <= min || node.val >= max){
    return false;
  }
  return dfs(node.left, min, node.val) && dfs(node.right, node.val, max);
}

// Helper function to create tree from array
function createTree(arr, index = 0) {
  if (index >= arr.length || arr[index] === null) return null;
  const node = new TreeNode(arr[index]);
  node.left = createTree(arr, 2 * index + 1);
  node.right = createTree(arr, 2 * index + 2);
  return node;
}

// Tests
console.log(isValidBST(createTree([2, 1, 3]))); // true
console.log(isValidBST(createTree([5, 1, 4, null, null, 3, 6]))); // false
console.log(isValidBST(createTree([5, 4, 6, null, null, 3, 7]))); // false
console.log(isValidBST(createTree([10, 5, 15, null, null, 6, 20]))); // false
console.log(isValidBST(createTree([0]))); // true
