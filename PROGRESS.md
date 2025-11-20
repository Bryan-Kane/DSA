# Progress Tracker

## Overview
This file tracks my progress through Data Structures and Algorithms problems.

**Total Completed**: 24 problems
- Arrays: 9/9
- Linked Lists: 5/5
- Trees: 5/?
- Strings: 5/?

---

## Arrays (9/9)

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

### ✅ Binary Search
- **Status**: Completed
- **Difficulty**: Easy
- **Time**: O(log N) | **Space**: O(1) iterative, O(log N) recursive
- **Pattern**: Binary Search
- **File**: `Arrays/binary-search.js`
- **Note**: Includes both iterative and recursive solutions

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

## Trees (3/?)

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

### ✅ Same Tree
- **Status**: Completed
- **Difficulty**: Easy
- **Time**: O(N) | **Space**: O(W) BFS, O(H) DFS
- **Pattern**: BFS with Queue / DFS Recursive
- **File**: `trees/same-tree.js`
- **Note**: Includes both BFS (queue-based) and DFS (recursive) approaches

### ✅ Symmetric Tree
- **Status**: Completed
- **Difficulty**: Easy
- **Time**: O(N) | **Space**: O(W) BFS, O(H) DFS
- **Pattern**: BFS with Queue / DFS Recursive (Mirror Comparison)
- **File**: `trees/symmetric-tree.js`
- **Note**: Similar to Same Tree but compares mirror positions (left.left vs right.right, left.right vs right.left)

### 🔄 Binary Tree Level Order Traversal
- **Status**: Return To (Common Interview Question)
- **Difficulty**: Medium
- **Time**: O(N) | **Space**: O(W) BFS, O(H) DFS
- **Pattern**: BFS with Level Tracking / DFS with Closure
- **File**: `trees/binary-tree-level-order-traversal.js`
- **Note**: Key patterns: BFS uses levelSize to process one level at a time, DFS uses closure over result array with level parameter

---

## Strings (4/?)

### ✅ Is String B a Substring of String A
- **Status**: Completed
- **Difficulty**: Easy
- **Time**: O(N * M) | **Space**: O(1)
- **Pattern**: Brute Force / Built-in Methods
- **File**: `strings/is-substring.js`
- **Note**: Includes three approaches: includes(), manual implementation, and indexOf()

### ✅ Valid Anagram
- **Status**: Completed
- **Difficulty**: Easy
- **Time**: O(N) | **Space**: O(N)
- **Pattern**: Hash Map / Sorting
- **File**: `strings/valid-anagram.js`
- **Note**: Includes both sorting and hash map approaches

### 🔄 Longest Substring Without Repeating Characters
- **Status**: Return To (Need More Practice)
- **Difficulty**: Medium
- **Time**: O(N) | **Space**: O(min(N, M))
- **Pattern**: Sliding Window + Set
- **File**: `strings/longest-substring-without-repeating-characters.js`
- **Note**: Classic sliding window problem with two pointers

### ✅ Valid Parentheses
- **Status**: Completed
- **Difficulty**: Easy
- **Time**: O(N) | **Space**: O(N)
- **Pattern**: Stack / Hash Map
- **File**: `strings/valid-parentheses.js`
- **Note**: Includes both helper array approach and optimized hash map approach

### 🔄 Group Anagrams
- **Status**: Return To (Need More Practice - Complexity Analysis)
- **Difficulty**: Medium
- **Time**: O(N * K log K) | **Space**: O(N * K)
- **Pattern**: Hash Map + Sorting
- **File**: `strings/group-anagrams.js`
- **Note**: Logic correct on first try, but time/space complexity requires more understanding

---

## Key Patterns & Learnings

### Arrays
- Hash maps and sets are great for O(1) lookups when dealing with duplicates or pairs
- Prefix/suffix patterns can optimize array problems by avoiding nested loops
- Two-pointer techniques are powerful for optimizing space and time
- Binary search achieves O(log n) by eliminating half the search space each iteration
- Dynamic programming (like Kadane's algorithm) often involves making optimal decisions at each step
- Sorting can enable efficient two-pointer solutions for finding pairs/triplets
- Binary search requires sorted array and works by repeatedly dividing search space in half
- Recursive binary search uses O(log N) space due to call stack, iterative uses O(1)

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
- When comparing two trees, process both simultaneously (parallel queues for BFS, parallel recursion for DFS)
- Base cases for tree comparisons: both null (true), one null (false), values differ (false)
- For symmetric tree, compare mirror positions: left.left with right.right, left.right with right.left
- Level-order BFS: capture levelSize before inner loop to process exactly one level at a time
- Level-order DFS: use closure over result array, check if result.length === level to create new level arrays

### Strings
- Substring search with naive approach is O(N * M) where N is length of main string, M is length of pattern
- Built-in methods like includes() and indexOf() use optimized algorithms but worst case is still O(N * M)
- Empty string is considered a substring of any string
- Anagrams can be checked with sorting O(N log N) or hash map O(N)
- Sliding window pattern uses two pointers to maintain a dynamic window
- Set/Map data structures are crucial for tracking characters in current window for O(1) lookups
- When sliding window finds duplicate, shrink from left until duplicate is removed
- Stack pattern is ideal for matching/balancing problems (parentheses, brackets, etc.)
- Hash maps can simplify conditional logic by mapping keys to values instead of multiple if/else statements
- When analyzing complexity with nested operations, multiply them (e.g., N strings * K log K sort = O(N * K log K))
- Grouping anagrams: sort each string as key for O(N * K log K), or use character count for O(N * K)

