# Progress Tracker

## Overview
This file tracks my progress through Data Structures and Algorithms problems.

**Total Completed**: 16 problems
- Arrays: 8/8
- Linked Lists: 5/5
- Trees: 2/?
- Strings: 1/?

---

## Arrays (8/8)

### ✅ Two Sum
- **Status**: Completed
- **Difficulty**: Easy
- **Time**: O(N) | **Space**: O(N)
- **Pattern**: Hash Map
- **File**: `Arrays/two-sum.js`

### ✅ Best Time to Buy and Sell Stock
- **Status**: Completed
- **Difficulty**: Easy
- **Time**: O(N) | **Space**: O(1)
- **Pattern**: Sliding Window / Single Pass
- **File**: `Arrays/best-time-to-buy-and-sell-stock.js`

### ✅ Contains Duplicate
- **Status**: Completed
- **Difficulty**: Easy
- **Time**: O(N) | **Space**: O(N)
- **Pattern**: Hash Set
- **File**: `Arrays/contains-duplicate.js`

### ✅ Product of Array Except Self
- **Status**: Completed
- **Difficulty**: Medium
- **Time**: O(N) | **Space**: O(1) or O(N)
- **Pattern**: Prefix/Suffix Products
- **File**: `Arrays/product-of-array-except-self.js`

### ✅ Maximum Subarray
- **Status**: Completed
- **Difficulty**: Medium
- **Time**: O(N) | **Space**: O(1)
- **Pattern**: Kadane's Algorithm (Dynamic Programming)
- **File**: `Arrays/maximum-subarray.js`

### ✅ Find Minimum in Rotated Sorted Array
- **Status**: Completed
- **Difficulty**: Medium
- **Time**: O(log N) | **Space**: O(1)
- **Pattern**: Binary Search
- **File**: `Arrays/find-minimum-in-rotated-sorted-array.js`

### ✅ 3Sum
- **Status**: Completed
- **Difficulty**: Medium
- **Time**: O(N²) | **Space**: O(N)
- **Pattern**: Two Pointers + Sorting
- **File**: `Arrays/3sum.js`

### ✅ Container With Most Water
- **Status**: Completed
- **Difficulty**: Medium
- **Time**: O(N) | **Space**: O(1)
- **Pattern**: Two Pointers (Greedy)
- **File**: `Arrays/container-with-most-water.js`

---

## Linked Lists (5/5)

### ✅ Reverse Linked List
- **Status**: Completed
- **Difficulty**: Easy
- **Time**: O(N) | **Space**: O(1)
- **Pattern**: Three Pointers (Iterative)
- **File**: `linked-lists/reverse-linked-list.js`

### ✅ Linked List Cycle
- **Status**: Completed
- **Difficulty**: Easy
- **Time**: O(N) | **Space**: O(1)
- **Pattern**: Floyd's Cycle Detection (Fast & Slow Pointers)
- **File**: `linked-lists/linked-list-cycle.js`

### ✅ Merge Two Sorted Lists
- **Status**: Completed
- **Difficulty**: Easy
- **Time**: O(N + M) | **Space**: O(1)
- **Pattern**: Two Pointers / Dummy Node
- **File**: `linked-lists/merge-two-sorted-lists.js`

### ✅ Remove Nth Node From End of List
- **Status**: Completed
- **Difficulty**: Medium
- **Time**: O(N) | **Space**: O(1)
- **Pattern**: Two Pointers (Fast & Slow) / One Pass
- **File**: `linked-lists/remove-nth-node-from-end.js`

### ✅ Reorder List
- **Status**: Completed
- **Difficulty**: Medium
- **Time**: O(N) | **Space**: O(1)
- **Pattern**: Find Middle + Reverse + Merge (Fast & Slow Pointers)
- **File**: `linked-lists/reorder-list.js`

---

## Trees (2/?)

### ✅ Invert Binary Tree
- **Status**: Completed
- **Difficulty**: Easy
- **Time**: O(N) | **Space**: O(W) iterative, O(H) recursive
- **Pattern**: BFS Level-order / DFS Recursive
- **File**: `trees/invert-binary-tree.js`
- **Note**: Includes both iterative and recursive solutions

### ✅ Maximum Depth of Binary Tree
- **Status**: Completed
- **Difficulty**: Easy
- **Time**: O(N) | **Space**: O(W) iterative, O(H) recursive
- **Pattern**: BFS Level-order / DFS Recursive
- **File**: `trees/maximum-depth-of-binary-tree.js`
- **Note**: Includes both iterative and recursive solutions

---

## Strings (1/?)

### ✅ Is String B a Substring of String A
- **Status**: Completed
- **Difficulty**: Easy
- **Time**: O(N * M) | **Space**: O(1)
- **Pattern**: Brute Force / Built-in Methods
- **File**: `strings/is-substring.js`
- **Note**: Includes three approaches: includes(), manual implementation, and indexOf()

---

## Key Patterns & Learnings

### Arrays
- Hash maps and sets are great for O(1) lookups when dealing with duplicates or pairs
- Prefix/suffix patterns can optimize array problems by avoiding nested loops
- Two-pointer techniques are powerful for optimizing space and time
- Binary search achieves O(log n) by eliminating half the search space each iteration
- Dynamic programming (like Kadane's algorithm) often involves making optimal decisions at each step
- Sorting can enable efficient two-pointer solutions for finding pairs/triplets

### Linked Lists
- In-place pointer manipulation can achieve O(1) space complexity
- Dummy nodes simplify edge cases (especially when head might change)
- Fast & slow pointers (Floyd's algorithm) are key for cycle detection
- Fast & slow pointers with a gap can solve "nth from end" problems in one pass
- Three-pointer technique is standard for in-place reversal

### Trees
- BFS (iterative with queue) uses O(W) space where W is max width of tree
- DFS (recursive) uses O(H) space where H is height of tree (call stack)
- For balanced binary trees: O(H) = O(log N) since height grows logarithmically
- For skewed trees: O(H) = O(N) (worst case, degenerates to linked list)
- Level-order traversal naturally uses BFS
- Most tree problems can be solved both iteratively and recursively

### Strings
- Substring search with naive approach is O(N * M) where N is length of main string, M is length of pattern
- Built-in methods like includes() and indexOf() use optimized algorithms but worst case is still O(N * M)
- Empty string is considered a substring of any string

