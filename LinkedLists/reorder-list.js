/**
 * Reorder List
 * Difficulty: Medium
 *
 * You are given the head of a singly linked-list. The list can be represented as:
 * L0 → L1 → L2 → L3 → … → Ln - 1 → Ln
 *
 * Reorder the list to be on the following form:
 * L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
 *
 * You may not modify the values in the list's nodes. Only nodes themselves may be changed.
 *
 * Example 1:
 * Input: head = [1,2,3,4]
 * Output: [1,4,2,3]
 *
 * Example 2:
 * Input: head = [1,2,3,4,5]
 * Output: [1,5,2,4,3]
 *
 * Constraints:
 * - The number of nodes in the list is in the range [1, 5 * 10^4]
 * - 1 <= Node.val <= 1000
 *
 * Target Complexity:
 * Time: O(?)
 * Space: O(?)
 */

// Definition for singly-linked list node
class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

function reorderList(head) {
  if(!head || !head.next) return;
  //1 Find the middle
  let slow = head;
  let fast = head;
  while(fast && fast.next){
    slow = slow.next;
    fast = fast.next.next;
  }

  //2 Reverse the last half
  let prev = null;
  let current = slow;

  while(current){
    let next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  //3 Recombine
  let first = head;
  let second = prev;
  while(second.next){
    let temp1 = first.next;
    let temp2 = second.next;

    first.next = second;
    second.next = temp1;

    first = temp1;
    second = temp2;
  }
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
  const result = [];
  let current = head;
  while (current) {
    result.push(current.val);
    current = current.next;
  }
  return result;
}

// Tests
const list1 = createList([1, 2, 3, 4]);
reorderList(list1);
console.log(listToArray(list1)); // [1,4,2,3]

const list2 = createList([1, 2, 3, 4, 5]);
reorderList(list2);
console.log(listToArray(list2)); // [1,5,2,4,3]

const list3 = createList([1, 2]);
reorderList(list3);
console.log(listToArray(list3)); // [1,2]

const list4 = createList([1]);
reorderList(list4);
console.log(listToArray(list4)); // [1]
