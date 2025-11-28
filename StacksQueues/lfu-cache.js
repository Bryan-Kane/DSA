/**
 * LFU Cache (Least Frequently Used)
 * Difficulty: Hard
 *
 * Design and implement a data structure for a Least Frequently Used (LFU) cache.
 *
 * Implement the LFUCache class:
 * - LFUCache(int capacity) Initializes the object with the capacity of the data structure.
 * - int get(int key) Gets the value of the key if it exists, otherwise returns -1.
 * - void put(int key, int value) Updates or inserts the value. When capacity is reached,
 *   it should invalidate and remove the least frequently used key before inserting.
 *   If there is a tie (multiple keys with same frequency), the least recently used
 *   key would be invalidated.
 *
 * The functions get and put must each run in O(1) average time complexity.
 *
 * Example:
 * Input:
 * ["LFUCache", "put", "put", "get", "put", "get", "get", "put", "get", "get", "get"]
 * [[2], [1, 1], [2, 2], [1], [3, 3], [2], [3], [4, 4], [1], [3], [4]]
 *
 * Output: [null, null, null, 1, null, -1, 3, null, -1, 3, 4]
 *
 * Explanation:
 * LFUCache lfu = new LFUCache(2);
 * lfu.put(1, 1);   // cache=[1,_], cnt(1)=1
 * lfu.put(2, 2);   // cache=[2,1], cnt(2)=1, cnt(1)=1
 * lfu.get(1);      // return 1, cnt(1)=2, cache=[1,2]
 * lfu.put(3, 3);   // 2 is LFU (cnt=1), evict 2, cache=[3,1], cnt(3)=1, cnt(1)=2
 * lfu.get(2);      // return -1 (not found)
 * lfu.get(3);      // return 3, cnt(3)=2, cache=[3,1]
 * lfu.put(4, 4);   // 1 and 3 both have cnt=2, but 1 is LRU, evict 1
 *                  // cache=[4,3], cnt(4)=1, cnt(3)=2
 * lfu.get(1);      // return -1 (not found)
 * lfu.get(3);      // return 3, cnt(3)=3
 * lfu.get(4);      // return 4, cnt(4)=2
 *
 * Constraints:
 * - 1 <= capacity <= 10^4
 * - 0 <= key <= 10^5
 * - 0 <= value <= 10^9
 * - At most 2 * 10^5 calls will be made to get and put.
 *
 * Key Insight - LFU vs LRU:
 * - LRU: Evict least RECENTLY used (only track recency)
 * - LFU: Evict least FREQUENTLY used (track frequency + recency for tie-break)
 *
 * Data Structures Needed:
 * 1. keyToNode Map: key -> Node (for O(1) lookup)
 * 2. freqToList Map: frequency -> DoublyLinkedList (each frequency has its own LRU list)
 * 3. minFreq: track the minimum frequency (for O(1) eviction)
 *
 * Why frequency -> DoublyLinkedList?
 * - Multiple keys can have the same frequency
 * - Among those, we need to evict LRU (least recently used)
 * - Each frequency bucket is essentially an LRU cache!
 *
 * Node stores: key, value, frequency
 *
 * Operations:
 * - get(key): Find node, increment its frequency, move to new frequency bucket
 * - put(key, val): If exists, update & increment freq. If new, add with freq=1,
 *                  evict if needed (from minFreq bucket's tail)
 *
 * Target Complexity:
 * Time: O(1) for both get and put
 * Space: O(capacity)
 */

// Node for Doubly Linked List
// Stores key (for map deletion), value, frequency, and pointers
class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.prev = null;
    this.next = null;
    this.freq = 1;
  }
}

// Doubly Linked List (same as LRU, reusable)
// Each frequency bucket has one of these
class DoublyLinkedList {
  constructor() {
    this.head = {prev: null, next: null};
    this.tail = {prev: null, next: null};
    this.head.next = this.tail;
    this.tail.prev = this.head;

  }

  // Add node to front (most recently used for this frequency)
  addToFront(node) {
    let next = this.head.next;
    next.prev = node;
    this.head.next = node;
    node.prev = this.head;
    node.next = next;
  }

  // Remove a specific node
  remove(node) {
    let prev = node.prev;
    let next = node.next;
    prev.next = next;
    next.prev = prev;
  }

  // Remove and return the tail node (LRU for this frequency)
  removeTail() {
    let last = this.tail.prev;
    this.remove(last);
    return last;
  }

  // Check if list is empty (only dummy nodes remain)
  isEmpty() {
    if(this.head.next === this.tail && this.tail.prev === this.head){
      return true;
    }
    return false;
  }
}

class LFUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.size = 0;
    this.minFreq = 0;
    this.keyToNode = new Map(); //key -> Node
    this.freqToList = new Map(); // freq -> doublylinkedlist
  }

  // Helper: Update node's frequency (used by both get and put)
  // 1. Remove from old frequency list
  // 2. Increment node.freq
  // 3. Add to new frequency list (create if needed)
  // 4. Update minFreq if old list is now empty
  _updateFrequency(node) {
    let oldFreq = node.freq;
    let oldList = this.freqToList.get(oldFreq);
    oldList.remove(node);  // remove from old frequency bucket

    // If old list is now empty AND it was the minFreq, increment minFreq
    if (oldList.isEmpty() && oldFreq === this.minFreq) {
      this.minFreq++;
    }

    node.freq++;  // increment frequency

    // Add to new frequency bucket (create if doesn't exist)
    let newFreq = node.freq;
    if (!this.freqToList.has(newFreq)) {
      this.freqToList.set(newFreq, new DoublyLinkedList());
    }
    this.freqToList.get(newFreq).addToFront(node);
  }

  // Get value by key, increment frequency
  get(key) {
    if (!this.keyToNode.has(key)) {
      return -1;
    }
    let node = this.keyToNode.get(key);
    this._updateFrequency(node);  // accessing = increment freq
    return node.value;
  }

  // Add or update key-value pair
  put(key, value) {
    if (this.capacity === 0) return;

    if (this.keyToNode.has(key)) {
      // Key exists: update value and increment frequency
      let node = this.keyToNode.get(key);
      node.value = value;
      this._updateFrequency(node);
    } else {
      // Key doesn't exist: create new node

      // If at capacity, evict LFU (from minFreq bucket's tail)
      if (this.size >= this.capacity) {
        let minFreqList = this.freqToList.get(this.minFreq);
        let evicted = minFreqList.removeTail();  // LRU within minFreq
        this.keyToNode.delete(evicted.key);      // remove from keyToNode map
        this.size--;
      }

      // Create new node with freq=1
      let node = new Node(key, value);
      this.keyToNode.set(key, node);

      // Add to freq=1 bucket (create if doesn't exist)
      if (!this.freqToList.has(1)) {
        this.freqToList.set(1, new DoublyLinkedList());
      }
      this.freqToList.get(1).addToFront(node);

      this.minFreq = 1;  // new node always has freq=1, so minFreq resets
      this.size++;
    }
  }
}

// Tests
const lfu = new LFUCache(2);

lfu.put(1, 1);
lfu.put(2, 2);
console.log(lfu.get(1));      // 1
lfu.put(3, 3);                // evicts key 2
console.log(lfu.get(2));      // -1
console.log(lfu.get(3));      // 3
lfu.put(4, 4);                // evicts key 1
console.log(lfu.get(1));      // -1
console.log(lfu.get(3));      // 3
console.log(lfu.get(4));      // 4

console.log("\n=== Additional Tests ===");

// Test: Same frequency, LRU eviction
const lfu2 = new LFUCache(2);
lfu2.put(1, 1);
lfu2.put(2, 2);
lfu2.put(3, 3);               // evicts key 1 (both have freq=1, 1 is LRU)
console.log(lfu2.get(1));     // -1
console.log(lfu2.get(2));     // 2
console.log(lfu2.get(3));     // 3

// Test: Capacity of 1
const lfu3 = new LFUCache(1);
lfu3.put(1, 1);
lfu3.put(2, 2);               // evicts key 1
console.log(lfu3.get(1));     // -1
console.log(lfu3.get(2));     // 2
