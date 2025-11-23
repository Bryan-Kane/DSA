/**
 * Linked List Cycle
 *
 * Given head, the head of a linked list, determine if the linked list has a cycle in it.
 *
 * There is a cycle in a linked list if there is some node in the list that can be reached
 * again by continuously following the next pointer. Internally, pos is used to denote the
 * index of the node that tail's next pointer is connected to. Note that pos is not passed
 * as a parameter.
 *
 * Return true if there is a cycle in the linked list. Otherwise, return false.
 *
 * Example 1:
 * Input: head = [3,2,0,-4], pos = 1
 * Output: true
 * Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).
 *
 * Example 2:
 * Input: head = [1,2], pos = 0
 * Output: true
 * Explanation: There is a cycle in the linked list, where the tail connects to the 0th node.
 *
 * Example 3:
 * Input: head = [1], pos = -1
 * Output: false
 * Explanation: There is no cycle in the linked list.
 *
 * Constraints:
 * - The number of the nodes in the list is in the range [0, 10^4]
 * - -10^5 <= Node.val <= 10^5
 * - pos is -1 or a valid index in the linked-list
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

function hasCycle(head) {
  // Your solution here
  if(head === null){
    return false;
  }
  let slow = head;
  let fast = head;
  while(fast.next != null && fast.next.next !== null){
    slow = slow.next;
    fast = fast.next.next;
    if(slow === fast){
      return true;
    }
  }
  return false;
}

// Helper function to create linked list with cycle
function createListWithCycle(arr, pos) {
  if (arr.length === 0) return null;

  let head = new ListNode(arr[0]);
  let current = head;
  let cycleNode = pos === 0 ? head : null;

  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
    if (i === pos) {
      cycleNode = current;
    }
  }

  // Create the cycle
  if (pos !== -1) {
    current.next = cycleNode;
  }

  return head;
}

//Space: O(1) just assigning two temporary linked lists
//Time: O(N) looping through the linked list at the most once on slow

// Tests
console.log(hasCycle(createListWithCycle([3,2,0,-4], 1))); // true
console.log(hasCycle(createListWithCycle([1,2], 0))); // true
console.log(hasCycle(createListWithCycle([1], -1))); // false
console.log(hasCycle(createListWithCycle([1,2,3,4,5], -1))); // false
console.log(hasCycle(createListWithCycle([1,2,3,4,5], 2))); // true
