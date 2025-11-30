/**
 * Merge k Sorted Lists
 * Difficulty: Hard
 *
 * You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.
 * Merge all the linked-lists into one sorted linked-list and return it.
 *
 * Example 1:
 * Input: lists = [[1,4,5],[1,3,4],[2,6]]
 * Output: [1,1,2,3,4,4,5,6]
 * Explanation: The linked-lists are:
 * [
 *   1->4->5,
 *   1->3->4,
 *   2->6
 * ]
 * merging them into one sorted list:
 * 1->1->2->3->4->4->5->6
 *
 * Example 2:
 * Input: lists = []
 * Output: []
 *
 * Example 3:
 * Input: lists = [[]]
 * Output: []
 *
 * Constraints:
 * - k == lists.length
 * - 0 <= k <= 10^4
 * - 0 <= lists[i].length <= 500
 * - -10^4 <= lists[i][j] <= 10^4
 * - lists[i] is sorted in ascending order
 * - The sum of lists[i].length will not exceed 10^4
 *
 * Target Complexity:
 * Time: O(?)
 * Space: O(?)
 */

class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

//Brute Force
//Time: O(N * K)
//Space: O(1) we are connecting all the nodes by reference

function mergeKLists(lists) {
  let dummy = new ListNode();
  let node = dummy;

  while(true){
    let smallest = null;
    let smallestIndex = -1;

    // TODO: Loop through all lists to find the smallest current value
    for(let i = 0; i < lists.length; i++){
      let node = lists[i];
      if(node === null){
        continue;
      }
      if(smallest === null){
        smallest = node;
        smallestIndex = i;
      } else{
        if(smallest.val > node.val){
          smallest = node;
          smallestIndex = i;
        }
      }
    }
    if(smallestIndex === -1){
      break;
    }
    node.next = smallest;
    lists[smallestIndex] = lists[smallestIndex].next;
    node = node.next;

  }

  return dummy.next;
}

// ============================================
// Min-Heap Approach (Optimal)
// Time: O(N log K) - N nodes, each heap operation is O(log K)
// Space: O(K) - heap stores at most K nodes
// ============================================

class MinHeap {
  constructor() {
    this.heap = [];
  }

  push(node) {
    this.heap.push(node);
    this._bubbleUp(this.heap.length - 1);
  }

  pop() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();

    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this._bubbleDown(0);
    return min;
  }

  size() {
    return this.heap.length;
  }

  _bubbleUp(index) {
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[index].val >= this.heap[parentIndex].val) break;

      // Swap
      [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
      index = parentIndex;
    }
  }

  _bubbleDown(index) {
    while (true) {
      const leftChild = 2 * index + 1;
      const rightChild = 2 * index + 2;
      let smallest = index;

      if (leftChild < this.heap.length && this.heap[leftChild].val < this.heap[smallest].val) {
        smallest = leftChild;
      }
      if (rightChild < this.heap.length && this.heap[rightChild].val < this.heap[smallest].val) {
        smallest = rightChild;
      }

      if (smallest === index) break;

      // Swap
      [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
      index = smallest;
    }
  }
}

function mergeKListsHeap(lists) {
  // TODO: Implement using MinHeap
  // 1. Create a min-heap
  // 2. Add the first node from each list to the heap
  // 3. While heap is not empty:
  //    - Extract minimum node
  //    - Add it to result
  //    - If that node has a next, add next to heap
  // 4. Return result
}

// ============================================
// Merge Two Lists Approach (Sequential Merging)
// Time: O(N * K) - NOT optimal!
// Space: O(1)
// ============================================

function mergeTwoLists(l1, l2) {
  let dummy = new ListNode();
  let current = dummy;

  while (l1 && l2) {
    if (l1.val < l2.val) {
      current.next = l1;
      l1 = l1.next;
    } else {
      current.next = l2;
      l2 = l2.next;
    }
    current = current.next;
  }

  current.next = l1 || l2;
  return dummy.next;
}

function mergeKListsSequential(lists) {
  if (!lists || lists.length === 0) return null;

  let result = lists[0];
  for (let i = 1; i < lists.length; i++) {
    result = mergeTwoLists(result, lists[i]);
  }
  return result;
}

// Why is this O(N*K)?
// - Merge list[0] with list[1]: ~N/k nodes + N/k nodes = 2N/k comparisons
// - Merge result with list[2]: 2N/k + N/k = 3N/k comparisons
// - Merge result with list[3]: 3N/k + N/k = 4N/k comparisons
// - ...
// - Total: (2 + 3 + 4 + ... + k) * N/k = O(N*K)

// ============================================
// Divide and Conquer Approach (Optimal)
// Time: O(N log K)
// Space: O(1) iterative, O(log K) recursive for call stack
// ============================================

function mergeKListsDivideConquer(lists) {
  if (!lists || lists.length === 0) return null;
  if (lists.length === 1) return lists[0];

  // Keep merging pairs until we have one list
  while (lists.length > 1) {
    let mergedLists = [];

    // Merge pairs: [0,1], [2,3], [4,5], etc.
    for (let i = 0; i < lists.length; i += 2) {
      let l1 = lists[i];
      let l2 = i + 1 < lists.length ? lists[i + 1] : null;
      mergedLists.push(mergeTwoLists(l1, l2));
    }

    lists = mergedLists;
  }

  return lists[0];
}

// Why is this O(N log K)?
// Round 1: k/2 merges, each processes ~2N/k nodes = N total
// Round 2: k/4 merges, each processes ~4N/k nodes = N total
// Round 3: k/8 merges, each processes ~8N/k nodes = N total
// ...
// log(k) rounds, each doing O(N) work = O(N log K)
//
// Example with 8 lists:
// Round 1: [0+1, 2+3, 4+5, 6+7] → 4 lists
// Round 2: [01+23, 45+67] → 2 lists
// Round 3: [0123+4567] → 1 list
// Total: 3 rounds = log2(8)

// Helper function to create linked list from array
function createList(arr) {
  if (!arr || arr.length === 0) return null;
  let head = new ListNode(arr[0]);
  let current = head;
  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }
  return head;
}

// Helper function to convert linked list to array
function listToArray(head) {
  const result = [];
  while (head) {
    result.push(head.val);
    head = head.next;
  }
  return result;
}

// Tests
const list1 = [
  createList([1, 4, 5]),
  createList([1, 3, 4]),
  createList([2, 6])
];
console.log(listToArray(mergeKLists(list1))); // [1,1,2,3,4,4,5,6]

const list2 = [];
console.log(listToArray(mergeKLists(list2))); // []

const list3 = [createList([])];
console.log(listToArray(mergeKLists(list3))); // []

const list4 = [
  createList([1, 2, 3]),
  createList([4, 5, 6]),
  createList([7, 8, 9])
];
console.log(listToArray(mergeKLists(list4))); // [1,2,3,4,5,6,7,8,9]

const list5 = [createList([-2, -1, -1, -1])];
console.log(listToArray(mergeKLists(list5))); // [-2,-1,-1,-1]
