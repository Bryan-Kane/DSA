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
// Stores: key (for map deletion on eviction), value, frequency, prev/next pointers
// Note: freq starts at 1 (new nodes are accessed once when created)
class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
    this.prev = null;
    this.freq = 1;
  }
}

// Doubly Linked List (same as LRU, reusable)
// Each frequency bucket has one of these - acts as LRU within that frequency
//
// FLOW: HEAD <-> node1 <-> node2 <-> ... <-> TAIL
//       (MRU)                          (LRU - evict from here)
//
// Methods:
// - addToFront(node): Insert at head (most recently used)
// - remove(node): Remove from anywhere (O(1) with direct reference)
// - removeTail(): Remove & return LRU node for eviction
// - isEmpty(): Check if only dummy nodes remain
class DoublyLinkedList {
  constructor() {
    // Dummy head/tail nodes eliminate null checks
    this.head = {prev: null, next: null};  // MRU side
    this.tail = {prev: null, next: null};  // LRU side
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  // Add node to front (most recently used within this frequency)
  // Before: HEAD <-> A <-> TAIL
  // After:  HEAD <-> node <-> A <-> TAIL
  addToFront(node) {
    let next = this.head.next;
    next.prev = node;
    this.head.next = node;
    node.prev = this.head;
    node.next = next;
  }

  // Remove node from anywhere in list (O(1) with direct reference)
  // Before: A <-> node <-> B
  // After:  A <-> B
  remove(node) {
    let prev = node.prev;
    let next = node.next;
    prev.next = next;
    next.prev = prev;
  }

  // Remove and return LRU node (tail.prev) for eviction
  removeTail() {
    let remove = this.tail.prev;
    this.remove(remove);
    return remove;
  }

  // Check if list is empty (only dummy nodes remain)
  isEmpty() {
    if(this.head.next === this.tail && this.tail.prev === this.head){
      return true;
    }
    return false;
  }
}

// LFU Cache - Least Frequently Used with LRU tie-breaker
//
// DATA STRUCTURES:
// - keyToNodeMap: key -> Node (O(1) lookup)
// - freqToLinkedListMap: freq -> DoublyLinkedList (each freq has its own LRU list)
// - minFreq: tracks lowest frequency for O(1) eviction
//
// FLOW:
// freqToLinkedListMap:
//   1 -> HEAD <-> [key3] <-> [key5] <-> TAIL
//   2 -> HEAD <-> [key1] <-> TAIL
//   3 -> HEAD <-> [key4] <-> [key2] <-> TAIL
//
// minFreq = 1, so evict key5 (tail of freq=1 list)
//
// METHODS:
// - _updateFrequency(node): Move node from freq bucket to freq+1 bucket
// - get(key): Return value, increment frequency
// - put(key, value): Add/update, evict LFU if at capacity
class LFUCache {
  constructor(capacity) {
    this.capacity = capacity;           // max number of items
    this.size = 0;                      // current number of items
    this.minFreq = 1;                   // track lowest frequency for O(1) eviction
    this.keyToNodeMap = new Map();      // key -> Node for O(1) lookup
    this.freqToLinkedListMap = new Map(); // freq -> DoublyLinkedList (each freq has its own LRU list)
  }

  // _updateFrequency(node): Move node from freq bucket to freq+1 bucket
  // Steps:
  // 1. Remove from old frequency bucket
  // 2. If old bucket empty AND it was minFreq -> increment minFreq
  // 3. Increment node.freq
  // 4. Add to new frequency bucket (create if doesn't exist)
  _updateFrequency(node) {
    let origFreq = node.freq;
    let freqList = this.freqToLinkedListMap.get(origFreq);

    // 1. Remove from old frequency bucket
    freqList.remove(node);

    // 2. If old bucket is now empty AND it was minFreq, increment minFreq
    if(freqList.isEmpty() && origFreq === this.minFreq){
      this.minFreq++;
    }

    // 3. Increment node's frequency
    node.freq++;

    // 4. Add to new frequency bucket (create if doesn't exist)
    if(this.freqToLinkedListMap.has(node.freq)){
      this.freqToLinkedListMap.get(node.freq).addToFront(node);
    } else{
      let newFreqList = new DoublyLinkedList();
      newFreqList.addToFront(node);
      this.freqToLinkedListMap.set(node.freq, newFreqList);
    }
  }

  // get(key): Return value if exists, increment frequency
  // Steps:
  // 1. If key not found -> return -1
  // 2. Get node from keyToNodeMap
  // 3. Call _updateFrequency (move to higher freq bucket)
  // 4. Return node.value
  get(key) {
    if(!this.keyToNodeMap.has(key)){
      return -1;
    }
    let node = this.keyToNodeMap.get(key);
    this._updateFrequency(node);  // move to higher frequency bucket
    return node.value;
  }

  // put(key, value): Add or update key-value pair
  // Steps:
  // IF key exists:
  //   1. Update value
  //   2. Call _updateFrequency
  // ELSE (new key):
  //   1. If at capacity -> evict LFU (removeTail from minFreq bucket)
  //   2. Create new node, add to keyToNodeMap
  //   3. Add to freq=1 bucket (create if doesn't exist)
  //   4. Set minFreq = 1 (new nodes always have freq=1)
  put(key, value) {
    // Edge case: capacity 0
    if(this.capacity === 0){
      return;
    }

    if(this.keyToNodeMap.has(key)){
      // Key exists: update value and increment frequency
      let node = this.keyToNodeMap.get(key);
      node.value = value;
      this._updateFrequency(node);
    } else{
      // Key doesn't exist: create new node

      // If at capacity, evict LFU (from minFreq bucket's tail = LRU within LFU)
      if(this.size >= this.capacity){
        let minFreqList = this.freqToLinkedListMap.get(this.minFreq);
        let evicted = minFreqList.removeTail();  // get LRU within minFreq
        this.keyToNodeMap.delete(evicted.key);   // remove from keyToNode map
        this.size--;
      }

      // Create new node with freq=1
      this.size++;
      let node = new Node(key, value);
      this.keyToNodeMap.set(key, node);

      // Add to freq=1 bucket (create if doesn't exist)
      if(this.freqToLinkedListMap.has(1)){
        this.freqToLinkedListMap.get(1).addToFront(node);
      } else{
        let linkedList = new DoublyLinkedList();
        linkedList.addToFront(node);
        this.freqToLinkedListMap.set(1, linkedList);
      }

      // New nodes always have freq=1, so minFreq resets to 1
      this.minFreq = 1;
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
