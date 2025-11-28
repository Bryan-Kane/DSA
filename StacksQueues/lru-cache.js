/**
 * LRU Cache (Least Recently Used)
 * Difficulty: Medium
 *
 * Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.
 *
 * Implement the LRUCache class:
 * - LRUCache(int capacity) Initialize the LRU cache with positive size capacity.
 * - int get(int key) Return the value of the key if it exists, otherwise return -1.
 * - void put(int key, int value) Update the value of the key if it exists. Otherwise,
 *   add the key-value pair to the cache. If the number of keys exceeds the capacity,
 *   evict the least recently used key.
 *
 * The functions get and put must each run in O(1) average time complexity.
 *
 * Example:
 * Input:
 * ["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
 * [[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
 *
 * Output: [null, null, null, 1, null, -1, null, -1, 3, 4]
 *
 * Explanation:
 * LRUCache lRUCache = new LRUCache(2);
 * lRUCache.put(1, 1); // cache is {1=1}
 * lRUCache.put(2, 2); // cache is {1=1, 2=2}
 * lRUCache.get(1);    // return 1, cache is {2=2, 1=1} (1 becomes most recent)
 * lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
 * lRUCache.get(2);    // returns -1 (not found)
 * lRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {3=3, 4=4}
 * lRUCache.get(1);    // return -1 (not found)
 * lRUCache.get(3);    // return 3, cache is {4=4, 3=3}
 * lRUCache.get(4);    // return 4, cache is {3=3, 4=4}
 *
 * Constraints:
 * - 1 <= capacity <= 3000
 * - 0 <= key <= 10^4
 * - 0 <= value <= 10^5
 * - At most 2 * 10^5 calls will be made to get and put.
 *
 * Key Insight:
 * We need O(1) for both:
 * - Lookup by key → HashMap
 * - Track/update recency order → Doubly Linked List
 *
 * Structure:
 * - HashMap: key → Node (for O(1) lookup)
 * - Doubly Linked List: maintains order (head = most recent, tail = least recent)
 *   OR (head = least recent, tail = most recent) - your choice!
 *
 * Why Doubly Linked List?
 * - We need to remove nodes from the middle in O(1)
 * - We need to add nodes to head/tail in O(1)
 * - Single linked list can't remove from middle in O(1)
 *
 * Target Complexity:
 * Time: O(1) for both get and put
 * Space: O(capacity)
 */

// Node class for Doubly Linked List
// Stores key (needed for map deletion on eviction), value, and pointers
class Node {
  constructor(key, value){
    this.key = key;
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class LRUCache {
  constructor(capacity){
    this.capacity = capacity; // max number of items in cache
    this.size = 0; // current number of items
    this.map = new Map(); // key -> Node for O(1) lookup

    // Dummy head/tail nodes eliminate null checks in _add/_remove
    this.head = {next: null, prev: null}; // MRU side (most recently used)
    this.tail = {next: null, prev: null}; // LRU side (least recently used - evict from here)

    // Connect dummy nodes: HEAD <-> TAIL
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  // Add node to front (most recently used position)
  // Before: HEAD <-> A <-> TAIL
  // After:  HEAD <-> node <-> A <-> TAIL
  _add(node){
    let tempNext = this.head.next; // save reference to old first node
    this.head.next = node;         // HEAD -> node
    node.next = tempNext;          // node -> old first
    node.prev = this.head;         // HEAD <- node
    tempNext.prev = node;          // node <- old first
    this.size++;
  }

  // Remove node from anywhere in list (O(1) because we have direct reference)
  // Before: A <-> node <-> B
  // After:  A <-> B
  _remove(node){
    let tempNext = node.next; // save next neighbor
    let tempPrev = node.prev; // save prev neighbor
    tempPrev.next = tempNext; // prev -> next (skip over node)
    tempNext.prev = tempPrev; // prev <- next (skip over node)
    this.size--;
  }

  // Add or update key-value pair
  put(key, value){
    if(this.map.has(key)){
      // Key exists: update value and move to front (now most recently used)
      let node = this.map.get(key);
      node.value = value;
      this._remove(node);
      this._add(node);
    } else{
      // Key doesn't exist: create new node and add to front
      let node = new Node(key, value);
      this.map.set(key, node);
      this._add(node);

      // If over capacity, evict LRU (node right before tail)
      if(this.size > this.capacity){
        let least = this.tail.prev;  // LRU node is right before tail
        this.map.delete(least.key);  // remove from map first (need the key)
        this._remove(least);         // then remove from list
      }
    }
  }

  // Get value by key (returns -1 if not found)
  get(key){
    if(this.map.has(key)){
      let node = this.map.get(key);
      // Move to front (accessing = recently used)
      this._remove(node);
      this._add(node);
      return node.value;
    } else{
      return -1;
    }
  }
}

// Tests
const cache = new LRUCache(2);

cache.put(1, 1);
cache.put(2, 2);
console.log(cache.get(1));    // 1
cache.put(3, 3);              // evicts key 2
console.log(cache.get(2));    // -1
cache.put(4, 4);              // evicts key 1
console.log(cache.get(1));    // -1
console.log(cache.get(3));    // 3
console.log(cache.get(4));    // 4

console.log("\n=== Additional Tests ===");

// Test: Update existing key
const cache2 = new LRUCache(2);
cache2.put(1, 1);
cache2.put(2, 2);
cache2.put(1, 10);            // update key 1
console.log(cache2.get(1));   // 10
console.log(cache2.get(2));   // 2

// Test: Capacity of 1
const cache3 = new LRUCache(1);
cache3.put(1, 1);
cache3.put(2, 2);             // evicts key 1
console.log(cache3.get(1));   // -1
console.log(cache3.get(2));   // 2
