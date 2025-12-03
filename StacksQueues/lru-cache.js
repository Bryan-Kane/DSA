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
class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
    this.prev = null;
  }

}

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.size = 0;
    this.keyToNodeMap = new Map();
    this.head = { prev: null, next: null };
    this.tail = { prev: null, next: null };
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  add(node) {
    let next = this.head.next;
    this.head.next = node;
    next.prev = node;
    node.prev = this.head;
    node.next = next;
    this.size++;
  }

  remove(node) {
    let prev = node.prev;
    let next = node.next;
    prev.next = next;
    next.prev = prev;
    this.size--;
  }

  removeLast() {
    let last = this.tail.prev;
    this.remove(last);
    return last;
  }

  get(key) {
    if (!this.keyToNodeMap.has(key)) {
      return -1;
    }
    let node = this.keyToNodeMap.get(key);
    this.remove(node);
    this.add(node);
    return node.value;
  }

  put(key, value) {
    if (this.capacity === 0) {
      return;
    }
    if (this.keyToNodeMap.has(key)) {
      let node = this.keyToNodeMap.get(key);
      node.value = value;
      this.keyToNodeMap.set(key, node);
      this.remove(node);
      this.add(node);
    } else {
      let node = new Node(key, value);
      this.keyToNodeMap.set(key, node);
      this.add(node);
      if (this.size > this.capacity) {
        let last = this.removeLast();
        this.keyToNodeMap.delete(last.key);
      }
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
