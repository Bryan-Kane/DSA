# Progress Tracker

## Overview
This file tracks my progress through Data Structures and Algorithms problems.

**Total Completed**: 11 problems

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

## Linked Lists (4/4)

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

---

## Notes
- Hash maps and sets are great for O(1) lookups when dealing with duplicates or pairs
- In-place pointer manipulation can achieve O(1) space complexity
- Two-pointer techniques are powerful for both linked list and array problems
- Prefix/suffix patterns can optimize array problems by avoiding nested loops
- Dynamic programming (like Kadane's algorithm) often involves making optimal decisions at each step
- Binary search achieves O(log n) by eliminating half the search space each iteration
- Dummy nodes simplify linked list edge cases (especially when head might change)
- Sorting can enable efficient two-pointer solutions for finding pairs/triplets
- Fast & slow pointers with a gap can solve "nth from end" problems in one pass

