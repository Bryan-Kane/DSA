/**
 * Reverse Linked List
 *
 * Given the head of a singly linked list, reverse the list, and return the reversed list.
 *
 * Example 1:
 * Input: head = [1,2,3,4,5]
 * Output: [5,4,3,2,1]
 *
 * Example 2:
 * Input: head = [1,2]
 * Output: [2,1]
 *
 * Example 3:
 * Input: head = []
 * Output: []
 *
 * Constraints:
 * - The number of nodes in the list is the range [0, 5000]
 * - -5000 <= Node.val <= 5000
 *
 * Target Complexity:
 * Time: O(?)
 * Space: O(?)
 */

// Definition for singly-linked list node
class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

function reverseList(head) {
  let node = head;
  let prev = null;
  while(node !== null){
    let next = node.next;
    node.next = prev;
    prev = node;
    node = next;
  }
  return prev;
}

// Helper function to create linked list from array
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

// Helper function to convert linked list to array for testing
function listToArray(head) {
  let result = [];
  let current = head;
  while (current !== null) {
    result.push(current.val);
    current = current.next;
  }
  return result;
}

// Tests
console.log(JSON.stringify(listToArray(reverseList(createList([1,2,3,4,5]))))); // [5,4,3,2,1]
console.log(JSON.stringify(listToArray(reverseList(createList([1,2]))))); // [2,1]
console.log(JSON.stringify(listToArray(reverseList(createList([]))))); // []
console.log(JSON.stringify(listToArray(reverseList(createList([1]))))); // [1]
