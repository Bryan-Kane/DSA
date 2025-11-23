/**
 * Merge Two Sorted Lists
 * Difficulty: Easy
 *
 * You are given the heads of two sorted linked lists list1 and list2.
 *
 * Merge the two lists into one sorted list. The list should be made by splicing
 * together the nodes of the first two lists.
 *
 * Return the head of the merged linked list.
 *
 * Example 1:
 * Input: list1 = [1,2,4], list2 = [1,3,4]
 * Output: [1,1,2,3,4,4]
 *
 * Example 2:
 * Input: list1 = [], list2 = []
 * Output: []
 *
 * Example 3:
 * Input: list1 = [], list2 = [0]
 * Output: [0]
 *
 * Constraints:
 * - The number of nodes in both lists is in the range [0, 50]
 * - -100 <= Node.val <= 100
 * - Both list1 and list2 are sorted in non-decreasing order
 *
 * Target Complexity:
 * Time: O(N + M) loop through both linked lists of size N and M
 * Space: O(1) just updating the existing pointers
 */

// Definition for singly-linked list node
class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

function mergeTwoLists(list1, list2) {
  let dummy = new ListNode();
  let merged = dummy;
  if(list1 == null && list2 == null){
    return null;
  }
  while(list1 != null && list2 != null){
    if(list1.val <= list2.val){
      merged.next = list1;
      list1 = list1.next;
    } else if (list2.val < list1.val){
      merged.next = list2;
      list2 = list2.next;
    }
    merged = merged.next;
  }
  if(list1 == null){
    merged.next = list2;
  } else if (list2 == null){
    merged.next == list1;
  }


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
const list1 = createList([1, 2, 4]);
const list2 = createList([1, 3, 4]);
console.log(listToArray(mergeTwoLists(list1, list2))); // [1,1,2,3,4,4]

const list3 = createList([]);
const list4 = createList([]);
console.log(listToArray(mergeTwoLists(list3, list4))); // []

const list5 = createList([]);
const list6 = createList([0]);
console.log(listToArray(mergeTwoLists(list5, list6))); // [0]
