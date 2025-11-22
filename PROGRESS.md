# Progress Tracker

## Overview
This file tracks my progress through Data Structures and Algorithms problems.

**Total Completed**: 30 problems
- Arrays: 9/9
- Linked Lists: 5/5
- Trees: 6/?
- Strings: 5/?
- Dynamic Programming: 4/?
- Stacks & Queues: 1/?

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

## Trees (6/?)

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

### ✅ Binary Tree Level Order Traversal
- **Status**: Completed (Reviewed and Re-solved)
- **Difficulty**: Medium
- **Time**: O(N) | **Space**: O(W) BFS, O(H) DFS
- **Pattern**: BFS with Level Tracking / DFS with Closure
- **File**: `trees/binary-tree-level-order-traversal.js`
- **Note**: Key patterns: BFS uses levelSize to process one level at a time, DFS uses closure over result array with level parameter

### ✅ Minimum Depth of Binary Tree
- **Status**: Completed (Reviewed and Re-solved)
- **Difficulty**: Easy
- **Time**: O(N) | **Space**: O(W) BFS, O(H) DFS
- **Pattern**: BFS Level-order / DFS Recursive with Edge Cases
- **File**: `trees/minimum-depth-of-binary-tree.js`
- **Note**: BFS returns early when finding first leaf. DFS is tricky: must handle nodes with only one child (can't just use Math.min)

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

### ✅ Longest Substring Without Repeating Characters
- **Status**: Completed (Reviewed and Re-solved)
- **Difficulty**: Medium
- **Time**: O(N) | **Space**: O(N)
- **Pattern**: Sliding Window + Set
- **File**: `strings/longest-substring.js`
- **Note**: CRITICAL: Use WHILE loop (not if) to shrink window until duplicate removed. Common mistake: if only removes one char, while keeps removing until duplicate gone. Window size = right - left + 1. Successfully re-implemented with correct while loop pattern.

### ✅ Valid Parentheses
- **Status**: Completed
- **Difficulty**: Easy
- **Time**: O(N) | **Space**: O(N)
- **Pattern**: Stack / Hash Map
- **File**: `strings/valid-parentheses.js`
- **Note**: Includes both helper array approach and optimized hash map approach

### ✅ Group Anagrams
- **Status**: Completed (Reviewed and Re-solved)
- **Difficulty**: Medium
- **Time**: O(N * K log K) | **Space**: O(N * K)
- **Pattern**: Hash Map + Sorting
- **File**: `strings/group-anagrams.js`
- **Note**: Sort each string as key. Map stores indices to result array. Time complexity: N strings × K log K sorting. Space: N×K matrix-like structure

---

## Dynamic Programming (4/?)

### 🔄 Fibonacci Number
- **Status**: Return To (4 Approaches - Foundation of DP)
- **Difficulty**: Easy
- **Time**: O(2^N) naive, O(N) memoization/iteration, O(N) optimized | **Space**: O(N) naive/memo/iteration, O(1) optimized
- **Pattern**: Dynamic Programming - Recursion, Memoization, Iteration, Space Optimization
- **File**: `dynamic-programming/fibonacci.js`
- **Note**: Demonstrates all DP optimization levels: 1) Naive recursion O(2^N), 2) Memoization (top-down DP) O(N) time/space, 3) Iteration (bottom-up DP) O(N) time/space, 4) Optimized iteration O(N) time O(1) space. Key insight: only need last 2 values for Fibonacci.

### ✅ Climbing Stairs
- **Status**: Completed
- **Difficulty**: Easy
- **Time**: O(2^N) naive, O(N) memoization/iteration, O(N) optimized | **Space**: O(N) naive/memo/iteration, O(1) optimized
- **Pattern**: Dynamic Programming - Same as Fibonacci with different base case
- **File**: `dynamic-programming/climbing-stairs.js`
- **Note**: Variant of Fibonacci pattern. Base case: n<3 returns n (gives sequence 1,2,3,5,8...). All 4 approaches: 1) Naive recursion, 2) Memoization with Map, 3) Iteration with array [0,1,2], 4) Optimized with first=1, second=2 sliding window.

### 🔄 Min Cost Climbing Stairs
- **Status**: Return To (Need to complete optimized approach)
- **Difficulty**: Easy
- **Time**: O(2^N) naive, O(N) memoization/iteration, O(N) optimized | **Space**: O(N) naive/memo/iteration, O(1) optimized
- **Pattern**: Dynamic Programming - Min/Max optimization pattern
- **File**: `dynamic-programming/min-cost-climbing-stairs.js`
- **Note**: Different from Fibonacci - uses Math.min() to find optimal path cost instead of counting paths. Base: dp[0]=dp[1]=0 (can start at either for free). Recurrence: dp[i] = min(dp[i-1]+cost[i-1], dp[i-2]+cost[i-2]). Target is cost.length (one past end). Need to complete O(1) space optimization.

### 🔄 Partition Equal Subset Sum
- **Status**: Return To (Need to review DP subset sum pattern)
- **Difficulty**: Medium
- **Time**: O(N × Target) where Target = sum/2 | **Space**: O(Target)
- **Pattern**: Dynamic Programming - 0/1 Knapsack / Subset Sum
- **File**: `dynamic-programming/partition-equal-sum.js`
- **Note**: Classic subset sum problem. Key insight: "Can we partition into 2 equal sums?" becomes "Can we pick elements that sum to total/2?". DP array tracks which sums are possible. For each number, ask "Is there an existing sum that if I add myself to it equals target?". Go backwards to avoid reusing same element. Pattern: dp[sum] = true if dp[sum - num] is true. Backtracking step reconstructs actual subsets.

---

## Stacks & Queues (1/?)

### 🔄 Implement Queue using Stacks
- **Status**: Return To (Need to review lazy transfer optimization)
- **Difficulty**: Easy
- **Time**: O(1) enqueue, O(1) amortized dequeue/peek | **Space**: O(N)
- **Pattern**: Two Stacks / Lazy Transfer
- **File**: `stacks-queues/queue-using-stacks.js`
- **Note**: Use two stacks: input (for enqueue) and output (for dequeue). Key optimization: only transfer elements from input→output when output is empty (lazy transfer). This ensures each element moves at most once, giving amortized O(1) time. isEmpty() checks both stacks. Common mistake: transferring back and forth on every operation (O(N) instead of O(1)).

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
- Minimum depth BFS: return immediately upon finding first leaf node (early exit optimization)
- Minimum depth DFS: handle edge case where node has only one child - can't use Math.min(0, depth) blindly

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

### Dynamic Programming
- Memoization = recursion + caching to avoid recalculating same subproblems
- Top-down DP (memoization): start with problem, break down, cache results as you go
- Bottom-up DP (iteration): start with base cases, build up to answer
- Space optimization: often only need last few values, not entire array (e.g., Fibonacci only needs last 2)
- Fibonacci demonstrates O(2^N) → O(N) → O(1) space optimization progression

### Stacks & Queues
- Stack: LIFO (Last In, First Out) - like a stack of plates, push/pop from same end
- Queue: FIFO (First In, First Out) - like a line at a store, enqueue at back/dequeue from front
- Implementing queue with two stacks: use lazy transfer pattern (only move elements when needed)
- Two-stack queue optimization: keep elements in output stack, only transfer when it's empty
- Amortized analysis: each element moves at most once from input→output stack, so O(1) amortized time per operation

