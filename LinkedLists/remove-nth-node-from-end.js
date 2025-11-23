/**
 * Remove Nth Node From End of List
 * Difficulty: Medium
 *
 * Given the head of a linked list, remove the n-th node from the end of the list
 * and return its head.
 *
 * Example 1:
 * Input: head = [1,2,3,4,5], n = 2
 * Output: [1,2,3,5]
 * Explanation: Remove the 2nd node from the end (which is node with value 4).
 *
 * Example 2:
 * Input: head = [1], n = 1
 * Output: []
 *
 * Example 3:
 * Input: head = [1,2], n = 1
 * Output: [1]
 *
 * Constraints:
 * - The number of nodes in the list is sz
 * - 1 <= sz <= 30
 * - 0 <= Node.val <= 100
 * - 1 <= n <= sz
 *
 * Follow-up: Could you do this in one pass?
 *
 * Target Complexity:
 * Time: O(N) looping through linkedlist twice
 * Space: O(1) updating head pointers
 */

// Definition for singly-linked list node
class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

function removeNthFromEndTwoPass(head, n) {
  if(head == null){
    return null;
  }
  let dummy = head;
  let length = 0;
  while(dummy != null){
    dummy = dummy.next;
    length++;
  }
  dummy = head;
  let positionToRemove = length - n;
  if(positionToRemove === 0){
    return head.next;
  }
  let pos = 0;
  while(dummy != null)
  {
    if(pos + 1 === positionToRemove){
      dummy.next = dummy.next.next;
      return head;
    }
    dummy = dummy.next;
    pos++;
  }
  // Your code here
}

function removeNthFromEnd(head, n){
  if(head == null){
    return null;
  }
  let dummy = new ListNode();
  dummy.next = head;
  let fast = dummy;
  let slow = dummy;
  for(let i = 0;i<=n;i++){
    fast = fast.next;
  }
  while(fast != null){
    fast = fast.next;
    slow = slow.next;
  }
  slow.next = slow.next.next;
  return dummy.next;
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
const list1 = createList([1, 2, 3, 4, 5]);
console.log(listToArray(removeNthFromEnd(list1, 2))); // [1,2,3,5]

const list2 = createList([1]);
console.log(listToArray(removeNthFromEnd(list2, 1))); // []

const list3 = createList([1, 2]);
console.log(listToArray(removeNthFromEnd(list3, 1))); // [1]

const list4 = createList([1, 2]);
console.log(listToArray(removeNthFromEnd(list4, 2))); // [2]
