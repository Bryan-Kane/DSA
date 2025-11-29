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


class Node {
  constructor(key, value){
    this.key = key;
    this.value = value;
    this.next = null;
    this.prev = null;
    this.frequency = 1;
  }

}

class DoublyLinkedList {
  constructor(){
    this.head = {prev: null, next: null};
    this.tail = {prev: null, next: null};
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }
  add(node){
    let next = this.head.next;
    next.prev = node;
    this.head.next = node;
    node.prev = this.head;
    node.next = next;
  }

  remove(node){
    let previous = node.prev;
    let next = node.next;
    previous.next = next;
    next.prev = previous;
  }

  removeTail(){
    let node = this.tail.prev;
    this.remove(node);
    return node;
  }

  isEmpty(){
    return this.head.next === this.tail && this.tail.prev === this.head;
  }
}

class LFUCache {
  constructor(capacity){
    this.capacity = capacity;
    this.size = 0;
    this.keyToNodeMap = new Map();
    this.freqToLinkedListMap = new Map();
    this.minFreq = 1;
  }
  _updateFrequency(node){
    let originalFrequency = node.frequency;
    let originalLinkedList = this.freqToLinkedListMap.get(originalFrequency);
    originalLinkedList.remove(node);
    if(originalLinkedList.isEmpty() && originalFrequency == this.minFreq){
      this.freqToLinkedListMap.delete(originalFrequency);
      this.minFreq++;
    }

    node.frequency++;
    if(this.freqToLinkedListMap.has(node.frequency)){
      let existingLinkedList = this.freqToLinkedListMap.get(node.frequency);
      existingLinkedList.add(node);
    } else{
      let newLinkedList = new DoublyLinkedList();
      newLinkedList.add(node);
      this.freqToLinkedListMap.set(node.frequency, newLinkedList);
    }
  }

  get(key){
    if(!this.keyToNodeMap.has(key)){
      return -1;
    }
    let node = this.keyToNodeMap.get(key);
    this._updateFrequency(node);
    return node.value;
  }

  put(key, value){
    if(this.capacity === 0){
      return;
    }
    if(this.keyToNodeMap.has(key)){
      let node = this.keyToNodeMap.get(key);
      node.value = value;
      this.keyToNodeMap.set(key, node);
      this._updateFrequency(node);
    } else{
      if(this.size >= this.capacity){
        let linkedList = this.freqToLinkedListMap.get(this.minFreq);
        let lastUsedNode = linkedList.removeTail();
        this.keyToNodeMap.delete(lastUsedNode.key);
        this.size--;
      }
      let node = new Node(key, value);
      if(this.freqToLinkedListMap.has(1)){
        let existingLinkedList = this.freqToLinkedListMap.get(1);
        existingLinkedList.add(node);
      } else{
        let newLinkedList = new DoublyLinkedList();
        newLinkedList.add(node);
        this.freqToLinkedListMap.set(1, newLinkedList);
      }
      this.keyToNodeMap.set(key, node);
      this.minFreq = 1;
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
