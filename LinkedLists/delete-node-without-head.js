/**
 * Delete Node Without Head
 *
 * Given only access to a node to be deleted (not the head), delete that node
 * from the linked list.
 *
 * Note: You are NOT given access to the head of the list.
 *
 * Example:
 * Input: 1 -> 2 -> 3 -> 4 -> 5, node = 3
 * Output: 1 -> 2 -> 4 -> 5
 *
 * Constraints:
 * - The node to be deleted is NOT the tail (there's always a next node)
 * - All values in the list are unique
 *
 * Key Insight:
 * Since we don't have access to the previous node, we can't do a traditional
 * delete. Instead, we copy the next node's value into current node, then
 * delete the next node.
 *
 * Trick: "Become" the next node, then skip over it.
 *
 * Target Complexity:
 * Time: O(1)
 * Space: O(1)
 */

class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

function deleteNode(node) {
  let next = node.next;
  node.val = next.val;
  node.next = node.next.next;

}

// Helper functions
function createList(arr) {
  if (arr.length === 0) return null;
  let head = new ListNode(arr[0]);
  let current = head;
  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }
  return head;
}

function listToArray(head) {
  let result = [];
  let current = head;
  while (current !== null) {
    result.push(current.val);
    current = current.next;
  }
  return result;
}

function getNode(head, val) {
  let current = head;
  while (current !== null) {
    if (current.val === val) return current;
    current = current.next;
  }
  return null;
}

// Tests
let list1 = createList([1, 2, 3, 4, 5]);
let node1 = getNode(list1, 3);
deleteNode(node1);
console.log(listToArray(list1)); // [1, 2, 4, 5]

let list2 = createList([4, 5, 1, 9]);
let node2 = getNode(list2, 5);
deleteNode(node2);
console.log(listToArray(list2)); // [4, 1, 9]

let list3 = createList([4, 5, 1, 9]);
let node3 = getNode(list3, 1);
deleteNode(node3);
console.log(listToArray(list3)); // [4, 5, 9]
