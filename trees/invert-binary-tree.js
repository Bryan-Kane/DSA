/**
 * Invert Binary Tree
 * Difficulty: Easy
 *
 * Given the root of a binary tree, invert the tree, and return its root.
 *
 * Example 1:
 * Input: root = [4,2,7,1,3,6,9]
 *      4
 *    /   \
 *   2     7
 *  / \   / \
 * 1   3 6   9
 *
 * Output: [4,7,2,9,6,3,1]
 *      4
 *    /   \
 *   7     2
 *  / \   / \
 * 9   6 3   1
 *
 * Example 2:
 * Input: root = [2,1,3]
 * Output: [2,3,1]
 *
 * Example 3:
 * Input: root = []
 * Output: []
 *
 * Constraints:
 * - The number of nodes in the tree is in the range [0, 100]
 * - -100 <= Node.val <= 100
 *
 * Target Complexity:
 * Time: O(N) - visits every node once?
 * Space: O(W) - storing the max width of the tree
 */

// Definition for a binary tree node
class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function invertTree(root) {
  if(root === null){
    return null;
  }
  let processLevel = [root];
  while(processLevel.length > 0){
    let children = [];
    processLevel.forEach((item) =>{
      let temp = item.left;
      item.left = item.right;
      item.right = temp;
      if(item.left !== null){
        children.push(item.left);
      }
      if(item.right !== null){
        children.push(item.right);
      }
    })
    processLevel = [...children];

  }
  return root;
}

/**
 * Invert Binary Tree (Recursive Approach)
 *
 * Target Complexity:
 * Time: O(N) visit every node once
 * Space: O(H) where h is the height of the tree. Each recursive call adds a frame to the call stack. The max
 * Depth of the stack is the height.
 */
function invertTreeRecursion(root) {
  if(root === null){
    return null;
  }
  let temp = invertTreeRecursion(root.left);
  root.left = invertTreeRecursion(root.right);
  root.right = temp;

  return root;
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

// Helper function to convert tree to array (level-order)
function treeToArray(root) {
  if (!root) return null;

  const result = [];
  const queue = [root];

  while (queue.length > 0) {
    const node = queue.shift();

    if (node) {
      result.push(node.val);
      queue.push(node.left);
      queue.push(node.right);
    } else {
      result.push(null);
    }
  }

  // Remove trailing nulls
  while (result[result.length - 1] === null) {
    result.pop();
  }

  return result;
}

// Tests
const tree1 = createTree([4, 2, 7, 1, 3, 6, 9]);
console.log(treeToArray(invertTree(tree1))); // [4,7,2,9,6,3,1]

const tree2 = createTree([2, 1, 3]);
console.log(treeToArray(invertTree(tree2))); // [2,3,1]

const tree3 = createTree([]);
console.log(treeToArray(invertTree(tree3))); // []

const tree4 = createTree([1]);
console.log(treeToArray(invertTree(tree4))); // [1]

// Tests for recursive approach
console.log("\nRecursive approach:");
const tree5 = createTree([4, 2, 7, 1, 3, 6, 9]);
console.log(treeToArray(invertTreeRecursion(tree5))); // [4,7,2,9,6,3,1]

const tree6 = createTree([2, 1, 3]);
console.log(treeToArray(invertTreeRecursion(tree6))); // [2,3,1]

const tree7 = createTree([]);
console.log(treeToArray(invertTreeRecursion(tree7))); // []

const tree8 = createTree([1]);
console.log(treeToArray(invertTreeRecursion(tree8))); // [1]
